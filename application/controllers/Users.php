<?php
//ob_start();
defined('BASEPATH') OR exit('No direct script access allowed');

class Users extends CI_Controller {
	
	public function __construct()

	{

		parent:: __construct();

		$this->load->database();

		$this->load->library('pagination');	

		$this->load->library('session');

		$this->load->library('form_validation');
		$this->load->helper('url');
		$this->load->helper('get_page');
		
	}
	public function get_lessons_percent_status(){

		$json = file_get_contents('php://input');
 		//echo json_encode(array("success" => $json));

 //die();
 // decoding the received JSON and store into $obj variable.
 		$obj = json_decode($json,true);

		$q = $this->db->select('*')->from('users')->where('username',$obj['username'])->get();
		echo json_encode($q->result());
	}

	public function create_user_language_table(){

		for ($i=1; $i < 17; $i++) {
			$data = array(	
							'id' => $i,
							'user_id' => 1,
							'language_id' => 1,
							'syllabus_id' => 1,
							'syllabus_sub_id' => $i,
							'percents' => 0
							);
			$this->db->insert('user_progress',$data);
		}
		echo json_encode(array('hello'=>'world'));
	}

	// public function update_user_progress(){

	// 	$json = file_get_contents('php://input');
 // 		//echo json_encode(array("success" => $json));

	// 	 //die();
	// 	 // decoding the received JSON and store into $obj variable.
 // 		$obj = json_decode($json,true);

	// 	//$data = array('percent' => 6);
	// 	$this->db->where(array(
	// 							  'userId' 			=>  1,
	// 					          'languageId' 		=>  1,
	// 					          'syllabusId' 		=> 1,
	// 					          'syllabus_sub_id' => 1
	// 							));
	// 	$this->db->set('percent','percent+6',FALSE);
	// 	$this->db->update('user_progress');

	// 	echo json_encode(array('hello'=>$obj));
	// }
}	

