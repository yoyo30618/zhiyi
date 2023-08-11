<?php
	header("Content-Type:text/html;charset=utf-8");//設定編碼
	session_start();//開啟session
	if(isset($_POST['SignupSys']))//如果是由post進入
	{
		if($_POST['Verify']==="T"||$_POST['Verify']==="S"){
			$Account = $_POST['Account'];
			$studentID = $_POST['studentID'];
			$Name = $_POST['Name'];
			$Password = md5("TELic-LAB".$_POST['Password']);
			$Verify = $_POST['Verify'];
			include_once("conn_mysql.php");
			$sql_query_check="SELECT * FROM `account` WHERE `Account`='".$Account."'";
			$check_result=mysqli_query($db_link,$sql_query_check) or die("查詢失敗");//查詢帳密
			if($check_result->num_rows!="0"){
				echo"<script  language=\"JavaScript\">alert('無法使用此組帳號密碼，請檢查');location.href=\"Signup.php\";</script>";
			}
			else{
				$sql_query_signup="INSERT INTO `account`(`Account`, `studentID`, `Name`, `Password`, `Verify`) VALUES ('".$Account."','".$studentID."','".$Name."','".$Password."','".$Verify."')";
				mysqli_query($db_link,$sql_query_signup) or die("查詢失敗");//查詢帳密
				echo"<script  language=\"JavaScript\">alert('註冊成功');location.href=\"login.php\";</script>";
			}
		}
		else{
			echo"<script  language=\"JavaScript\">alert('驗證代碼異常，請檢查');location.href=\"Signup.php\";</script>";
		}
	}
	else//不當路徑進入
		echo"<script  language=\"JavaScript\">alert('請由正確路徑進入');location.href=\"Signup.php\";</script>";
		
?>