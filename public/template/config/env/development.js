const path = require('path');

module.exports = {
  environment: 'development',
  server: {
    url: '', // Set to http://localhost:PORT
    port: 3030,
    baseDir: 'build',
    routes: {
      '/node_modules': 'node_modules'
    }
  },
  assets: require(path.join(__dirname, 'assets.development.js'))
};
