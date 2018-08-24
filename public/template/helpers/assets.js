module.exports = function (assets) {
  let normalizedAssets = {
    scripts: [],
    stylesheets: []
  };

  if (assets.scripts) {
    normalizedAssets['scripts'] = assets.scripts.map((file) => {
      let script = file;
      let configuration = {};

      if (script.constructor === Array) {
        configuration = script[1] || {};
        script = script[0];
      }

      if (script.indexOf('http') == 0) {
        return script;
      } else {
        return script.substr(0, script.lastIndexOf('.')) + '.js';
      }
    });
  }

  if (assets.stylesheets) {
    normalizedAssets['stylesheets'] = assets.stylesheets.map((file) => {
      let stylesheet = file;
      let configuration = {};

      if (stylesheet.constructor === Array) {
        configuration = stylesheet[1] || {};
        stylesheet = stylesheet[0];
      }

      if (stylesheet.indexOf('http') == 0) {
        return stylesheet;
      } else {
        return stylesheet.substr(0, stylesheet.lastIndexOf('.')) + '.css';
      }
    });
  }

  return normalizedAssets;
}
