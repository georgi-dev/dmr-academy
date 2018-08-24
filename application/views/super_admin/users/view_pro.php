 <?php   $this->load->view('layout/superheader');   
            ?>   
      <!-- Page content -->
  <div id="page-content-wrapper">
  <form>

        <div class="section section-breadcrumbs">
            <div class="container">
              <div class="row">
                
                  <h3>View all Products</h3>
                   
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
            <?php
              
              if($products)
              {
                ?>
          <table class="table">
            <thead class="thead-inverse">
              <tr>
                <th>Image</th>
                <th>Product Title</th>
                <th>Item ID</th>
                <th>EAN</th>
                <th>MPN</th>
                <th>Sold Count</th>
                <th>Watchers</th>
                <th>Is Saller Top</th>
                <th>Saller</th>
                <th>Sold Date</th>
              </tr>
            </thead>

            <tbody>
            <?php
                  
                  foreach ($products as $row)
                  {
                    
                    echo "<tr>
                        <td><a target='_blank' href='".$row->url."'><img class='img-responsive' src='".$row->pro_img."' height='220' width='200'></a></td>
                        <td><a target='_blank' href='".$row->url."'>".$row->pro_title."</a></td>
                        <td>".$row->item_id."</td>
                        <td>".$row->ean."</td>
                        <td>".$row->mpn."</td>
                        <td>".$row->sold_count."</td>
                        <td>".$row->watchers."</td>
                        <td>".$row->is_seller_top."</td>
                        <td>".$row->saller."</td>
                        <td>".$row->sold_date."</td>
                      </tr>"; 
                      
                      
                  }    
              

            ?>
            </tbody>
          </table>
          <?php } else echo "<span class='alert alert-default'> No Products Available!! </span>"; ?>
      </div>
      </div>
        
      <div class="text-center">
        <ul class="pagination pagination-lg">
          
          <?php if($products) echo $links; ?>

        </ul>
      </div>        

  </form>
  </div>
      
</div>  
        


      
  

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