<?php

session_start();//開啟session
// 處理 POST 請求
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 獲取 POST 數據
    $data = json_decode(file_get_contents('php://input'), true);

    // 確保收到有效數據
    if ($data && isset($data['page']) && isset($data['visitTime'])) {
        // 獲取頁面和瀏覽時間
        if(strlen($data['page'])==16)
            $page=substr($data['page'],10,2);
        else
            $page=substr($data['page'],10,4);		
        $visitTime = $data['visitTime'];
        include_once("conn_mysql.php");        
		$sql_query_visitTime="INSERT INTO `visitrecord` (`Account`, `Page`, `Time`) VALUES ('".$_SESSION['TELic-LAB_Account']."','$page', '$visitTime')";
		mysqli_query($db_link,$sql_query_visitTime) or die("查詢失敗");	
        if(isset($data['left']) && isset($data['right'])){
            $CodeMode=$data['left']; 
            $FlowOperation=$data['right'];
            $sql_query_lookTime="INSERT INTO `actionrecord`(`Account`, `Page`, `CodeMode`, `FlowOperation`, `Time`) VALUES  ('".$_SESSION['TELic-LAB_Account']."','".$page."','".$CodeMode."','".$FlowOperation."','".$data['lookTime']."')";
            mysqli_query($db_link,$sql_query_lookTime) or die("查詢失敗");
        }
    }
    else if($data && isset($data['left']) && isset($data['right']) && isset($data['page']) && isset($data['lookTime'])) {
        include_once("conn_mysql.php");    
        if(strlen($data['page'])==16)
            $page=substr($data['page'],10,2);
        else
            $page=substr($data['page'],10,4);		
        $CodeMode=$data['left']; 
        $FlowOperation=$data['right'];
        $sql_query_lookTime="INSERT INTO `actionrecord`(`Account`, `Page`, `CodeMode`, `FlowOperation`, `Time`) VALUES  ('".$_SESSION['TELic-LAB_Account']."','".$page."','".$CodeMode."','".$FlowOperation."','".$data['lookTime']."')";
		mysqli_query($db_link,$sql_query_lookTime) or die("查詢失敗");

    }
}
?>