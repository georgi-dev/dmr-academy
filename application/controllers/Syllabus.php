<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Syllabus extends CI_Controller {

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


	public function get_all_titles($syllabus_id){

		//$q = $this->db->select('id,sub_syllabus_title,status')->from('language_sub_syllabus')->where(array('syllabus_id' => $syllabus_id))->get();


// 		SELECT language_sub_syllabus.sub_syllabus_title,user_progress.status
// FROM language_sub_syllabus
// LEFT JOIN user_progress ON language_sub_syllabus.sub_syllabus_id = user_progress.syllabus_sub_id
		
	$q= $this->db->select('language_sub_syllabus.*, user_progress.status')
			     ->from('language_sub_syllabus')
			     ->join('user_progress','language_sub_syllabus.syllabus_sub_id = user_progress.syllabus_sub_id','left')
			     ->where('language_sub_syllabus.syllabus_id',$syllabus_id)
			     ->get();
		//header('Access-Control-Allow-Origin:http://dmr-app.localhost');

		echo json_encode($q->result());
	}

	public function get_single_syllabus_lesson_body($syllabus_id, $lesson_id_body){

		//$q = $this->db->select('id,sub_syllabus_body,sub_syllabus_instructions')->from('language_sub_syllabus')->where(array('id' => $lesson_id_body))->get();
		
		$q= $this->db->select(
							   'instructions.instruction_body,
								instructions.instruction_solution,
								language_sub_syllabus.sub_syllabus_title,
								language_sub_syllabus.sub_syllabus_body,
								user_progress.status,
								user_progress.instruction_status,
								language_sub_syllabus.syllabus_id,
								language_sub_syllabus.syllabus_sub_id
							   '
							)
			     ->from('language_sub_syllabus')
			     ->join('user_progress','language_sub_syllabus.syllabus_sub_id = user_progress.syllabus_sub_id','left')
			     ->join('instructions','language_sub_syllabus.syllabus_sub_id = instructions.sub_syllabus_id','left')
			     ->where(array('instructions.syllabus_id' => $syllabus_id,'instructions.sub_syllabus_id' => $lesson_id_body ))
			     ->get();

		// $q= $this->db->select(
		// 					   'instructions.*
								
		// 					   '
		// 					)
		// 	     ->from('instructions')
		// 	     // ->join('user_progress','language_sub_syllabus.syllabus_sub_id = user_progress.syllabus_sub_id','left')
		// 	     //->join('instructions','language_sub_syllabus.syllabus_sub_id = instructions.sub_syllabus_id','left')
		// 	     ->where(array('instructions.syllabus_id' => $syllabus_id,'instructions.sub_syllabus_id' => $lesson_id_body ))
		// 	     ->get();

		echo json_encode($this->db->last_query());
		//echo json_encode($q->result());

	}



	public function index()
	{	

		$q = $this->db->select('*')->from('language_sub_syllabus')->where(array('syllabus_id' => 1, 'sub_syllabus_id' => 1))->get();

		//header('Access-Control-Allow-Origin:http://dmr-app.localhost');

		//echo json_encode($q->result());
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

	public function update_user_progress(){

		$json = file_get_contents('php://input');
 		//echo json_encode(array("success" => $json));

		 //die();
		 // decoding the received JSON and store into $obj variable.
 		$obj = json_decode($json,true);

 		$syllabus_sub_id_status = $obj['status'];
 		if ($syllabus_sub_id_status !== '0') {
 			$this->db->where(array(
								  'user_id' 			=> $obj['user_id'],
						          'language_id' 		=> $obj['language_id'],
						          'syllabus_id' 		=> $obj['syllabus_id'],
						          'syllabus_sub_id' 	=> $obj['syllabus_sub_id'],

								));
 			$this->db->set('percents','percents+6',FALSE);



			$this->db->set('status','1');
			$this->db->update('user_progress');

			echo json_encode(array('hello'=>$obj));
 		}
		$this->db->where(array(
								  'user_id' 			=> $obj['user_id'],
						          'language_id' 		=> $obj['language_id'],
						          'syllabus_id' 		=> $obj['syllabus_id'],
						          'syllabus_sub_id' 	=> $obj['syllabus_sub_id']
								));
		//$this->db->set('percents','percents+6',FALSE);



			$this->db->set('instruction_status',$obj['instruction_status']);
			$this->db->update('user_progress');

			echo json_encode(array('hello'=>$obj));
	}
}
