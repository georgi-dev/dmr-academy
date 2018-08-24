

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
        
        <?php $this->load->view('includes/header');?>
    </head>
    <body data-theme="royal">
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
<?php
  if (!$this->session->user_id)  redirect(base_url());
?>
<?php $this->load->view('includes/menu-top')?>
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
        <br></br>
        <div class="-dark -with-left-sidebar -collapsible" id="contentpart">
         <div class="row">
          <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-heading"><h4>Schedules</h4></div>
                <div class="panel-body">
                  <div class="col-md-6">
                    <h1 style="font-size: 50px;"><span class="glyphicon glyphicon-list"></span></h1>
                  </div>
                  <div class="col-md-6">
                    <h1 style="font-size: 50px;">
                      <?php echo $cnt1 = ($sche_cnt)?$sche_cnt:0; ?>
                    </h1>
                  </div>
                </div>
              </div>
          </div>
          <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-heading"><h4>Products</h4></div>
                <div class="panel-body">
                  <div class="col-md-6">
                    <h1 style="font-size: 50px;"><span class="glyphicon glyphicon-shopping-cart"></span></h1>
                  </div>
                  <div class="col-md-6">
                    <h1 style="font-size: 50px;">
                      <?php echo $cnt2 = ($pro_cnt)?$pro_cnt:0; ?>
                    </h1>
                  </div>
                </div>
              </div>
          </div>
      </div>
      </div>
        
        

    <div class="text-center">
      <ul class="pagination pagination-lg">
      
        

      </ul>
    </div>


  </div>
      
      <!-- Footer -->
        <?php $this->load->view('includes/footer');?>
      

    </body>

    

</html>