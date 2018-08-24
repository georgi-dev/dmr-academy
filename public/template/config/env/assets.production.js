let assets = {};

// Dashboard Layout
//
assets['dashboard'] = {
  stylesheets: [],
  scripts: [
    'bundles/dashboard.bundle.js'
  ]
};

// Dashboard Unauthenticated Layout
//
assets['dashboard-unauthenticated'] = assets['dashboard'];

// Documentation Layout
//
assets['documentation'] = {
  stylesheets: [],
  scripts: [
    'bundles/dashboard.bundle.js',
    'bundles/documentation.bundle.js'
  ]
};

// Documentation Page Layout
//
assets['documentation-page'] = assets['documentation'];


module.exports = assets;
