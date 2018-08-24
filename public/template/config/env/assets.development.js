let assets = {};

// Common assets
//
assets['common'] = {
  'stylesheets': [],
  'scripts': []
};

// Dashboard Layout
//
assets['dashboard'] = {
  stylesheets: [
    'vendors/bootstrap/bootstrap.scss',
    'vendors/animate/animate.scss',
    'vendors/metismenu/metismenu.scss',
    'vendors/perfect-scrollbar/perfect-scrollbar.css',
    'vendors/font-awesome/font-awesome.scss',
    'vendors/pixeden-stroke/pixeden-stroke.scss',
    'resources/css/dashboard/dashboard.styl'
  ],
  scripts: [
    'vendors/jquery/jquery.js',
    'vendors/gsap/gsap.js',
    'vendors/browser/browser.js',
    'vendors/hammer/hammer.js',
    'vendors/tether/tether.js',
    'vendors/moment/moment.js',
    'vendors/bootstrap/bootstrap.js',
    'vendors/bootstrap/plugins/modal.js',
    'vendors/datepicker/datepicker.js',
    'vendors/validator/validator.js',
    'vendors/perfect-scrollbar/perfect-scrollbar.js',
    'vendors/gritter/gritter.js',
    'vendors/metismenu/metismenu.js',
    'resources/js/themes/picker.coffee',
    'resources/js/animus/animus.coffee',
    'resources/js/components/morph-dropdown.coffee',
    'resources/js/components/navbar.coffee',
    'resources/js/components/panel.coffee',
    'resources/js/components/sidebar.coffee',
    'resources/js/dashboard/dashboard.coffee'
  ]
};

// Dashboard Unauthenticated Layout
//
assets['dashboard-unauthenticated'] = assets['dashboard'];

// Documentation Layout
//
assets['documentation'] = {
  stylesheets: assets['dashboard'].stylesheets.concat([
    'vendors/prism/prism.styl',
    'resources/css/documentation/documentation.styl',
  ]),
  scripts: assets['dashboard'].scripts.concat([
    'vendors/isotope/isotope.js',
    'vendors/prism/prism.js',
    'resources/js/documentation/documentation.coffee',
  ])
};

// Documentation Page Layout
//
assets['documentation-page'] = assets['documentation'];


module.exports = assets;
