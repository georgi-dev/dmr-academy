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
        
        <?php
          if($state==1)
          {
           echo "<meta http-equiv='refresh' content='10' >";
          }

        ?>
  <?php $this->load->view('includes/header');error_reporting(0)?>
      <style type="text/css">

   
      </style>
    <link href="<?php echo base_url('public/app_css/ebay_index.css'); ?>" rel="stylesheet" type="text/css"/>

    </head>
    <body data-theme="royal">
  <!--[if lt IE 7]>
  <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
  <![endif]-->
  <?php $this->load->view('includes/menu-top')?>
  
  <div class="cont" style="height:1000px;">
  
  <div id="page-content-wrapper"  style="height:70px;" >
    <form>

      <div class="-dark -without-sidebar -collapsible" style="max-height: 200px; margin-top:70px;">

        <div class="contentpart" style="color:#fff;">
          <div>
            <div class="col -md-12">
              <div class="panel panel-primary" style="border-color:#bdc6c6;">
                <div class="panel-body">
                  <div class="row">
                    <div class="col -md-6">
                      <?php 

                      //print_r($msginfo);

                      ?>
                      <input type="hidden" id ="search_from" value="<?php echo $msginfo['searchfrom'];?>">
                      <span id='label'><b>Region : </b> <?php if($msginfo['searchfrom']!="")
                        echo $msginfo['searchfrom']; ?></span><br>
                      <?php if ($msginfo['keyword']!=""): ?>
                      <span id='label'><b>Searched Keyword : </b><?php echo $msginfo['keyword']; ?></span><br>
                      <?php endif ?>
                     
                      <?php if ($msginfo['seller']!=""){

                        if($msginfo['searchfrom'] == "USA"){
                          $region = 'com';
                        }
                        if($msginfo['searchfrom'] == "UK"){
                          $region = 'co.uk';
                        }
                        echo "<span id='label'><b>Seller : </b><a href=\"https://www.ebay.".$region."/usr/".$msginfo['seller']." \" target=\"_blank\">".$msginfo['seller']."</a></span>";

                        echo "<span title=\"".$msginfo['seller']."'s feedback score is ".$msginfo['feedback_score']."\">(".$msginfo['feedback_score']."<i style=\"color:mediumpurple;\"class=\"fa fa-star\"></i>)</span><br>";

                      }
                      ?>
                      <?php if ($msginfo['item']!=""): ?>
                      <span id='label'><b>Type : </em></b><?php echo $msginfo['item']; ?></span><br>
                    </div>
                    <?php endif ?>
                   
                    <div class="col -md-6">

                      <span id='label' class="scalped_results" data-scalped-results="<?php echo $msginfo['scrapeditem'];?>"><b>Scalped Result :</b> <?php if($msginfo['scrapeditem']!="")
                        echo $msginfo['scrapeditem']; ?></span><br>
                        <span id='label'><b>Found Identifiers on this page: <span id="found_ids"></span></b></span><br>
                        <!-- <button type="button" id='search_test' class="btn btn -primary btn -sm">search_test</button>  -->
                        <?php
                          if ($msginfo['searchfrom'] =='UK') {

                            echo '<button type="button" id="search_amazon" class="btn btn -primary btn -sm" style="color: #dca846;font-weight: bold; background: #3b793b;border: 1px solid #1a231a;cursor: pointer;">Amazon Search</button>'; 
                          }
                          else{
                            echo '<button type="button" id="search_amazon" class="btn btn -primary btn -sm" style="color:yellow;font-weight:bold;background:green;border:1px solid #000;cursor:pointer;">Amazon Search</button> 
                                 <button type="button" id="search_walmart" class="btn btn -primary btn -sm" style="cursor:pointer;">Walmart Search</button>';
                          }
                        ?>
                      </br>
                      <?php if ($msginfo['item'] == "Sold"): ?>

                        <button type="button" id="get_items_for_7_days" data-sold-days="7" class="btn btn -primary btn -sm" style="color:#f3f3f3;font-weight:bold;background:#20364f;border:1px solid #000;cursor:pointer;">Sold items for last 7 days</button>

                        <button type="button" id="get_items_for_14_days" data-sold-days="14" class="btn btn -primary btn -sm" style="color:#f3f3f3;font-weight:bold;background:#20364f;border:1px solid #000;cursor:pointer;">Sold items for last 14 days</button>

                        <button type="button" id="get_items_for_30_days" data-sold-days="30" class="btn btn -primary btn -sm" style="color:#f3f3f3;font-weight:bold;background:#20364f;border:1px solid #000;cursor:pointer;">Sold items for last 30 days</button>
                        
                      <?php endif ?>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </div> 
    <div style="height:60px;"></div>
    <div style="color:#fff;margin-left:30px;margin-top:20px;">
      Show
      <select  style='background: #1f3249;color: #fff;' id="show_entries">
        <option>25</option>
        <option>50</option>
        <option selected="selected">100</option>
      </select> entries
    </div>
   <!-- // <div class="loader_img" style="display:block;z-index:2222;color:#fff;"><img src="http://www.imagenestop.com/gif2/gif-loading-62051.jpg" width="100" height="100"></div> -->
    <div class="content panel -dark sticked" style='margin-top:15px;'>
    <input type="hidden" name="schid" id="schid" value="<?php echo $id; ?>">

    <div id="table-wrapper" >
      <div id="table-scroll" >
        <?php if($data) { ?>
        <table class="table -dark table-responsive -striped col -md-12" id="tableResults" style="    height: 33vw;
display:none;padding:0;margin-top: -21px;">
          <thead>
            <tr>
              <th style="width:100px;"><span style='    margin-left: 1.5%;' class="stuck-th">Image</span></th>
              <th><span class="stuck-th" style='margin-left: 10px;' >Ebay item title</span></th>
              <th style="width:120px;"><span class="stuck-th" style="margin-left: 2%;">Price
                <span class="fa fa-fw fa-sort-asc" id="order-by" style="display:none;cursor:pointer;" data-order-by="price_r" data-sort-by="asc"></span>
                <span class="fa fa-fw fa-sort-desc" id="order-by" style="cursor:pointer;" data-order-by="price_r" data-sort-by="desc"></span>

              </span></th>
              <th  style="width:120px;"><span class="stuck-th" style="margin-left: 1%;">Sold Items<span class="fa fa-fw fa-sort-asc" id="order-by" style="display:none;cursor:pointer;" data-order-by="sold_count" data-sort-by="asc"></span>
                <span class="fa fa-fw fa-sort-desc" id="order-by" style="cursor:pointer;" data-order-by="sold_count" data-sort-by="desc"></span>
                
              </span></th>
              <th style="width:80px;"><span title="Watchers" data-toggle="tooltip" data-placement="top" class="align-middle stuck-th fa fa-eye" style="margin-left:1.3%;line-height: 24px;">

                <span class="fa fa-fw fa-sort-asc" id="order-by" style="display:none;cursor:pointer;" data-order-by="watchers" data-sort-by="asc"></span>
                <span class="fa fa-fw fa-sort-desc" id="order-by" style="cursor:pointer;" data-order-by="watchers" data-sort-by="desc"></span>

              </span></th>
              <th style="margin-left:50px;">
                <span class="stuck-th identifiers" style="margin-left: 0.7%">Found Identifiers
        
                </span>
                
               </th>
              <?php
                if ($msginfo['searchfrom'] === "UK" || $msginfo['searchfrom'] === "IT" || $msginfo['searchfrom'] === "ES") {
              ?>
                  
                      <th style="margin-left:50px;" class="Identifiers">
                        <span class="stuck-th" style="margin-left: 0.5%;">Profit<span class="fa fa-fw fa-sort-asc" id="order-by" style="display:none;cursor:pointer;" data-order-by="amazon_profit" data-sort-by="asc"></span>
                        <span class="fa fa-fw fa-sort-desc" id="order-by" style="cursor:pointer;" data-order-by="amazon_profit" data-sort-by="desc"></span>
                      </th>
              <?php }
                else {
              ?>    
                      <th style="margin-left:50px;">
                        <span class="stuck-th profit" style="margin-left: 3.2%;">Profit
                          <ul class="amazon_walmart_sorting">
                            <li class="text-center">Sort by </li>
                            <li><a href="#" ><span id="order_by_profit" data-order-by="amazon_profit" data-sort-by="desc">Amazon  profit (high - low)</span></a></li>
                            <li><a href="#" ><span id="order_by_profit" data-order-by="amazon_profit" data-sort-by="asc">Amazon profit (low - high)</span></a></li>
                            <li><a href="#" ><span id="order_by_profit" data-order-by="walmart_profit" data-sort-by="desc">Walmart profit (high - low)</span></a></li>
                            <li><a href="#" ><span id="order_by_profit" data-order-by="walmart_profit" data-sort-by="asc">Walmart profit (low - high)</span></a></li>
                          </ul>
                        </span>
                        <small style="position:absolute;margin-left:1.5%;margin-top:-5px;">Amazon | Walmart</small>
                       </th>
              <?php } ?>  
              
               
            </tr>
          </thead>
          <tbody>
        <?php } else { ?>

          <h1 class="loading">No results yet</h1>

        <?php  } ?>

          </tbody>
        </table>
      </div>
    </div>

</br>
<div class="clearfix"></div>
    <div class="text-center">
      <ul class="pagination pager -dark test_pagi">
        <!-- /**/<?php echo $links; ?> -->
      </ul>
    </div>
    <!-- <div class="test_pagi"></div> -->

  </div>
  </div>
<?php $this->load->view('html_templates/my_modal')?>
<!-- <?php $this->load->view('html_templates/ebay_modal')?> -->
<?php $this->load->view('html_templates/compare_modal')?>
  <!-- Footer -->
  <?php $this->load->view('includes/footer')?>

  <script src="<?php echo base_url('public/app/search_amazon.js');?>" type="text/javascript"></script>
  <script src="<?php echo base_url('public/app/search_walmart.js');?>" type="text/javascript"></script>
  <script src="<?php echo base_url('public/app_js_r/ebay_index_r.js');?>" type="text/javascript"></script>
  <script src="<?php echo base_url('public/app_js_f_n/ebay_index_js_f.js');?>" type="text/javascript"></script>

</body>



</html>