module.exports = (gulp, plugins, paths) => {
  var srcPath = plugins['path'].join(paths.src, paths.views, paths.pug);

  return () => {
    return gulp.src(srcPath)
      .pipe(plugins['cached']('pug-lint'))
      .pipe(plugins['plumber']())
      .pipe(plugins['pugLint']());
  }
}
