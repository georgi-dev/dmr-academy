module.exports = (gulp, plugins, paths) => {
  var browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      through = require('through2'),
      glob = require('glob'),
      merge = require('merge-stream')
      srcPath = plugins['path'].join(paths.build, paths.javascript);

  var babelify = require('babelify');

  return () => {
    var files = glob.sync(srcPath)

    for (let i = 0; i < files.length; i += 1) {
      if (/\.bundle\.js$/.test(files[i])) {
        files.splice(i, 1);
      }
    }

    return merge(files.map(function (entry) {
      return browserify({
          entries: entry,
          debug: true,
          insertGlobalVars: true
        })
        .transform('babelify', {
          presets: [ 'es2015' ]
        })
        .bundle()
        .pipe(source(entry))
        .pipe(buffer())
        .pipe(plugins['debug']())
        .pipe(plugins['sourcemaps'].init({ loadMaps: true }))
        .pipe(plugins['sourcemaps'].write(plugins['path'].join('.')))
        .pipe(gulp.dest(plugins['path'].join(__dirname, '..')))
        .pipe(plugins['browser-sync'].stream());
    }));
  }
}
