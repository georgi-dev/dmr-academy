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
        
        <link rel="stylesheet" href="<?php echo base_url('public/css/bootstrap.min.css') ?>">
        <link rel="stylesheet" href="<?php echo base_url('public/css/icomoon-social.css') ?>">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,600,800' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" href="<?php echo base_url('public/css/leaflet.css') ?>" />
    <!--[if lte IE 8]>
        <link rel="stylesheet" href="css/leaflet.ie.css" />
    <![endif]-->
    <link rel="stylesheet" href="<?php echo base_url('public/css/main.css') ?>">

        <script src="public/js/modernizr-2.6.2-respond-1.1.0.min.js"></script>
        <style type="text/css">
          .mainmenu-wrapper{
        background-color: #5bc0de;
          }

        </style>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        

        <!-- Navigation & Logo-->
        <div class="mainmenu-wrapper">
          <div class="container">
            <div class="menuextras">
          
            </div>
            <nav id="mainmenu" class="mainmenu">
              <u><h1>Ebay(USA) Product Scraper</h1></u>
              <h3>You can Scrap only 50 products at a time</h3>
              <h3 id="msg"></h3>
              <input type="hidden" id="ermsg" >

        </nav>
        
        <br>
      </div>
    </div>



<div class="section section-breadcrumbs">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h1>Login</h1>
					</div>
				</div>
			</div>
		</div>


		<div class="section">
	    	<div class="container">
				<div class="row">
					<div class="col-sm-3"></div>
					<div class="col-sm-6">
						<?php if($message!=""){echo $message;} ?>
						<div class="basic-login">
            <?php if ($this->session->flashdata('message')) { ?>
        <div class="alert alert-success"><?php echo $this->session->flashdata('message'); ?></div><br>
        <?php } ?>
						<?php echo validation_errors(); ?>
							<form role="form" action="" method="post">
								<div class="form-group">
		        				 	<label for="login-username"><i class="icon-user"></i> <b>Username or Email</b></label>
									<input class="form-control" name="userid" id="login-username" type="text" placeholder="" required="">
								</div>
								<div class="form-group">
		        				 	<label for="login-password"><i class="icon-lock"></i> <b>Password</b></label>
									<input class="form-control" name="password" id="login-password" type="password" placeholder="" required="">
								</div>
								<div class="form-group">
									<!--<label class="checkbox">
										<input type="checkbox"> Remember me
									</label>
									<a href="#" class="forgot-password">Forgot password?</a>-->
									<button type="submit" name="superlogin" value="SuperLogin" class="btn">Login</button><br><br>
                  
									<div class="clearfix"></div>
								</div>
							</form>
						</div>
					</div>
					<div class="col-sm-3"></div>
				</div>
			</div>
		</div>



<div class="footer">
        <div class="container">
          
          <div class="row">
            <div class="col-md-12">
              <div class="footer-copyright">&copy; 2017.</div>
            </div>
          </div>
        </div>
      </div>

        <!-- Javascripts -->
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="public/js/jquery-1.9.1.min.js"><\/script>')</script>
        <script src="<?php echo base_url('public/js/bootstrap.min.js')?>"></script>
        <script src="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.js"></script>
        <script src="<?php echo base_url('public/js/jquery.fitvids.js')?>"></script>
        <script src="<?php echo base_url('public/js/jquery.sequence-min.js')?>"></script>
        <script src="<?php echo base_url('public/js/jquery.bxslider.js')?>"></script>
        <script src="<?php echo base_url('public/js/main-menu.js')?>"></script>
        <script src="<?php echo base_url('public/js/template.js')?>"></script>

    </body>

    <script>
  function deleteASIN() 
  {
      
      var r = confirm("You want to Delete ASIN No ...?");
      if (r == true)
        return true;
      else
        return false;
      
  }
  
</script>
<script>
function loadDoc() {

  var xhttp = new XMLHttpRequest();
  var sellerid=document.getElementById("sellerid").value;
  var keyword=document.getElementById("keyword").value;
  var item=document.getElementById("item").value;
  sellerid=encodeURIComponent(sellerid);
  keyword=encodeURIComponent(keyword);
  item=encodeURIComponent(item);

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     //alert(this.responseText);
      $("#msg").html(this.responseText);
      $("#msg").attr("class", "alert alert-success");
      $("#ermsg").focus();
    }
  };
  $('#buttons').hide();
  xhttp.open("POST", "fetch_links.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("sellerid="+sellerid+"&keyword="+keyword+"&item="+item);
  setInterval(function(){
    location.reload();},5000);

}



</script>


</html>