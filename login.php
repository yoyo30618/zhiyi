<?php
	if(!session_id()) session_start();//開啟session
?>
<!DOCTYPE html>
<html>
	<head>
		<meta content="width=device-width, initial-scale=1.0" name="viewport">
		<!-- 引入 Bootstrap 的 CSS 文件 -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
		<!-- 引入自定義的 CSS 文件 -->
		<link href="style.css" rel="stylesheet">
		<title>Login</title>
		<style>
		</style>
	</head>
	<body>
		<?php 
			$nowdir=basename(dirname($_SERVER['PHP_SELF']));
			$parentDirectory = ($nowdir === "C1" || $nowdir === "C2"  || $nowdir === "C3"  || $nowdir === "C4") ? "../" : "";
			define('IN_INDEX', true);
			include $parentDirectory.'header.php'; 
		
		?>
		<div class="container-fluid content">
			<div class="row">
				<?php include 'sidebar.php'; ?>  
				<div class="col-lg-10">
					<div class="main-content-container">
						<div class="login-container">
							<div class="login-form">
								<h2>Login</h2>
								<form class="form" name="LoginSys" method="post" action="logincheck.php">
									<div class="form-group">
										<label for="username">Username</label>
										<input type="text" id="username" name="Account" placeholder="Enter your username">
									</div>
									<div class="form-group">
										<label for="password">Password</label>
										<input type="password" id="password" name="Password" placeholder="Enter your password">
									</div>
									<button name="LoginSys" type="submit">Login</button>
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
