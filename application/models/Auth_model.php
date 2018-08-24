<?php
class Auth_model extends CI_Model
{
	public function __construct()
	{
		parent:: __construct();
		$this->load->database();
	}

	function sign_in($user,$password)
	{	error_reporting(0);
		$this->db->select('*')->from('users')->where('user_id', $user);
		$res = $this->db->get()->result();
		if($res){
			$hashed_password = $res[0]->hashed_password;
		}
		

		// print_r($salt . "</br>");
		// print_r($res[0]->password. "</br>");
		// print_r($res[0]->hashed_password);die();

		if (password_verify($password,$hashed_password)) 
		{

			$this->db->where('user_id', $user);
			// $this->db->where('password', $password);
			$this->db->where('is_user_active', 1);
			$query2=$this->db->get("users");
			if($query2->num_rows() > 0)
			{
				
				return "exists";
			}
			else
			{
				return "deactive";
			}
		}
		else
		{

			return "false";
		}



		// if($query->num_rows() > 0)
		// {
		// 	$this->db->where('user_id', $user);
		// 	$this->db->where('password', $password);
		// 	$this->db->where('is_user_active', 1);
		// 	$query2=$this->db->get("users");
		// 	if($query2->num_rows() > 0)
		// 		return $query2;
		// 	else
		// 		return "deactive";
		// }
		// else
		// {
		// 	return "false";
		// }
	}
	function sign_up($data)
	{
		$res = $this->db->insert('users', $data);

		if($res)
			return true;
		else
			return false; 
	}

	function store_token($data, $userid, $password)
	{
		$this->db->where('user_id', $userid);
		// $this->db->where('password', $password);
		$query = $this->db->update('users',$data);
		if($query)
			return true;
		else
			return false; 
	}


	function is_user_available($useremail)
	{	
		$this->db->where('user_id', $useremail);
		//$this->db->or_where('user_name', $username);
		return $query = $this->db->get('users')->num_rows();
	}

	function is_seller_is_client($seller_id){
		$this->db->select('is_user_active')->from('users')->where('ebayID',$seller_id);
		$q = $this->db->get();

		return $q->num_rows();
	}

	function get_user($useremail)
	{	$this->db->select('*')->from('users')->where('user_id',$useremail);
		$q = $this->db->get();

		//$this->db->or_where('user_name', $username);
		return $q->result();
	}

	function reset_password($email, $hashed_password)
	{	
		//print_r($email);
		$data = array(
			
			'hashed_password' => $hashed_password
			);
		$this->db->where('user_id', $email);
		
		$query = $this->db->update('users',$data);
		//print_r($query);die();
		if($query)
			return true;
		else
			return false; 
	}
}

?>