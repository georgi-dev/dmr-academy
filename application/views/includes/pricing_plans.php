<html>
<head>
    <title></title>
    <style type="text/css">

    .cnrflash
{
    /*Position correctly within container*/
    position: absolute;
    top: -9px;
    right: -8px;
    z-index: 1; /*Set overflow to hidden, to mask inner square*/
    overflow: hidden; /*Set size and add subtle rounding        to soften edges*/
    width: 58px;
    height: 58px;
    border-radius: 3px 5px 3px 0;
}
.cnrflash-inner
{
    /*Set position, make larger then            container and rotate 45 degrees*/
    position: absolute;
    bottom: 0;
    right: 0;
    width: 145px;
    height: 145px;
    -ms-transform: rotate(45deg); /* IE 9 */
    -o-transform: rotate(45deg); /* Opera */
    -moz-transform: rotate(45deg); /* Firefox */
    -webkit-transform: rotate(45deg); /* Safari and Chrome */
    -webkit-transform-origin: 100% 100%; /*Purely decorative effects to add texture and stuff*/ /* Safari and Chrome */
    -ms-transform-origin: 100% 100%;  /* IE 9 */
    -o-transform-origin: 100% 100%; /* Opera */
    -moz-transform-origin: 100% 100%; /* Firefox */
    background-image: linear-gradient(90deg, transparent 50%, rgba(255,255,255,.1) 50%), linear-gradient(0deg, transparent 0%, rgba(1,1,1,.2) 50%);
    background-size: 4px,auto, auto,auto;
    background-color: #aa0101;
    box-shadow: 0 3px 3px 0 rgba(1,1,1,.5), 0 1px 0 0 rgba(1,1,1,.5), inset 0 -1px 8px 0 rgba(255,255,255,.3), inset 0 -1px 0 0 rgba(255,255,255,.2);
}
.cnrflash-inner:before, .cnrflash-inner:after
{
    /*Use the border triangle trick to make                 it look like the ribbon wraps round it's                container*/
    content: " ";
    display: block;
    position: absolute;
    bottom: -16px;
    width: 0;
    height: 0;
    border: 8px solid #800000;
}
.cnrflash-inner:before
{
    left: 1px;
    border-bottom-color: transparent;
    border-right-color: transparent;
}
.cnrflash-inner:after
{
    right: 0;
    border-bottom-color: transparent;
    border-left-color: transparent;
}
.cnrflash-label
{
    /*Make the label look nice*/
    position: absolute;
    bottom: -5px;
    left: 32px;
    display: block;
    width: 100%;
    /* padding-bottom: 5px; */
    color: #fff;
    text-shadow: 0 1px 1px rgba(1,1,1,.8);
    font-size: -0.05em;
    font-weight: bold;
    font-size: 11px;
    text-align: center;
}

    </style>
</head>
<body>






<!-- Trigger the modal with a button -->

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog" >
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content" style="background:#fff;">
      
        <div class="container p-4">
            <div class="row">
                <div class="col -xs-12 col -md-4">
                    <div class="panel -primary text-center">
                        <div class="panel panel-heading">
                            <h4 class="panel -title">
                                Bronze</h4>
                        </div>
                        <div class="panel -body">
                            <div class="the-price">
                                <h1>
                                    $5</h1>
                                <small>1200 scans / 24h</small>
                                <input type="hidden" id="scans" value="1200">
                            </div>
                            <table class="table">
                               
                            </table>
                        </div>
                        <div class="panel -footer">
                            <a href="#" class="btn w-100 -success -xs" role="button" id="btn_paypal_trigger">Buy Now</a>
                            <!-- <div id="paypal-button" style="width: 50%"></div> -->
                            </div>
                    </div>
                </div>
                <div class="col -xs-12 col -md-4">
                    <div class="panel -success text-center">
                        <div class="cnrflash">
                            <div class="cnrflash-inner">
                                <span class="cnrflash-label">MOST
                                    <br>
                                    POPULAR</span>
                            </div>
                        </div>
                        <div class="panel panel-heading">
                            <h4 class="panel -title">
                                Silver</h4>
                        </div>
                        <div class="panel -body">
                            <div class="the-price">
                                <h1>
                                    $30</h1>
                                <small>20 000 scans / 24h</small>
                            </div>
                            <table class="table">
                               
                            </table>
                        </div>
                            <div class="panel -footer">
                                <a href="#" class="btn w-100 -success -xs" role="button">Buy Now</a>
                                <!-- <div id="paypal-button" style="width: 50%"></div> -->
                            </div>
                    </div>
                </div>
                   <div class="col -xs-12 col -md-4">
                    <div class="panel -info text-center">
                            <div class="panel panel-heading">
                            <h4 class="panel -title">
                                Gold</h4>
                        </div>
                        <div class="panel -body">
                            <div class="the-price">
                                <h1>
                                    $50</h1>
                                <small>40 000 scans / 24h</small>
                            </div>
                            <table class="table">
                               
                            </table>
                        </div>
                                       <div class="panel -footer">
                            <a href="#" class="btn w-100 -success -xs" role="button">Buy Now</a>
                            <!-- <div id="paypal-button" style="width: 50%"></div> -->
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <a href="#" type="button" class="btn -primary" data-dismiss="modal">Close</a> -->
      </div>
    </div>

  </div>
</div>

















</body>
</html>