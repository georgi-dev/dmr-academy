 <?php   $this->load->view('layout/superheader');   
            ?>   
          
      <!-- Page content -->
  <div id="page-content-wrapper">

        <div class="section section-breadcrumbs">
            <div class="container">
              <div class="row">
                
                  <h3>Add User</h3>
                   
              </div>
                
            </div>
        </div>

        <!-- Homepage Slider -->
        <br>
        <div class="container" id="contentpart">
      <div class="row">
        <div class="col-md-12">
          
          
          
        </div>
      </div>

      <div class="row">

        <div class="section">
          <div class="container">
            <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6">
                <?php if($this->session->flashdata('message') != ""){ ?>
                <div class="alert alert-danger">
                <?php echo $this->session->flashdata('message'); ?>
                </div>
                <?php } ?>
                <div class="basic-login">
                  <form role="form" action="" method="post">
                    <div class="form-group">
                        <label for="login-username"><i class="icon-user"></i> <b>User Name</b></label>
                        <input class="form-control" name="username" id="login-username" type="text" placeholder="" required="">
                        <div style="color:red;"><?php echo form_error('username')?form_error('username'):""; ?></div>
                    </div>
                    <div class="form-group">
                        <label for="login-username"><i class="icon-user"></i> <b>User Email</b></label>
                        <input class="form-control" name="useremail" id="login-username" type="email" placeholder="" required="">
                        <div style="color:red;"><?php echo form_error('useremail')?form_error('useremail'):""; ?></div>
                    </div>
                    <div class="form-group">
                        <label for="login-password"><i class="icon-lock"></i> <b>Password</b></label>
                        <input class="form-control" name="password" id="login-password" type="password" placeholder="" required="">
                        <div style="color:red;"><?php echo form_error('password')?form_error('password'):""; ?></div>
                    </div>
                    <div class="form-group">
                        <label for="login-password"><i class="icon-lock"></i> <b>Confirm Password</b></label>
                        <input class="form-control" name="cnfpassword" id="login-cnfpassword" type="password" placeholder="" required="">
                        <div style="color:red;"><?php echo form_error('cnfpassword')?form_error('cnfpassword'):""; ?></div>
                    </div>
                    <div class="err" style="color: red;"></div>
                    <div class="form-group">
                      <button type="submit" name="adduser" value="Add User" onclick="return is_match()" class="btn">Add User</button><br><br>
                      <div class="clearfix"></div>
                    </div>
                  </form>  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>       

  </div>
      
</div>  
        


    <script>
      function is_match()
      {
          var pass = $('#login-password').val();
          var cnfpass = $('#login-cnfpassword').val();
          if(pass == cnfpass)
          {
            return true;
          }
          else
          {
            $(".err").html('Password Mismatch with Confirm Password...');
            return false;
          }
      }
    </script>    
     <?php   $this->load->view('layout/superfooter');   
            ?>   