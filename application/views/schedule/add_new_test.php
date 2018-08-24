<!DOCTYPE html>
<!--[if lt IE 7]>      
<html class="no-js lt-ie9 lt-ie8 lt-ie7">
  <![endif]-->
  <!--[if IE 7]>         
  <html class="no-js lt-ie9 lt-ie8">
    <![endif]-->
    <!--[if IE 8]>         
    <html class="no-js lt-ie9">
      <![endif]-->
      <!--[if gt IE 8]><!--> 
      <html class="no-js">
        <!--<![endif]-->
        <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
          <meta charset="UTF-8">
          <title>Ebay(USA) Product Details Scraper</title>
          <meta name="description" content="">
          <meta name="viewport" content="width=device-width">
          <script src="https://www.paypalobjects.com/api/checkout.js"></script>
          <?php $this->load->view('includes/header')?>
          <style type="text/css">

          .test-now {
               list-style-type:none;
               margin:25px 0 0 0;
               padding:0;
          }

          .test-now li {
               
               margin:0 5px 0 0;
              width:100px;
              height:40px;
              position:relative;
          }

          .test-now label, .test-now input {
              display:block;
              position:absolute;
              top:0;
              left:0;
              right:0;
              bottom:0;
          }

          .test-now input[type="radio"] {
              opacity:0.011;
              z-index:100;
          }

          .test-now input[type="radio"]:checked + label {
               background:blue;
              
              color:#fff;
          }

          .test-now label {
               padding:5px;
               border:1px solid #CCC; 
               cursor:pointer;
              z-index:90;
          }

          .test-now label:hover {
               background:darkblue;
          }





          </style>
        </head>
        <body data-theme="royal">


          <!--[if lt IE 7]>
          <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
          <![endif]-->
          <?php $this->load->view('includes/menu-top')?>
