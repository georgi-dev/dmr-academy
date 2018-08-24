

	<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Header extends CI_Controller {

public function __construct()
{

	parent:: __construct();

	$this->load->database();

	$this->load->library('pagination');	

	$this->load->library('session');

	$this->load->library('form_validation');
	$this->load->helper('url');
	
}

	public function index(){

		$this->load->model('Users_credits');
		$users_credits = $this->Users_credits->index();

		$this->load->view('includes/menu-top',$users_credits);
	}

}

