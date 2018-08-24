

 <?php   $this->load->view('layout/superheader');   
            ?> 
          
      <!-- Page content -->
  <div id="page-content-wrapper">
  <form>

      <!-- Navigation & Logo-->
        

      <div class="section section-breadcrumbs">
            <div class="container">
                <div class="row">
                    
                      <h1 style="color: #53555c; font-size: 30px;">Ebay Products</h1>
                       
                    </div>
                    
                </div>
            </div>

        <!-- Homepage Slider -->
        <div class="container" id="contentpart">
      <div class="row" style="padding-top: 10px">
        <div class="col-md-12">
          
        <div class="panel panel-primary" style="border-color:#bdc6c6;">
              <div class="panel-heading" style="background-color:#bdc6c6;border-color:#bdc6c6;"><h4 style="color:black;">Ebay Product Search Details</h4></div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-md-6">
                    <span id='label'><b>Ebay Country :</b> <?php if($msginfo['searchfrom']!="")
                      echo $msginfo['searchfrom']; ?></span><br>
                    <span id='label'><b>Searched Keyword :</b> <?php if($msginfo['keyword']!="")
                      echo $msginfo['keyword']; ?></span><br>
                    <span id='label'><b>Searched Seller :</b> <?php if($msginfo['seller']!="")
                      echo $msginfo['seller']; ?></span><br>
                    <span id='label'><b>Item Type:</b> <?php if($msginfo['item']!="")
                      echo $msginfo['item']; ?></span><br>
                  </div>

                  <div class="col-md-6">
                    <span id='label'><b>Ebay Page Result :</b> <?php if($msginfo['pageresult']!="")
                      echo $msginfo['pageresult']; ?></span><br>
                    <span id='label'><b>Scraped Result :</b> <?php if($msginfo['scrapeditem']!="")
                      echo $msginfo['scrapeditem']; ?></span><br>
                    <span id='label'><?php if($msginfo['search_link']!="")
                      {echo "<a target='_blank' href='".$msginfo['search_link']."'> <b>Ebay Search Page</b></a>";} ?> </span><br>
                   
                  </div>  
                </div>
              </div>
            </div>
          
        </div>
      </div>

      <div class="row">
          

          <table class="table">
            <thead class="thead-inverse">
              <tr>
                <th></th>
                <!--<th>Product Link</th>-->
                <th>Product Name</th>
                <th>Price</th>
                <th>SKU</th>
                <th>Sold Items</th>
                <th>Watchers</th>
                <th>Seller Top</th>
                <th>Seller Name</th>
                <th>Date of Sold</th>
                <th>EAN</th>
                <th>MPN</th>
                <th>UPC</th>
                <th>ISBN</th>
              </tr>
            </thead>

            <tbody>
            <?php
              
              if($data)
              {
                  foreach ($data as $row)
                  {
                    echo "<tr>
                        <td class='col-md-2'><a target='_blank' href='".$row->url."'><img width='100' height='100' class='img-responsive' src='".$row->pro_img."'></a></td>
                        <td class='col-md-1'><a target='_blank' href='".$row->url."'>".$row->pro_title."</a></td>
                        <td class='col-md-1'>".$row->pro_price."</td>
                        <td class='col-md-1'>".$row->item_id."</td>
                        <td class='col-md-1'>".$row->sold_count."</td>
                        <td class='col-md-1'>".$row->watchers."</td>
                        <td class='col-md-1'>".$row->is_seller_top."</td>
                        <td class='col-md-1'>".$row->saller."</td>
                        <td class='col-md-1'>".$row->sold_date."</td>
                        <td class='col-md-1'>".$row->ean."</td>
                        <td class='col-md-1'>".$row->mpn."</td>
                        <td class='col-md-1'>".$row->upc."</td>
                        <td class='col-md-1'>".$row->isbn."</td>
                      </tr>"; 
                      
                      
                  }    
              }

            ?>
            </tbody>
          </table>

            <div class="text-center">
              <ul class="pagination pagination-lg">
              
                <?php echo $links; ?>

              </ul>
            </div>
      </div>
      </div>
        
        

  </form>
  </div>
      
</div>  
        


      
      <!-- Footer -->
     

    <script>
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
$(document).ready(function(){
    var id = $('#schid').val();
    
    var asd = $(".text-center > ul > a").attr('href');

    
});

function loadDoc() {

  var xhttp = new XMLHttpRequest();
  var searchfrom=document.getElementById("searchfrom").value;
  var sellerid=document.getElementById("sellerid").value;
  var keyword=document.getElementById("keyword").value;
  var item=document.getElementById("item").value;
  sellerid=encodeURIComponent(sellerid);
  keyword=encodeURIComponent(keyword);
  item=encodeURIComponent(item);
  searchfrom=encodeURIComponent(searchfrom);

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     //alert(this.responseText);
      $("#msg").html(this.responseText);
      $("#msg").attr("class", "alert alert-success");
      $("#ermsg").focus();
    }
  };
  $('#buttons').hide();
  //$('#display').show();
  xhttp.open("POST", "<?php echo base_url(); ?>index.php/ebay/execute_scraper", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("sellerid="+sellerid+"&keyword="+keyword+"&item="+item+"&searchfrom="+searchfrom);
  setInterval(function(){location.reload();},5000);

}

function stopScript(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     //alert(this.responseText);
      $("#msg").html(this.responseText);
      $("#msg").attr("class", "alert alert-success");
      $("#ermsg").focus();
    }
  };

  xhttp.open("POST", "<?php echo base_url(); ?>index.php/ebay/stop_execution", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();
  setInterval(function(){location.reload();},1000);
}


</script>


<?php   $this->load->view('layout/superfooter');   
            ?>          
