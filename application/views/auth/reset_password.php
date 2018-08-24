<html>
<head>
	<title>Reset Password</title>
	<?php $this->load->view('includes/header'); ?>
</head>
<body data-theme="royal">

	<p><a href="<?php echo base_url(); ?>">Sign in</a></p>

	<?php 
	if($success){
		echo '<div class="alert -info">
                  <div class="alert-icon "><i class="fa fa-info-circle"></i></div><strong> Info! </strong>This is a good looking alert!
                </div>';
		
	} else { ?>

	    <form method="post"> 
		<div class="content -dark -without-sidebar">
	      <div class="container-fluid"> 
	        <div class="row">  
	          <div class="col -lg-12">
	            <div class="panel -dark -focused">
	              <div class="panel-heading -dark -with-icon-lg"><i class="pe pe-help1"></i>
	                <h3>Forgot Password</h3><span>Please enter your new password</span>
	              </div>
	              <div class="panel-body"> 
	                <form class="form -dark" id="form-recover" action="/" data-toggle="validator" method="POST">
	                  <!-- Form Group-->
	                  <div class="form-group">
	                    <label for="form-reset-password">New Password</label>
	                    <input class="form-control" id="form-reset-password" name="password" type="password" required="required" placeholder="Password" />
	                    
	                  </div>
	                  <div class="form-group">
	                    <label for="form-reset-password">Confirm Password</label>
	                    <input class="form-control" id="form-reset-password" name="password_conf" type="password" required="required" placeholder="Password" />
	                    
	                  </div>
	                  <!-- /Form Group-->
	                  <!-- Form Group-->
	                  <div class="form-group _margin-top-2x _margin-bottom-none">
	                    <button class="btn -primary -block" type="submit" name="signup">Reset Password      </button>
	                  </div>
	                  <!-- /Form Group-->
	                </form>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
	</form>
   <?php }
   	$this->load->view('includes/footer');
    ?>

</body>
</html>