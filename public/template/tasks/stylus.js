module.exports = (gulp, plugins, paths) => {
  var srcPath = plugins['path'].join(paths.src, paths.stylus),
      poststylus = require('poststylus');

  // Handle .styl partial changes by recompiling the parent asset whenever
  // the children are modified.
  //
  var partial = ( input ) => {
    if (input.basename[0] == '_') {
      var dir = input.dirname.split(plugins['path'].sep),
          basedir = dir[ dir.length - 1 ],
          parent = plugins['path'].resolve(paths.src, 'css', basedir, basedir + input.extname)

      for (key in plugins['cached'].caches['stylus']) {
        let basename = key.split(/[\/\\]/);
        basename = basename[basename.length - 1];

        if (basename[0] != '_' && /resources\/css\//.test(key)) {
          delete plugins['cached'].caches['stylus'][key];
        }
      }
    }

    return input
  }

  return () => {
    return gulp.src(srcPath)
      .pipe(plugins['rename'](partial))
      .pipe(plugins['cached']('stylus'))
      .pipe(plugins['ignore']((file) => {
        return /\_.+\.styl$/.test(file.relative)
      }))
      .pipe(plugins['stringReplace'](/\@import ([\'\"])\~/g, function (replacement, capture) {
        return '@import ' + capture
      }, { logs: { enabled: false } }))
      .pipe(plugins['debug']())
      .pipe(plugins['sourcemaps'].init())
      .pipe(plugins['plumber']())
      .pipe(plugins['stylus']({
        'resolve url': true,
        'include css': true,
        'include': 'node_modules',
        'modulesDirectories': ['node_modules'],
        'url': 'embedurl',
        'use': [
          poststylus([
            'autoprefixer',
            'rucksack-css'
          ])
        ]
      }))
      .pipe(plugins['sourcemaps'].write(plugins['path'].join('.')))
      .pipe(gulp.dest(paths.build))
      .pipe(plugins['filter']('**/*.css'))
      .pipe(plugins['browser-sync'].stream())
      .pipe(plugins['ignore'].exclude([ '**/*.map' ]))
      .pipe(plugins['cssmin']())
      .pipe(gulp.dest(paths.dist));
  }
}
