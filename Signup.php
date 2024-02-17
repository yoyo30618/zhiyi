<?php
	session_start();//開啟session
?>
<!DOCTYPE html>
<html>
	<head>
		
		<script  language="JavaScript">alert('暫時停用註冊功能，請直接登入');location.href="login.php";</script>
		<meta content="width=device-width, initial-scale=1.0" name="viewport">
		<!-- 引入 Bootstrap 的 CSS 文件 -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
		<!-- 引入自定義的 CSS 文件 -->
		<link href="style.css" rel="stylesheet">
		<title>Signup</title>
		<style>
		</style>
	</head>
	<body>
		<?php 
			$nowdir=basename(dirname($_SERVER['PHP_SELF']));
			$parentDirectory = ($nowdir === "C1" || $nowdir === "C2"  || $nowdir === "C3"  || $nowdir === "C4") ? "../" : "";
			define('IN_INDEX', true);
			include $parentDirectory.'header.php'; 
			if(!isset($_SESSION['TELic-LAB_Islogin']))
				echo"<script  language=\"JavaScript\">alert('請先登入');location.href=\"".$parentDirectory."login.php\";</script>";
		?>
		<div class="container-fluid content">
			<div class="row">
				<?php include 'sidebar.php'; ?>  
				<div class="col-lg-10">
					<div class="main-content-container">
						<div class="login-container">
							<div class="login-form">
								<h2>Signup</h2>
								<form class="form" name="SignupSys" method="post" action="Signupcheck.php">
									<div class="form-group">
										<label for="username">帳號</label>
										<input required type="text" id="username" name="Account" placeholder="Enter your username">
									</div>
									<div class="form-group">
										<label for="studentID">學號</label>
										<input required type="text" id="studentID" name="studentID" placeholder="Enter your studentID">
									</div>
									<div class="form-group">
										<label for="name">姓名</label>
										<input required type="text" id="name" name="Name" placeholder="Enter your name">
									</div>
									<div class="form-group">
										<label for="password">密碼</label>
										<input required type="password" id="password" name="Password" placeholder="Enter your password">
									</div>
									<div class="form-group">
										<label for="verify">註冊身分驗證(T為老師/S為學生)</label>
										<input required type="text" id="verify" name="Verify" placeholder="Enter your verify">
									</div>
									<button name="SignupSys" type="submit">註冊</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 引入 Bootstrap 的 JavaScript 文件 -->
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
	</body>
</html>
