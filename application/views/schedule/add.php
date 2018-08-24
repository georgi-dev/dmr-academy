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

<!-- Include a polyfill for ES6 Promises (optional) for IE11 and Android browser -->
                  <!-- // <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"></script> -->
                  <!-- //<script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.6.8/sweetalert2.common.js"></script> -->
          <style type="text/css">

          .test-now {
               list-style-type:none;
               margin:25px 0 0 0;
               padding:0;
          }

          .test-now li {
               
               margin:0 5px 0 0;
              
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


          #myForm button, .scalp{cursor:pointer;}

          @keyframes anim {
            0% { background-position: 0 0; }
            100% { background-position: 50px 50px; }
          }    

          .bar {
            
            margin: auto;
            top: 0; bottom: 0; left: 0; right: 0;
            width: 100%;
            
            overflow: hidden;
            background-size:100px 100px;
            background-image: linear-gradient(-45deg,
               #33c9ff 25%, #00b2f2 25%, 
               #00b2f2 50%, #33c9ff 50%,
               #33c9ff 75%, #00b2f2 75%);
            animation: anim 1s linear infinite;
          }

          .bar a {
            width: 100px;
            margin: 6px auto;
            text-align: center;
            color: white;
          }

          .pulsate {
              -webkit-animation: pulsate 3s ease-out;
              -webkit-animation-iteration-count: infinite; 
              opacity: 0.5;
          }
          @-webkit-keyframes pulsate {
              0% { 
                  opacity: 0.5;
              }
              50% { 
                  opacity: 1.0;
              }
              100% { 
                  opacity: 0.5;
              }
          }
#mybtn{max-width: 131px;}

          </style>
        </head>
        <body data-theme="royal">

          <!--[if lt IE 7]>
          <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
          <![endif]-->
          <?php $this->load->view('includes/menu-top')?>
<?php $this->load->view('includes/pricing_plans')?>
          <?php if ($this->session->flashdata('items_cnt')) { ?>
              <h4 style="color:#fff;"class="text-center alert alert -info"><?php echo $this->session->flashdata('items_cnt'); ?></h4>
              <?php }?>
          <!-- /**/<?php echo "div style=\"display:none\">".$this->session->flashdata('items_cnt')."</div>";?> -->

          <div class="modal fade -dark show add_modal" id="animated-modal-zoomIn" data-animate-show="zoomIn" data-animate-hide="zoomOut" style="display: none;">
          
        <div class="modal-dialog  zoomIn  animated"> 
          <div class="modal-content -padded" style="background:#000;overflow:hidden;">
                <div class="paypal_" style="display:none;text-align:center;">
                  <form method="post">
                    <select id="select-amount" name="amount">

                      <option value="5.00" data-scans="1200">1200 scans $5.00 USD</option>
                      <option value="30.00" data-scans="20000">20000 scans $30.00 USD</option>
                      <option value="50.00" data-scans="40000">40000 scans $50.00 USD</option>
                      
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

                    <li class="d-inline-block" title="USA" data-toggle="tooltip"data-placement="left">
                        <button class="align-middle btn -info -lg -dark _margin-bottom-sm -block" data-search-from="USA" id="search_from_usa">USA</button>
                    </li>
                    <li class="d-inline-block" title="United Kingdom" data-toggle="tooltip"data-placement="top">
                        <button class="btn -info -lg -dark _margin-bottom-sm -block" data-search-from="UK" id="search_from_uk">UK</button>
                    </li>
                    <li class="d-inline-block" title="Italy" data-toggle="tooltip"data-placement="top">
                        <button class="btn -info -lg -dark _margin-bottom-sm -block" data-search-from="IT" id="search_from_it">IT</button>
                    </li>
                     <li class="d-inline-block" title="Spain" data-toggle="tooltip"data-placement="right">
                        <button class="btn -info -lg -dark _margin-bottom-sm -block" data-search-from="ES" id="search_from_it">ES</button>
                    </li>
                    <input type="hidden" id="searchfrom" name="searchfrom" value=""/>
                  </ul>
                  <!-- phase-2 -->
                  <ul class="phase-2 test-now">

                    <li class="d-inline-block">
                        
                        <button class="align-middle text-center btn -info -lg -dark _margin-bottom-sm -block" data-search-by="sellerid" id="search_by_seller_id">Seller ID</button>
                   
                    </li>
                    <li class="d-inline-block">

                        <button class="align-middle btn -info -lg -dark _margin-bottom-sm -block" data-search-by="keyword" id="search_by_keyword">Keyword</button>
                   
                    </li></br>
                        <div class="form-group type_data m-10"  style="margin-top:25px;">
                          
                          <input style="position:relative; display:none;" type="text" name="data" class="type_data form-control" id="keyword2" placeholder="" value="">
                          
                          
                        </div>
                  </ul>

                  <ul class="phase-4 test-now">

                    <li class="d-inline-block">
                        
                        <button class=" align-middle btn -info -xl -dark _margin-bottom-sm -block" data-listing-type="Sold" id="item_listing_sold">Sold</button>
                    </li>
                    <li class="d-inline-block">
                        <button class=" btn -info -xl -dark _margin-bottom-sm -block" data-listing-type="Active" id="item_listing_active">Active</button>
                    </li>
                          <input type="hidden" name="item" class="item_type form-control" placeholder="" value="">

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
            <div class="modal-footer _text-center"><a class="btn -light next-p" href="javascrip:0" data-phase="1">Next </a></div>
            




            <div class=" modal-footer-scalp _text-center"><a class="w-100 -lg scalp p-3 btn -primary" name="add">Scalp</a></div>

            
<!--             <div class="progress">
  <div class="progress-bar progress-bar-striped active" role="progressbar"
  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%">
    40%
  </div>
</div> -->

            <div class="modal-back" style="position:absolute;top:10px; outline:0;   transform: rotate(32deg);"><a  style="text-decoration:none;outline:0;" href="javascrip:0" data-phase="1" class="fa fa-reply p-3 -dark _margin-right-1x"></a></div>
         
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
                  
          <script src="<?php echo base_url('public/app/add.js');?>"></script>
        </body>
        <script>
          

            

             // $('.type_data,.scalp, h1.phase-3,.modal-back, h1.phase-4, ul.phase-2,ul.phase-3,ul.phase-4,.modal-footer-scalp,.modal-footer').hide();

             //   $('button[id^="search_from"]').click(function(e){
             //    e.preventDefault();
             //    //$(this).css({'background':'red'});
             //    var searchfrom = $(this).data('search-from');
             //    console.log(searchfrom);
             //      $('#searchfrom').val(searchfrom);
             //      $('h1.phase-2').animate({top:-5},800);
             //      $('ul.phase-2,.modal-back').show('slow');
             //      $('h1.phase-4,.modal-footer-scalp, ul.phase-4,h1.phase-1, ul.phase-1,.type_data,.modal-footer').hide();
             //      //$('.modal-back a').attr('data-phase',"2");
             //      if ($('.modal-back a').attr('data-phase',"1")) {
             //        $('h1.phase-2,ul.phase-2').show();
             //        $('.modal-back a').attr('data-phase',"2");
             //        $('.modal-back a').show();
             //      }
             //   }); // end button

             //   $('button[id^="search_by"]').click(function(e){
             //    e.preventDefault();
                
             //    if ($(this).attr('id') == 'search_by_seller_id') {
             //      $(this).css({'background':'darkblue'});
             //      $('#search_by_keyword').css({'background':'gray'});
             //    }
             //    if ($(this).attr('id') == 'search_by_keyword') {
             //      $(this).css({'background':'darkblue'});
             //      $('#search_by_seller_id').css({'background':'gray'});
             //    }
             //    var search_by = $(this).data("search-by");

             //    console.log(search_by);
             //      $('.type_data').attr('name', search_by);
             //      $('.type_data,.modal-footer').show();
             //      $('.next-p').show();
             //         $('.next-p').click(function(){

                      
             //          $('h1.phase-2, ul.phase-2,.modal-footer').hide();
             //          $('h1.phase-4,.modal-footer-scalp, ul.phase-4').show();
             //          $('.modal-back a').attr('data-phase',"4");
             //         });
             //   });// end button


             //    $('button[id^="item_listing"]').click(function(e){
             //    e.preventDefault();

             //    if ($(this).attr('id') == 'item_listing_sold') {
             //      $(this).css({'background':'darkblue'});
             //      $('#item_listing_active').css({'background':'gray'});
             //    }
             //    if ($(this).attr('id') == 'item_listing_active') {
             //      $(this).css({'background':'darkblue'});
             //      $('#item_listing_sold').css({'background':'gray'});
             //    }

             //    var listing_type = $(this).data("listing-type");

             //    console.log(listing_type);
             //      $('.item_type').val(listing_type);
             //      $('.scalp').show();
             //      $('.modal-footer').hide();
             //      $('.scalp').click(function(){
             //        $(this).text('Checking...');
             //        $('.scalp').parent().addClass('bar');
             //        // if ($('.please_wait').length) {

             //        // }else{
             //        //   $('.modal').append("<b class='please_wait' style='text-align:center;color:#fff;font-size:40px;'>Please wait...</b>");
             //        // }

             //        var search_from,seller_name,keyword,item,world;

             //          search_from = $('input[name="searchfrom"]').val();
             //          seller_name = $('input[name="sellerid"]').val();
             //          keyword     = $('input[name="keyword"]').val();
             //          item        = $('input[name="item"]').val();
             //          console.log(item);
             //            if(seller_name=="" && keyword=="") {
             //              swal(
             //                'Oops...',
             //                'Sellerid or keyword required!!',
             //                'warning'
             //              )
             //              return;
             //            }

             //        $.ajax({ //Start ajax prepare_add
             //            type: "POST",
             //            url: "<?php echo base_url()?>" + "Schedule/prepare_add/",
             //            dataType: 'json',
             //            data:{searchfrom:search_from,sellerid:seller_name,keyword:keyword,item:item},
             //          success: function(response){
             //            //var credits = response;
             //            console.log(response);
             //            $('.scalp').text('Ready');
             //            $('.scalp').parent().removeClass('bar');
             //            if (response.message =="Sellerid or keyword required!!") {
             //              swal(
             //                    'Oops...',
             //                    'Sellerid or keyword required!!',
             //                    'warning'
             //                  )
             //              $('.scalp').text('Scalp');
             //              return;
             //            }
             //            if (response.message ==="Schedule already available!!") {
             //              swal(
             //                    'Oops...',
             //                    'Schedule already available!!',
             //                    'warning'
             //                  )
             //              $('.scalp').text('Scalp');
             //              return;
             //            }

             //            swal({
             //              title: 'Would you like to scrape this seller?',
             //              // text: "It will cost ~" + credits +" credits!",
             //              showCancelButton: true,
             //              confirmButtonColor: '#3085d6',
             //              cancelButtonColor: '#d33',
             //              confirmButtonText: 'Yes, scalp it!'
             //            }).then(function () {

             //              $.ajax({ //Start ajax prepare_add
             //                type: "POST",
             //                url: "<?php echo base_url()?>" + "Schedule/insert_schedule/",
             //                dataType: 'json',
             //                data:{searchfrom:search_from,sellerid:seller_name,keyword:keyword,item:item},
             //                  success: function(response){
             //                    alert(response.message);
             //                    window.location.href = "http://www.profitscalper.org/schedule";

             //                  },
             //                  error: function(){

             //                  } 
             //              });
                         
                              
             //            })

             //             },
             //          error: function(error){
             //            console.log(error);
             //          } 
             //        });
             //      });

             //   });
                

             //    /*MODAL BACK */
             //   $('.modal-back a').click(function(e){
             //      e.preventDefault();
             //      var current = $(this).attr('data-phase');
             //      console.log(current);

             //      if(current == '2'){
             //        $('h1.phase-2,ul.phase-2').hide();
             //        $('h1.phase-1,ul.phase-1').show();
             //        $('#USA').animate({right:0},800);
             //        $('h1.phase-1').animate({bottom:0},800);
             //        $('#UK').animate({left:0},800);
             //         $('.modal-back a').attr('data-phase',"1");
             //        $('.modal-back a').hide();
             //        $('.next-p').hide();
             //      }//ok

             //      if(current == '4'){
             //        $('h1.phase-4,ul.phase-4').hide();
             //        $('h1.phase-1, ul.phase-1').hide();
             //        $('h1.phase-2,ul.phase-2').show();
             //        $('h1.phase-2').animate({top:-5},800);
             //        $('ul.phase-2,.modal-back').show('slow');
             //        $('.modal-back a').attr('data-phase',"2");
             //        $('h1.phase-4,.modal-footer-scalp, ul.phase-4').hide();
             //        $('.type_data,.modal-footer').hide();
             //      }//ok

             //  });


var ajax_obj = {



  add_schedule_to_db:function(search_from,seller_name,keyword,item,cnt_items) {

      $.ajax({
         type: "POST",
         url: "<?php echo base_url()?>" + "Schedule/add_schedule_to_db/",
         dataType: 'json',
         data:{searchfrom:search_from,sellerid:seller_name,keyword:keyword,item:item,cnt_items:encodeURIComponent(cnt_items)},
          success: function(response){
            console.log(response);
          if (response.message ==="2Schedule Added Successfully") {alert('2Schedule Added Successfully');}
             console.log(response);
              window.location.href = "http://www.profitscalper.org/schedule";

          },
          error: function(error){
               console.log(error);
             } 
      });

  },

  user_balance_credits:function(credits,scans) {

      $.ajax({
         type: "POST",
         url: "<?php echo base_url()?>" + "Schedule/user_balance_credits/",
         dataType: 'json',
         data:{credits:credits,scans:scans},
         success: function(response){
            console.log(response);
         },
          error: function(error){
               console.log(error);
             } 
      });

  }


}


        
        </script>
      </html>