<?php
class setting_model extends CI_Model
{
	public function __construct()
	{
		parent:: __construct();
		$this->load->database();
	}

	
	public function start_script()
	{
		$update_data =array(
			'state'=>1,
			);
	$this->db->update('is_start', $update_data); 
	return $this->db->affected_rows();
	}

	public function stop_script()
	{
		$update_data =array(
			'state'=>2,
			);
	$this->db->update('is_start', $update_data); 
	return $this->db->affected_rows();
	}

	public function get_state()
	{
		
		$query=$this->db->get("is_start");
		if($query->num_rows() > 0)
		{
			return $query;
		}else{
			return false;
		}
	}
}
?>
