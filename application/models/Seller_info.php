<?php
class Seller_info extends CI_Model
{
	public function __construct()
	{
		parent:: __construct();
		$this->load->database();
	}

	function add_seller_info($seller, $address, $phone, $email, $product_link)
	{	
		$data = array(
		   'seller_name' => $seller,
		   'address' => $address,
		   'phone' => $phone ,
		   'email' => $email,
		   'link_product' => $product_link
		);

		$this->db->insert('seller_info', $data); 
	}
	
}

?>