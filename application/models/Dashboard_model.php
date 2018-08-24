<?php
class Dashboard_model extends CI_Model
{
	public function __construct()
	{
		parent:: __construct();
		$this->load->database();
	}

	function get_sche_id($user_id)
	{
		$this->db->select('schedule_id');
		$this->db->where('user_id', $user_id);
		$res = $this->db->get('user_schedule');

		return $res->result();
	}

	function get_pro_cnt($sche_id)
	{	if($sche_id)
		{
			$this->db->where_in('schedule_id',$sche_id);
			$res = $this->db->get('ebay_pro_detail');
			return $res->num_rows();
		}
		else
		{
			return false;
		}
	}
}

?>