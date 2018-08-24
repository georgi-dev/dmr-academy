<?php
include APPPATH . 'controllers/Paypal.php';
	if( isset($_GET['token']) && !empty($_GET['token']) ) { // Token parameter exists
   // Get checkout details, including buyer information.
   // We can save it for future reference or cross-check with the data we have
   $paypal = new Paypal();
   $checkoutDetails = $paypal -> request('GetExpressCheckoutDetails', array('TOKEN' => $_GET['token']));

   // Complete the checkout transaction
   $requestParams = array(
       'TOKEN' => $_GET['token'],
       'PAYMENTACTION' => 'Sale',
       'PAYERID' => $_GET['PayerID'],
       'PAYMENTREQUEST_0_AMT' => '500', // Same amount as in the original request
       'PAYMENTREQUEST_0_CURRENCYCODE' => 'GBP' // Same currency as the original request
   );

   $response = $paypal -> request('DoExpressCheckoutPayment',$requestParams);
   if( is_array($response) && $response['ACK'] == 'Success') { // Payment successful
       // We'll fetch the transaction ID for internal bookkeeping
       $transactionId = $response['PAYMENTINFO_0_TRANSACTIONID'];
   }
}

?>
<html>
<head>
	<title>Success page</title>
</head>
<body>
Success
</body>
</html>