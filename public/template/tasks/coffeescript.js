module.exports = (gulp, plugins, paths) => {
  var srcPath = plugins['path'].join(paths.src, paths.coffeescript);

  return () => {
    return gulp.src(srcPath)
      .pipe(plugins['cached']('coffeescript') )
      .pipe(plugins['debug']())
      .pipe(plugins['sourcemaps'].init())
      .pipe(plugins['plumber']())
      .pipe(plugins['coffee']())
      .pipe(gulp.dest(paths.build))
      .pipe(plugins['flatmap'](function (stream, file) {
        return plugins['browserify.helper'](gulp, plugins, paths, stream, file)
      }))
      .pipe(gulp.dest('.'))
      .pipe(plugins['filter']('**/*.js'))
      .pipe(plugins['browser-sync'].stream())
      .pipe(plugins['ignore'].exclude([ '**/*.map' ]))
      .pipe(plugins['babel']({ presets: ['babili'] }))
      .pipe(gulp.dest(paths.dist));
  }
}
