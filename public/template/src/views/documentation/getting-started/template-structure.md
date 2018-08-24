# Where do I start?

Volta brings over 40 premade pages with code examples and component variations. Each one of these pages uses the same structural markup.

---

##### The HTML
The structure of any webpage is the following:

~~~ html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
~~~
{ .line-numbers}

Next, let's see what we can place inside of the `<head>` and `<body>` tags.

---

##### The Head
Next, let's see how the head markup of every Volta page looks like, including the one you're viewing. The __Page Specific Links__ are directly related to additional functionality, so choose only the one you need for your page.

~~~ html
<head>
  <meta charset="UTF-8">

  <!-- Page Title -->
  <!-- The page title appears as the browser tab label, used for bookmarks -->
  <title>Volta - Web Application and Admin Dashboard</title>

  <!-- Page Meta -->
  <!-- The page meta is used by search engines to provide useful information about the site -->
  <meta name="description" content="Volta by pixevil is a next generation web application and admin dashboard for people who believe in a beautifully designed future. Volta features a beautiful, clean, mobile-friendly design that makes use of gradients and opacities to obtain a unique, customizable design.">
  <meta name="keywords" content="volta, admin">

  <!-- Viewport -->
  <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">

  <!-- Icons -->
  <!-- Generated using http://realfavicongenerator.net -->
  <link rel="apple-touch-icon" sizes="180x180" href="assets/icon/apple-touch-icon.png">
  <link rel="icon" type="image/png" href="assets/icon/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="assets/icon/favicon-16x16.png" sizes="16x16">
  <link rel="manifest" href="assets/icon/manifest.json">
  <link rel="mask-icon" href="assets/icon/safari-pinned-tab.svg" color="#ff1643">
  <link rel="shortcut icon" href="assets/icon/favicon.ico">
  <meta name="msapplication-config" content="/volta/icon/browserconfig.xml">
  <meta name="theme-color" content="#ff1643">

  <!-- Facebook OpenGraph -->
  <meta property="og:title" content="Volta - Web Application and Admin Dashboard">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://pixevil.com/volta">
  <meta property="og:image" content="https://pixevil.com/img/template-thumbnails/volta.jpg">
  <meta property="og:site_name" content="pixevil">

  <!-- Application CSS -->
  <link href="assets/css/bootstrap/bootstrap.css" rel="stylesheet" type="text/css">
  <link href="assets/css/animate/animate.css" rel="stylesheet" type="text/css">
  <link href="assets/css/nanoscroller/nanoscroller.css" rel="stylesheet" type="text/css">
  <link href="assets/css/metis-menu/metis-menu.css" rel="stylesheet" type="text/css">
  <link href="assets/css/icons/pixeden-stroke-icons.css" rel="stylesheet" type="text/css">
  <link href="assets/css/icons/font-awesome-icons.css" rel="stylesheet" type="text/css">

  <!-- Application Theme -->
  <link id="theme-style" href="assets/css/application/themes/volta.css" rel="stylesheet" type="text/css">

  <!-- Page Specific Links -->
  <link href="assets/css/datatables/datatables.css" rel="stylesheet" type="text/css">
  <link href="assets/css/dropzone/dropzone.css" rel="stylesheet" type="text/css">
  <link href="assets/css/fullcalendar/fullcalendar.css" rel="stylesheet" type="text/css">
  <link href="assets/css/prism/prism.css" rel="stylesheet" type="text/css">
  <link href="assets/css/vectormaps/vectormaps.css" rel="stylesheet" type="text/css">
</head>
~~~
{ .line-numbers }

---

##### The Body
Next, let's see how the head markup of every Volta page looks like, including the one you're viewing. The __Page Specific Links__ are directly related to additional functionality, so choose only the one you need for your page.

