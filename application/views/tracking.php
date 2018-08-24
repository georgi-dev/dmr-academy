

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta charset="UTF-8">
        <title>Ebay(USA) Product Details Scraper</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        
       <!-- // <?php $this->load->view('includes/header');?> -->
        <style type="text/css">
          .tbmar1, .tbmar2_en{float:left;margin-right:20px;}
        </style>
    </head>
    <body data-theme="royal">
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
<?php
  // if (!$this->session->user_id)  redirect(base_url());
?>
<!-- <?php $this->load->view('includes/menu-top')?> -->
    <!-- END NAVBAR -->

      
      <!-- Sidebar -->
            <!-- Sidebar -->
<?php //$this->load->view('includes/sidebar')?>
          
      <!-- Page content -->
  <div class="content -dark -with-left-sidebar -collapsible">

    <div class="container-fluid">
      <div class="row">
          <div class="page-heading -dark">
            <h1 style=" font-size: 30px;">Dashboard</h1>
          </div>
      </div>
    </div>
 

        <!-- Homepage Slider -->
      <div class="tb">
        <div class="tbmar1"><a href="http://aquiline-aero.com/en/about-us.html" class="a-tm">Our Corporation</a></div>
        <div class="tbmar2_en"><a href="http://aquiline-aero.com/en/aquiline-world.html">Our World</a></div>
        <div class="tbmar2_en"><a href="http://aquiline-aero.com/en/fleet.html">Our Aircraft</a></div>
        <div class="tbmar2_en"><a href="http://aquiline-aero.com/en/services.html">Our Job</a></div>
        <div class="tbmar2_en"><a href="http://aquiline-aero.com/en/our-partners.html">Our Partners</a></div>
        <div class="tbmar2_en"><a href="http://aquiline-aero.com/en/contacts.html">How You Find US</a></div>
        <div class="clear"><b></b></div>
        <div class="hr1"><b></b></div>
      </div><br>
          <hr>
      <div class="clearfix"></div>

      <form method="post" action="">

        <input type="text" name="tracking_number">
        <button class="btn btn -primary">Track this</button>

      </form>
      <!-- Footer -->
        <?php $this->load->view('includes/footer');?>
      

    </body>

    

</html>