// Webpack
//
// Provides compilation and linting for Pug, TypeScript, JS, Stylus, Sass, CSS
// files, image minification and several file optimizations
//

// Dependencies
//
const webpack = require('webpack');
const babel = require('babel-polyfill');

const path = require('path');
const fs = require('fs-extra');

const poststylus = require('poststylus');

const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const config = require(path.join(__dirname, 'env', environment + '.js'));
const pages = require(path.join(__dirname, 'pages.config.js')) ;
const assets = require(path.join(__dirname, 'env', 'assets.development.js'));
const assetsProduction = require(path.join(__dirname, 'env', 'assets.production.js'));


// Babel Configuration
//
const babelConfig = {
  presets: [
    [ 'es2015', { loose: true, modules: false } ]
  ]
};

// Bundle entries used in individual layouts
//
let entries = {
  dashboard: path.resolve(__dirname, '..', 'src', 'bundles', 'dashboard.bundle.js'),
  documentation: path.resolve(__dirname, '..', 'src', 'bundles', 'documentation.bundle.js')
};

// Generate bundles for main layouts
//
var commonChunks = [];
for (let key in entries) {
  if (assets[key]) {
    injectAssets(entries[key], assets[key]);

    var chunkNames = [];
    function getChunks(pages, names) {
      for (let index in pages) {
        let page = pages[index];

        if (page.view && page.view.indexOf(key) !== -1) {
          names.push(page.view.slice(2).join('-'));
        }

        if (page.pages) {
          getChunks(page.pages, names)
        }
      }
    }
    getChunks(pages, chunkNames);

    // Common chunks setup
    // https://github.com/webpack/webpack/tree/master/examples/multiple-commons-chunks
    commonChunks.push(new webpack.optimize.CommonsChunkPlugin({
      name: key,
      chunks: chunkNames
    }));
  }
}

// Generate bundle for each page
//
generateBundles(pages)


// Inject WebPack Entries
//
// Inject assets from the json files into their respective bundles. WebPack
// doesn't play nice with dynamic includes so we'll have to write them into
// the files explicitly.
//
function injectAssets(bundle, data) {
  let assetsRequire = '';
  let httpRegEx = /^https?:\/\//;

  if (!data) {
    return
  }

  for (let index in data.stylesheets) {
    let stylesheet = data.stylesheets[index];
    let configuration = {};

    if (stylesheet.constructor === Array) {
      configuration = stylesheet[1] || {};
      stylesheet = stylesheet[0];
    }

    if (configuration.bundle !== false && (!httpRegEx.test(stylesheet) || /\.styl/.test(stylesheet))) {
      assetsRequire += 'require(\'../' + stylesheet + '\');' + "\n";
    }
  }

  for (let index in data.scripts) {
    let script = data.scripts[index];
    let configuration = {};

    if (script.constructor === Array) {
      configuration = script[1] || {};
      script = script[0];
    }

    if (configuration.bundle !== false && (!httpRegEx.test(script))) {
      assetsRequire += 'require(\'../' + script + '\');' + "\n";
    }
  }

  if (assetsRequire != '') {
    fs.writeFileSync(bundle, assetsRequire, 'utf-8', function (err) {
      if (err) return console.log(err);
    });
    console.log('Generated assets bundle to ' + bundle.match(/\/([\w\-\.]+)$/)[1]);
  }
}

// Generate bundles for each page
//
function generateBundles(pages) {
  for (let index in pages) {
    let page = pages[index];
    let assetsRequire = "";
    let bundle = [__dirname, '..', 'src'].concat(page.view);

    if (page.view && page.assets) {
      bundle[3] = 'bundles';
      bundle.splice(4,1);

      var bundleID = bundle.slice(4).join('-');
      var bundleFile = path.resolve.apply(null, bundle.slice(0, 4).concat(bundleID)) + '.bundle.js';

      injectAssets(bundleFile, page.assets);
      entries[bundleID] = bundleFile;
    }

    if (page.pages) {
      generateBundles(page.pages);
    }
  }
}

// Copy loader
//
// The loader isn't bundled because we want it to show as soon as the page
// is ready. We'll display it until the bundle is done loading
//
function copyToDist(asset) {
  fs.copy(
    path.resolve('..', 'build', asset),
    path.resolve('..', 'dist', asset)
  )
}