~~~ html
<body>

  <!-- Navbar -->
  <div class="navbar -dark -fixed-top">
    <div class="navbar-wrapper">

      <a class="navbar-brand" href=""><span class="hidden-sm-up">V</span> <span class="hidden-xs-down">VOLTA</span></a>

      <ul class="navbar-nav -right">
        <li>
          <a class="has-morph-dropdown" href="#notifications-dropdown"><i class="pe pe-bell"></i> <span class="navbar-item-count">2</span></a>
        </li>
        <li>
          <a class="has-morph-dropdown" href="#applications-dropdown"><i class="pe pe-keypad"></i></a>
        </li>
        <li class="navbar-profile">
          <a class="has-morph-dropdown" href="#profile-dropdown">
           <img src="assets/img/users/5.jpg"></a>
        </li>
        <li id="right-sidebar-toggle">
          <a href="javascript:void(0);"><i class="pe pe-edit -rotate-90"></i></a>
        </li>
      </ul>

      <div class="morph-dropdown-wrapper -dark -right">
        <div class="morph-dropdown-list -links">

          <div class="morph-dropdown" id="notifications-dropdown">
            <div class="morph-content">
              <h3>Notifications</h3>
              <p class="_text-muted">Here&#39;s what happened while you were away.</p>
              <ul class="morph-links -small">
                <li>
                  <a href="#">
                  <!-- Image -->
                   <img src="assets/img/users/male3.jpg"> <strong>John Doe</strong>has accepted your team invitation. <small>Just Now</small></a>
                </li>
              </ul>
              <div class="_margin-top-1x">
                <a class="btn -primary -block">View All Notifications</a>
              </div>
            </div>
          </div>

          <div class="morph-dropdown" id="applications-dropdown">
            <div class="morph-content -gallery">
              <h3>Applications</h3>
              <p class="_text-muted">Open one of your connected social applications.</p>
              <ul class="morph-gallery">
                <li>
                  <a href="https://facebook.com/pixevil" target="_blank"><i class="fa fa-facebook-square"></i> Facebook</a>
                </li>
              </ul>
              <div class="_margin-top-1x">
                <a class="btn -primary -block">View All Applications</a>
              </div>
            </div>
          </div>

          <div class="morph-dropdown" id="profile-dropdown">
            <div class="morph-content -links">
              <h3>Account</h3>
              <p class="_text-muted">View and update your account.</p>
              <ul class="morph-links">
                <li>
                  <a href="#">My Profile</a>
                </li>
                <li>
                  <a href="#">Account Settings</a>
                </li>
              </ul>
              <div class="_margin-top-1x">
                <a class="btn -primary -block">Sign Out</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <!-- /Navbar -->

  <!-- Left Sidebar -->
  <div class="sidebar -dark -left -collapsible" id="sidebar">
    <div class="sidebar-wrapper nano">
      <ul class="sidebar-menu metismenu nano-content">
        <li class="sidebar-heading">Elements</li>
        <li>
          <a href=""><i class="pe pe-home"></i> <span>Dashboard</span></a>
        </li>
        <li>
          <a href="#"><i class="pe pe-box2"></i> <span>UI Elements</span> <span class="fa arrow"></span></a>
          <ul>
            <li>
              <a href="ui/alerts.html"><span>Alerts</span></a>
            </li>
            <li>
              <a href="ui/buttons.html">Buttons</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <!-- /Left Sidebar -->

  <!-- Right Sidebar -->
  <div class="sidebar -dark -right -slideable">
    <ul class="sidebar-tabs">
      <li class="sidebar-tab -active" data-target="#tab-id">Chat</li>
    </ul>
    <div class="sidebar-wrapper nano">
      <div class="sidebar-content nano-content">
        <div class="sidebar-tab-content -active" id="tab-id">
          <div class="sidebar-content-section">
            <h5>Tab Content</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Right Sidebar -->

  <!-- Content -->
  <div class="content -dark -with-left-sidebar -collapsible">
    <div class="container-fluid">
      <div class="row">
        <div class="col -lg-12">
          <!-- Page Heading -->
          <div class="page-heading -dark">
            <h2>Page Content</h2>
            <!-- Breadcrumb -->
            <div class="breadcrumb">
              <a class="breadcrumb-item" href="">Home</a> <a class=.html"breadcrumb-item" href="#">Layouts</a> <a class="breadcrumb-item -active">Left Sidebar</a>
            </div>
            <!-- /Breadcrumb -->
          </div>
          <!-- /Page Heading -->
        </div>
      </div>
    </div>
  </div>
  <!-- /Content -->

  <!-- Scripts ... -->
</body>
~~~
{ .line-numbers }

---

##### The Scripts

Next we need to add the __scripts__, the `.js` files. Scripts are used to add custom functionality to your page, such as form validation. Whenever you want to add a new script to your webpage, you use the script tag and point the path to the script file. Script tags always go at the bottom of the page, right before the ```<body>``` tag closes, as follows:

