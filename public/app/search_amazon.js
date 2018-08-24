$('#search_amazon').on('click', function(){

      $this = $(this);
       var sch_id = $('#sch_id').val();
       var search_from = $('#search_from').val();
       //alert(sch_id);
          $.ajax({
            type: "POST",
            url: "/Search/search/",
            dataType: 'json',
            data: {sch_id:sch_id,search_from:search_from}
          }).
            done(function(response){
              console.log(response);
              //upc, ean, item_id, price_r,currency
                swal({
                  title: 'We found ' + response.length + ' identifiers',
                  text: 'Would you like to make this search?',
                  showCancelButton: true,
                  background: 'rgb(38, 66, 99)',
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, do it!'
                }).then(function () {

                    //alert('done');
                    swal({
                      title: 'It will cost 5$',
                      text: 'Are you sure?',
                      showCancelButton: true,
                      background: 'rgb(38, 66, 99)',
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33',
                      confirmButtonText: 'Yes, Let`s do it!'
                    }).then(function () {

                      $this.text('Processing ');

                       $.ajax({
                          type: "POST",
                          url: "/Amazon/change_link_status/",
                          data: {res:response}
                          }).done(function(response){
                            console.log(response);
                          }).fail(function(err){

                          });

                      $this.append(' <i class="load_ajax_gif fa fa-spinner fa-spin"></i>');
                      
                      // var arr_upc = [];
                      // var arr_ean = [];
                      // var arr_price = [];
                      // var i = 0;
                      // $(response).each(function() {
                       
                      //   var upc = response[i]['upc'];
                      //   var ean = response[i]['ean'];
                      //   var item_id = response[i]['item_id'];
                      //   var row = $('.item_id[data-item-id="'+item_id+'"]').parent().parent();
                      //   var sell_price = response[i]['price_r'];
                      //   var suppliers = $(row).find('.suppliers');
                      //   arr_upc.push(upc);
                      //   arr_ean.push(ean);
                      //   arr_price.push(sell_price);
                      //   i++;
                      // });

                      //console.log(arr_upc);
          //                   $.ajax({
          //                     type: "POST",
          //                     url: "/Amazon/search/",
          //                     data: {array_upc:arr_upc,array_ean:arr_ean,search_from:search_from}
          //                     }).done(function(response){
          //                         var data = JSON.parse(response);
          //                       console.log(data);

                                
          //                       //var data = JSON.parse(response);
          //                       //console.log(response['price']);
          //                         var amazon_title = [];
          //                         var amazon_item_price = [];
          //                         var amazon_item_img = [];
          //                         var amazon_link = [];
          //                         var upc = [];
          //                         var ean = [];
          //                         var url = [];
                                  
          //                         //var amazon_link = "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords="+upc+"";

          //                       if(data['price']) {

          //                         $(data).each(function(){

          //                           //console.log(response['price']);
          //                           amazon_title.push(data['title']);
          //                           amazon_link.push(data['link']);
          //                           amazon_item_price.push(data['price']);
          //                           amazon_item_img.push(data['img_url']);
          //                           upc.push(data['upc']);
          //                           ean.push(data['ean']);
          //                         });


          //                       }

          //                         $.ajax({
          //                         type: "POST",
          //                         url: "/Search/insert_amazon/",
          //                         data: {search_from:search_from,upc:upc[0],ean:ean[0],sch_id:sch_id,amazon_title:amazon_title[0],amazon_price:amazon_item_price[0],amazon_link:amazon_link[0],amazon_item_img:amazon_item_img[0]}
          //                          }).done(function(response){
          //                             console.log(response);
          //                           }).fail(function(jqXHR, textStatus, errorThrown) {
          // // If fail
          //                               console.log(textStatus + ': ' + errorThrown);
                                
          //                             });

                               
          //                     })
          //                     .fail(function(error) {
          //                         // If fail
          //                         //console.log(textStatus + ': ' + errorThrown);
          //                         var data = error;
          //                         console.log(data);
          //                     });

                        // $(document).ajaxStop(function () {
                        //     $('.load_ajax_gif').hide();
                        //     $this.text('Amazon searching finished');
                        //     $this.addClass('disabled');
                        //     //location.reload();
                        // });
                          
                    })

                })
            }).
            fail(function(error){

            });

  });