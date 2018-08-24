<!DOCTYPE html >
<html lang="en"> 
  <head>
    <!-- Page Title-->
    <title> DSB - Login
    </title>
    <!-- Page Meta-->
    <meta name="description" content="Volta is a futuristic Web Application and Admin Dashboard built with Bootstrap, Stylus and CoffeeScript. From a developer trusted by thousands of users."/>
    <meta name="keywords" content="volta, admin, volta admin, dashboard, web, application, template, theme, admin dashboard, admin template, admin theme, web application template, dashboard template, pixevil, pixevil themes, grozav"/>
    <meta name="author" content="Pixevil (https://pixevil.com)"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
    <!-- Browser Favicons-->
<?php $this->load->view('includes/header')?>

    <style type="text/css">
/*          ::-webkit-input-placeholder {
             text-align: center;
             font-weight: bold;
          }

          :-moz-placeholder { 
             text-align: center;  
             font-weight: bold;
          }

          ::-moz-placeholder {  
             text-align: center;  
             font-weight: bold;
          }

          :-ms-input-placeholder {  
             text-align: center; 
             font-weight: bold;
          }*/
          .panel.-focused{margin-bottom: 20px;}
    </style>
    
  </head>
<body data-theme="royal">
    <!-- Loading Spinner-->
    <div class="loader-wrapper">
      <div class="loader"><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span>
      </div>
    </div>
    <!-- /Loading Spinner-->
    <!-- Navbar-->
    <div class="navbar -dark -fixed-top -has-6-items">
      <div class="navbar-wrapper">
        <div class="sidebar-toggle hidden-lg-up hidden-xs-down" id="sidebar-toggle-navbar-brand" data-target="#sidebar"> <a href="javascript:void(0);"> <i class="fa fa-bars"> </i></a></div><a class="navbar-brand hidden-xs-down" href="<?php echo base_url('dashboard');?>"> 
          <h1 style="font-size:35px;letter-spacing:2px;">Profit Scalper</h1></a>
        <ul class="navbar-nav -right">
          <li> <a href="facebook" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook"></i></a></li>
        </ul>
        <div class="morph-dropdown-wrapper -dark -right">
          <div class="morph-dropdown-list -links"></div>
        </div>
      </div>
    </div>
    <!-- /Navbar-->
    <!-- Content-->


		<div class="section">
	    	<div class="container">
				<div class="row">
					<div class="col-sm-3"></div>
					<div class="col-sm-6">
						<?php if($message!=""){echo $message;} ?>
						<div class="basic-login">
            <?php if ($this->session->flashdata('message')) { ?>
        <div style="color:#fff;margin-top:70px;"class="alert -success"><?php echo $this->session->flashdata('message'); ?></div><br>
        <?php } ?>
						<?php echo validation_errors(); ?>
							<form role="form" action="" method="post">

   <div class="content -dark -without-sidebar">
      <div class="container-fluid"> 
        <div class="row"> 
        <div class="col -lg-1"></div> 
          <div class="col -lg-9">
            <div class="panel -dark -focused">
              <div class="panel-heading -dark -with-icon-lg"><i class="pe pe-angle-right-circle"></i>
                <h3>Sign In </h3><span>Please enter your login details</span>
              </div>
              <div class="panel-body"> 
                <form class="form -dark" id="form-signin" action="/" data-toggle="validator" method="POST">
                  <!-- Form Group-->
                  <div class="form-group">
                    <label class="form-label" for="form-signin-username"></label>
                    <input class="form-control" style="text-align:center;font-weight: bold;" id="form-signin-username" name="email" type="text" required="required" placeholder="Email"/>
                  </div>
                  <!-- /Form Group-->
                  <!-- Form Group-->
                  <div class="form-group">
                    <label for="form-signin-password"></label>
                    <input class="form-control" style="text-align:center;font-weight: bold;" id="form-signin-password" name="password" type="password" required="required" placeholder="Password" />
                    <a class="form-text _text-muted _text-right" href="<?php echo base_url('auth/forgot');?>"> <small>Forgot Password?</small></a>
                  </div>
                  <!-- /Form Group-->
                  <!-- Form Group-->
            <!--       <div class="form-group _margin-top-2x _margin-bottom-none">
                    <div class="form-check -checkbox">
                      <input class="form-check-input" id="form-signin-remember" name="password" type="checkbox" checked="checked"/>
                      <label for="form-signin-remember">Remember me </label> -->
                      <button class="btn -primary w-100" type="submit" name="signup">Signin</button>
                    <!-- </div> -->
                  <!-- </div> -->
                  <!-- /Form Group-->
                </form>
              </div>
            </div>
            <p class="_text-center"><a class="_text-danger" href="<?php echo base_url('auth/sign_up');?>">I don't have an account yet, sign me up!</a></p>
          </div>
          <div class="col -lg-2"></div> 
        </div>
      </div>
    </div>

























								<!--<div id="login">

                  <div class="container">
                  
                    <div class="wrapper">
                    
                      <h1 class="glyphicons lock">Ergo Admin <i></i></h1>
                    
                      
                      <div class="widget">
                        
                        <div class="widget-head">
                          <h3 class="heading">Login area</h3>
                          <div class="pull-right">
                            Don't have an account? 
                            <a href="<?php echo base_url();?>index.php/auth/sign_up" class="btn btn-inverse btn-mini">Sign up</a>
                          </div>
                        </div>
                        <div class="widget-body">
                        
                          
                          <form method="post" action="">
                            <label for="login-email">Email</label>
                            <input type="text" name="email" id="login-email" class="input-block-level" placeholder="Your Username or Email address" required=""/> 
                            <label for="login-password">Password <a class="password" href="">forgot your password?</a></label>
                            <input type="password" name="password" id="login-password" class="input-block-level margin-none" placeholder="Your Password"  required=""/>
                            <div class="separator bottom"></div> 
                            <div class="row-fluid">
                              <div class="span8">
                                <div class="uniformjs"><label class="checkbox"><input type="checkbox" value="remember-me">Remember me</label></div>
                              </div>
                              <div class="span4 center">
                                <button class="btn btn-block btn-primary" type="submit">Sign in</button>
                              </div>
                            </div>
                          </form>
                           
                              
                        </div>
                        <div class="widget-footer">
                          <p class="glyphicons restart"><i></i>Please enter your username and password ...</p>
                        </div>
                      </div>
                      -->
                      
                    </div>
                    
                  </div>
                  
                </div>
							</form>
						</div>
					</div>
					<div class="col-sm-3"></div>
				</div>
			</div>
		</div>

    <!-- Wrapper -->

<!-- // Wrapper END -->
<?php $this->load->view('includes/footer')?>



        <!-- Javascripts -->
<!--         // <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        // <script>window.jQuery || document.write('<script src="public/js/jquery-1.9.1.min.js"><\/script>')</script>
        // <script src="public/js/bootstrap.min.js"></script>
        // <script src="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.js"></script>
        // <script src="public/js/jquery.fitvids.js"></script>
        // <script src="public/js/jquery.sequence-min.js"></script>
        // <script src="public/js/jquery.bxslider.js"></script>
        // <script src="public/js/main-menu.js"></script>
        // <script src="public/js/template.js"></script> -->

    </body>

    <script>


    $(document).ready(function(){

      var login = $('.wrong_login').text();
      if (login ==='Invalid Email or Password...!') {
        //alert("Invalid Userid OR Password...!");
        swal({
          title: 'Invalid Email or Password...!',
          background: 'rgb(38, 66, 99)',
          type: 'error',
          html: $('<div>')
            .addClass('text-danger'),
           
          animation: false,
          customClass: 'animated swing'
        })
      }


    });
    
</script>
<script>




</script>


</html>