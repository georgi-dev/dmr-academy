module.exports = (gulp, plugins, paths) => {
  var srcPath = plugins['path'].join(paths.src, paths.sass);

  return () => {
    gulp.src(srcPath)
      .pipe(plugins['cached']('sass-lint') )
      .pipe(plugins['ignore']((file) => {
        return /(vendors|config)\//.test(file.relative)
      }))
      .pipe(plugins['plumber']())
      .pipe(plugins['sassLint']({
        // config: plugins['path'].join(__dirname, '..', 'config', 'stylint.json')
      }))
      .pipe(plugins['sassLint'].format())
      .pipe(plugins['sassLint'].failOnError());
  }
}
