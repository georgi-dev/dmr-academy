$('#search_walmart').on('click', function(){

       $this = $(this);
       var sch_id = $('#sch_id').val();
       var search_from = $('#search_from').val();

       function fetchData(query, dataURL) {
    // Return the $.ajax promise
        return $.ajax({
            type: 'POST',
            data: query,
            dataType: 'json',
            url: dataURL
        });
      };

      var search_identifiers = fetchData({sch_id:sch_id,search_from:search_from},'https://www.profitscalper.org/index.php/Search/search/');

          $.when(search_identifiers).then(function(response) {
              // If successful
             console.log(response);
            var cnt_items =  response.length;
             swal({
              title: 'We found ' + response.length + ' identifiers',
              text: 'Would you like to make this search?',
              background: 'rgb(38, 66, 99)',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, do it!'
            }).then(function () {

                swal({
                  title: 'It will cost '+ response[0].currency + (response.length * 0.01),
                  text: 'Are you sure?',
                  showCancelButton: true,
                  background: 'rgb(38, 66, 99)',
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, Let`s do it!'
                }).then(function () {
                  // TODO function user_credits
                  var scans = '';
                  var check_credits = fetchData({credits:cnt_items},'https://www.profitscalper.org/index.php/Schedule/check_credits/');
                  var user_balance_credits = fetchData({credits:cnt_items},'https://www.profitscalper.org/index.php/Schedule/user_balance_credits/');
                  $.when(check_credits).then(function(data) {
                    if (data.diff == 'nc > uc') {

                     swal({
                          title: 'You don`t have enough credits for this search', 
                          text: 'You can buy credits from our menu',
                          background: 'rgb(38, 66, 99)',
                          showCancelButton: true,
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'Okay :('
                        })
                     return;
                    }

                    user_balance_credits;
                    //console.log(data);
                      $this.text('Processing ');
                      $this.append(' <i class="load_ajax_gif fa fa-spinner fa-spin"></i>');
                      var i = 0;
                     
                        $(response).each(function() {
                          //console.log($(this));
                         var  upc = response[i]['upc'];
                         var  item_id = response[i]['item_id'];
                         var  row = $('.item_id[data-item-id="'+item_id+'"]').parent().parent();
                         var  sell_price = response[i]['price_r'];
                         var  profit = $(row).find('.profit_walmart');
                         var  suppliers = $(row).find('.suppliers');
                          
                           console.log(sell_price);
                           console.log(upc);

                        var search_walmart = fetchData({upc:upc},'https://www.profitscalper.org/index.php/Walmart/search/');

                              $.when(search_walmart).then(function(response){
                                  //console.log(response);
                                  var data = JSON.parse(response);
                                  //console.log(data);
                                  if(data['items'] && (data['items'][0]['stock'] === 'Available') && (data['items'][0]['availableOnline'] === true)) {
                                    //console.log('online-available = ' + data['items'][0]['availableOnline']);
                                    var walmart_title = data['items'][0]['name'];
                                    var walmart_rating= data['items'][0]['customerRatingImage'];
                                    var walmart_item_price = data['items'][0]['salePrice'].toFixed(2);
                                    var walmart_item_url = data['items'][0]['productUrl'];
                                    var walmart_img_url = data['items'][0]['largeImage'];

                                    console.log(walmart_title);
                                    console.log(walmart_item_url);
                                    console.log(walmart_img_url);
                        var insert_walmart = fetchData({upc:upc,sch_id:sch_id,ebay_sold_price:sell_price,walmart_title:walmart_title,walmart_price:walmart_item_price,walmart_rating:walmart_rating,walmart_link:walmart_item_url,walmart_img_url:walmart_img_url},'https://www.profitscalper.org/index.php/Search/insert_walmart/');

                                    $.when(insert_walmart).then(function(response){
                                        console.log(response);
                                    }).fail(function(){

                                    });
                                         
                                  }
                                  console.log(upc);

                                  if(data['errors']) {
                                    var walmart_item_price = data['errors'][0]['message'];
                                    var walmart_item_url = data['errors'][0]['message'];
                                    var walmart_img_url = data['errors'][0]['message'];

                                   console.log(walmart_item_price);
                                   console.log(walmart_item_url);
                                    console.log(walmart_img_url);
                        var insert_walmart = fetchData({upc:upc,sch_id:sch_id,walmart_price:walmart_item_price,walmart_link:walmart_item_url,walmart_img_url:walmart_img_url},'https://www.profitscalper.org/index.php/Search/insert_walmart/');
                                    $.when(insert_walmart).then(function(response){
                                      console.log(response);
                                    }).
                                    fail(function(error){

                                    });
                                  }

                                }).fail(function(error){

                                
                                });

                            i++;
                       });

                          $(document).ajaxStop(function () {
                              $('.load_ajax_gif').hide();
                              $this.text('Walmart searching finished');
                              $this.addClass('disabled');
                              location.reload();
                          });
                    });
                })
              })  
                  

          }).fail(function(jqXHR, textStatus, errorThrown) {
              // If fail
              console.log(textStatus + ': ' + errorThrown);
          });
        //   $.ajax({
        //     type: "POST",
        //     url: "<?php echo base_url()?>" + "index.php/Search/search/",
        //     dataType: 'json',
        //     data: {sch_id:sch_id,search_from:search_from},
        //     success: function(response){
        //       console.log(response);
        //         swal({
        //           title: 'We found ' + response.length + ' identifiers',
        //           text: 'Would you like to make this search?',
        //           showCancelButton: true,
        //           confirmButtonColor: '#3085d6',
        //           cancelButtonColor: '#d33',
        //           confirmButtonText: 'Yes, do it!'
        //         }).then(function () {

        //             //alert('done');
        //             swal({
        //               title: 'It will cost 5$',
        //               text: 'Are you sure?',
        //               showCancelButton: true,
        //               confirmButtonColor: '#3085d6',
        //               cancelButtonColor: '#d33',
        //               confirmButtonText: 'Yes, Let`s do it!'
        //             }).then(function () {

        //               $this.text('Processing ');
        //               $this.append(' <i class="load_ajax_gif fa fa-spinner fa-spin"></i>');
                      
        //               var i = 0;
        //               $(response).each(function() {
                    
        //                 //console.log($(this));
        //                 var upc = response[i]['upc'];
        //                 var item_id = response[i]['item_id'];
        //                 var row = $('.item_id[data-item-id="'+item_id+'"]').parent().parent();

        //                 var sell_price = response[i]['price_r'];
        //                 var profit = $(row).find('.profit_walmart');
        //                 var suppliers = $(row).find('.suppliers');
                        
        //                  console.log(sell_price);
        //                 // console.log(profit);
        //                  console.log(upc);
        //                 // console.log(item_id);

        //                     $.ajax({
        //                       type: "POST",
        //                       url: "<?php echo base_url()?>" + "index.php/Walmart/search/",
        //                       dataType: 'json',
        //                       data: {upc:upc},
        //                       success: function(response){
        //                         //console.log(response);
        //                         var data = JSON.parse(response);
        //                         //console.log(data);
        //                         if(data['items'] && (data['items'][0]['stock'] === 'Available') && (data['items'][0]['availableOnline'] === true)) {
        //                           //console.log('online-available = ' + data['items'][0]['availableOnline']);
        //                           var walmart_item_price = data['items'][0]['salePrice'].toFixed(2);
        //                           var walmart_item_url = data['items'][0]['productUrl'];
        //                           var walmart_img_url = data['items'][0]['largeImage'];

        //                           console.log(walmart_item_price);
        //                           console.log(walmart_item_url);
        //                           console.log(walmart_img_url);
        //                           $.ajax({
        //                               type: "POST",
        //                               url: "<?php echo base_url()?>" + "index.php/Search/insert_walmart/",
        //                               dataType: 'json',
        //                               data: {upc:upc,sch_id:sch_id,ebay_sold_price:sell_price,walmart_price:walmart_item_price,walmart_link:walmart_item_url,walmart_img_url:walmart_img_url},
        //                                 success: function(response){
        //                                   console.log(response);
        //                                 },
        //                                 error: function(error){

        //                                 }
        //                               });
        //                         }
        //                         console.log(upc);

        //                         if(data['errors']) {
        //                           var walmart_item_price = data['errors'][0]['message'];
        //                           var walmart_item_url = data['errors'][0]['message'];
        //                           var walmart_img_url = data['errors'][0]['message'];

        //                          console.log(walmart_item_price);
        //                          console.log(walmart_item_url);
        //                           console.log(walmart_img_url);
        //                           $.ajax({
        //                               type: "POST",
        //                               url: "<?php echo base_url()?>" + "index.php/Search/insert_walmart/",
        //                               dataType: 'json',
        //                               data: {upc:upc,sch_id:sch_id,walmart_price:walmart_item_price,walmart_link:walmart_item_url,walmart_img_url:walmart_img_url},
        //                                 success: function(response){
        //                                   console.log(response);
        //                                 },
        //                                 error: function(error){

        //                                 }
        //                               });
        //                         }

        //                       },
        //                       error: function(error){

        //                       }

        //                   });

        //                   i++;
        //              });

        //                 $(document).ajaxStop(function () {
        //                     $('.load_ajax_gif').hide();
        //                     $this.text('Walmart searching finished');
        //                     $this.addClass('disabled');
        //                     location.reload();
        //                 });
                          
        //             })
                      
        //         })
        //     },
        //     error: function(error){

        //     }

        // });

  });