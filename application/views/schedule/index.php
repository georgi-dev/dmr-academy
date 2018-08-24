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
// <!--         <script src="public/sweet_alert/dist/sweetalert2.min.js"></script>
// <link rel="stylesheet" href="public/sweet_alert/dist/sweetalert2.min.css">

// Include a polyfill for ES6 Promises (optional) for IE11 and Android browser
// <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"></script>
//         <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.6.8/sweetalert2.common.js"></script> -->
          <style type="text/css">
          /*.table td{padding:0 !important;}*/
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
          .btn_disabled{opacity:0.65;}
          .btn_disabled:hover{
            cursor: not-allowed;
          }

          #myForm button, .scalp{cursor:pointer;}

          @keyframes anim {
            0% { background-position: 0 0; }
            100% { background-position: 50px 50px; }
          }    

          .loading_bar {
            
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

          .loading_bar a {
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
          .n-border tr td{border:none;}

  .loading:after {
        content: ' .';
        width:10px;
        animation: dots 2s steps(5, end) infinite;}

      @keyframes dots {
        0%, 20% {
          color: rgba(0,0,0,0);
          text-shadow:
            .25em 0 0 rgba(0,0,0,0),
            .5em 0 0 rgba(0,0,0,0);}
        40% {
          color: white;
          text-shadow:
            .25em 0 0 rgba(0,0,0,0),
            .5em 0 0 rgba(0,0,0,0);}
        60% {
          text-shadow:
            .25em 0 0 white,
            .5em 0 0 rgba(0,0,0,0);}
        80%, 100% {
          text-shadow:
            .25em 0 0 white,
            .5em 0 0 white;
          }
          
          </style>
  </head>
  <body data-theme="royal">
     <!--[if lt IE 7]>
     <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
     <![endif]-->
     <?php
        if ($_SESSION) {


        }
        else{
        
          die();
        }
        ?>
     
<?php $this->load->view('includes/menu-top')?>
    <!-- END NAVBAR -->
        <?php //$this->load->view('includes/sidebar')?>
        <!-- Page content -->
        <div class="content -dark -without-sidebar ">
           <!-- Navigation & Logo-->
           <div class="container-fluid">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                <?php if ($this->session->flashdata('message')) { ?>
                
                <div class="alert -success">
                  <div class="alert-icon "><i class="fa fa-check-circle"></i></div><strong> Success! </strong><?php echo $this->session->flashdata('message'); ?>
                </div>
                <br>
                <?php } echo $this->session->flashdata('items_cnt');?>
                </div>
                <div class="col-md-1"></div>

            </div>
           <br>
<?php $this->load->view('includes/paypal')?>
<?php $this->load->view('includes/pricing_plans')?>



           <div class="row -dark" >

              <div class="col -xl-1"></div>
              <div class="col -xl-10">
                 <?php if($data){ ?>

                       <div class="row">
                         <div class="col -xl-2"></div>
                        <div class="col -xl-10">

                          <ul class="text-right" style="list-style:none;">

                            <li class="d-inline-block px-3">
                              <a href="" onclick="location.reload();"> <i class="fa fa-refresh" style="font-size:13px;"></i><span> Refresh list</span></a>
                            </li>
                            <li class="d-inline-block px-3">
                  <!-- <a class=" px-5 btn -primary -xl -dark _margin-bottom-sm -block" href="#" data-toggle="modal" data-target="#animated-modal-zoomIn"> Add Schedule</a> -->
                              <a class=" px-5 -primary -xl -dark _margin-bottom-sm -block" href="#" data-toggle="modal" data-target="#animated-modal-zoomIn"><i class="fa fa-plus" style="font-size:13px;"></i> Add Schedule</a>
                            </li>
                          </ul>

                         </div>
                        
                       </div>
 
                       <div class="panel -dark table-responsive">
                          
                          <table class="table -dark -striped">
                             
                             <thead>
                                <tr>
                                   <th class="text-center">Country</th>
                                   <th class="text-center">Search by "seller id"</th>
                                   <th class="text-center">Feedback score</th>
                                   <th class="text-center">Search by "keyword"</th>
                                   <th class="text-center">Listing Type</th>
                                   <th class="text-center">Progress</th>
                                   <th class="text-center">Action</th>
                                   <th class="text-center">Your comment</th>

                                </tr>
                             </thead>

                             <tbody>
                                <?php
                                // print_r($count_pro);


                                   if($data)
                                   {
                              
                                     $state=""; $seller_name="";
                                     $i = 0;
                                       foreach ($data as $row )
                                       {  
                                        //print_r("search_link => ".$row->search_link."</br>");
                                        //print_r("status => ".$row->status."</br>");
                                         if($row->is_active==1)
                                           $state = "Deactive";
                                         if($row->is_active==2)
                                           $state = "Active";
                                         if($row->seller_name == "")
                                           $seller_name = "--";
                                         else
                                           $seller_name = $row->seller_name;
                                         if($row->keyword == "")
                                           $keyword = "--";
                                         else
                                           $keyword = $row->keyword;


                                    //$percent = 100;
                                     $percent = ($count_pro[$i] / $row->scraped_result) * 100;
                                    // print_r($count_pro[1]);

                                         echo "<tr>

                                             <form>
                                             <td class='text-center align-middle search_from'>".$row->search_from."</td>
                                             <td class='text-center align-middle seller_name'>".$seller_name."</td>
                                             <td class='text-center align-middle seller_name'>".number_format($row->feedback_score)."</td>
                                             
                                             <td class='text-center align-middle keyword'>".$keyword."</td>
                                             <td class='text-center align-middle item'>".$row->item."</td>
                                             <td class='text-center align-middle -detailed'>
                                             <span class='d-inline-block product_details_count'>".$count_pro[$i].' /'."</span>
                                              <span class='d-inline-block scraped_result'>".urldecode($row->scraped_result)."</span>

                                              <div class=' progress -light' >
                                                <div class='bar -primary' style='width: ".(int)$percent."%;background: linear-gradient(to right, #5182b9, rgba(55, 111, 175, 0.8));border-bottom-color: #4577b3;'></div>
                                              </div>
                                              <span>".(int)$percent."%</span>
                                            </td>
                                             <td class='text-center align-middle'>
                                             <input type='hidden' class=\"sch_id\" value='".$row->schedule_id."'>";
                                             if ($row->scraped_result == 0) {
                                               $d = 'btn_disabled';
                                             }else{
                                              $d = "";
                                             }

                                             if(($row->search_link) && $row->status == 5){
                                              $run_display_property = "display:none;";
                                              $button_text = 'Run';
                                              $view_display_property = "display:inline-block;";
                                              //$del_display_property = "display:none;";
                                             }
                                             else if(is_null($row->search_link) && $row->status == 5){
                                              $run_display_property = "display:inline-block;";
                                              $button_text = 'Run';
                                              $view_display_property = "display:none;";
                                              //$del_display_property = "display:inline-block;";
                                             }
                
                                             else if(($row->search_link) && $row->status == 6){
                                              $run_display_property = "display:inline-block;";
                                              $button_text = 'Run';
                                              $view_display_property = "display:none;";
                                              //$del_display_property = "display:inline-block;";
                                             }
                                             if(($row->search_link !== null) && $row->status == 7){
                                            //print_r("dadawda");
                                              $run_display_property = "display:none;";
                                              $button_text = 'Update';
                                              $view_display_property = "display:inline-block;";
                                             }

                                            if(($row->search_link !== null) && $row->status == 8){
                                            //print_r("dadawda");
                                              $run_display_property = "display:inline-block;";
                                              $button_text = 'Update';
                                              $button_update_style = 'background: #053a82;color: #fff;';
                                              $view_display_property = "display:none;";
                                             }
     
                                              if ($d == 'btn_disabled') {
                                                echo "<a style='".$run_display_property."' href='#' title='Please wait...' class='fa fa-start btn -light -xs toggle_run_btn ".$d."'><span style='margin-left:5px;font-size:16px;'>".$button_text."</span></a>";
                                                
                                              }else{
                                                echo "<a style='".$run_display_property."".$button_update_style."' href='#' onclick='start(this);' class='fa fa-start btn -light -xs toggle_run_btn ".$d."'><span style='margin-left:5px;font-size:16px;'>".$button_text."</span></a>";

                                              }
                                                echo "<a style='".$view_display_property."' href=".base_url('index.php/Schedule/schedule_wise_pro/'.$row->user_sch_id)." class='fa fa-start btn -light -xs view_product_details_page'><span style='align-middle margin-left:5px;font-size:18px;font-family:Proxima Nova;font-weight:bold;'>View</span></a>
                                             
                                                  <a href=\"#\" class='fa fa-trash-o btn -danger -xs toggle_del_btn' onclick='delete_sch(".$row->user_sch_id.",this)'><span style='align-middle margin-left:5px;font-size:18px;font-family:Proxima Nova;font-weight:bold;'> Delete</span></a>";
                                             
                                                echo "</td>
                                             <td class=\"text-center\"><textarea></textarea></td>
                                             
                                             </form>
                                           </tr>"; 
                                           
                                           $i++;
                                       }
                                       echo '<div class="status alert -success" style="font-size:20px;display:none;">
                                        <div class="alert-icon "><i class="fa fa-check-circle"></i></div><strong > Success! </strong>Row was deleted succesfuly
                                        </div>    ';    
                                   }
                                   
                                   ?>
                             </tbody>
                 
                          </table>
                      
                       </div>
             
                    
                 <?php } else {
                             echo'<div class="row">
                                 <div class="col -xl-2"></div>
                                <div class="col -xl-10">

                                  <ul class="text-right" style="list-style:none;">

                                    <li class="d-inline-block px-3">
                                      <a href="" onclick="location.reload();"> <i class="fa fa-refresh" style="font-size:13px;"></i><span> Refresh list</span></a>
                                    </li>
                                    <li class="d-inline-block px-3">
                          <!-- <a class=" px-5 btn -primary -xl -dark _margin-bottom-sm -block" href="#" data-toggle="modal" data-target="#animated-modal-zoomIn"> Add Schedule</a> -->
                                      <a class=" px-5 -primary -xl -dark _margin-bottom-sm -block" href="#" data-toggle="modal" data-target="#animated-modal-zoomIn"><i class="fa fa-plus" style="font-size:13px;"></i> Add Schedule</a>
                                    </li>
                                  </ul>

                                 </div>
                        
                       </div>';

                  echo '<div class="panel -dark table-responsive"><table class="table -dark n-border">
                             
                             <thead>
                                <tr>
                                   <th class="text-center">Country</th>
                                   <th class="text-center">Search by "seller id"</th>
                                   <th class="text-center">Search by "keyword"</th>
                                   <th class="text-center">Listing Type</th>
                                   <th class="text-center">Progress</th>
                                   <th class="text-center">Action</th>
                                   <th class="text-center">Your comment</th>

                                </tr>
                             </thead>

                             <tbody>
                             <tr><td style="padding: 0.75rem;"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                             <tr><td style="padding: 0.75rem;"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                             <tr><td style="padding: 0.75rem;"><h4>No Schedule Available!!!</h4></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                             <tr><td style="padding: 0.75rem;"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                             <tr><td style="padding: 0.75rem;"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                             
                           </tbody></table>
                         </div>'; }?>
              </div>
              <div class="col -xl-1"></div>
           </div>
         </div> 
       </div>

<!--        <div class="text-center">
      <ul class="pagination pager -dark">
        <li class="pagination-item -active"><span class="page-link">1</span></li><li class="pagination-item"><a class="page-link" href="https://www.profitscalper.org/index.php/Schedule/schedule_wise_pro/335/2">2</a></li><li class="pagination-item"><a class="page-link" href="https://www.profitscalper.org/index.php/Schedule/schedule_wise_pro/335/2">Next</a></li>      </ul>
    </div> -->
           <div class="text-center">
              <ul class="pagination pager -dark">
                 <?php if($data){ echo $links; }?>
              </ul>
           </div>
      
    <?php $this->load->view('includes/footer')?>
    <script src="<?php echo base_url('public/app/add.js');?>"></script>
    <!--<script src="<?php echo base_url('public/app/schedule_index.js');?>"></script> -->

   </body>
   </html>
  <script>

      function start(item){
      var tr = $(item).parent().parent();


       var cnt_items = $(tr).find('.scraped_result').text();
       var sch_id    = $(tr).find('.sch_id').val();
     
      var btn_text = $(".toggle_run_btn").text();

      if (btn_text !== "Update") {

        ajax_obj.change_schedule_status(sch_id);
        ajax_obj.change_schedule_links_status(sch_id);
        ajax_obj.finish_scraper();

      }else{
        ajax_obj.change_schedule_status(sch_id);
        ajax_obj.change_schedule_links_status(sch_id);
      }
        //console.log(cnt_items);
    
      $(tr).find('.toggle_run_btn').hide();
      $(tr).find('.view_product_details_page').show();
      $(tr).find('.toggle_del_btn').show();
       

       alert(cnt_items);
      }


var ajax_obj = {

  finish_scraper:function() {

      $.ajax({
         type: "POST",
         url: "<?php echo base_url()?>" + "Users/finish_running_process/"
       }).
          done(function(response){
            console.log(response);
          

          }).
          fail(function(error){
               console.log(error);
          }); 
      

  },


  add_schedule_to_db:function(search_from,seller_name,keyword,item,cnt_items) {

      $.ajax({
         type: "POST",
         url: "<?php echo base_url()?>" + "Schedule/add_schedule_to_db/",
         dataType: 'json',
         data:{searchfrom:search_from,sellerid:seller_name,keyword:keyword,item:item,cnt_items:encodeURIComponent(cnt_items)}
       }).
          done(function(response){
            console.log(response);
          if (response.message ==="2Schedule Added Successfully") {alert('2Schedule Added Successfully');}
             console.log(response);
              window.location.href = "http://www.profitscalper.org/schedule";

          }).
          fail(function(error){
               console.log(error);
          }); 
      

  },

  change_schedule_status:function(sch_id) {

      $.ajax({
         type: "POST",
         url: "<?php echo base_url()?>" + "Schedule/change_schedule_status/",
         dataType: 'json',
         data:{sch_id:sch_id}
       }).
          done(function(response){
             console.log(response);

          }); 
      

  },
  change_schedule_links_status:function(sch_id) {

      $.ajax({
         type: "POST",
         url: "<?php echo base_url()?>" + "Schedule/change_schedule_links_status/",
         dataType: 'json',
         data:{sch_id:sch_id}
       }).
          done(function(response){
             console.log(response);

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

      function delete_sch(schedule_id,elm) {
        swal({
          title: '<span style="color:#fff;">Are you sure?</span>',
          text: 'You won\'t be able to revert this!',
          showCancelButton: true,
          background: 'rgb(38, 66, 99)',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(function () {
          $.ajax({
               type: "POST",
               url: "<?php echo base_url()?>" + "Schedule/delete_schedule/",
               dataType: 'json',
               data:{sch_id:schedule_id}
             }).
               done(function(response){
               $('.status').show();
               $('.status').fadeOut(2000);
               $(elm).parent().parent().hide();
               });
           
        })
        
      }    
     


     
     
  </script>