let copiedAssets = [];
for (let index in assetsProduction) {
  for (let assetType of ['scripts', 'stylesheets']) {
    for (let assetIndex in assetsProduction[index][assetType]) {
      let asset = assetsProduction[index][assetType][assetIndex];
      if (!/^bundles/.test(asset) && copiedAssets.indexOf(asset) === -1) {
        copiedAssets.push(asset);
        copyToDist(asset);
      }
    }
  }
}

for (let asset of [
  'vendors/cookie/cookie.js',
  'resources/js/themes/base.js',
  'resources/css/loader/loader.css'
]) { copyToDist(asset); }


// Webpack Configuration
//
module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'bundles'),
    filename: '[name].bundle.js',
    publicPath: config.server.url ? config.server.url + '/' : ''
  },

  devtool: 'source-map',

  module: {
    rules: [

      // Pug
      {
        test: /\.pug$/,
        exclude: /(layouts|mixins)\/*/,
        use: [
          { loader: 'pug-html-loader', options: {
            data: {
              server: config.server
            }
          }}
        ]
      },

      // TypeScript Linter
      {
        test: /\.ts(x?)$/, enforce: 'pre',
        exclude: /(node_modules|vendors)/,
        loader: 'tslint-loader',
        options: { configFile: path.resolve(__dirname, 'tslint.json') }
      },

      // TypeScript
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'uglify-loader' },
          { loader: 'babel-loader', options: babelConfig },
          { loader: 'ts-loader', options: { configFile: path.resolve(__dirname, 'tsconfig.json') }}
        ]
      },

      // TypeScript Linter
      {
        test: /\.coffee$/, enforce: 'pre',
        exclude: /(node_modules|vendors)/,
        loader: 'coffeelint-loader',
        options: { configFile: path.resolve(__dirname, 'coffeelint.json') }
      },

      // CoffeeScript
      {
        test: /\.coffee$/,
        exclude: /node_modules/,
        use: [
          { loader: 'uglify-loader' },
          { loader: 'babel-loader', options: babelConfig },
          { loader: 'coffee-loader' }
        ]
      },

      // JavaScript Linter
      {
        test: /\.js(x?)$/, enforce: 'pre',
        exclude: /(node_modules|vendors)/,
        loader: 'eslint-loader',
        options: require(path.resolve(__dirname, 'eslint.json'))
      },

      // JavaScript
      {
        test: /\.js(x?)$/,
        use: [
          { loader: 'uglify-loader' },
          { loader: 'babel-loader', options: babelConfig }
        ]
      },

      // Stylus Linter
      {
        test: /\.styl$/, enforce: 'pre',
        exclude: /(node_modules|vendors)/,
        loader: 'stylint-loader',
        options: {
          config: path.resolve(__dirname, 'stylint.json')
        }
      },

      // Stylus
      {
        test: /\.styl$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'stylus-loader',
            options: {
              'resolve url': true,
              'include css': true,
              'include': 'node_modules',
              'url': 'embedurl',
              'use': [
                poststylus([
                  'autoprefixer',
                  'rucksack-css'
                ])
              ]
            }
          }
        ]
      },

      // Sass Linter
      {
        test: /\.s(a|c)ss$/, enforce: 'pre',
        exclude: /(node_modules|vendors)/,
        loader: 'sasslint-loader'
      },

      // Sass
      {
        test: /\.s(a|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader',
            options: {
              includePaths: [ path.join(__dirname, '..', 'node_modules') ]
            }
          }
        ]
      },

      // CSS Linter
      {
        test: /\.css$/, enforce: 'pre',
        exclude: /(node_modules|vendors)/,
        loader: 'csslint-loader'
      },

      // CSS
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },

      // JSON
      {
        test: /\.json$/,
        use: [
          { loader: 'json-loader' }
        ]
      },

      // Image
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /(fonts)/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              context: path.join(__dirname, '..', 'src'),
              name: '[path][name].[ext]'
            }
          },
          { loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,

              gifsicle: { interlaced: false },
              optipng: { optimizationLevel: 7 },
              pngquant: { quality: '65-75', speed: 4 }
            }
          }
        ]
      },

      // Font
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        exclude: /(img)/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              context: path.join(__dirname, '..', 'src'),
              name: '[path][name].[ext]'
            }
          }
        ]
      }

    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {
          use: [ require('poststylus')([ 'autoprefixer', 'rucksack-css' ]) ]
        }
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
    .concat(environment === 'development' ? [new webpack.HotModuleReplacementPlugin()] : [])
    .concat(commonChunks),

  resolve: {
    extensions: [ '.ts', '.js', '.styl', '.css' ]
  }
};
