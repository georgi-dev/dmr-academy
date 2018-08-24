<?php
class export_model extends CI_Model
{
	public function __construct()
	{
		parent:: __construct();
		$this->load->database();
	}

	
	public function export_ebay_data()
	{
		$c=0;
		$this->db->select('url,pro_title,pro_img,pro_price,item_id,ean,mpn,sold_count,watchers,is_seller_top,saller,sold_date');
		$result=$this->db->get("ebay_pro_detail");
		
		if(!$result->result())
			die('Couldn\'t fetch records');
		//$num_fields = count($result);
		$headers = array();

		/*for ($i = 0; $i < $num_fields; $i++) 
		{
    		$headers[] = mysqli_field_name($result , $i);
		}*/
		$field_array = $result->list_fields();
		
		foreach($field_array as $field){
		     $headers[] = $field;
		}
		$data = array();
		$fp = fopen('php://output', 'w');
		if ($fp && $result) {
		    header('Content-Type: text/csv');
		    header('Content-Disposition: attachment; filename="ebay data.csv"');
		    header('Pragma: no-cache');
		    header('Expires: 0');
		    fputcsv($fp, $headers);
		    
		    /*while ($row = $result->result_object()) {
		        $c++;
		        
		        $data['url'] = trim($row->url);
		        $data['pro_title'] = trim($row->pro_title);
		        $data['pro_img'] = trim($row->pro_img);
		        $data['price'] = trim($row->pro_price);
		        $data['item_id'] = trim($row->item_id);
		        //$data['sale_date'] = trim($row->sale_date);
		        $data['ean'] = trim($row->ean);
		        $data['mpn'] = trim($row->mpn);
		        $data['sold_count'] = trim($row->sold_count);
		        $data['watchers'] = trim($row->watchers);
		        $data['is_saller_top'] = trim($row->is_seller_top);
		        $data['saller'] = trim($row->saller);
		        $data['sold_date'] = trim($row->sold_date);
		        fputcsv($fp, $data);
		    }*/
		    foreach ($result->result_object() as $row) 
		    {
		    	$c++;
		        	
		        $data['url'] = trim($row->url);
		        $data['pro_title'] = trim($row->pro_title);
		        $data['pro_img'] = trim($row->pro_img);
		        $data['price'] = trim($row->pro_price);
		        $data['item_id'] = trim($row->item_id);
		        //$data['sale_date'] = trim($row->sale_date);
		        $data['ean'] = trim($row->ean);
		        $data['mpn'] = trim($row->mpn);
		        $data['sold_count'] = trim($row->sold_count);
		        $data['watchers'] = trim($row->watchers);
		        $data['is_saller_top'] = trim($row->is_seller_top);
		        $data['saller'] = trim($row->saller);
		        $data['sold_date'] = trim($row->sold_date);
		        fputcsv($fp, $data);
		    }
		    die();
		}
	}

	
}
?>
