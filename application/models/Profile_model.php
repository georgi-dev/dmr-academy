<?php
class Profile_model extends CI_Model
{
	public function __construct()
	{
		parent:: __construct();
		$this->load->database();
	}


	function edit_profile($data)
	{	
		$this->db->where('user_id',$_SESSION['user_id']);
		$res = $this->db->update('users', $data);

		if($res)
			return true;
		else
			return false; 
	}

}