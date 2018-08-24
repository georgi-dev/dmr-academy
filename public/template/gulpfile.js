var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    path = require('path'),
    config = require(path.join(__dirname, 'config', 'gulp.config')),
    paths = config['paths'];

plugins['run-sequence'] = require('run-sequence');
plugins['browser-sync'] = require('browser-sync').create();
plugins['browserify.helper'] = require(path.join(__dirname, 'tasks', 'helpers', 'browserify.js'));

plugins.path = path;

// HTML
gulp.task('pug',
  require(path.join(__dirname, 'tasks', 'pug'))(gulp, plugins, paths)
);
gulp.task('puglint',
  require(path.join(__dirname, 'tasks', 'pug-lint'))(gulp, plugins, paths)
);

// JavaScript
gulp.task('coffee',
  require(path.join(__dirname, 'tasks', 'coffeescript'))(gulp, plugins, paths)
);
gulp.task('coffeelint',
  require(path.join(__dirname, 'tasks', 'coffeescript-lint'))(gulp, plugins, paths)
);
gulp.task('js',
  require(path.join(__dirname, 'tasks', 'javascript'))(gulp, plugins, paths)
);
gulp.task('jslint',
  require(path.join(__dirname, 'tasks', 'javascript-lint'))(gulp, plugins, paths)
);

// CSS
gulp.task('styl',
  require(path.join(__dirname, 'tasks', 'stylus'))(gulp, plugins, paths)
);
gulp.task('styllint',
  require(path.join(__dirname, 'tasks', 'stylus-lint'))(gulp, plugins, paths)
);
gulp.task('sass',
  require(path.join(__dirname, 'tasks', 'sass'))(gulp, plugins, paths)
);
gulp.task('sasslint',
  require(path.join(__dirname, 'tasks', 'sass-lint'))(gulp, plugins, paths)
);
gulp.task('css',
  require(path.join(__dirname, 'tasks', 'css'))(gulp, plugins, paths)
);
gulp.task('csslint',
  require(path.join(__dirname, 'tasks', 'css-lint'))(gulp, plugins, paths)
);

// Images
gulp.task('imagemin',
  require(path.join(__dirname, 'tasks', 'image'))(gulp, plugins, paths)
);

// Fonts
gulp.task('fonts',
  require(path.join(__dirname, 'tasks', 'fonts'))(gulp, plugins, paths)
);

// Lint All
gulp.task('lint',
  [ 'puglint', 'coffeelint', 'jslint', 'styllint', 'sasslint', 'csslint' ]
);

// Build All
gulp.task('build', () => {
  return plugins['run-sequence'](
    'clean',
    ['pug', 'coffee', 'js', 'styl', 'sass', 'css', 'imagemin', 'fonts'],
    ['webpack']
  );
});

// Clean dist and build folders
gulp.task('clean',
  require(path.join(__dirname, 'tasks', 'clean'))(gulp, plugins, paths)
);

// Bundle
gulp.task('webpack', plugins['shell'].task(['webpack'], {
  cwd: path.join(__dirname, 'config')
}));

// Bundle
gulp.task('browserify',
  require(path.join(__dirname, 'tasks', 'browserify'))(gulp, plugins, paths)
);

// Livereload
gulp.task('browser-sync',
  require(path.join(__dirname, 'tasks', 'browser-sync'))(gulp, plugins, paths)
);

// Watchfile
gulp.task('watch',
  require(path.join(__dirname, 'tasks', 'watch'))(gulp, plugins, paths)
);

// Default Task
gulp.task('default', [ 'browser-sync', 'watch' ])
