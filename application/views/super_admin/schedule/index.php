
 <?php   $this->load->view('layout/superheader');   
            ?>          
      <!-- Page content -->
  <div id="page-content-wrapper">

        <div class="section section-breadcrumbs">
            <div class="container">
              <div class="row">
                
                  <h3>Schedule List</h3>
                  <?php echo date('Y-m-d H:i:s'); ?>
                  
                   
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
          <?php if($data){ ?>
          <table class="table">
            <thead class="thead-inverse">
              <tr>
                <th>User</th>
                <th>Ebay Country</th>
                <!--<th>Product Link</th>-->
                <th>Ebay Seller ID</th>
                <th>Search Keyword</th>
                <th>Item Type</th>
                <th>Last Updated On</th>
                <th>Action</th>
                
              </tr>
            </thead>

            <tbody>
            <?php
              
             

                  $state=""; $seller_name="";
                  foreach ($data as $row)
                  {
                    if($row->is_active==1)
                      $state = "";
                    if($row->is_active==2)
                      $state = "checked";

                    if($row->seller_name == "")
                      $seller_name = "--";
                    else
                      $seller_name = $row->seller_name;
                    if($row->keyword == "")
                      $keyword = "--";
                    else
                      $keyword = $row->keyword;

                    echo "<tr>
                        <td>".$row->user_name."</td>
                        <td>".$row->search_from."</td>
                        <td>".$seller_name."</td>
                        <td>".$keyword."</td>
                        <td>".$row->item."</td>
                        <td>".$row->updated_date."</td>
                        <td><label class='checkbox-inline'>
                        <input type='checkbox' id='".$row->user_sch_id."' name='state' value='".base_url('index.php/SuperAdmin/changeschedulestate/')."' $state data-toggle='toggle' onChange='sub_form(this);' data-on='Activate' data-off='Deativate'>
                        </label><a class='btn' href=".base_url('index.php/SuperAdmin/prolist/').$row->schedule_id."><i class='glyphicon glyphicon-eye-open'></i></a></td>
                        
                      </tr>"; 
                      
                  }    
              

            ?>
            </tbody>
          </table>

          <?php } else echo "<span class='alert alert-default'> No Schedule Available!! </span>"; ?>

      </div>
      </div>
        
      <div class="text-center">
        <ul class="pagination pagination-lg">
        
          <?php echo $links; ?>

        </ul>
      </div>        

  
  </div>
      

        


      
      

<script type="text/javascript">
  
  function sub_form(event)
  {
    var id = event.id;
    var url = event.value;
    
    window.location = url+id;
  }

</script>

<?php   $this->load->view('layout/superfooter');   
            ?>          

