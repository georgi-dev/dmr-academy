<?php
class ebay_model extends CI_Model
{
	public function __construct()
	{
		parent:: __construct();
		$this->load->database();
		$this->load->library('session');
	}

	function add_new_record($data)
	{
		$new=array('url'=>$data["url"],
				'pro_title'=>$data["pro_title"],
				'pro_img'=>$data["pro_img"],
				'currency'=>$data["currency"],
				'price_r' => $data['price_r'],
				'pro_price'=>$data["pro_price"],
				'item_id'=>$data["item_id"],
				//'sale_date'=>$data["sale_date"],
				'ean'=>$data["ean"],
				'mpn'=>$data["mpn"],
				'sold_count'=>$data["sold_count"],
				'watchers'=>$data["watchers"],
				'saller'=>$data["saller"],
				'search_from' => $data['search_from'],
				'sold_date'=>$data["sold_date"],
				'schedule_id'=>$data["schedule_id"],
				'upc'=>$data["upc"],
				'isbn'=>$data["isbn"],
				);

		$this->db->where('url',$data["url"]);
		$this->db->where('schedule_id',$data["schedule_id"]);
		$res=$this->db->get('ebay_pro_detail')->row_array();
		if(empty($res))
		{
		
		if($this->db->insert("ebay_pro_detail",$new))
			return $this->db->insert_id();
		else
			return false;
		}
		else
		{
			$this->db->where('id', $res->id);
			$this->db->update("ebay_pro_detail",$new);
		}

	}
	function check_url($url,$id)
	{
		$this->db->where('url', $url);
		$this->db->where('schedule_id', $id);
		$result=$this->db->get('ebay_pro_detail')->row_array(); 
        return $result;
	}

	function update_record($data,$id)
	{
		
		$new=array('url'=>$data["url"],
				'pro_title'=>$data["pro_title"],
				'pro_img'=>$data["pro_img"],
				'currency'=>$data["currency"],
				'price_r' => $data['price_r'],
				'pro_price'=>$data["pro_price"],
				'item_id'=>$data["item_id"],
				//'sale_date'=>$data["sale_date"],
				'ean'=>$data["ean"],
				'mpn'=>$data["mpn"],
				'sold_count'=>$data["sold_count"],
				'watchers'=>$data["watchers"],
				// 'is_seller_top'=>$data["is_seller_top"],
				'saller'=>$data["saller"],
				'search_from' => $data['search_from'],

				'sold_date'=>$data["sold_date"],
				'upc'=>$data["upc"],
				'isbn'=>$data["isbn"]
				);
		$this->db->where('id', $id);
		$this->db->update('ebay_pro_detail', $new); 
		return $this->db->affected_rows();
		

	}

	// function delete_record()
	// {
	// 	//$this->db->delete('ebay_pro_detail');
	// 	//$this->db->empty_table('ebay_pro_detail');
	// 	$this->db->query('delete from ebay_pro_detail');
	// }

	/*function get_record()
	{
		$query=$this->db->get("ebay_pro_detail");
		if($query->num_rows() > 0)
		{
			return $query;
		}else{
			return false;
		}
	}*/
	function get_test()
	{
		$query=$this->db->get("ebay_pro_detail");
		return $query->result();
	}
	function get_record($schedule_id, $limit, $start, $sort_by, $order_by, $sold_days)
	{//$sort_by = "sold_count";
	//print_r($sort_by);

		$query = "";
		$this->db->limit($limit, $start);
		if(!is_array($schedule_id))
		{
			$this->db->where('schedule_id', $schedule_id);

			if (!empty($sold_days)) {
			$this->db->where('sold >  DATE_SUB( NOW() , INTERVAL '.$sold_days.' DAY)');

			}

			$this->db->where('pro_title != "" ');
			$this->db->order_by($order_by,$sort_by);
			$query=$this->db->get("ebay_pro_detail");
		}
		else
		{
			$count = count($schedule_id);
			if($count==0)
				return false;
			if($count > 1)
			{
				$this->db->where_in('schedule_id', $schedule_id);
				// $this->db->where('sold >  DATE_SUB( NOW() , INTERVAL 30 DAY)');
				$this->db->order_by($order_by,$sort_by);
			$this->db->where('pro_title != "" ');

				$query=$this->db->get("ebay_pro_detail");
			}
			if($count == 1)	
			{
				$this->db->where('schedule_id', $schedule_id[0]);
				// $this->db->where('sold >  DATE_SUB( NOW() , INTERVAL 30 DAY)');
			$this->db->where('pro_title != "" ');

				$this->db->order_by($order_by,$sort_by);
				$query=$this->db->get("ebay_pro_detail");
			}
		}


		
		if($query->num_rows() > 0)
		{
			return $query;
		}else{
			return "false";
		}
	}
	
	function check_record($itemid)
	{
		$this->db->where('item_id', $itemid);
		$query=$this->db->get("ebay_pro_detail");
		if($query->num_rows() > 0)
		{
			return $query;
		}else{
			return false;
		}
	}
	

	function get_count($schedule_id)
	{	

		
		if(!is_array($schedule_id))
		{
			$query = $this->db->where('schedule_id',$schedule_id)->get('ebay_pro_detail');

			return $query->num_rows();
		}

		$count = count($schedule_id);

		if($count == 0)
		{
			return false;
		}
		if($count > 1)
		{
			$query = $this->db->where_in('schedule_id',$schedule_id)->get('ebay_pro_detail');
			return $query->num_rows();
		}
		if($count == 1)
		{
			$query = $this->db->where('schedule_id',$schedule_id[0])->get('ebay_pro_detail');
			return $query->num_rows();
		}

	}


	function get_user_id($token)
	{
		$this->db->select('id');
		$this->db->where('token', $token);
		return $query = $this->db->get('users')->row_array();
	}

}

?>