<?php

session_start();//開啟session
// 處理 POST 請求
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 獲取 POST 數據
    $data = json_decode(file_get_contents('php://input'), true);

    // 確保收到有效數據
    if ($data && isset($data['page']) && isset($data['ans'])) {
        // 獲取頁面
        if(strlen($data['page'])==16) $page=substr($data['page'],10,2);
        else $page=substr($data['page'],10,4);	
        $ans=$data['ans'];
        include_once("conn_mysql.php");   
		$sql_query_visitTime="INSERT INTO `ansrecord`( `Account`, `Page`, `ans`) VALUES ('".$_SESSION['TELic-LAB_Account']."','$page','$ans')";
		mysqli_query($db_link,$sql_query_visitTime) or die("查詢失敗");	
    }
}
?>