
 <?php   $this->load->view('layout/superheader');   
            ?>   
      <!-- Page content -->
  <div id="page-content-wrapper">

        <div class="section section-breadcrumbs">
            <div class="container">
              <div class="row">
                
                  <h3>User List</h3>
                   
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
          
          <?php if($this->session->flashdata('message') != ""){ ?>
          <div class="alert alert-success">
          <?php echo $this->session->flashdata('message'); ?>
          </div>
          <?php } ?>
          <?php if($data) { ?>
          <table class="table">
            <thead class="thead-inverse">
              <tr>
                <th>User Name</th>
                <th>User Email</th>
                <th>Total Schedule</th>
                <th>Total Products</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
            <?php
                $cnt = count($data);
              if($cnt > 0)
              {
                  $state="";
                  for($i=0; $i<$cnt; $i++)
                  {
                    if($data[$i]['is_active']==1)
                      $state = "";
                    if($data[$i]['is_active']==2)
                      $state = "checked";
                    echo "<tr>
                        
                        <td>".$data[$i]['user_name']."</td>
                        <td>".$data[$i]['user_email']."</td>
                        <td>".$data[$i]['sche_cnt']."</td>
                        <td>".$data[$i]['pro_cnt']."</td>
                        <td><label class='checkbox-inline'>
                        <input type='checkbox' id='".$data[$i]['id']."' name='state' value='".base_url('index.php/SuperAdmin/changeuserstate/')."' $state data-toggle='toggle' onChange='sub_form(this);' data-on='Activate' data-off='Deativate'>
                        </label>
                        </td>
                      </tr>"; 
                      
                      
                  }    
              }

            ?>
            </tbody>
          </table>
          <?php } else  {
            echo "<span class='alert alert-default'> No Users Available!! </span>";
          } ?>

      </div>
      </div>
        
      <div class="text-center">
        <ul class="pagination pagination-lg">
          
          <?php if($data) echo $links; ?>

        </ul>
      </div>        

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

