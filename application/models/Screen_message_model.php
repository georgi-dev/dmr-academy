<?php
class screen_message_model extends CI_Model
{
	public function __construct()
	{
		parent:: __construct();
		$this->load->database();
	}

	function update_screen($data)
	{

		$this->db->where('id', 1);
		$this->db->update('screen_message', $data); 
		return $this->db->affected_rows();
	}

	public function get_message($schedule_id)
	{
		
		//$query=$this->db->get("screen_message");

		$this->db->where('schedule_id', $schedule_id);
		$query=$this->db->get("scraper_schedule");
		

		if($query->num_rows() > 0)
		{
			return $query;
		}else{
			return false;
		}
	}
}

?>