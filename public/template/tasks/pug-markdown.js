const merge = require('merge2');
const fs = require('fs-extra');

module.exports = (gulp, plugins, paths) => {
  const srcPath = plugins['path'].join(paths.src, paths.views, paths.markdown);

  function pugmd(content, path, file) {
    return [
      'extends ../../layouts/documentation-page.pug',
      'block page',
      ' include:markdown-it(html=true plugins=[\'markdown-it-attrs\']) ' + path.split(/[\\/]/).pop()
    ].join('\n');
  }

  // Handle .sass and .scss partial changes by recompiling the parent asset
  // whenever the children are modified.
  //
  var partial = ( input ) => {
    let pugFile = plugins['path'].join(input.dirname, input.basename + input.extname);
    for (key in plugins['cached'].caches['pug']) {
      if (key.indexOf(pugFile) !== -1) {
        delete plugins['cached'].caches['pug'][key];
        break;
      }
    }

    return input
  }


  return () => {
    return gulp.src(srcPath)
      .pipe(plugins['cached']('pug-markdown'))
      .pipe(plugins['debug']())
      .pipe(plugins['modifyFile'](pugmd))
      .pipe(plugins['rename']({ extname: '.pug' }))
      .pipe(plugins['rename'](partial))
      .pipe(gulp.dest(plugins['path'].join(paths.src, paths.views)));
  }
}
