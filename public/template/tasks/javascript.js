module.exports = (gulp, plugins, paths) => {
  var srcPath = plugins['path'].join(paths.src, paths.javascript);

  return () => {
    return gulp.src(srcPath)
      .pipe(plugins['cached']('javascript'))
      .pipe(plugins['debug']())
      .pipe(plugins['plumber']())
      .pipe(gulp.dest(paths.build))
      .pipe(plugins['ignore'](/\.bundle\.js$/))
      .pipe(plugins['flatmap'](function (stream, file) {
        return plugins['browserify.helper'](gulp, plugins, paths, stream, file)
      }))
      .pipe(gulp.dest('.'))
      .pipe(plugins['filter']('**/*.js'))
      .pipe(plugins['browser-sync'].stream())
      .pipe(plugins['babel']({ presets: ['babili'] }))
      .pipe(plugins['rename'](function(file) {
        file.dirname = file.dirname.replace('build', 'dist')
      }))
      .pipe(gulp.dest('.'));
  }
}
