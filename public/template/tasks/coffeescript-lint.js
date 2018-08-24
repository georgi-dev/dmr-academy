module.exports = (gulp, plugins, paths) => {
  var srcPath = plugins['path'].join(paths.src, paths.coffeescript);

  return () => {
    return gulp.src(srcPath)
      .pipe(plugins['cached']('coffeescript-lint') )
      .pipe(plugins['ignore']((file) => {
        return /(vendors|config)\//.test(file.relative)
      }))
      .pipe(plugins['plumber']())
      .pipe(plugins['coffeelint'](plugins['path'].join(__dirname, '..', 'config', 'coffeelint.json')))
      .pipe(plugins['coffeelint'].reporter());
  }
}
