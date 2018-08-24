<?php
defined('BASEPATH') OR exit('No direct script access allowed');
if (!function_exists('get_page'));
 	function get_page($url) {
			$proxies = array(); // Declaring an array to store the proxy list
 
		// Adding list of proxies to the $proxies array
		// $proxies[] = '127.0.0.1:8101'; 
		// $proxies[] = '127.0.0.1:8102';
		// $proxies[] = '127.0.0.1:8103';
		// $proxies[] = '127.0.0.1:8104';  
		// $proxies[] = '127.0.0.1:8105';
		// $proxies[] = '127.0.0.1:8106'; 
		// $proxies[] = '127.0.0.1:8107';
		// $proxies[] = '127.0.0.1:8108';
		// $proxies[] = '127.0.0.1:8109';
		// $proxies[] = '127.0.0.1:8110';
		// $proxies[] = '127.0.0.1:8111';
		// $proxies[] = '127.0.0.1:8112';
		// $proxies[] = '127.0.0.1:8113';
		// $proxies[] = '127.0.0.1:8114';
		// $proxies[] = '127.0.0.1:8115';
		// $proxies[] = '127.0.0.1:8116';
		// $proxies[] = '127.0.0.1:8117';
		// $proxies[] = '127.0.0.1:8118';
		// $proxies[] = '127.0.0.1:8119';
		// $proxies[] = '127.0.0.1:8120';
		// $proxies[] = '127.0.0.1:8121';
		$proxies[] = '195.154.161.119:3276';
		$proxies[] = '195.154.161.119:3277';
		$proxies[] = '195.154.161.119:3278';
		$proxies[] = '195.154.161.119:3279';
		$proxies[] = '195.154.161.119:3280';
		if (isset($proxies)) {  // If the $proxies array contains items, then
		    $proxy = $proxies[array_rand($proxies)];    // Select a random proxy from the array and assign to $proxy variable
		}

		$options = Array(
			CURLOPT_RETURNTRANSFER => true,  // Setting cURL's option to return the webpage data
			CURLOPT_FOLLOWLOCATION => true,  // Setting cURL to follow 'location' HTTP headers
			CURLOPT_AUTOREFERER => true, // Automatically set the referer where following 'location' HTTP headers
			CURLOPT_CONNECTTIMEOUT => 300,   // Setting the amount of time (in seconds) before the request times out
			CURLOPT_TIMEOUT => 300,  // Setting the maximum amount of time for cURL to execute queries
			CURLOPT_MAXREDIRS => 10, // Setting the maximum number of redirections to follow
			CURLOPT_USERAGENT => "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0",  // Setting the useragent
			CURLOPT_URL => $url,
			// CURLOPT_PROXY=> $proxy
			//CURLOPT_PROXYTYPE => CURLPROXY_HTTP,
			
			 // Setting cURL's URL option with the $url variable passed into the function
			
		);

		$ch = curl_init();  // Initialising cURL
		curl_setopt_array($ch, $options);   // Setting cURL's options using the previously assigned array data in $options
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array(
	    'X-Apple-Tz: 0',
	    'X-Apple-Store-Front: 143444,12'
	    ));
		//curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		$data = curl_exec($ch); // Executing the cURL request and assigning the returned data to the $data variable
		if(curl_exec($ch) === false)
		{
		    echo 'Curl error: ' . curl_error($ch);
		}
		curl_close($ch);    // Closing cURL
		$data = mb_convert_encoding(trim($data), 'HTML-ENTITIES', "UTF-8");
		return $data;   // Returning the data from the function

	}

?>