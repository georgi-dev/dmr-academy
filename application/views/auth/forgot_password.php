<html>
<head>
	<title>Forgot Password</title>
	<?php $this->load->view('includes/header')?>
</head>
<body data-theme="royal">

	<?php 
	if($success){
		echo '<div class="panel-body">
		<div class="alert -light -contrasted.-border-info text-center" style="color:#fff;">
                  <div class="alert-icon text-center"></div><i class="fa fa-info-circle text-center"></i><strong> Success! </strong>Thank you. We have sent you an email with further instructions on how to reset your password.
                </div>
                </div>
		</div>';
	} else {?>
 	<form method="post"> 
		<div class="content -dark -without-sidebar">
	      <div class="container-fluid"> 
	        <div class="row">  
	          <div class="col -lg-12">
	            <div class="panel -dark -focused">
	              <div class="panel-heading -dark -with-icon-lg"><i class="pe pe-help1"></i>
	                <h3>Forgot Password</h3><span>Please enter your email address</span>
	              </div>
	              <div class="panel-body"> 
	                <form class="form -dark" id="form-recover" action="/" data-toggle="validator" method="POST">
	                  <!-- Form Group-->
	                  <div class="form-group">
	                    <label class="form-label" for="form-recover-email">Email</label>
	                    <input class="form-control" id="form-recover-username" name="email" type="email" required="required" placeholder="Email"/>
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