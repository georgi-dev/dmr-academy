<html>
<head>
	<title>Paypal Form</title>
</head>
<body>

	<form method="post" action="/Paypal/paypalRedirect">

		<select name="paypal_select_plan">
			<option value="1">Plan 1</option>
			<option value="2">Plan 2</option>
			<option value="3">Plan 3</option>
		</select>
	<input type="submit" value="Submit">
	<!-- //<a href="Paypal/paypalRedirect">Paypal button</a> -->
	</form>

</br></br>
	<form method="post" action="/Paypal/create_payment/">

	<select name="paypal_select_tracking_plan">
		<option value="400">Basic 400</option>
		<option value="1000">Regular 1000</option>
		<option value="2000">Super 2000</option>
	</select>
	<input type="submit" value="Submit">
	<!-- //<a href="Paypal/paypalRedirect">Paypal button</a> -->
	</form>
</body>
</html>