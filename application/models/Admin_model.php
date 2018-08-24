<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Admin_model extends CI_Model
{
    function __construct()
    {
        parent::__construct();
    }
	function isExistTeacherold($json)
        {
            $this->db->where('userType !=',1);
            //$this->db->or_where('name', $json['name']);
            $this->db->where('mobile', $json['mobile']);
            $result=$this->db->get('users')->row_array();
            //echo $this->db->last_query(); die();
            if(!empty($result)){

              $schoolName = $this->schoolNameById($result);
              $result['schoolName'] = $schoolName;
              return $result;

            }else
            {
                return false;
            }

        }

function isExistTeacher($json)
        {
            $this->db->where('userType !=',1);
            //$this->db->or_where('name', $json['name']);
            $this->db->where('mobile', $json['mobile']);
            $result=$this->db->get('users')->row_array();
            //echo $this->db->last_query(); die();
            if(!empty($result)){
                  if($result['name'] == $json['name']){
                   return false;   
                  }  else{
              $schoolName = $this->schoolNameById($result);
              $result['schoolName'] = $schoolName;
              return $result;
                  }

            }else{return false;}

        }


    function isSuperAdminExist($document)
    {
        $this->db->where('username', $document['userName']);
        $result = $this->db->get('superAdmin')->row_array();
        if(!empty($result))
        {
            if($result['password']==$document['password'])
            {
                return 1;
            }
            else
            {
                return 2;
            }
        }
        else
        {
            return false;
        }
    }

  
function schoolNameById($json){
   // pre($json);
        $this->db->select('schools.name as schoolName');
         $this->db->where('userId', $json['id']);
         $this->db->join('schools','schools.id =  teachers.schoolId');
        $result=$this->db->get('teachers')->row_array();
        //pre($result); die();
        if(!empty($result)){return $result['schoolName'];}else{return false;}
    }

      function isAlreadyExistLecture($json)
    {
        //pre($json);
        $this->db->where('subjectId', $json['subjectId']);
        $this->db->where('classId', $json['classId']);
        $this->db->where('teacherId', $json['teacherId']);
        $this->db->where('section', $json['section']);
        $result=$this->db->get('madarsa_lecture')->row_array();
        //echo $this->db->last_query();
        //pre($result); die('123');
        if(!empty($result)){return $result;}else{return false;}
    }

    function getClassNameByClassId($cId)
    {
        $this->db->where('id', $cId);
        $result=$this->db->get('classes')->row_array();
        return $result;
    }

    function isSchoolExist($json)
    {
        $this->db->where('schoolCode', $json['schoolCode']);
	//$this->db->or_where('phone', $json['phone']);
	$this->db->or_where('name', $json['name']);
        $result=$this->db->get('madarsa_schools')->row_array();
        if(!empty($result)){return $result;}else{return false;}
    }


    function isPhoneExistmultiple($json)
    {
        $this->db->where('mobile', $json['mobile']);
        $this->db->where('name',   $json['name']);
        $result=$this->db->get('madarsa_users')->row_array();
        if(!empty($result)){return $result;}else{return false;}
    }

function isPhoneExist($json,$schoolId)
    {
        $this->db->where('mobile', $json['mobile']);
        $this->db->where('name',   $json['name']);
        $result=$this->db->get('madarsa_users')->row_array();
        $this->db->where('userId',$result['id']);
        $res = $this->db->get('parents')->row_array();
        
        $this->db->where('id',$res['studentId']);
        $std = $this->db->get('students')->row_array();
        
        if($std['schoolId'] == $schoolId){
            return $result;
        }else{return false;}
    }
    
    
    function nameByPhone($json)
    {
        $this->db->where('mobile', $json);
        $result=$this->db->get('madarsa_users')->row_array();
        if(!empty($result)){return $result;}else{return false;}
    }


    function isSubjectExist($json,$schoolId)
    {
        $this->db->where('name', $json);
	$this->db->where('schoolId', $schoolId);
        $result=$this->db->get('madarsa_subjects')->row_array();
        if(!empty($result)){return $result;}else{return false;}
    }


    function isClassExist($json,$schoolId)
    {
        $this->db->where('name', $json['name']);
        $this->db->where('section', $json['section']);
        $this->db->where('schoolId', $schoolId);
        $result=$this->db->get('madarsa_classes')->row_array();
        if(!empty($result)){return $result;}else{return false;}
    }

      function isClassLectureExist($json)
    {
        $this->db->where('classId', $json['classId']);
        $this->db->where('section', $json['section']);
        //$this->db->where('schoolId', $schoolId);
        $result=$this->db->get('madarsa_lecture')->result();
        if(!empty($result)){return $result;}else{return false;}
    }

    function isEmailExist($email,$name)
    {
        $this->db->where('email', $email);
        $this->db->where('name', $name);
        $this->db->where('userType',1);
        $result=$this->db->get('users')->row_array();
        if(!empty($result)){return $result;}else{return false;}
    }
    
    function isEmailExist1($email)
    {
        $this->db->where('email', $email);
        $this->db->where('userType',1);
        $result=$this->db->get('users')->row_array();
        if(!empty($result)){return $result;}else{return false;}
    }

    function isEmailExistSA($email)
    {
        $this->db->where('email', $email);
        $result=$this->db->get('superAdmin')->row_array();
        if(!empty($result)){return $result;}else{return false;}
    }

    function isUserEmailExist($json)
    {
        //$this->db->where('email', $json['email']);
        $this->db->where('mobile', $json['mobile']);
        $result=$this->db->get('users')->row_array();
        if(!empty($result)){
            return $result;
        }else{return false;}
    }



    function getClassId($className,$section,$schoolId)
    {      //  echo $schoolId; die();
        $this->db->where('section', $section);
        $this->db->where('name', $className);
        $this->db->where('schoolId', $schoolId);
        $result=$this->db->get('classes')->row_array();
        if(!empty($result)){return $result;}else{return false;}
    }

    function getSchoolEvents($id)
    {

        $this->db->order_by('id','desc');
        $this->db->where('schoolId',$id);
        $result = $this->db->get('madarsa_events')->result_array();
        if(!empty($result))
        {
            foreach($result as $res)
            {
                $images    = $this->getEventImages($res['id']);
                //pre($images);
                $className = $this->getClassNameByClassId($res['classId']);
                $res['className'] = $className['name'];
                for($i=0;$i<count($images);$i++)
                {
                   $res['eventImage'.$i] = $images[$i]['image'];
                }

              // pre($res); die();

                $final[] = $res;
            }
        }
        //pre($final);
        if(!empty($final)){return $final;} else {return FALSE;}
    }


    function getEventImages($json)
    {
        $this->db->where('eventId', $json);
        //$this->db->or_where('mobile', $json['mobile']);
        $result = $this->db->get('eventimages')->result_array();
        //pre($result); die();
        if(!empty($result)){return $result;}else{return false;}
    }

    function getStudentsList($document)
    {
        //pre($document); die();
        $this->db->select('students.id as id,students.name as name,students.regno as regno,students.dob as dob,students.email as email,students.phone as phone,students.classId as classId,students.fatherName as fatherName,students.motherName as motherName');
        $this->db->where('admins.userId', $document);
        $this->db->join('students','students.schoolId=admins.schoolId');
        $result = $this->db->get('admins')->result_array();
       //echo $this->db->last_query();
       // pre($result); die();
        foreach($result as $res)
        {
            $className = $this->getClassName($res['classId']);
            $res['className'] = $className;
            $final[]= $res;
        }
      //  pre($res);
        if(!empty($res))
        {

           return $final;
        }
        else
        {
            return false;
        }
    }


     function getClassName($document)
    {
        $this->db->where('id', $document);
        $result = $this->db->get('classes')->row_array();
        if(!empty($result))
        {
            return $result['name'];
        }
        else
        {
            return false;
        }
    }


     function addHolidays()
    {
          $insertArray = array(
				'title'=>$title,
				'classId'=>$classId,
				'dated'=>$dated,
				'schoolId'=>$schoolId,
                                'created'=>$created,
                                'modified'=>$modified
				);
          $result = $this->db->insert('madarsa_holidays',$insertArray);
           if(!empty($result))
           {
           return TRUE;
           }
           else
           {
           return FALSE;
           }
    }


    function viewHolidays()
    {
        $result = $this->db->get('madarsa_holidays')->result_array();
	if(!empty($result))
        {
            foreach($result as $res)
            {
                $className = $this->getClassNameByClassId($res['classId']);
                $res['className'] = $className['name'];
                $final[] = $res;
            }
        }
        //pre($final); die();
        return $final;
    }


    function viewNotification($id)
    {
        $this->db->order_by('id',"desc");
        $this->db->where('schoolId',$id);
        $result = $this->db->get('madarsa_notification')->result_array();
        return (!empty($result)) ? $result : false;
	//return $final;
    }

    function editNotification($updateArray,$id)
    {

        $this->db->where('id',$id);
	$result = $this->db->update('madarsa_notification',$updateArray);
        return (!empty($result)) ? true : false;
    }

    public function deleteNotification($id = null)
	{
	 $result = $this->db->delete('madarsa_notification', array('id'=>$id));
	    return (!empty($result)) ? $result : false;
         //return $result;
	}

    public function deleteEvent($id = null)
	{
	$result = $this->db->delete('madarsa_events', array('id'=>$id));
	$result1 = $this->db->delete('madarsa_eventimages', array('eventId'=>$id));
	    return (!empty($result)) ? $result : false;
        //return $result;
	}
    public function deleteStudent($id = null)
	{
		$resu = $this->db->delete('madarsa_students', array('id'=>$id));
        $this->db->where('studentId',$id);
        $res = $this->db->get('parents')->row_array();
        $reslt = $this->db->delete('madarsa_users', array('id'=>$res['userId']));
        
        $result = $this->db->delete('madarsa_parents', array('id'=>$res['id']));
        return $result;
	}

    public function deleteTeacher($id = null)
	{
	$imageUrl['img'] = $this->db->select('*')->from('madarsa_users')->where(array('id'=>$id))->get()->row();
	$path = $imageUrl['img']->profileImage;
	$location = getcwd().'/profileImages/'.$path;
	$this->db->where(array('id'=>$id));
	$result = $this->db->delete('madarsa_users');
        $this->db->where(array('userId'=>$id));
        $result = $this->db->delete('madarsa_teachers');
	return $result;

	}

        public function deleteSubject($id = null)
	{
	 $this->db->where(array('id'=>$id));
         $result = $this->db->delete('subjects');
         return $result;
        }

        public function deleteParents($id = null)
	{
	$imageUrl['img'] = $this->db->select('*')->from('madarsa_users')->where(array('id'=>$id))->get()->row();
	$path = $imageUrl['img']->profileImage;
	$location = getcwd().'/profileImages/'.$path;
	$this->db->where(array('id'=>$id));
	$result = $this->db->delete('madarsa_users');
        return $result;
        }

        public function deleteGroup($id = null)
	{
	$result = $this->db->delete('madarsa_groups', array('id'=>$id));
	return $result;
	}

    function allAdmins()
    {
        $this->db->where('userType', 1);
        $this->db->order_by('users.id', 'desc');
        $this->db->join('admins','admins.userId=users.id');
        $result=$this->db->get('users')->result_array();
        return $result;
    }

    function addEvent($insertArray)
    {

        $result = $this->db->insert('madarsa_events',$insertArray);
        $lastinsertedId = $this->db->insert_id();
        return $lastinsertedId;
    }

     function addNotification($insertArray)
    {

        $result = $this->db->insert('madarsa_notification',$insertArray);
        $lastinsertedId = $this->db->insert_id();
        return $lastinsertedId;
    }

      function isFatherExist($number,$name)
    {

        $this->db->where('userType', 3);
        $this->db->where('mobile', $number);
        $result=$this->db->get('users')->row_array();
        //pre($result);
        if(!empty($result)){
        if($result['name'] != $name){
        return 1;
        }else{
            return 2;
        }
        }else{
            return 0;
        }
    }

     function addNotificationMsg($insertArray)
    {

        $result = $this->db->insert('madarsa_notificationmsg',$insertArray);
        return $result;
    }


    function editEvent($updateArray)
    {

                    $this->db->where('id',$updateArray['id']);
                    $result = $this->db->update('madarsa_events',$updateArray);
                    return $result;
    }

    function getStudentIdByRegno($regno)
    {
        //$this->db->where('userType', 3);
        $this->db->where('regno', $regno);
        $result=$this->db->get('students')->row_array();
       // pre($result);
       // echo $result['id']; die();
        return $result;
    }


    function ageByDOB($date)
    {
       list($year,$month,$day) = explode("-",$date);
    $year_diff  = date("Y") - $year;
    $month_diff = date("m") - $month;
    $day_diff   = date("d") - $day;
    if ($day_diff < 0 || $month_diff < 0) $year_diff--;
    //echo $year_diff; die();
    return $year_diff;
    }


    function addGroup($insertArray)
    {

        $result = $this->db->insert('madarsa_groups',$insertArray);
        return $result;
    }

    function editGroup($updateArray)
    {
        $this->db->where('id',$updateArray['id']);
        $result = $this->db->update('madarsa_groups',$updateArray);
        return $result;
    }

    function viewGroup()
    {
        $result = $this->db->get('madarsa_groups')->result_array();
	if(!empty($result))
        {
        return $result;
        }
        else
        {
            return false;
        }
        //pre($final); die();
   }


    function getTeachersBySchoolId($id)
    {
        $this->db->where('schoolId',$id);
        $this->db->join('users','users.id = teachers.userId');
        $result = $this->db->get('madarsa_teachers')->result();
       // pre($result);
        //echo $this->db->last_query(); die();
	if(!empty($result))
        {
        return $result;
        }
        else
        {
            return false;
        }
        //pre($final); die();
   }

    function getParentsBySchoolId($id)
    {
        $this->db->where('schoolId',$id);
        $this->db->join('parents','students.id = parents.studentId');
        $this->db->join('users','users.id = parents.userId');
        $result = $this->db->get('madarsa_students')->result();
    	if(!empty($result))
        {
        return $result;
        }
        else
        {
            return false;
        }
    }


     function getTeachersBySchoolIdN($id)
    {
        $this->db->where('schoolId',$id);
        $this->db->where('notification',1);
        $this->db->join('users','users.id = teachers.userId');
        $result = $this->db->get('madarsa_teachers')->result_array();
       // pre($result);
        //echo $this->db->last_query(); die();
	if(!empty($result))
        {
        return $result;
        }
        else
        {
            return false;
        }
        //pre($final); die();
   }

    function getParentsBySchoolIdN($id)
    {
        $this->db->where('schoolId',$id);
         $this->db->where('notification',1);
        $this->db->join('parents','students.id = parents.studentId');
        $this->db->join('users','users.id = parents.userId');
        $result = $this->db->get('madarsa_students')->result_array();
    	if(!empty($result))
        {
        return $result;
        }
        else
        {
            return false;
        }
    }


    function getParentsByClassId($id)
    {
        $this->db->where('classId',$id);
        $this->db->join('parents','students.id = parents.studentId');
        $this->db->join('users','users.id = parents.userId');
        $result = $this->db->get('madarsa_students')->result_array();
    	if(!empty($result))
        {
        return $result;
        }
        else
        {
            return false;
        }
    }


    function getParentListPush($json)
    {
        $this->db->where('classId',$json['id']);
        $this->db->join('parents','students.id = parents.studentId');
        $this->db->join('users','users.id = parents.userId');
        $result = $this->db->get('madarsa_students')->result_array();
    	if(!empty($result))
        {
        return $result;
        }
        else
        {
            return false;
        }
    }


    function getTeacherListPush($json)
    {
        $this->db->where('classId',$json['id']);
        $this->db->join('users','users.id = lecture.teacherId');
        $result = $this->db->get('madarsa_lecture')->result_array();
    	if(!empty($result))
        {
        return $result;
        }
        else
        {
            return false;
        }
    }

    function getUsersById($id)
    {
        $this->db->where('id',$id);
        $result = $this->db->get('madarsa_users')->row_array();
    	if(!empty($result))
        {
        return $result;
        }
        else
        {
            return false;
        }
    }


    function getDataByKeyword($keyword)
    {
        $this->db->select('id,name,email,mobile,userType');
        $this->db->group_start()
            ->like('name',$keyword)
            ->or_like('mobile',$keyword)
            ->or_like('email',$keyword)
            ->group_end();
        $result = $this->db->get('madarsa_users')->result_array();

        if(!empty($result))
        {
            $this->db->select('id,name,email,phone');
            $this->db->group_start()
            ->like('name',$keyword)
            ->or_like('phone',$keyword)
            ->or_like('email',$keyword)
            ->group_end();
        $result1 = $this->db->get('madarsa_students')->result_array();
        foreach($result1 as $result1)
        {
            $result1['userType'] = 4; // for students
            $result1['mobile']   = $result1['phone']; // for students
        }

        }
        if(!empty($result) and !empty($result1))
        {
        $result[] = $result1;
        return $result;
        }
        else if(!empty ($result))
        {
            return $result;
        }
        else if(!empty($result1))
        {
            return $result1;
        }
        else
        {
          return false;
        }
    }


     function getDataByKeyword1($keyword)
    {
      $this->db->select('users.id,users.name,users.email,users.mobile,users.userType,schools.name as schoolName,schools.schoolCode as schoolCode');
      $this->db->group_start()
          ->like('users.name',$keyword)
          ->or_like('users.mobile',$keyword)
          ->or_like('users.email',$keyword)
          ->group_end();
      //$this->db->where('schoolId',$schoolId);
      $this->db->join('parents','parents.studentId = students.id');
      $this->db->join('users','users.id = parents.userId');
      $this->db->join('schools','schools.id = students.schoolId');
      $result = $this->db->get('students')->result_array();
        if(empty($result))
        {
            $result = array();
        }
        $this->db->select('students.id,students.name,students.email,students.phone,schools.name as schoolName,schools.schoolCode as schoolCode');
      //  $this->db->where('schoolId',$schoolId);
        $this->db->group_start()
        ->like('students.name',$keyword)
        ->or_like('students.phone',$keyword)
        ->or_like('students.email',$keyword)
        ->group_end();
        $this->db->join('schools','schools.id = students.schoolId');
    $result10 = $this->db->get('madarsa_students')->result_array();
        if(empty($result10))
        {
            $result1 = array();
        }
        foreach($result10 as $res)
        {
            $res['userType'] = 4; // for students
            $res['mobile']   = $res['phone']; // for students
            $result1[] = $res;
        }
        $this->db->select('id,name as schoolName,name,email,phone,schoolCode');
      //  $this->db->where('id',$schoolId);
        $this->db->group_start()
            ->like('name',$keyword)
            ->or_like('phone',$keyword)
            ->or_like('email',$keyword)
            ->group_end();
        $result20 = $this->db->get('madarsa_schools')->result_array();
        foreach($result20 as $res)
        {
            $res['userType'] = 5; // for schools
            $res['mobile']   = $res['phone']; // for students
            $result2[]= $res;

        }
        if(empty($result20))
        {
            $result2 = array();
        }
        $arr=array();// die();
//        pre($result);
//        pre($result1);
//        pre($result2);
//        die();
        $arr = array_merge($result,$result1,$result2); //pre($arr); die();
        if(!empty($arr))
        {
            return $arr;
        }
        else
        {
            return FALSE;
        }
    }


    function getDataByKeyword2($keyword,$adminId)
   {
       $this->db->where('userId',$adminId);
       $result100 = $this->db->get('admins')->row_array();
       //pre($result); die();
       $schoolId = $result100['schoolId'];
       //echo $schoolId;
       $this->db->select('users.id,users.name,users.email,users.mobile,users.userType,schools.name as schoolName,schools.schoolCode as schoolCode');
       $this->db->group_start()
           ->like('users.name',$keyword)
           ->or_like('users.mobile',$keyword)
           ->or_like('users.email',$keyword)
           ->group_end();
       $this->db->where('schoolId',$schoolId);
       $this->db->join('parents','parents.studentId = students.id');
       $this->db->join('users','users.id = parents.userId');
       $this->db->join('schools','schools.id = students.schoolId');
       $result = $this->db->get('students')->result_array();
       if(empty($result))
       {
           $result = array();
       }

       //teacher
      $this->db->select('users.id,users.name,users.email,users.mobile,users.userType,schools.name as schoolName,schools.schoolCode as schoolCode');
       $this->db->group_start()
           ->like('users.name',$keyword)
           ->or_like('users.mobile',$keyword)
           ->or_like('users.email',$keyword)
           ->group_end();
       $this->db->where('schoolId',$schoolId);
       $this->db->join('users','users.id = teachers.userId');
       $this->db->join('schools','schools.id = teachers.schoolId');
       $result23 = $this->db->get('teachers')->result_array();
       if(empty($result23))
       {
           $result23 = array();
       }

           $this->db->select('students.id,students.name,students.email,students.phone,schools.name as schoolName,schools.schoolCode as schoolCode');
           $this->db->where('schoolId',$schoolId);
           $this->db->group_start()
           ->like('students.name',$keyword)
           ->or_like('students.phone',$keyword)
           ->or_like('students.email',$keyword)
           ->group_end();
           $this->db->join('schools','schools.id = students.schoolId');
       $result10 = $this->db->get('madarsa_students')->result_array();
       if(empty($result10))
       {
           $result1 = array();
       }
       foreach($result10 as $res)
       {
           $res['userType'] = 4; // for students
           $res['mobile']   = $res['phone']; // for students
           $result1[] = $res;
       }
       $this->db->select('id,name as schoolName,name,email,phone,schoolCode');
       $this->db->where('id',$schoolId);
       $this->db->group_start()
           ->like('name',$keyword)
           ->or_like('phone',$keyword)
           ->or_like('email',$keyword)
           ->group_end();
       $result20 = $this->db->get('madarsa_schools')->result_array();
       foreach($result20 as $res)
       {
           $res['userType'] = 5; // for schools
           $res['mobile']   = $res['phone']; // for students
           $result2[]= $res;

       }
       if(empty($result20))
       {
           $result2 = array();
       }
       $arr=array();// die();
//        pre($result);
//        pre($result1);
//        pre($result2);
//        die();
       $arr = array_merge($result,$result1,$result2,$result23); //pre($arr); die();
       if(!empty($arr))
       {
           return $arr;
       }
       else
       {
           return FALSE;
       }
   }
}
