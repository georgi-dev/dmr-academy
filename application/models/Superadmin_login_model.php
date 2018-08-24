<?php
class Superadmin_login_model extends CI_Model
{
	public function __construct()
	{
		parent:: __construct();
		$this->load->database();
	}

	function login_do($user,$password)
	{
		$this->db->where('user_id', $user);
		$this->db->where('password', $password);
		$query=$this->db->get("super_admin")->row_array();
		if($query)
		{
			return $query;
		}
		else
		{
			return false;
		}
	}


	function store_token($data, $userid, $password)
	{
		$this->db->where('user_id', $userid);
		$this->db->where('password', $password);
		$query = $this->db->update('super_admin',$data);
		if($query)
			return true;
		else
			return false; 
	}


}

?>