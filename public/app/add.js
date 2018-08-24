             
             $('.type_data,.scalp, h1.phase-3,.modal-back, h1.phase-4, ul.phase-2,ul.phase-3,ul.phase-4,.modal-footer-scalp,.modal-footer').hide();

               $('button[id^="search_from"]').click(function(e){
                e.preventDefault();
                //$(this).css({'background':'red'});
                var searchfrom = $(this).data('search-from');
                console.log(searchfrom);
                  $('#searchfrom').val(searchfrom);
                  $('h1.phase-2').animate({top:-5},800);
                  $('ul.phase-2,.modal-back').show('slow');
                  $('h1.phase-4,.modal-footer-scalp, ul.phase-4,h1.phase-1, ul.phase-1,.type_data,.modal-footer').hide();
                  //$('.modal-back a').attr('data-phase',"2");
                  if ($('.modal-back a').attr('data-phase',"1")) {
                    $('h1.phase-2,ul.phase-2').show();
                    $('.modal-back a').attr('data-phase',"2");
                    $('.modal-back a').show();
                  }
               }); // end button

               $('button[id^="search_by"]').click(function(e){
                e.preventDefault();
                
                if ($(this).attr('id') == 'search_by_seller_id') {
                  $(this).css({'background':'darkblue'});
                  $('#search_by_keyword').css({'background':'gray'});
                }
                if ($(this).attr('id') == 'search_by_keyword') {
                  $(this).css({'background':'darkblue'});
                  $('#search_by_seller_id').css({'background':'gray'});
                }
                var search_by = $(this).data("search-by");

                console.log(search_by);
                  $('.type_data').attr('name', search_by);
                  $('.type_data,.modal-footer').show();
                  $('.next-p').show();
                     $('.next-p').click(function(){
                      var seller_name = $('input[name="sellerid"]').val();
                      //CHECK IF USER IS PROFITSCALPER USER

                      $.ajax({ //Start ajax prepare_add
                        type: "POST",
                        url: "Schedule/check_if_seller_is_client/",
                        dataType: 'json',
                        data:{sellerid:seller_name}
                        }).done(function(response){
                          
                          console.log(response);
                          if (response.err == 'empty seller name') {
                             swal({
                              title: 'Oops...',
                              text: 'Please enter valid seler name',
                              background: 'rgb(38, 66, 99)',
                            })
                          }
                          if (response > 0) {
                       
                             swal({
                              title: 'Oops...',
                              text: 'Members of ProfitScalper can`t be scalped!',
                              background: 'rgb(38, 66, 99)',
                            })
                          }else{
                            $('h1.phase-2, ul.phase-2,.modal-footer').hide();
                            $('h1.phase-4,.modal-footer-scalp, ul.phase-4').show();
                            $('.modal-back a').attr('data-phase',"4");
                          }
                          if (response.user) {

                          }

                        }).fail(function(error){
                          console.log(error);
                        });



                      
                     });
               });// end button


                $('button[id^="item_listing"]').click(function(e){
                e.preventDefault();

                if ($(this).attr('id') == 'item_listing_sold') {
                  $(this).css({'background':'darkblue'});
                  $('#item_listing_active').css({'background':'gray'});
                }
                if ($(this).attr('id') == 'item_listing_active') {
                  $(this).css({'background':'darkblue'});
                  $('#item_listing_sold').css({'background':'gray'});
                }

                var listing_type = $(this).data("listing-type");

                console.log(listing_type);
                  $('.item_type').val(listing_type);
                  $('.scalp').show();
                  $('.modal-footer').hide();
                  // $('.scalp').click(function(){
                    //$(this).text('Checking...');
                    $('.scalp').parent().addClass('loading');
                    // if ($('.please_wait').length) {

                    // }else{
                    //   $('.modal').append("<b class='please_wait' style='text-align:center;color:#fff;font-size:40px;'>Please wait...</b>");
                    // }

                    var search_from,seller_name,keyword,item,world;

                      search_from = $('input[name="searchfrom"]').val();
                      seller_name = $('input[name="sellerid"]').val();
                      keyword     = $('input[name="keyword"]').val();
                      item        = $('input[name="item"]').val();
                      console.log(search_from);
                      console.log(seller_name);
                      console.log(keyword);
                      console.log(item);
                        if(seller_name=="" && keyword=="") {
                          // swal(
                          //   'Oops...',
                          //   'Sellerid or keyword required!!',
                          //   'warning'
                          // )
                           swal({
                              title: 'Oops...',
                              text: 'Sellerid or keyword required!!',
                              background: 'rgb(38, 66, 99)',
                              type:'warning'

                            })
                          return;
                        }

                    $.ajax({ //Start ajax prepare_add
                        type: "POST",
                        url: "Schedule/prepare_add/",
                        dataType: 'json',
                        data:{searchfrom:search_from,sellerid:seller_name,keyword:keyword,item:item}
                        }).done(function(response){
                        //var credits = response;
                        console.log(response.error_msg);
                        $('.scalp').text('Ready');
                        $('.scalp').parent().removeClass('loading_bar');

                         if (response.error_msg == 'Seller doesn\'t  exists!!!') {
                          // swal(
                          //       'Oops...',
                          //       '',
                          //     )
                            swal({
                              title: 'Oops...',
                              text: ''+response.error_msg+'',
                              background: 'rgb(38, 66, 99)',
                              type:'warning'

                            })

                          $('.scalp').text('Scalp');
                          return;
                        }
                        if (response.message === "Schedule already available!!") {
                         
                           swal({
                              title: 'Oops...',
                              text: 'Schedule already available!!',
                              background: 'rgb(38, 66, 99)',
                              type:'warning'

                            })
                          $('.scalp').text('Scalp');
                          return;
                        }


                        // swal({
                        //   title: 'Would you like to scrape this seller?',
                        //   showCancelButton: true,
                        //   confirmButtonColor: '#3085d6',
                        //   cancelButtonColor: '#d33',
                        //   background:'rgb(38, 66, 99)',
                        //   confirmButtonText: 'Yes, scalp it!'
                        // }).then(function () {

                          $.ajax({ //Start ajax prepare_add
                            type: "POST",
                            url: "Schedule/insert_schedule/",
                            dataType: 'json',
                            data:{searchfrom:search_from,sellerid:seller_name,keyword:keyword,item:item,feedback_score:response}
                            }).done(function(response){
                                //alert(response.message);
                                window.location.href = "http://www.profitscalper.org/schedule";

                              }).
                              fail(function(error){
                                console.log(error);
                              }); 
                        // })

                         }).
                      fail(function(error){
                        console.log(error);
                      }); 
                    
                  

               });
                

                /*MODAL BACK */
               $('.modal-back a').click(function(e){
                  e.preventDefault();
                  var current = $(this).attr('data-phase');
                  console.log(current);

                  if(current == '2'){
                    $('h1.phase-2,ul.phase-2').hide();
                    $('h1.phase-1,ul.phase-1').show();
                    $('#USA').animate({right:0},800);
                    $('h1.phase-1').animate({bottom:0},800);
                    $('#UK').animate({left:0},800);
                     $('.modal-back a').attr('data-phase',"1");
                    $('.modal-back a').hide();
                    $('.next-p').hide();
                  }//ok

                  if(current == '4'){
                    $('h1.phase-4,ul.phase-4').hide();
                    $('h1.phase-1, ul.phase-1').hide();
                    $('h1.phase-2,ul.phase-2').show();
                    $('h1.phase-2').animate({top:-5},800);
                    $('ul.phase-2,.modal-back').show('slow');
                    $('.modal-back a').attr('data-phase',"2");
                    $('h1.phase-4,.modal-footer-scalp, ul.phase-4').hide();
                    $('.type_data,.modal-footer').hide();
                  }//ok

              });