<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	public function __construct()
	{

		parent:: __construct();

		$this->load->database();

		$this->load->library('pagination');	
		$this->load->library('session');
		$this->load->library('form_validation');
		$this->load->helper('url');

	}

	
	// public function index()
	// {
		 
	// }

	public function index()
	{	

		$q = $this->db->select('*')->from('language_sub_syllabus')->where(array('syllabus_id' => 1, 'sub_syllabus_id' => 1))->get();

		//header('Access-Control-Allow-Origin:http://dmr-app.localhost');

		echo json_encode($q->result());
		// error_reporting(1);

		
		// //$this->layout_view="layout/auth_view";
		// //$this->template = 'layout/auth_view';
		
		// //$this->load->helper('url');
		// $data = array('message'=>'');
		// $result="";
		// //$this->load->view('auth/index',$data);
		
		// 	$this->form_validation->set_rules('email', 'Email', 'required');

		// 	$this->form_validation->set_rules('password', 'Password', 'required');

		// 	$this->form_validation->set_error_delimiters('<div class="alert alert-danger">', '</div>');
		// 	if($this->form_validation->run()==TRUE)
		// 	{
				
		// 		$userid = $this->input->post('email');
		// 		$password = $this->input->post('password');
				
		// 		$this->load->model("Auth_model");
		// 		$result=$this->Auth_model->sign_in($userid,$password);
				
		// 		if($result == "false")
		// 		{
		// 			$data = array(
		// 			    'message' => '<div class="alert alert-danger wrong_login" style="display:none;"><i class="fa fa-exclamation-circle"></i>Invalid Email or Password...!</div>'
		// 			);
		// 		}
		// 		else
		// 		{
		// 			if($result=="deactive")
		// 			{
		// 				$data = array(
		// 				    'message' => '<div class="alert alert-danger"><i class="fa fa-exclamation-circle"></i> Your Account is Deactiveted by Admin.</div>'
		// 				);
		// 			}
		// 			else if ($result=="exists") {
						
						
		// 				$session = md5($userid.mt_rand(0,10000));
		// 				$data = $this->Auth_model->get_user($userid);
		// 				//print_r($data);
		// 				$this->session->set_userdata('user_id', $userid);
		// 				$this->session->set_userdata('user_credits', $data[0]->user_credits);

		// 				$this->session->set_userdata('id',$data[0]->id);

		// 				$this->session->set_userdata('username', $data[0]->user_name);

		// 				// $this->load->model('Users_credits');
		// 				// $expriration_date = $this->Users_credits->if_expired();

		// 				// $date_now = date("Y-m-d H:i:s");

		// 				// if ($date_now > $expriration_date) {
		// 				// 	$this->Users_credits->change_credits_count();

		// 				// }
						
		// 				$data=array('token'=>$session);
		// 				$result = $this->Auth_model->store_token($data, $userid, $password);

						
		// 				$this->session->sess_expiration = '604800';// expires in 2 days
		// 				$this->session->sess_expire_on_close = 'false';
		// 				//$this->session->set_userdata($session);
		// 				$this->session->set_userdata('token', $session);
						
		// 				//redirect('ebay', 'refresh');
		// 				redirect('dashboard', 'refresh');
						
		// 			}
		// 		}

		// 	}
		
		
		// 	$this->load->view('auth/index',$data);
	}

	public function do_logout()
	{
		$this->session->sess_destroy();
		header('location:'.base_url());
	}








	public function registration(){
		$json = file_get_contents('php://input');
 		//echo json_encode(array("success" => $json));

 //die();
 // decoding the received JSON and store into $obj variable.
 		$obj = json_decode($json,true);

 		$params = array(
			 			'username' => $obj['username'], 
			 			'email' => $obj['email'], 
			 			'password' => md5($obj['password']), 
			 			'status' => '1'
 						);

 		if ($this->db->insert('users',$params)) {
 			echo json_encode(array("success" => 'true'));
 		}
	}

	public function login(){
		$json = file_get_contents('php://input');
 		//echo json_encode(array("success" => $json));

 //die();
 // decoding the received JSON and store into $obj variable.
 		$obj = json_decode($json,true);

 		$query = $this->db->select('username')->from('users')->where(array('email' => $obj['email'], 'password' => md5($obj['password'])))->get();

 		if ($query->num_rows() > 0) {
 			echo json_encode(array("success" => 'true','username' => $query->result()[0]->username));
 		}else{
 			echo json_encode(array("error" => 'true'));
 		}
	}

	public function sign_up()
	{


  //           $this->form_validation->set_rules('email', 'Email', 'required|valid_email');
		// 	$this->form_validation->set_rules('username', 'Username', 'required');
		// 	$this->form_validation->set_rules('fname', 'First name', 'required');
		// 	$this->form_validation->set_rules('lname', 'Last name', 'required');
		// 	$this->form_validation->set_rules('ebay_id', 'Ebay ID', 'required');
  //           $this->form_validation->set_rules('password', 'Password', 'required|min_length[5]');
  //           $this->form_validation->set_rules('password', 'Confirm Password', 'required|min_length[5]|matches[password]');
  //           $this->form_validation->set_rules('country', 'Country', 'required');


  //           if ($this->form_validation->run() == TRUE)
  //           {

  //           	$this->load->model("Auth_model");
		// 		$res=$this->Auth_model->is_user_available($this->input->post('email'));

		// 		if($res > 0)
		// 		{
		// 			$this->session->set_flashdata('message', '
  //                 <div class="alert-icon "><i class="fa fa-exclamation-circle"></i></div>User already Registered. Try another UserID...
  //               ');
		// 			redirect('auth/sign_up');
		// 		}
  //           	else
  //           	{	

  //   				$hashed_password   = password_hash($this->input->post('cnfpassword'), PASSWORD_BCRYPT);

  //           		$data = array(
		// 			'user_id' => $this->input->post('email'),
		// 			'EbayID' => $this->input->post('ebay_id'),
		// 			'user_name' => $this->input->post('username'),
		// 			'first_name' => $this->input->post('fname'),
		// 			'last_name' => $this->input->post('lname'),
		// 			'country' => $this->input->post('country'),
		// 			'user_credits' => 300, 
		// 			'hashed_password' => $hashed_password,
		// 			'token' => ''
		// 			);

		// 			if ($this->Auth_model->sign_up($data)) {

		// 				$this->session->set_flashdata('message', '
  //                 <div class="alert-icon "><i class="fa fa-check-circle"></i></div><strong> Success! </strong>Your account has been created successfully!
  //               ');
		// 				header('location:'.base_url());
		// 			}

  //           	}
            	
  //           }

		// $this->load->view('auth/sign_up');
	}

	public function forgot()
	{
		// Redirect to your logged in landing page here

		$data['success'] = false;
		 
		$this->form_validation->set_rules('email', 'Email', 'required|valid_email|callback_email_exists');
		
		if($this->form_validation->run()){
			$email = $this->input->post('email');
			$this->load->model('Auth_model');
			if ($this->Auth_model->is_user_available($email)) {

				$slug = md5($email . date('Ymd'));
				$ci = get_instance();
				$ci->load->library('email');
				$config['protocol'] = "smtp";
				$config['smtp_host'] = "ssl://smtp.gmail.com";
				$config['smtp_port'] = "465";
				$config['smtp_user'] = "d1lgiq87@gmail.com"; 
				$config['smtp_pass'] = "Ogromniq87";
				$config['charset'] = "utf-8";
				$config['mailtype'] = "html";
				$config['newline'] = "\r\n";

				$ci->email->initialize($config);

				$ci->email->from('d1lgiq87@gmail.com', 'Blabla');
				$list = array('georgideveloper@gmail.com');
				$ci->email->to($list);
				$this->email->reply_to('my-email@gmail.com', 'Explendid Videos');
				$ci->email->subject('This is an email test');
				$ci->email->message('To reset your password please click the link below and follow the instructions:
	      
				'. 'http://profitscraper.localhost/index.php/auth/reset/'.$slug .'/'.urlencode($email).'
				If you did not request to reset your password then please just ignore this email and no changes will occur.
				Note: This reset code will expire after '. date('j M Y'));
				$ci->email->send();
				
				
				$data['success'] = true;
			}
		}
		
		$this->load->view('auth/forgot_password', $data);
	}

	public function reset()
	{
		
		$this->load->helper('form');
		$data['success'] = false;
		 
		$email = $this->uri->segment(4);
		//print_r($email);
		//if(!$user_id) show_error('Invalid reset code.');
		$hash = $this->uri->segment(3);
		//print_r($hash);
		if(!$hash) show_error('Invalid reset code.a');
		
		$this->load->model('Auth_model');
			
		if($this->Auth_model->is_user_available(urldecode($email)) != 1) show_error('Invalid reset code.b');
		$slug = md5(urldecode($email) . date('Ymd'));
		if($hash != $slug) show_error('Invalid reset code.c');
	 
		$this->form_validation->set_rules('password', 'Password', 'required|min_length[5]');
		$this->form_validation->set_rules('password_conf', 'Confirm Password', 'required|matches[password]');
		
		if($this->form_validation->run()){

    		$hashed_password   = password_hash($this->input->post('password_conf'), PASSWORD_BCRYPT);
			$result = $this->Auth_model->reset_password(urldecode($email), $hashed_password);
			//print_r($pr);
			if ($result) {
				$data['success'] = true;
			}else{
				show_error('error occured');
			}
			
		}
		
		$this->load->view('auth/reset_password', $data);
	}

	public function is_user_available()
	{	
		$json = file_get_contents('php://input');
 // 		//echo json_encode(array("success" => $json));

 // //die();
 // // decoding the received JSON and store into $obj variable.
 		$obj = json_decode($json,true);


		$this->db->where('username', $obj['username']);
		$query = $this->db->get('users')->num_rows();
		//$query = 2;

		//$this->db->or_where('user_name', $username);
		if ($query > 0) {
			echo json_encode(array("result" => "true"));
			
		}else{
			echo json_encode(array("result" => "false"));
		}
	}

	public function email_exists($email)
	{
		$this->load->model('Auth_model');
		 
		if($this->Auth_model->is_user_available($email)){
			return true;
		} else {
			$this->form_validation->set_message('email_exists', 'We couldn\'t find that email address in our system.');
			return false;
		}
	}
}
