module.exports = (gulp, plugins, paths) => {
  return () => {
    // Watch HTML
    gulp.watch(
      plugins['path'].join(paths.src, paths.pug), [ 'pug', 'puglint' ]
    );
    gulp.watch(
      plugins['path'].join(paths.build, paths.html)
    ).on('change', plugins['browser-sync'].reload);;

    // Watch CSS
    gulp.watch(
      plugins['path'].join(paths.src, paths.stylus), [ 'styl', 'styllint' ]
    );
    gulp.watch(
      plugins['path'].join(paths.src, paths.sass), [ 'sass', 'sasslint' ]
    );
    gulp.watch(
      plugins['path'].join(paths.src, paths.css), [ 'css', 'csslint' ]
    );

    // Watch JS
    gulp.watch(
      plugins['path'].join(paths.src, paths.coffeescript), () => {
        return plugins['run-sequence']('coffee', 'coffeelint')
      }
    );
    gulp.watch(
      plugins['path'].join(paths.src, paths.javascript), () => {
        return plugins['run-sequence']('js', 'jslint')
      }
    );

    // Watch Images
    gulp.watch(
      plugins['path'].join(paths.src, paths.image), [ 'imagemin' ]
    );

    // Watch Images
    gulp.watch(
      plugins['path'].join(paths.src, paths.font), [ 'fonts' ]
    );
  }
}
