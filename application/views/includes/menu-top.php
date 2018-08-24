    <!-- Loading Spinner-->
    <div class="loader-wrapper">
      <div class="loader"><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span><span class="loader-block"></span>
      </div>
    </div>
    <!-- /Loading Spinner-->
<div class="navbar -dark -fixed-top -has-6-items">
      <div class="navbar-wrapper">
        <div class="sidebar-toggle hidden-lg-up hidden-xs-down" id="sidebar-toggle-navbar-brand" data-target="#sidebar"> <a href="javascript:void(0);"> <i class="fa fa-bars"> </i></a></div><a class="navbar-brand hidden-xs-down" href="<?php echo base_url('dashboard');?>"> 
          <h1 style="font-size:35px;letter-spacing:2px;">Profit Scalper</h1></a>
        <ul class="navbar-nav -right">
          <!-- <li class="sidebar-toggle hidden-sm-up" id="sidebar-toggle" data-target="#sidebar"> <a href="javascript:void(0);"> <i class="fa fa-bars"> </i></a></li> -->
          <!-- <li> <a class="has-morph-dropdown" href="#notifications-dropdown"><i class="pe pe-bell"></i><span class="navbar-item-count">2</span></a></li> -->
          <!-- <li> <a class="has-morph-dropdown" href="#applications-dropdown"><i class="pe pe-keypad"></i></a></li> -->
          <li class="navbar-profile"> <a class="has-morph-dropdown" href="#profile-dropdown"><i class="pe pe-user"></i></a></li>
          <!-- <li class="sidebar-toggle" id="sidebar-secondary-toggle" data-target="#sidebar-secondary"> <a href="javascript:void(0);"> <i class="fa fa-ellipsis-v"> </i></a></li> -->
        </ul>
        
        <?php if ($this->uri->segment(1) !=="schedule") { ?>
          <ul class="" style="list-style:none  ;  line-height: 2.5;">
<!--             <li class="d-inline-block px-3">
              <a href="<?php echo base_url('Dashboard');?>"> <i class="pe pe-home"></i><span> Dashboard</span></a>
            </li> -->
<!--             <li class="d-inline-block px-3">
              <a href="<?php echo base_url('schedule');?>"> <i class="fa fa-list"></i><span> Schedule List</span></a>
            </li>
 -->
             <!-- <li class="d-inline-block px-3" style="margin-top:9px;">
              <a href="<?php echo base_url('schedule/add');?>"> <i class="fa fa-plus"></i><span> Add Schedule</span></a>
            </li> -->
            <li class="d-inline-block pull-right">
              <a href="#" class=""><span class="h2 align-middle">Remaining Scans: <span class="ctn_credits"><?php echo number_format($this->session->user_credits)?></span></span><br>
               <h3 id="my_modal_trigger"data-toggle="modal" data-target="#myModal">Buy More</h3>
             </a>
             
            </li>
          </ul>
        <?php } else { ?>
        <!-- <ul class="pull-left" style="list-style:none  ;  line-height: 4.5;">

          <li class="d-inline-block px-3">
              <a href="<?php echo base_url('schedule');?>"> <i class="fa fa-list"></i><span> Schedule List</span></a>
            </li>
            <li class="d-inline-block px-3">
              <a href="<?php echo base_url('schedule/add');?>"> <i class="fa fa-plus"></i><span> Add Schedule</span></a>
            </li>
        </ul> -->
        
          <ul class="pull-right" style="list-style:none  ;  line-height: 2.5; margin-right:20px; ">
            
          <li class="d-inline-block pull-right">
            <a href="#" class=""><span class="h2 align-middle">Remaining Scans: <span class="ctn_credits"><?php echo number_format($this->session->user_credits)?></span></span></br>
              <h3 id="my_modal_trigger"data-toggle="modal" class="pulsate" data-target="#myModal">Buy More</h3>
            </a>
          
          </li>
        </ul>

            <?php } ?>
        <div class="morph-dropdown-wrapper -dark -right">
          <div class="morph-dropdown-list -links">
            <div class="morph-dropdown" id="profile-dropdown">
              <div class="morph-content -links">
                <div class="morph-profile">
                  <h4><?php echo $this->session->username ;?></h4>
                  <p>Senior Web Developer </p>
                </div>
                <ul class="morph-links">
                  <li><a href="#">My Profile</a></li>
                  <li><a href="<?php echo base_url('profile/edit');?>">Account Edit</a></li>
                </ul>
                <div class="_margin-top-1x"> <a href="<?php echo base_url('index.php/auth/do_logout')?>"class="btn -primary -block">Sign Out</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END NAVBAR -->