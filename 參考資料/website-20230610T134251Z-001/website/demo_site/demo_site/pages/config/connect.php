<?php
$server="127.0.0.1";//主機
$db_username="root";//你的資料庫使用者名稱
$db_password="yoyo0516";//你的資料庫密碼
$db_name="elearning";//選擇資料庫
$con = mysqli_connect($server,$db_username,$db_password,$db_name);//連結資料庫
if(!$con){
die("can't connect".mysqli_connect_error());//如果連結失敗輸出錯誤
}
?>