~~~ html
<!-- Theme -->
<script src="assets/js/application/themes/base.js" type="text/javascript"></script>
<script id="theme-script" src="assets/js/application/themes/volta.js" type="text/javascript"></script>

<!-- Document -->
<script src="assets/js/jquery/jquery.js" type="text/javascript"></script>
<script src="assets/js/tether/tether.js" type="text/javascript"></script>
<script src="assets/js/moment/moment.js" type="text/javascript"></script>
<script src="assets/js/bootstrap/bootstrap.js" type="text/javascript"></script>
<script src="assets/js/validator/validator.js" type="text/javascript"></script>
<script src="assets/js/datepicker/datepicker.js" type="text/javascript"></script>
<script src="assets/js/cookie/cookie.js" type="text/javascript"></script>

<!-- Animations -->
<script src="assets/js/gsap/tweenlite.js" type="text/javascript"></script>
<script src="assets/js/gsap/plugins/css.js" type="text/javascript"></script>
<script src="assets/js/gsap/easing/easepack.js" type="text/javascript"></script>
<script src="assets/js/animus/animus.js" type="text/javascript"></script>

<!-- Notifications -->
<script src="assets/js/gritter/gritter.js" type="text/javascript"></script>

<!-- Analytics -->
<script src="assets/js/googleanalytics/googleanalytics.js" type="text/javascript"></script>
<script src="assets/js/hotjar/hotjar.js" type="text/javascript"></script>

<!-- Sidebar -->
<script src="assets/js/metis-menu/metis-menu.js" type="text/javascript"></script>
<script src="assets/js/nanoscroller/nanoscroller.js" type="text/javascript"></script>

<!-- Application Components -->
<script src="assets/js/application/components/morph-dropdown.js" type="text/javascript"></script>
<script src="assets/js/application/components/navbar.js" type="text/javascript"></script>
<script src="assets/js/application/components/panel.js" type="text/javascript"></script>

<!-- Application -->
<script src="assets/js/application/application.js" type="text/javascript"></script>

<!-- Page Specific Scripts -->
<script src="assets/js/chart/chart.js" type="text/javascript"></script>
<script src="assets/js/datatables/datatables.js" type="text/javascript"></script>
<script src="assets/js/dropzone/dropzone.js" type="text/javascript"></script>
<script src="assets/js/flot/jquery.flot.js" type="text/javascript"></script>
<script src="assets/js/flot/jquery.flot.pie.js" type="text/javascript"></script>
<script src="assets/js/flot/jquery.flot.resize.js" type="text/javascript"></script>
<script src="assets/js/flot/jquery.flot.animator.js" type="text/javascript"></script>
<script src="assets/js/fullcalendar/fullcalendar.js" type="text/javascript"></script>
<script src="assets/js/gmaps/gmaps.js" type="text/javascript"></script>
<script src="assets/js/inputmask/inputmask.js" type="text/javascript"></script>
<script src="assets/js/isotope/isotope.js" type="text/javascript"></script>
<script src="assets/js/markdown/markdown.js" type="text/javascript"></script>
<script src="assets/js/markdown/wysiwyg.js" type="text/javascript"></script>
<script src="assets/js/morris/morris.js" type="text/javascript"></script>
<script src="assets/js/prism/prism.js" type="text/javascript"></script>
<script src="assets/js/raphael/raphael.js" type="text/javascript"></script>
<script src="assets/js/sparkline/sparkline.js" type="text/javascript"></script>
<script src="assets/js/steps/steps.js" type="text/javascript"></script>
<script src="assets/js/summernote/summernote.js" type="text/javascript"></script>
<script src="assets/js/vectormaps/vectormaps.js" type="text/javascript"></script>
<script src="assets/js/vimeo/vimeo.js" type="text/javascript"></script>
<script src="assets/js/youtube/youtube.js" type="text/javascript"></script>

<!-- Page Specific Run Script -->
<script src="assets/js/application/views/index.js" type="text/javascript"></script>
~~~

We put the ```<script>``` tags at the end of the page to improve page load speed.

---

#### You're ready!
That's it! You've written the base structure for any volta page. The same code will be found in the `blank.html` page.
