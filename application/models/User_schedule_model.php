<?php
class User_schedule_model extends CI_Model
{
    public function __construct()
    {
        parent:: __construct();
        $this->load->database();
    }


    function is_usr_sche_available($data)
    {

        $this->db->select('user_sch_id');
        $this->db->where('user_id', $data['user_id']);
        $this->db->where('schedule_id', $data['schedule_id']);
        //$this->db->where('is_active', $data['is_active']);
        $query = $this->db->get('user_schedule');
        return $query;
    }


    function get_schedule($user_id,$limit, $start)
    {
        $this->db->limit($limit, $start);
        $this->db->from('user_schedule a');
        $this->db->join('scraper_schedule b', 'b.schedule_id = a.schedule_id'); 
        $this->db->where('a.user_id',$user_id);
        $query = $this->db->get();

        
        //$query = $this->db->get('scraper_schedule');
        return $query->result();
    }

    function schedule_id($user_id)
    {
        $this->db->select('schedule_id');
        $this->db->where('user_id',$user_id);
        $query = $this->db->get('user_schedule');
        return $query->result();
    }
    

    function schedule_id2($usr_sche_id)
    {
        $this->db->select('schedule_id');
        $this->db->where('user_sch_id',$usr_sche_id);
        $query = $this->db->get('user_schedule');
        //echo print_r($query->result());die();
        return $query->result();
    }


}

?>