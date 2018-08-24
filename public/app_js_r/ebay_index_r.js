$(document).ready(function(){

   $('#show_entries').on('change', function (e) {
      var optionSelected = $("#show_entries option:selected", this);
      var valueSelected = this.value;
     console.log(valueSelected);
      var pathArray = window.location.pathname.split('/');

      var sch_id = pathArray[4];




    var total = $(".scalped_results").data('scalped-results');
    var start = 0;
    var limit = $('#show_entries option:selected').val();
    var links = Math.ceil(total/limit);
    change_pagination(total,sch_id,start,limit);
  
      get_all_product_order_by_sort_by(valueSelected,order_by='upc',sort_by='desc', sch_id);

  });


 $(".profit").hover(
  function () {
     $('ul.amazon_walmart_sorting').stop(true, true).slideDown('medium');
  }, 
  function () {
     $('ul.amazon_walmart_sorting').stop(true, true).slideUp('medium');
  }
);

   $(".identifiers").hover(
  function () {
     $('ul.identifiers_sorting').stop(true, true).slideDown('medium');
  }, 
  function () {
     $('ul.identifiers_sorting').stop(true, true).slideUp('medium');
  }
);




  //alert($(".scalped_results").text());

    show_pagination();
 
  $('button[id^="get_items_for"]').click(function(){
      //var sch_id = pathArray[4];
        $(this).append(' <i class="load_ajax_gif fa fa-spinner fa-spin"></i>');

      var sold_days = $(this).data('sold-days');
      //get_all_product_order_by_sort_by('2000',order_by='upc',sort_by='desc', sch_id,null,sold_days);
      $.when(get_all_product_order_by_sort_by('2000',order_by='upc',sort_by='desc', sch_id,null,sold_days)).then(function(response) {
      console.log(response['data'].length);
      var total = response['data'].length;
      var sch_id = pathArray[4];
      
      var start = 0;
      var limit = $('#show_entries option:selected').val();
    change_pagination(total,sch_id,start,limit);

      });
      // for (var i = 1; i < data.length+1; i++) {

      // var hash = "#" + i;
      //          ulSrc += "<li class=\"pagination-item\"><a class=\"page-link\" href="+hash+" onclick=\"get_all_product_order_by_sort_by("+limit+",'upc','desc',"+sch_id+","+start+")\">"+i+"</a></li>";
      //         start = start + (+limit);
              
      //     }

      //     $('.test_pagi').html(ulSrc);
  });


  $('[data-toggle="tooltip"]').tooltip('show');

 
    $(window).scroll(function() {
        var y = $(this).scrollTop();
        if (y>1) {
          $('.-opaque').css({'background':'black'})
        }else{$('.-opaque').css({'background':'black'})}
      if (y >= 100) { 
        $('.sticked').css({'position':'fixed','top':'0'});
        $('#sortby').parent().css({'position':'relative','top':'0'});
      }
      else if(y <= 100){
        $('.sticked').css({'position':'relative'});
        $('#sortby').parent().css({'position':'relative','top':'29px'});
      }
    });

    var pathArray = window.location.pathname.split('/');

      var sch_id = pathArray[4];
    
      get_all_product_order_by_sort_by('100',order_by='upc',sort_by='desc', sch_id);

    $('span[id^="order-by"]').click(function(){

        var pathArray = window.location.pathname.split('/');
        var order_by = $(this).data('order-by');
        var sort_by = $(this).data('sort-by');

        if (sort_by === 'desc') {
          $('span[id^="order-by"]').parent().find('#order-by[data-sort-by="asc"]').hide();
          $(this).parent().find('#order-by[data-sort-by="asc"]').show();
          $('span[id^="order-by"]').parent().find('#order-by[data-sort-by="desc"]').show();
          $(this).parent().find('#order-by[data-sort-by="desc"]').hide();
           
        }
        else if(sort_by === 'asc'){
          $(this).parent().find('#order-by[data-sort-by="desc"]').show();
          $(this).parent().find('#order-by[data-sort-by="asc"]').hide();
        }
        var limit = $('#show_entries option:selected').val();
        get_all_product_order_by_sort_by(limit,order_by,sort_by, sch_id);

      });
      
      $('span[id^="order_by_profit"]').click(function(){

        var pathArray = window.location.pathname.split('/');
        var order_by = $(this).data('order-by');
        var sort_by = $(this).data('sort-by');

        $('ul.amazon_walmart_sorting').stop(true, true).slideUp('medium');
        var limit = $('#show_entries option:selected').val();
        get_all_product_order_by_sort_by(limit,order_by,sort_by, sch_id);

      });

      // $('span[id^="order_by_identifiers"]').click(function(){

      //   var pathArray = window.location.pathname.split('/');
      //   var order_by = $(this).data('order-by');
      //   var sort_by = $(this).data('sort-by');

      //   $('ul.identifiers_sorting').stop(true, true).slideUp('medium');
      //   var limit = $('#show_entries option:selected').val();
      //   get_all_product_order_by_sort_by(limit,order_by ,sort_by, sch_id);

      // });
});