<!--           <div id="wrapper" class="content -dark -without-sidebar -collapsible">

            <div class="container-fluid">
              <div class="row">
                <div class="col -md-3"></div>
                <div class="page-heading -dark col -md-6">
                  <h1 style=" font-size: 30px;">Add Schedule</h1>
                </div>
              </div>
              <div class="col -md-3"></div>
            </div>
            
            <div class="container">
              <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                  <div class="basic-login">
                    <form role="form" action="" method="post">
                      <div class="content -dark -without-sidebar" style="min-height: 531px;">
                        <div class="container-fluid">
                          <div class="row">
                            
                            <div class="col -lg-12">
                              <?php if ($this->session->flashdata('message')) { ?>
              <h4 class="text-center alert alert -info"><?php echo $this->session->flashdata('message'); ?></h4>
              <?php }?>
                              <div class="panel -dark -focused">
                                <div class="panel-heading -dark -with-icon-lg">
                                  <i class="pe pe-pencil"></i>
                                  <h3>Profile Settings</h3>
                                  <span>Update Your Profile Info</span>
                                </div>
                                <div class="panel-body">
                                  
                                  <div class="form-group">
                                    <label for="sel1">Country:</label>
                                    <select name="searchfrom" class="form-control" id="searchfrom" required="">
                                      <option value="UK">ebay.co.uk(UK)</option>
                                      <option value="USA">ebay.com(USA)</option>
                                    </select>
                                    <div style="color:red;"><?php echo form_error('searchfrom')?form_error('searchfrom'):""; ?></div>
                                  </div>
                                  <div class="form-group">
                                    <label for="email">Search by "seller id":</label>
                                    <input type="text" name="sellerid" class="form-control" id="sellerid" placeholder="Enter Seller ID" value="">
                                    <div style="color:red;"><?php echo form_error('sellerid')?form_error('sellerid'):""; ?></div>
                                  </div>
                                  <div class="form-group">
                                    <label for="pwd">Search by "keyword:</label>
                                    <input type="text" name="keyword" class="form-control" id="keyword" placeholder="Enter Keywords" value="">
                                    <div style="color:red;"><?php echo form_error('keyword')?form_error('keyword'):""; ?></div>
                                  </div>
                                  <div class="form-group">
                                    <label for="sel1">Listing Type:</label>
                                    <select name="item" class="form-control" id="item" required="">

                                        <option value="Sold Items">Sold </option>
                                        <option value="All">Active</option>
                                    </select>
                                    <div style="color:red;"><?php echo form_error('item')?form_error('item'):""; ?></div>
                                  </div>
                                  <button type="submit" class="btn -primary -block" name="add">Add Schedule</button>
                                  
                                </div>
                              </div>
                              <p class="_text-center"><a class="_text-muted" href="https://www.profitscalper.org/index.php/auth/">Back to home page</a></p>
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
          </div> -->
          <!-- Footer -->
          <!-- TEST ADD SCHEDULE -->
          <?php if ($this->session->flashdata('items_cnt')) { ?>
              <h4 style="color:#fff;"class="text-center alert alert -info"><?php echo $this->session->flashdata('items_cnt'); ?></h4>
              <?php }?>
          <?php echo "div style=\"display:none\">".$this->session->flashdata('items_cnt')."</div>";?>

          <div class="modal fade -dark show" id="animated-modal-zoomIn" data-animate-show="zoomIn" data-animate-hide="zoomOut" style="display: none;">
          
        <div class="modal-dialog  zoomIn  animated"> 
          <div class="modal-content -padded" style="overflow:hidden;">
                <div class="paypal_" style="display:none;text-align:center;">
                  <form method="post">
                    <select id="select-amount" name="amount">

                      <option value="5.00">1200 scans $5.00 USD</option>
                      <option value="30.00">20000 scans $30.00 USD</option>
                      <option value="50.00">40000 scans $50.00 USD</option>
                      
                    </select>
                  </form>
                  <div id="paypal-button"></div>
                </div>
          
      
            <div class="modal-header">
              <button class="modal-close" data-dismiss="modal"><i class="pe pe-close"></i>
              </button>
            </div>
            <div class="modal-body _text-center">
              <div class="modal-icon"><i class="pe pe-paper-plane"></i>
              </div>
              <h1 class="phase-1 _margin-bottom-2x" style="position:relative;">Choose eBay region for scalping</h1>
              <h1 class="phase-2 _margin-bottom-2x" style="position:relative;top:-350px;">Search by</h1>
              <h1 class="phase-3 _margin-bottom-2x"style="position:relative;">Please type "keywords"</h1>
              <h1 class="phase-4 _margin-bottom-2x"style="position:relative;">Choice Item Listing type</h1>
              <h4 class="_margin-bottom-2x">
                <form id="myForm" method="post">
                  <ul class="phase-1 test-now">

                    <li class="d-inline-block">
                        <input type="radio" id="USA" name="searchfrom" value="USA"/>
                        <label style="padding-bottom: 32px;"class=" align-middle btn -info -xl -dark _margin-bottom-sm -block" for="USA">USA</label>
                    </li>
                    <li class="d-inline-block">
                        <input type="radio" id="UK" name="searchfrom" value="UK"/>
                        <label style="padding-bottom: 32px;"class=" btn -info -xl -dark _margin-bottom-sm -block" for="UK">UK</label>
                    </li>
                  </ul>
                  <!-- phase-2 -->
                  <ul class="phase-2 test-now">

                    <li class="d-inline-block">
                        <input type="radio" id="seller-id" name="search_by" value="sellerid"/>
                        <label style="padding:16px 16px 32px 16px;"class=" align-middle btn -info -xl -dark _margin-bottom-sm -block" for="seller-id">Seller ID</label>
                    </li>
                    <li class="d-inline-block">
                        <input type="radio" id="keyword2" name="search_by" value="keyword"/>
                        <label style="padding:16px 16px 32px 16px;"class=" btn -info -xl -dark _margin-bottom-sm -block" for="keyword2">Keyword</label>
                    </li></br>
                        <div class="form-group type_data m-10" style="margin-top:15px;">
                          
                          <input style="position:relative; display:none;" type="text" name="data" class="type_data form-control" id="keyword2" placeholder="" value="">
                          
                          
                        </div>
                  </ul>

                  <ul class="phase-4 test-now">

                    <li class="d-inline-block">
                        <input type="radio" id="Sold" name="item" value="Sold" />
                        <label style="padding-bottom: 32px;"class=" align-middle btn -info -xl -dark _margin-bottom-sm -block" for="Sold">Sold</label>
                    </li>
                    <li class="d-inline-block">
                        <input type="radio" id="Active" name="item" value="Active" />
                        <label style="padding-bottom: 32px;"class=" btn -info -xl -dark _margin-bottom-sm -block" for="Active">Active</label>
                    </li>

                  </ul>
                    <!-- <button type="submit" class="btn -primary -block" name="add">Scalp</button> -->

                </form>
              </br>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce ultrices euismod lobortis. 
              </p>
            </div>
            <div class="modal-footer _text-center"><a class="btn -dark _margin-right-1x" data-dismiss="modal">Cancel</a><a class="btn -light next-p" href="javascrip:0" data-phase="1">Next </a></div>
            <div class="modal-footer-scalp _text-center"><a class="w-100 -lg scalp btn -primary" name="add">Scalp</a></div>
            <div class="modal-back" style="position:absolute;top:10px;"><a href="javascrip:0" data-phase="2" class="btn -dark _margin-right-1x">Back</a></div>
         
          </div>
        </div>
      </div>
      <div style="height:300px;"></div>
            <div class="row">
              <div class="col -md-5"></div>
                <div  class=" text-center col -md-2">

                  <a class=" px-5 btn -primary -xl -dark _margin-bottom-sm -block" href="#" data-toggle="modal" data-target="#animated-modal-zoomIn"> Add Schedule</a>


                </div>
              <div class="col -md-5"></div>

            </div>
              


          <!--END TEST ADD SCHEDULE -->


          <?php $this->load->view('includes/footer')?>
        </body>
        <script>
          $(document).ready(function(){

            $('.type_data, h1.phase-3,.modal-back, h1.phase-4, ul.phase-2,ul.phase-3,ul.phase-4,.modal-footer-scalp,.modal-footer').hide();

            $('#myForm input').on('change', function() {
               
                if($('.next-p').attr('data-phase') === '1'){

                    if ($('input[name="searchfrom"]').is(':checked')) {
                      // $('h1.phase-1, ul.phase-1').hide(1300);
                      $('h1.phase-2').show();
                      $('#USA').parent().animate({right:300},800);
                      $('h1.phase-1').animate({bottom:300},800);
                      $('#UK').parent().animate({left:300},800);
                      $('h1.phase-1, ul.phase-1').hide();
                      $('h1.phase-2').animate({top:-5},800);
                      $('ul.phase-2,.modal-back').show('slow');

                   }/*finish phase 1*/

                }

                if ($('input[name="search_by"]').is(':checked')){
                  if ($('input[name="search_by"]:checked').val() == "sellerid") {
                    $('.type_data').attr('name','sellerid');
                    $('.type_data,.modal-footer').show();

                  }
                  else {
                    $('.type_data').attr('name','keyword');
                    $('.type_data,.modal-footer').show();

                  }
                    
                  //$('.type_data,.modal-footer').show();

                   $('.next-p').click(function(){

                      $('.next-p').attr('data-phase', '2');
                      $('h1.phase-2, ul.phase-2,.modal-footer').hide();
                      $('h1.phase-4,.modal-footer-scalp, ul.phase-4').show();
                     });
                }                

                if ($('input[name="item"]').is(':checked')) {
                // console.log($('input[name="item"]:checked', '#myForm').val());
                $('.modal-footer').hide();
                  $('.scalp').click(function(){
                    $('.modal').append("<b style='color:#fff;font-size:40px;'>Please wait...</b>");
                    var search_from,seller_name,keyword,item,world;

                    search_from = $('input[name="searchfrom"]').val();
                    seller_name = $('input[name="sellerid"]').val();
                    keyword     = $('input[name="keyword"]').val();
                    item        = $('input[name="item"]:checked', '#myForm').val();
                        if(seller_name=="" && keyword=="")
                            {
                              alert('Sellerid or keyword required!!');
                              return;
                            }

                    $.ajax({
                        type: "POST",
                        url: "<?php echo base_url()?>" + "Schedule/prepare_add/",
                        dataType: 'json',
                        data:{searchfrom:search_from,sellerid:seller_name,keyword:keyword,item:item},
                      success: function(response){
                        console.log(response.message);
                        if (response.message ==="Sellerid or keyword required!!") {alert('Sellerid or keyword required!!');return;}
                        if (response.message ==="Schedule already available!!") {alert('Schedule already available!!');return;}
                        if (response.message ==="Record Inserted Successfully") {alert('Record Inserted Successfully!!!');return;}
                        //if user exists and schedule not exists
                        if(confirm("Would you like to scrape this seller?"+'\n'+"It will cost " + response +" credits!")){
                          $('#myForm').append("<input type='hidden' name='cnt_items' value='" + response + "' >");
                          var cnt_items = $('input[name="cnt_items"]').val();
                          console.log(cnt_items);
                          $('.paypal_').show();


                          
                          paypal.Button.render({

                              env: 'sandbox', // sandbox | production

                              // PayPal Client IDs - replace with your own
                              // Create a PayPal app: https://developer.paypal.com/developer/applications/create
                              client: {
                                  sandbox:    'ASnCrjt6qo6XEu41-EiHp_oqAt9ygUh1VdsOmu9qgXZQU8lQuclZUkj9Ggj3u90MBzq9dcAToo5PVFgq',
                                  production: '<insert production client id>'
                              },

                              // Show the buyer a 'Pay Now' button in the checkout flow
                              commit: true,

                              // payment() is called when the button is clicked
                              payment: function(data, actions) {
                                var total = $('select#select-amount option:selected').val();
                                
                                  // Make a call to the REST api to create the payment
                                  return actions.payment.create({
                                      payment: {
                                          transactions: [
                                              {
                                                  amount: { total: total, currency: 'USD' }
                                              }
                                          ]
                                      }
                                  });
                              },

                              // onAuthorize() is called when the buyer approves the payment
                              onAuthorize: function(data, actions) {
                                console.log(data);
                                  // Make a call to the REST api to execute the payment
                                  return actions.payment.execute().then(function() {
                                      $.ajax({
                                         type: "POST",
                                         url: "<?php echo base_url()?>" + "Schedule/add_schedule_to_db/",
                                         dataType: 'json',
                                         data:{searchfrom:search_from,sellerid:seller_name,keyword:keyword,item:item,cnt_items:encodeURIComponent(cnt_items)},
                                          success: function(response){
                                             console.log(response);
                                              window.location.href = "http://www.profitscalper.org/Schedule";

                                          },
                                          error: function(error){
                                               console.log(error);
                                             } 
                                      });
                                  });
                              }

                          }, '#paypal-button');


                        }

                         },
                      error: function(error){
                        console.log(error);
                      } 
                    });
                  });
              
                }//finish phase 3
          //add schedule 3 steps
            });


            $('.modal-back a').click(function(){

              if($(this).attr('data-phase') === '2'){

                $('h1.phase-2,ul.phase-2').hide();//hide current h1 and ul
                 $('input[name="searchfrom"]').prop('checked',false);
                $('h1.phase-1,ul.phase-1').show();//show previos h1 and ul
                  $('#USA').parent().animate({right:0},800);
                  $('h1.phase-1').animate({bottom:0},800);
                  $('#UK').parent().animate({left:0},800);
                  $('input[name="search_by"]').prop('checked',false);

                  //$(this).attr('data-phase','3');
              }//ok

              // if($(this).attr('data-phase') === '3'){

              //   $('h1.phase-3,ul.phase-3').hide();//hide current h1 and ul
              //   $('h1.phase-1,ul.phase-1').hide();//hide current h1 and ul
              //    $('input[name="search_by"]').prop('checked',false);
              //   $('h1.phase-2,ul.phase-2').show();//show previos h1 and ul
                  
              //     // $('input[name="search_by"]').prop('checked',false);
              //     // $(this).attr('data-phase') === '3'
              // }//ok


            });


          

          










        });
      
        </script>
      </html>