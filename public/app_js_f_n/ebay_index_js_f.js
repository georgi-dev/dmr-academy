 function show_pagination(){
    var pathArray = window.location.pathname.split('/');

    var sch_id = pathArray[4];
    var total = $(".scalped_results").data('scalped-results');
    var start = 0;
    var limit = $('#show_entries option:selected').val();
    var links = Math.ceil(total/limit);
    var ulSrc = "";

    //console.log(links);
    for (var i = 1; i < links+1; i++) {
var hash = "#" + i;

      ulSrc += "<li class=\"pagination-item\"><a class=\"page-link\" href=\"javascript:;\"onclick=\"get_all_product_order_by_sort_by("+limit+",'upc','desc',"+sch_id+","+start+")\">"+i+"</a></li>";
      start = start + (+limit);
    }

    $('.test_pagi').html(ulSrc);
  }

  function change_pagination(total,sch_id, start, limit){
    
    if (total == '') {
      var total = $(".scalped_results").data('scalped-results');

    }
    
    var links = Math.ceil(total/limit);
    var ulSrc = "";

    //console.log(links);
    for (var i = 1; i < links+1; i++) {

    var hash = "#" + i;
         ulSrc += "<li class=\"pagination-item\"><a class=\"page-link\" href="+hash+" onclick=\"get_all_product_order_by_sort_by("+limit+",'upc','desc',"+sch_id+","+start+")\">"+i+"</a></li>";
        start = start + (+limit);
        
    }

    $('.test_pagi').html(ulSrc);
  }

  function get_all_product_order_by_sort_by(limit,order_by,sort_by,sch_id,start,sold_days){

     

    $('.loader_img').show();
      
     
      var url = "../../Search/test/" + sch_id + " ";
      
        $("#tableResults").addClass("loading");

    return $.ajax({
      type: "POST",
      url: url,
      dataType: 'json',
      data: {limit:limit,sort_by:sort_by,order_by:order_by,sch_id_:sch_id,start:start,sold_days:sold_days},
    }).done(function(response){
      console.log(response);
        if (response.data == "error"){
                alert("There are no items");return;

        }
       
    var product_details = response.data;

    tblSrc = "";
    var search_from = $('#search_from').val();
    var cnt_identifiers = 0;
     
    for (i = 0;i < product_details.length;i++) {
      var d = product_details[i];    
      tblSrc += "<tr  style='font-size:13px;'>";
        
      tblSrc += "<td class='d-none currency'>"+d.currency+"</td>";
      tblSrc += "<td class='d-none rating'>"+d.walmart_rating+"</td>";
      tblSrc += "<td class='d-none'><input type='hidden' class='item_id' data-item-id='" +d.item_id + "'/></td>";
      tblSrc += "<td class='text-center align-middle'><a href='#' onclick='modal_img(this);' class=\"ebay_img\"><img width='70' height='58' class='img-responsive' src='"+d.pro_img +"'><div class=\"show_tumb\" style='display:none;width:150px;height:150px;background:url("+ d.pro_img+"); background-size:100%;position: absolute;border: 0.5px solid #fff;top: -27px;left: 350px; z-index:1;'></div></a></td>"
      tblSrc += "<td style='width:20%;' class='align-middle'><b><a target='_blank' class=\"ebay_title\" href='"+d.url +"'>"+ d.pro_title +"</a></b></td>"
      tblSrc += "<td class='text-center align-middle pro_price' style='font-size:1.2em;'>"+ d.pro_price.replace('US','') +"</td>"
      tblSrc += "<td class='text-center align-middle' style='font-size:1.2em;'><a target='_blank' href='http://offer.ebay.co.uk/ws/eBayISAPI.dll?ViewBidsLogin&item="+d.item_id+"&rt=nc&_trksid=p2047675.l2564'>"+addCommas(d.sold_count)+"</a></td>"
      tblSrc += "<td class='text-center align-middle' style='font-size:1.2em;'>"+addCommas(d.watchers)+"</td>"

      tblSrc += "<td class='align-middle'>";
        var arr = ["Does not apply","Non applicabile","No aplicable","Nicht zutreffend"];
        

        if (d.ean.toUpperCase() !== arr[0].toUpperCase() && d.ean.toUpperCase() !== arr[1].toUpperCase() && d.ean.toUpperCase() !== arr[2].toUpperCase() && d.ean.toUpperCase() !== arr[3].toUpperCase()&& d.ean !== "") {

          tblSrc += "<b>EAN : </b><span>"+ d.ean+"</span></br>";
          cnt_identifiers++;
        }
                  
        if (d.mpn.toUpperCase() !== arr[0].toUpperCase() && d.mpn.toUpperCase() !== arr[1].toUpperCase() && d.mpn.toUpperCase() !== arr[2].toUpperCase() && d.mpn.toUpperCase() !== arr[3].toUpperCase() && d.mpn !== "") {
          tblSrc +="<b>MPN : </b><span>"+d.mpn+"</span></br>";
          
        }
                 
        if (d.upc.toUpperCase() !== arr[0].toUpperCase() && d.upc.toUpperCase() !== arr[1].toUpperCase() && d.upc.toUpperCase() !== arr[2].toUpperCase() && d.upc.toUpperCase() !== arr[3].toUpperCase()&& d.upc !== "") {
          tblSrc +="<b>UPC : </b><span class=\"upc\">"+d.upc+"</span></br>";
          
          cnt_identifiers++;
        }
                  
        if (d.isbn.toUpperCase() !== "Does not apply".toUpperCase() && d.isbn.toUpperCase() !== arr[1].toUpperCase() && d.isbn.toUpperCase() !== arr[2].toUpperCase() && d.isbn.toUpperCase() !== arr[3].toUpperCase() && d.isbn !== ""){
          tblSrc += "<b>ISBN : </b><span>"+d.isbn+"</span></br>";
          
        }

        if (search_from === "UK" || search_from === "IT" || search_from === "ES") {

          if (d.ean !== "") {
          console.log(d.amazon_price);
            if (d.amazon_price !== "") {
              
              tblSrc += '<td class="d-none amazon_item_data" data-amazon-price="'+d.amazon_price+'" data-amazon-link="'+d.amazon_link+'" data-amazon-title="'+d.amazon_title+'" data-amazon-img-url="'+d.amazon_img_url+'"></td>';
            }else{
             // tblSrc += "<td style=\"color:#fff;\"class='align-middle'><span class='text-danger'>Not found</span></td>";

            }

          }
          if (d.amazon_profit > 0 || d.amazon_profit < 0 ) {

              var amazon_color = d.amazon_profit < 0 ? "#da0a0a;" : "#13df13;";
              var amazon_profit = Math.abs(d.amazon_profit) == 0.00 ? "--" : Math.abs(d.amazon_profit);

            if (amazon_profit == '--') {
              var amazon_currency = "";
              amazon_color = 'red;';
            }
            else {
              var amazon_currency = d.currency;
            }
            
            tblSrc += "<td class=\"align-middle profit\">\
                         <div  class=\"suppliers\" style='text-align:center;'>\
                           <table class=\"table-bordered\">\
                              <tbody onmouseover=\"show_icons(this,'"+amazon_profit+"','"+walmart_profit+"');\" onmouseout=\"show_icons(this,'"+amazon_profit+"','"+walmart_profit+"');\">\
                               <tr><td class='amazon_profit'style=\"padding: 18px 0 !important;min-width:60px;font-weight:bold;color:"+amazon_color+"\">"+amazon_currency+" "+amazon_profit+"</td></tr>\
                                <tr>";
                      tblSrc +=   "<td class='amazon_icons' style=\"position:relative;left:0px;display:none;padding: 10px 0 !important;min-width:60px;font-weight:bold;\">\
                                    <a href='#' onclick='show_amazon(this);' class='mr-3' title='Amazon Product'  data-suplier-name='Amazon'><i class=\" fa fa-eye\"></i></a>\
                                    <a href='#' onclick='compare_modal(this);' data-suplier-name='Amazon'><i class=\" fa fa-arrows-h\" title='Compare'></i></a>\
                                  </td>\
                              </tbody>\
                           </table>\
                         </div>\
                        </td>";

          }else{
            tblSrc += "<td class=\"align-middle profit\">\
                        <div  class=\"suppliers\" style='text-align:center;'>\
                          <table class=\"table-bordered\">\
                            <tbody>\
                              <tr><td class='amazon_profit'style=\"    padding: 18px 0 !important;min-width:60px;font-weight:bold;color:#fff; \">--</td></tr>\
                            </tbody>\
                          </table>\
                        </div>\
                      </td>";

          }
        }
        else {
          if (d.upc !== "") {
            console.log(d.amazon_price);
            if (d.amazon_price !== "") {
            
              // tblSrc += "<td style=\"color:#fff;\"class='align-middle'><span class='walmart_price'>"+d.amazon_price+"</span>";
              // tblSrc += "<a href="+d.amazon_link+" target=\"_blank\" onmouseenter='show_tumb(this);' onmouseleave='hide_tumb(this);' style='position:relative;'>/ Link to product<div class=\"show_tumb\" style='display:none;width:150px;height:150px;background:url("+ d.amazon_img_url+");background-size:100%; position: absolute;border: 0.5px solid #fff;top: -27px;left: 50px;z-index:1;'></div></a></td>";
              tblSrc += '<td class="d-none amazon_item_data" data-amazon-price="'+d.amazon_price+'" data-amazon-link="'+d.amazon_link+'" data-amazon-title="'+d.amazon_title+'" data-amazon-img-url="'+d.amazon_img_url+'"></td>';
            }else{
              tblSrc += "<td style=\"color:#fff;\"class='d-none align-middle'><span class='text-danger'>Not found</span></td>";

            }
            
            if (d.walmart_price !== "" && d.walmart_link !== "UPC not found") {
            
              // tblSrc += "<td style=\"color:#fff;\"class='d-none align-middle'><span class='walmart_price'>"+d.walmart_price+"</span>";
              // tblSrc += "<a href="+d.walmart_link+" class=\"walmart_link\" target=\"_blank\" onmouseenter='show_tumb(this);' onmouseleave='hide_tumb(this);' style='position:relative;'>/ Link to product<div style='display:none;'><span class='d-none walmart_title'>"+d.walmart_title+"</span><img class='walmart_img' src='"+d.walmart_img_url+"'></div></a></td>";
              tblSrc += '<td class="d-none walmart_item_data" data-walmart-price="'+d.walmart_price+'" data-walmart-link="'+d.walmart_link+'" data-walmart-title="'+d.walmart_title+'" data-walmart-img-url="'+d.walmart_img_url+'"></td>';
            }else{
              tblSrc += "<td style=\"color:#fff;\"class='d-none align-middle'><span class='text-danger'>Not found</span></td>";

            }

          }
          // else{
          //   tblSrc += "<td style=\"color:#fff;\"class='align-middle'></td>";
          //   tblSrc += "<td style=\"color:#fff;\"class='d-none align-middle'></td>";
          // }

            if (d.walmart_profit > 0 || d.walmart_profit < 0 || d.amazon_profit > 0 || d.amazon_profit < 0) {

                var amazon_color = d.amazon_profit < 0 ? "#da0a0a;" : "#13df13;";
                var walmart_color = d.walmart_profit < 0 ? "#da0a0a;" : "#13df13;";

                var walmart_profit = Math.abs(d.walmart_profit) == 0 ? "--" : Math.abs(d.walmart_profit);
                var amazon_profit = Math.abs(d.amazon_profit) == 0.00 ? "--" : Math.abs(d.amazon_profit);
              if (amazon_profit == '--') {
                var amazon_currency = "";
                amazon_color = 'red;';
                $(".amazon_prime").css({'display':'none'});

              }
              else {
                var amazon_currency = d.currency;
                if (d.is_prime == 1) {
                $(".amazon_prime").css({'display':'block'});
              }else{
                
              }
              }
              if (walmart_profit == '--') {
                var walmart_currency = "";
                walmart_color = 'red;';
              }
              else {
                var walmart_currency = d.currency;
              }
              

              tblSrc += "<td class=\"align-middle profit\">\
                          <div  class=\"suppliers\" style='text-align:center;'>\
                            <table class=\"table-bordered\">\
                              <tbody onmouseover=\"show_icons(this,'"+amazon_profit+"','"+walmart_profit+"');\" onmouseout=\"show_icons(this,'"+amazon_profit+"','"+walmart_profit+"');\">\
                                <tr>\
                                  <td class='amazon_profit'style=\"color:"+amazon_color+"\">"+amazon_currency+" "+amazon_profit+"</br><img src=\"https://blog.geebo.com/wp-content/uploads/2017/09/amazonprime.png\" class=\"amazon_prime\" style=\"width:50px;height:20px;\"></td>\
                                  <td class='profit_walmart' style=\"color:"+walmart_color+"\">"+walmart_currency+" "+ walmart_profit+"</td>\
                                </tr>\
                                <tr>";
              
              tblSrc +=           "<td class='amazon_icons' style=\"position:relative;left:0px;display:none;padding: 10px 0 !important;min-width:60px;font-weight:bold;\">\
                                    <a href='#' onclick='show_amazon(this);' class='mr-3' title='Amazon Product'  data-suplier-name='Amazon'><i class=\" fa fa-eye\"></i></a>\
                                    <a href='#' onclick='compare_modal(this);' data-suplier-name='Amazon'><i class=\" fa fa-arrows-h\" title='Compare'></i></a>\
                                  </td>\
                                  <td class='walmart_icons' style=\"position:relative;left:0px;display:none;padding: 10px 0 !important;min-width:60px;font-weight:bold;\">\
                                    <a href='#' onclick='show_walmart(this);' class='mr-3' title='Walmart Product' data-suplier-name='Walmart'><i class=\" fa fa-eye\"></i></a>\
                                    <a href='#' onclick='compare_modal(this);' data-suplier-name='Walmart'><i class=\" fa fa-arrows-h\" title='Compare'></i></a>\
                                  </td>\
                                </tr>\
                              </tbody>\
                            </table>\
                          </div>\
                        </td>";

            }else{
            tblSrc += "<td class=\"align-middle profit\">\
                         <div  class=\"suppliers\" style='text-align:center;'>\
                           <table class=\"table-bordered\">\
                             <tbody>\
                               <tr>\
                                  <td class='amazon_profit'style=\"padding: 10px 0 !important;min-width:60px;font-weight:bold;color:#fff; \">--</td>\
                                  <td class='profit_walmart' style=\"padding: 10px 0 !important;min-width:60px;font-weight:bold;color:#fff;\">--</td>\
                               </tr>\
                             </tbody>\
                           </table>\
                         </div>\
                       </td>";

            }

        }
                    
      tblSrc += "</td>";
        
      tblSrc += "<tr>"; 
  }

      $("#tableResults tbody").html(tblSrc);
      $("#tableResults tbody").append("<input type='hidden' id='cnt_ids' value='" + cnt_identifiers + "'>");
      $("#tableResults tbody").append("<input type='hidden' id='sch_id' value='" + product_details[0].schedule_id + "'>");

      return response;
    }).fail(function(response_error) {
              // If fail
              if (response_error['data'] =="error" ) {

                alert("There are no items");
              }
          }).
    always(function(){
                              $('.loader_img').hide();
        $(".load_ajax_gif").css({'display':'none'});

      var cnt_ids = $('#cnt_ids').val();
      $('#found_ids').text(cnt_ids);
      $('.loading').hide();
      $('#tableResults').show();
    
    });
        
  }

  function show_icons(el,amazon_profit,walmart_profit){

    //console.log(amazon_profit);

    if (amazon_profit == "--" && walmart_profit !== "--") {

      $(el).parent().parent().find('.walmart_icons').css({'left':'60px'});
      $(el).parent().parent().find('.walmart_icons').toggle();
    }
     else if(amazon_profit !== "--" && walmart_profit == "--"){
      
      $(el).parent().parent().find('.amazon_icons').toggle();

     }

     else if(amazon_profit !== "--" && walmart_profit !== "--"){

      $(el).parent().parent().find('.walmart_icons').toggle();
      $(el).parent().parent().find('.amazon_icons').toggle();

     }
  }

  function show_walmart(el){

   var parent =  $(el).parents().eq(6);
   var currency = parent.find('.currency').text();

   var walmart_info = parent.find('.walmart_item_data');


   var image = walmart_info.data('walmart-img-url');
   var title =  walmart_info.data('walmart-title');
   var price =  walmart_info.data('walmart-price');
   var rating = parent.find('.rating').text();
   var link =  walmart_info.data('walmart-link');
   console.log(currency);
   var suplier_name = $(el).data('suplier-name');

    $('.my_modal').find('.suplier_name').text(suplier_name);



   $('.my_modal').find('.modal-body').find('img').attr('src',image);
   $('.my_modal').find('.modal-header').find('.title').text(title);
   $('.my_modal').find('.modal-header').find('.link').attr('href',link);
   $('.my_modal').find('.modal-footer').find('h5').find('img').attr('src',rating);
   $('.my_modal').find('.modal-footer').find('h4').text((currency+" "+price));
   $('.my_modal').modal();
   //console.log(parent.find());

  }


    function show_amazon(el){

   var parent =  $(el).parents().eq(6);
   var currency = parent.find('.currency').text();
   var amazon_info = parent.find('.amazon_item_data');


   var image = amazon_info.data('amazon-img-url');
   var title =  amazon_info.data('amazon-title');
   var price =  amazon_info.data('amazon-price');
   var rating = parent.find('.rating').text();
   var link =  amazon_info.data('amazon-link');
   //console.log(currency);
    var suplier_name = $(el).data('suplier-name');

    $('.my_modal').find('.suplier_name').text(suplier_name);



   $('.my_modal').find('.modal-body').find('img').attr('src',image);
   $('.my_modal').find('.modal-header').find('.title').text(title);
   $('.my_modal').find('.modal-header').find('.link').attr('href',link);
   $('.my_modal').find('.modal-footer').find('h5').find('img').attr('src',rating);
   $('.my_modal').find('.modal-footer').find('h4').text((currency+" "+price));
   $('.my_modal').modal();
   //console.log(parent.find());

  }



  function modal_img(el){
    
    //console.log(getSrcImg);

    var parent =  $(el).parents().eq(1);
    var currency = parent.find('.currency').text();

    var ebay_price = parent.find('.pro_price').text();
    var ebay_title = parent.find('.ebay_title').text();
    var ebay_link = parent.find('.ebay_title').attr('href');
    var ebay_img = $(el).children('img').attr('src');
    var rating = '#';
    console.log(ebay_price);

    $('.my_modal').find('.modal-header').find('.title').text(ebay_title);
    $('.my_modal').find('.modal-header').find('.link').attr('href',ebay_link);
    $('.my_modal').find('.modal-footer').find('h4').text(ebay_price);
    $('.my_modal').find('.modal-footer').find('h5').find('img').attr('src',rating);
    $('.my_modal').find('.modal-body').find('img').attr('src',ebay_img);
    $('.my_modal').modal();
  }

  function compare_modal(el){

    var parent =  $(el).parents().eq(6);
    var currency = parent.find('.currency').text();

    var ebay_price = parent.find('.pro_price').text();
    var ebay_title = parent.find('.ebay_title').text();
    var ebay_img = parent.find('.ebay_img').find('img').attr('src');
    var ebay_link = parent.find('.ebay_title').attr('href');

    var suplier_name = $(el).data('suplier-name');

    var image, title, price, rating, link;

    if (suplier_name == 'Walmart') {

      var walmart_info = parent.find('.walmart_item_data');


      image = walmart_info.data('walmart-img-url');
      title =  walmart_info.data('walmart-title');
      price =  walmart_info.data('walmart-price');
      rating = parent.find('.rating').text();
      link =  walmart_info.data('walmart-link');
    }
    else if(suplier_name == 'Amazon'){

      var amazon_info = parent.find('.amazon_item_data');


      image = amazon_info.data('amazon-img-url');
      title =  amazon_info.data('amazon-title');
      price =  amazon_info.data('amazon-price');
      rating = parent.find('.rating').text();
      link =  amazon_info.data('amazon-link');

    }
    console.log(ebay_price);
    console.log(ebay_title);

    $('.compare_modal').find('.ebay_section').find('.title').text(ebay_title);
    $('.compare_modal').find('.ebay_section').find('.link').attr('href',ebay_link);
    $('.compare_modal').find('.ebay_section').find('.ebay_price').text(ebay_price);
    $('.compare_modal').find('.ebay_section').find('.ebay_image').attr('src',ebay_img);


    $('.compare_modal').find('.suplier_section').find('.suplier_link').attr('href',link);
    $('.compare_modal').find('.suplier_section').find('.suplier_title').text(title);
    $('.compare_modal').find('.suplier_section').find('.suplier_name').text(suplier_name);
    $('.compare_modal').find('.suplier_section').find('.suplier_price').text((currency+" "+price));
    $('.compare_modal').find('.suplier_section').find('.suplier_image').attr('src',image);
    $('.compare_modal').find('.suplier_section').find('.suplier_rating img').attr('src',rating);

    $('.compare_modal').modal();
  }

  function show_tumb(el){

    $(el).children('.show_tumb').show();
    
  }
  function hide_tumb(el){

    $(el).children('.show_tumb').hide();
    
  }

  function addCommas(nStr){
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }