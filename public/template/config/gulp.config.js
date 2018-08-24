var path = require('path');

module.exports = {
  paths: {
    src: 'src',
    build: 'build',
    dist: 'dist',
    config: 'config',
    views: 'views',
    pug: path.join('**', '*.pug'),
    markdown: path.join('**', '*.md'),
    html: path.join('**', '*.html'),
    typescript: path.join('**', '*.ts'),
    coffeescript: path.join('**', '*.coffee'),
    javascript: path.join('**', '*.js'),
    stylus: path.join('**', '*.styl'),
    sass: path.join('**', '*.{sass,scss}'),
    css: path.join('**', '*.css'),
    image: path.join('**', '*.{jpg,png,gif}'),
    font: path.join('**', '*.{eot,svg,ttf,woff,woff2}')
  }
}
