<?php
class ebay_link_model extends CI_Model
{
	public function __construct()
	{
		parent:: __construct();
		$this->load->database();
	}
	function add_url($data)
	{
		$new=array(
				'url'=>$data["pageurl"],
				'sold'=>$data["sold"],
				'schedule_id'=>$data["schedule_id"],
				'status'=>1,
				);
		$this->db->where('url', $data["pageurl"]);
		$this->db->where('schedule_id', $data["schedule_id"]);
        $result = $this->db->get('ebay_links_test')->row_array();
        if (empty($result)) {
	        if($this->db->insert("ebay_links_test",$new))
				return $this->db->insert_id();
			else
				return false;
		} else {
			$update=array(
				'status'=>1,
				);
			$this->db->where('id', $result["id"]);
			$this->db->update("ebay_links_test",$update);

            return false;
        }

	}
	function add_link($data)
	{	

		$time = strtotime(trim($data['sold']));

		$new_format_sold_date = date('Y-m-d H:i',$time);

		$new=array(
				'url'=> $data['url'],
				'sold'=> $new_format_sold_date,
				'pro_title'=>$data["pro_title"],
				'pro_price'=>$data["pro_price"],
				'pro_img'=>$data["pro_img"],
				'schedule_id'=>$data["schedule_id"],
				'status'=>2,
				);
		$this->db->where('url', $data['url']);
		// $this->db->where('schedule_id', $data["schedule_id"]);
        //$result = $this->db->get('ebay_links_test')->row_array();
    $result = $this->db->get('ebay_pro_detail')->row_array();
        if (empty($result)) {
	        if($this->db->insert("ebay_pro_detail",$new))
				return $this->db->insert_id();
			else
				return false;
		}
	// 	 else {
	// 		$update=array(
	// 			'status'=>1,
	// 			);
	// 		$this->db->where('id', $result["id"]);
	// 		//$this->db->update("ebay_links_test",$update);
	// $this->db->update("ebay_pro_detail",$update);

            return false;
        //} 

	}
	function change_schedule_links_status($sch_id){
		$new=array(
			   'status'=>1,
				);
		$this->db->where('schedule_id', $sch_id);
		//$this->db->update('ebay_links_test', $new);
		$this->db->update('ebay_pro_detail', $new);
		return $this->db->affected_rows();
	}
	function get_link() {
	  // $this->db->where('status', 1);
	  //       //$result = $this->db->get('ebay_links_test')->row_array();
	  //    $result = $this->db->get('ebay_pro_detail')->row_array();

	  //       $new=array(
	  //     'status'=>2,
	  //   );
	  // $this->db->where('id', $result["id"]);
	  // $this->db->update('ebay_pro_detail', $new); 
	  // //  $this->db->delete('ebay_links_test'); 
	  //       return $result;
	 
	 $PID = getmypid();
	 if (!empty($PID)) {
	  $this->db->where('status', 1)->limit(1)->update('ebay_pro_detail', array('status' => 20, 'bot_pid' => $PID));
	  
	  $result = $this->db->where(array('status' => 20, 'bot_pid' => $PID))->limit(1)->get('ebay_pro_detail')->row_array();
	  	$this->db->where('id',$result['id'])->update('ebay_pro_detail', array('status' => 2));
	  return $result;
	 }
	 
	  return FALSE;
	}

	function pending($id)//2
	{
			
		$new=array(
			   'status'=>2,
				);
		$this->db->where('id', $id);
		$this->db->update('ebay_links', $new); 
		return $this->db->affected_rows();
		

	}
	function delete_all()
	{
		$this->db->query('delete from ebay_links');
	}
	function delete_url($id)
	{
		$this->db->query('delete from ebay_links where id='.$id);
	}
	function get_count()
	{
		$result = $this->db->get('ebay_links')->result();
		if(empty($result))
		{
			return 0;

		}
		else
		{
			return $result;
		}
	}

}
?>