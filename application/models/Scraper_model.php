<?php
class Scraper_model extends CI_Model
{
	public function __construct()
	{
		parent:: __construct();
		$this->load->database();
	}

	public function scraper_m(){
		$q = $this->db->query('
								SELECT
								  u.id,
								  ss.*
								FROM
								  `scraper_schedule` as ss
								LEFT JOIN
								  `users` u ON(ss.`user_id` = u.`id`)
								WHERE updated_date < DATE_SUB(NOW(), INTERVAL 1 DAY) AND ss.status = 0
								ORDER BY
								  u.`jobs_running` ASC,
								  ss.`created_date` ASC
								LIMIT 10'
							);
		$jobs = $q->result();

		return $jobs;
	}

	public function scraper_count_products(){
		$q = $this->db->query('
								SELECT
								  u.id,
								  ss.*
								FROM
								  `scraper_schedule` as ss
								LEFT JOIN
								  `users` u ON(ss.`user_id` = u.`id`)
								WHERE updated_date < DATE_SUB(NOW(), INTERVAL 1 DAY) AND ss.status = 5
								ORDER BY
								  u.`jobs_running` ASC,
								  ss.`created_date` ASC
								LIMIT 10'
							);
		$jobs = $q->result();

		return $jobs;
	}
	

	public function scraper_update_count_products(){
		$q = $this->db->query('
								SELECT
								  u.id,
								  ss.*
								FROM
								  `scraper_schedule` as ss
								LEFT JOIN
								  `users` u ON(ss.`user_id` = u.`id`)
								WHERE updated_date < DATE_SUB(NOW(), INTERVAL 1 DAY) AND ss.status = 7
								ORDER BY
								  u.`jobs_running` ASC,
								  ss.`created_date` ASC
								LIMIT 10'
							);
		$jobs = $q->result();

		return $jobs;
	}

	public function runScraper($UserId) 
	{
	    //$Cmd = "php index.php ebay executelink_cron1 ". $UserId . " " . $schedule_id . " &";
	 	
	    //echo exec($Cmd);
	    $this->db->query('
		    				UPDATE
					    		`users`
					    	SET 
					    		`jobs_running` = (`jobs_running` + 1) 
					    	WHERE 
					    		`id` = '. $this->db->escape($UserId) .' 
	    				');

	}

	// public function runScraper($UserId, $schedule_id) 
	// {
	//     $Cmd = "php index.php ebay executelink_cron1 ". $UserId . " " . $schedule_id . " &";
	 	
	//     echo exec($Cmd);
	//     $this->db->query('
	// 	    				UPDATE
	// 				    		`users`
	// 				    	SET 
	// 				    		`jobs_running` = (`jobs_running` + 1) 
	// 				    	WHERE 
	// 				    		`id` = '. $this->db->escape($UserId) .' 
	//     				');

	// }
	// public function runScraper($UserId, $schedule_id) 
	// {
	//     $Cmd = "php index.php ebay executelink_cron1 ". $UserId . " " . $schedule_id . " &";
	 	
	//     echo exec($Cmd);
	//     $this->db->query('
	// 	    				UPDATE
	// 				    		`users`
	// 				    	SET 
	// 				    		`jobs_running` = (`jobs_running` + 1) 
	// 				    	WHERE 
	// 				    		`id` = '. $this->db->escape($UserId) .' 
	//     				');

	// }

	public function count_products($scraped_result, $search_link, $schedule_id) 
	{	

	    $this->db->query('
		    				UPDATE
					    		`scraper_schedule`
					    	SET 
					    		`scraped_result` = '.$scraped_result.', `status` = 6, `search_link` = '.$this->db->escape($search_link).'
					    	WHERE 
					    		 `schedule_id` = '.$schedule_id.'
	    				');// schedule_id

	}

	public function update_count_products($scraped_result, $search_link, $schedule_id) 
	{	

	    $this->db->query('
		    				UPDATE
					    		`scraper_schedule`
					    	SET 
					    		`scraped_result` = '.$scraped_result.', `status` = 8, `search_link` = '.$this->db->escape($search_link).'
					    	WHERE 
					    		 `schedule_id` = '.$schedule_id.'
	    				');// schedule_id

	}
	public function finishScraper($UserId)
	{	

		//print_r($UserId);

		 $this->db->query('
	    					UPDATE 
		    					`users` 
		    				SET 
		    					`jobs_running` = (`jobs_running` - 1) 
		    				WHERE 
		    					`id` = '.$this->db->escape($UserId).'
	    				');

		//print_r($q);
	}

	public function scrape_amazon_detail(){
		$q = $this->db->query('
								SELECT
								  epd.upc,
								  epd.ean,
								  schedule_id,
								  url,
								  price_r,
								  search_from
								FROM
								  `ebay_pro_detail` as epd
								WHERE epd.amz_link_status = 1
								ORDER BY schedule_id DESC
								'
							);
		$jobs = $q->result();

		return $jobs;
	}
	
}

?>