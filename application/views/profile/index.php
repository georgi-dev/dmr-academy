<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta charset="UTF-8">
        <title>Profile</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        
<?php $this->load->view('includes/header')?>
        <style type="text/css">
          .mainmenu-wrapper{
        background-color: #5bc0de;
          }

        </style>
    </head>
    <body data-theme="royal">



<?php $this->load->view('includes/menu-top')?>


<?php $this->load->view('includes/pricing_plans')?>


<div id="wrapper" class="active">
  <div class="section section-breadcrumbs">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>This is profile page</h1>
            <h1>Hello <?php echo $_SESSION['username']?></h1>
          </div>
        </div>
      </div>
    </div>

		
</div>
<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

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





</script>


</html>