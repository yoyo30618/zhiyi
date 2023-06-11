<?php 
header("Content-Type: text/html; charset=utf8");
if(!isset($_POST['submit'])){
echo"<script>alert('階段執行錯誤，將回到登入頁面。');</script>";
header("refresh:0;url=login.html");
exit;
}//判斷是否有submit操作
include_once('config/connect.php');//連結資料庫

if ($_POST['submit']=='CheckOK'){
	
	//check id
	$sql = "select * from user where id = '".$_POST['id']."'";//檢測資料庫id
	if ($result=mysqli_query($con,$sql))//執行sql
	{
		 //返回查詢數
		$rows=mysqli_fetch_assoc($result); 
		
		
		
	}
	if(isset($rows)&&$rows)
	{
		echo "註冊失敗，已有相同的使用者編號。";
	}	
	else{
	
		//insert data
		$q="insert into user(id,password,name,school,department,type) values ('".$_POST['id']."','".$_POST['password']."','".$_POST['name']."','".$_POST['school']."','".$_POST['department']."','".$_POST['type']."')";//向資料庫插入表單傳來的值的sql
		//echo $q;
		if ($result=mysqli_query($con,$q))//執行sql
		{
		   echo "註冊成功";//成功輸出註冊成功	
		}else{
			
			die('[Error]' . mysqli_error());
		}
	}
	
	//echo $_POST['id'].$_POST['password'].$_POST['name'].$_POST['school'].$_POST['department'].$_POST['type'];
	
}

mysqli_close($con);//關閉資料庫
?>