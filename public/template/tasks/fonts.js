module.exports = (gulp, plugins, paths) => {
  var srcPath = plugins['path'].join(paths.src, paths.font);

  return () => {
    return gulp.src(srcPath)
      .pipe(plugins['ignore']((file) => {
        return /img/.test(file.relative)
      }))
      .pipe(plugins['cached']('fonts'))
      .pipe(plugins['debug']())
      .pipe(plugins['plumber']())
      .pipe(gulp.dest(paths.build))
      .pipe(gulp.dest(paths.dist))
      .pipe(plugins['browser-sync'].stream())
  }
}
