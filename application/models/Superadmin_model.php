<?php
class Superadmin_model extends CI_Model
{
	public function __construct()
	{
		parent:: __construct();
		$this->load->database();
	}

	

	function get_count()
	{
		$res = $this->db->get('user_schedule');
		return $res->num_rows();
	}


	function get_all_schedule($limit, $start)
	{

		$this->db->limit($limit, $start);
		$this->db->select('*');
		$this->db->from('user_schedule a');
		$this->db->join('scraper_schedule b', 'b.schedule_id = a.schedule_id');
		$this->db->join('users c', 'c.id = a.user_id');
		$result = $this->db->get();

		return $result->result();
	}


	function get_pro($schedule_id, $limit, $start)
	{
		$this->db->limit($limit, $start);
		$this->db->where('schedule_id', $schedule_id);
		$result = $this->db->get('ebay_pro_detail');
		return $result->result();
	}

	function get_cnt($schedule_id)
	{
		if(is_array($schedule_id))
		{
			$this->db->where_in('schedule_id', $schedule_id);
			$result = $this->db->get('ebay_pro_detail');
			return $result->num_rows();
		}
		else
		{
			$this->db->where('schedule_id', $schedule_id);
			$result = $this->db->get('ebay_pro_detail');
			return $result->num_rows();	
		}
		
	}


	function get_user($limit, $start)
	{
		$this->db->limit($limit, $start);
		$result = $this->db->get('users');
		return $result;
	}

	function get_user_cnt()
	{
		$res = $this->db->get('users');
		return $res->num_rows();
	}


	function get_schedule_id($user_id)
	{
		$this->db->select('schedule_id');
		$this->db->where('user_id',$user_id);
		$result = $this->db->get('user_schedule');
		
		return $result;
	}

	function get_all_pro($sche_id, $limit, $start)
	{

		$this->db->limit($limit, $start);
		$this->db->where_in('schedule_id', implode(",", $sche_id));
		$result = $this->db->get('ebay_pro_detail');
	
		return $result;
	}


	function check_user_state($user_id)
	{
		$this->db->select('is_user_active');
		$this->db->where('id', $user_id);
		$res = $this->db->get('users')->row_array();
		if(count($res) > 0)
			return $res['is_user_active'];
		else
			return false;
	}


	function check_sche_state($user_sche_id)
	{
		$this->db->select('is_active');
		$this->db->where('user_sch_id', $user_sche_id);
		$res = $this->db->get('user_schedule')->row_array();
		if(count($res) > 0)
			return $res['is_active'];
		else
			return false;
	}


	function get_user_schedule($limit, $start)
	{
		$res = $this->db->query("SELECT users.id as id, users.user_name as user_name, users.user_id as user_email, users.is_user_active as is_active, COUNT(user_schedule.user_id) as sche_cnt FROM users LEFT JOIN user_schedule ON users.id = user_schedule.user_id GROUP BY users.id LIMIT ".$limit." OFFSET ".$start);
		
		return $res;
		//

		
	}

	function get_user_product($limit, $start)
	{
		$res = $this->db->query("SELECT users.id, COUNT(ebay_pro_detail.schedule_id) as pro_cnt FROM users LEFT JOIN user_schedule ON users.id = user_schedule.user_id LEFT JOIN ebay_pro_detail ON ebay_pro_detail.schedule_id = user_schedule.schedule_id GROUP BY users.id LIMIT ".$limit." OFFSET ".$start);

		return $res;
	}

}

?>