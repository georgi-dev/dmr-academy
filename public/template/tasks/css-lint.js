module.exports = (gulp, plugins, paths) => {
  var srcPath = plugins['path'].join(paths.src, paths.css);

  return () => {
    return gulp.src(srcPath)
      .pipe(plugins['cached']('css-lint') )
      .pipe(plugins['ignore']((file) => {
        return /(vendors|config)\//.test(file.relative)
      }))
      .pipe(plugins['plumber']())
      .pipe(plugins['csslint']())
      .pipe(plugins['csslint'].formatter());
  }
}
