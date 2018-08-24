<?php
class Schedule_model extends CI_Model
{
    public function __construct()
    {
        parent:: __construct();
        $this->load->database();

    }
    function pending($id)//2
    {
        $new=array(
               'status'=>2,
               'updated_date' => date('Y-m-d H:i:s'),
                );
        $this->db->where('schedule_id', $id);
        $this->db->update('scraper_schedule', $new); 
        return $this->db->affected_rows();
        

    }
    function active($id)//2
    {
        $new=array(
               'status'=>1,
               'updated_date' => date('Y-m-d H:i:s'),
                );
        $this->db->where('schedule_id', $id);
        $this->db->update('scraper_schedule', $new); 
        return $this->db->affected_rows();
        

    }

    function change_status_sch($sch_id){

        $new=array(
               'status'=> 7,
               'updated_date' => date("Y-m-d H:i:s")
                );
        $this->db->where('schedule_id', $sch_id);
        $this->db->update('scraper_schedule', $new); 
        return $this->db->affected_rows();
    }

    function check_if_scraped_results_exists($sch_id){

        $this->db->select('scraped_result');
        $this->db->where('schedule_id', $sch_id);
        $query = $this->db->get('scraper_schedule'); 
         
        return $query->result();
    }


    function updatesearchlink($link,$id)//2
    {

        $new=array(
               'search_link'=>$link,
                );
        $this->db->where('schedule_id', $id);
        $this->db->update('scraper_schedule', $new); 
        return $this->db->affected_rows();
        

    }
    function cron_get_schedule($date)
    {
        $this->db->where('updated_date <=', $date);
        //$this->db->where('status',2);
        $query=$this->db->get("scraper_schedule");
        if($query->num_rows() > 0)
        {
            //echo print_r($query->row());die();
            return $query->row();
        }else{
            return false;
        }
    }
    


    function get_count($schedule_id)
    {

        $count = count($schedule_id);

        if($count == 0)
            return false;
        if($count > 1)
            $query = $this->db->query('SELECT * FROM ebay_pro_detail WHERE schedule_id IN ('.implode(',',$schedule_id).')');
        if($count == 1)
            $query = $this->db->query('SELECT * FROM ebay_pro_detail WHERE schedule_id='.$schedule_id[0]);    
        
        return $query->num_rows();
    }



    function get_schedule($limit, $start)
    {
        //$this->db->select('search_from,seller_name');
        $this->db->limit($limit, $start);
        //$this->db->where('is_active', 1);
        $query = $this->db->get('scraper_schedule');
        //$query = $this->db->query('SELECT * FROM scraper_schedule');
        return $query->result();
    }

    function get_schedule_by_id($schedule_id)
    {
        //$this->db->select('search_from,seller_name');
        $this->db->where('schedule_id',$schedule_id);
        //$this->db->where('is_active', 1);
        $query = $this->db->get('scraper_schedule');
        //$query = $this->db->query('SELECT * FROM scraper_schedule');
        return $query->row();
    }

    function get_schedule_id($userid)
    {
        $this->db->select('schedule_id');
        $this->db->where('user_id',$userid);
        $query = $this->db->get('scraper_schedule');
        return $query;
    }


    function is_schedule_available($data)
    {

        $this->db->select('schedule_id');
        $this->db->where('search_from', $data['search_from']);
        $this->db->where('seller_name', $data['seller_name']);
        $this->db->where('keyword', $data['keyword']);
        $this->db->where('item', $data['item']);
        $query = $this->db->get('scraper_schedule');

        return $query;
    }

    function delete_sch($data)
    {   
        //print_r($data);
        $q = $this->db->query('
                                DELETE
                                    us.*
                                FROM
                                    user_schedule AS us
                                LEFT JOIN
                                    users u ON u.id = us.user_id
                                WHERE us.user_sch_id = '.$data['sch_id'].' AND us.user_id IN (SELECT users.id FROM users WHERE users.user_id = '.$data['session_user_id'].')
                            ');
        //$result = $q->row();
        //print_r($q);
        return $q;
    }

}

?>