const path = require('path');

module.exports = {
  environment: 'production',
  server: {
    url: '', // Set to http://yourdomain.com
    port: 3030,
    baseDir: 'dist',
    routes: {
      '/node_modules': 'node_modules'
    }
  },
  assets: require(path.join(__dirname, 'assets.production.js'))
};
