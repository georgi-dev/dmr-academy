  
      function start(item){
      var tr = $(item).parent().parent();


      var cnt_items = $(tr).find('.scraped_result').text();
      var sch_id    = $(tr).find('.sch_id').val();
      var search_from    = $(tr).find('.search_from').text();
      var seller_name   = $(tr).find('.seller_name').text();
      var keyword        = $(tr).find('.keyword').text();
      var item           = $(tr).find('.item').text();

        console.log(cnt_items);


         $.ajax({
            type: "POST",
            url: "Schedule/check_credits/",
            dataType: 'json',
            data:{credits:cnt_items},
            success: function(res){

              if (res.diff == "nc <= uc") {
                        swal({
                          title: ' '+ res.title +' ', 
                          text: ' '+ res.subtitle + ' ',
                          showCancelButton: true,
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'Yes, scalp it!'
                        }).then(function () {
                          swal(
                            'Congratulations!',
                            'Your request is being processed...',
                            'success'
                          )
                        
                        ajax_obj.user_balance_credits(cnt_items,scans = '');  
                        ajax_obj.change_schedule_status(sch_id);
                        $(tr).find('.toggle_run_btn').hide();
                        $(tr).find('.view_product_details_page').show();
                        $(tr).find('.toggle_del_btn').show();
                        })




                   }// end if
                   if(res.diff == "nc > uc"){
                    console.log(res.title);
                       swal({
                        title: ' '+ res.title +' ', 
                        text: ' '+ res.subtitle + ' ',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, scalp it!'
                      }).then(function () {
                        swal(
                          'Congratulations!',
                          'Your request is being processed...',
                          'success'
                        )
                    // if (confirm(res.alert)) {
                      // $('#myModal').modal('show');
                       //$('#myModal').modal('show');
                       // $('.add_modal').modal('show');
                       $('.paypal_').show();
                        var CREATE_PAYMENT_URL  = 'https://www.profitscalper.org/paypal/create_payment';
                        var EXECUTE_PAYMENT_URL = 'https://www.profitscalper.org/paypal/execute_payment';
                        //paypal/execute-payment
                        paypal.Button.render({
                        
                        env: 'sandbox', // Or 'sandbox'

                        commit: true, // Show a 'Pay Now' button

                        payment: function() {
                            return paypal.request.post(CREATE_PAYMENT_URL).then(function(data) {
                              console.log(data.id);
                                return data.id;
                            });
                        },

                        onAuthorize: function(data) {
                            return paypal.request.post(EXECUTE_PAYMENT_URL, {
                                paymentID: data.paymentID,
                                payerID:   data.payerID
                            }).then(function() {
                              var scans = $('select#select-amount option:selected').attr('data-scans');
                                ajax_obj.user_balance_credits(credits,scans);
                               //console.log(data);
                                ajax_obj.add_schedule_to_db(search_from,seller_name,keyword,item,cnt_items);
                                // The payment is complete!
                                // You can now show a confirmation message to the customer
                            });
                        }

                    }, '#paypal-button');


                    })
                  }//if
            },
            error:function(error){
              console.log(error);
            } 

        }); 

       alert(cnt_items);
      }


var ajax_obj = {



  add_schedule_to_db:function(search_from,seller_name,keyword,item,cnt_items) {

      $.ajax({
         type: "POST",
         url: "Schedule/add_schedule_to_db/",
         dataType: 'json',
         data:{searchfrom:search_from,sellerid:seller_name,keyword:keyword,item:item,cnt_items:encodeURIComponent(cnt_items)},
          success: function(response){
            console.log(response);
          if (response.message ==="2Schedule Added Successfully") {alert('2Schedule Added Successfully');}
             console.log(response);
              window.location.href = "http://www.profitscalper.org/schedule";

          },
          error: function(error){
               console.log(error);
             } 
      });

  },

  change_schedule_status:function(sch_id) {

      $.ajax({
         type: "POST",
         url: "Schedule/change_schedule_status/",
         dataType: 'json',
         data:{sch_id:sch_id},
          success: function(response){
             console.log(response);

          },
          error: function(error){
               console.log(error);
             } 
      });

  },
  user_balance_credits:function(credits,scans) {

      $.ajax({
         type: "POST",
         url: "Schedule/user_balance_credits/",
         dataType: 'json',
         data:{credits:credits,scans:scans},
         success: function(response){
            console.log(response);
         },
          error: function(error){
               console.log(error);
             } 
      });

  }


}

      function delete_sch(schedule_id,elm) {
        swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(function () {
          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          $.ajax({
               type: "POST",
               url: "Schedule/delete_schedule/",
               dataType: 'json',
               data:{sch_id:schedule_id},
               success: function(response){
               console.log("DELETED");
               console.log(this);
               $('.status').show();
               $('.status').fadeOut(2000);
               $(elm).parent().parent().hide();
               },
               error: function(error){
                 console.log(error);
               } 
           });
        })
        
      }   