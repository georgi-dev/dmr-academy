<html>
<head>
	<title>Payments</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>
<h1>Payments</h1>

<table id="payments" class="table table-striped">
	<thead>
		<tr>
			<th>Id</th>
			<th>Payer first name</th>
			<th>Payer last name</th>
			<th>Payer email</th>
			<th>Plan amount</th>
			<th>Last payment day</th>
		</tr>
	</thead>
	<tbody></tbody>
</table>
</body>
</html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script type="text/javascript">
	$(function(){
		console.log("Erro");

		$.ajax({
            type: "POST",
            url: "<?php echo base_url()?>" + "Paypal/ajax_show_payments/",
            dataType: 'json',
            data: {}
          }).
            done(function(response){  
            	console.log(response);
              console.log("Added Succesfuly");
              let payers = response['data'];

              tblSrc = '';

              for (var i = 0; i < payers.length; i++) {
              	
              	tblSrc += `<tr>
              			     <td>${i}</td>
              			     <td>${payers[i].payer_fname}</td>
              			     <td>${payers[i].payer_lname}</td>
              			     <td>${payers[i].payer_email}</td>
              			     <td>${payers[i].plan_amount}</td>
              			     <td>${payers[i].last_payment_date}</td>
              			   </tr>`;

              }	

              $('#payments tbody').html(tblSrc);
            });
	});
</script>