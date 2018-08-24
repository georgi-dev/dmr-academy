const fs = require('fs-extra');
const path = require('path');
const yaml = require('js-yaml');

module.exports = [
  yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, 'pages', 'home.yml'), 'utf8')),
  yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, 'pages', 'dashboard.yml'), 'utf8')),
  yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, 'pages', 'documentation.yml'), 'utf8'))
];
