          <div class="modal fade -dark show add_modal" id="animated-modal-zoomIn" data-animate-show="zoomIn" data-animate-hide="zoomOut" style="display: none;">
          
        <div class="modal-dialog  zoomIn  animated"> 
          <div class="modal-content -padded" style="background:#000;overflow:hidden;">

          
      
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