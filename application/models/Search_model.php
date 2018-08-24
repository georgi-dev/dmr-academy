<?php
class Search_model extends CI_Model
{
	public function __construct()
	{
		parent:: __construct();
		$this->load->database();
	}

	public function search($sch_id, $search_from){

	    $this->db->select('schedule_id, upc, ean, item_id, price_r,currency');
        $this->db->where('schedule_id', $sch_id);

        if ($search_from == 'UK') {

          $this->db->where('ean != ""');

          $this->db->where('ean != "Does not apply"');

        }
        else if($search_from == 'USA'){
          
          $this->db->where('upc != ""');
          $this->db->where('upc != "Does not apply"');


        }
          $q = $this->db->get('ebay_pro_detail');
		      return $q->result();
	}

	public function insert_amazon($sch_id, $identifier, $data){
    //print_r($upc);
    print_r($data);
	      $this->db->where('schedule_id',$sch_id);
   
        $res = $this->db->update_batch('ebay_pro_detail', $data, $identifier);
        if ($res) {
         return true;
        }else{
          return false;
        }
	}

	public function insert_walmart($sch_id, $upc, $data){

		$this->db->where('schedule_id',$sch_id);
        $this->db->where('upc',$upc);
        $this->db->update('ebay_pro_detail', $data);
	}
}

?>