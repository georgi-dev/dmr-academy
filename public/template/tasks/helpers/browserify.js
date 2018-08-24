var browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    through = require('through2'),
    glob = require('glob'),
    merge = require('merge-stream');

module.exports = function (gulp, plugins, paths, stream, file) {
  var srcPath = plugins['path'].join(paths.build, paths.javascript),
      entry = plugins['path'].join(__dirname, '..', '..', paths.build, file.relative);

  return browserify({
      entries: [ entry ],
      debug: true
    })
    .transform('babelify', {
      presets: [ 'es2015' ]
    })
    .bundle()
    .pipe(source(entry))
    .pipe(buffer())
    .pipe(plugins['sourcemaps'].init({ loadMaps: true }))
    .pipe(plugins['sourcemaps'].write(plugins['path'].join('.')));
};
