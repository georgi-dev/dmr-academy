<?php
class Users_credits extends CI_Model
{
	public function __construct()
	{
		parent:: __construct();
		$this->load->database();
	}


	function index()
	{	
		$this->db->select('user_credits');
		$this->db->where('user_name',$this->session->username);
		$query = $this->db->get('users');

		foreach ($query->result()[0] as $user_credits) {
		
			return $user_credits;
		}
	}


	function if_expired()
	{	
		$this->db->select('expiration_date');
		$this->db->where('user_name', $this->session->username);
		$query = $this->db->get('users');

		foreach ($query->result()[0] as $user_credits) {
		
			return $user_credits;
		}
		
	}

	function change_credits_count()
	{	
		$this->db->where('user_name', $this->session->username);
		$this->db->update('users', array('user_credits'	=> 0));
		$this->session->unset_userdata('user_credits');
		$this->session->set_userdata('user_credits', 0);
	}
}