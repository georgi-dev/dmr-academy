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
        <?php $this->load->view('includes/header')?>
    </head>
    <body data-theme="royal">
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        

        <!-- Navigation & Logo-->
<div class="loader-wrapper">
      <div class="loader"><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span>
      </div>
    </div>
    <!-- /Loading Spinner-->
    <!-- Navbar-->
    <?php $this->load->view('includes/menu-top')?>


    <div class="section">
        <div class="container">
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
            <?php if($this->session->flashdata('message') != ""){ ?>
            <div class="alert alert-danger">
            <?php echo $this->session->flashdata('message'); ?>
            </div>
            <?php } ?>
            <div class="basic-login">
            <?php //echo validation_errors(); ?>
              <form role="form" action="" method="post" onsubmit="return isMatch()">



                    <div class="content -dark -without-sidebar">
                      <div class="container-fluid"> 
                        <div class="row">  
                          <div class="col -lg-12">
                            <div class="panel -dark -focused">
                              <div class="panel-heading -dark -with-icon-lg"><i class="pe pe-pencil"></i>
                                <h3>Profile Settings</h3><span>Update Your Profile Info</span>
                              </div>
                              <div class="panel-body"> 
                                <form class="form -dark" id="form-signup" action="/" data-toggle="validator" method="POST">
                                  <!-- Form Group-->
                                  <div class="form-group">
                                    <label class="form-label" for="form-signup-email">Email</label>
                                    <input class="form-control" id="form-signup-email" name="email" type="email" required="required" placeholder="Enter Your Email"/>
                                  </div>
                                  <!-- /Form Group-->
                                  <!-- Form Group-->
                                  <div class="form-group">
                                    <label class="form-label" for="form-signup-username">Username</label>
                                    <input class="form-control" id="form-signup-username" name="username" type="text" required="required" placeholder="Enter Your Username"/>
                                  </div>
                                  <!-- /Form Group-->
                                                                    <!-- Form Group-->
                                  <div class="form-group">
                                    <label class="form-label" for="form-signup-fname">First name</label>
                                    <input class="form-control" id="form-signup-fname" name="fname" type="text" required="required" placeholder="Enter Your First name"/>
                                  </div>
                                  <!-- /Form Group-->
                                                                    <!-- Form Group--><div class="clearfix"></div>
                                  <div class="form-group">
                                    <label class="form-label" for="form-signup-lname">Last name</label>
                                    <input class="form-control" id="form-signup-lname" name="lname" type="text" required="required" placeholder="Enter Your Last name"/>
                                  </div>
                                  <!-- /Form Group-->
                                                                                                      <!-- Form Group-->
                                  <div class="form-group">
                                    <label class="form-label" for="form-signup-country">Country</label>
                                    <input class="form-control" id="form-signup-country" name="country" type="text" required="required" placeholder="Enter Your Country"/>
                                  </div>
                                  <!-- /Form Group-->
                                  <!-- Form Group-->
                                  <div class="form-group _margin-top-2x _margin-bottom-none">
                                    <div class="form-check -checkbox"> 
                                      <button class="btn -primary -block" type="submit" name="edit">Signup      </button>
                                    </div>
                                  </div>
                                  <!-- /Form Group-->
                                </form>
                              </div>
                            </div>
                            <p class="_text-center"><a class="_text-muted" href="<?php echo base_url();?>index.php/auth/">Back to home page</a></p>
                          </div>
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

    

<?php $this->load->view('includes/footer')?>

    </body>

    <script>


    // function registration(){

    //   $('#registration').click(function(e){
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "<?php echo base_url()?>" + "index.php/Login/create_account/",
    //         dataType: 'json',
    //         success: function(response){
    //         },
    //         error: function(error){
    //           console.log(error);
    //         } 
    //     });

    //   });
    // }





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

function isMatch()
{
  var pass = $('#login-password').val();
  var cnfpass = $('#login-cnfpassword').val();
  
  if(pass != cnfpass)
  {
    $('#err').html('Password Mismatch with Confirm Password...');
    return false;
  }
  return true;
}

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