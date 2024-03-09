<?php
	if(!session_id()) session_start();//開啟session
?>
<!DOCTYPE html>
<html>
	<head>
		<meta content="width=device-width, initial-scale=1.0" name="viewport" />
		<!-- 引入 Bootstrap 的 CSS 文件 -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />

		<!-- 引入自定義的 CSS 文件 -->
		<link href="../style.css" rel="stylesheet" />
		<title></title>
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
				<?php include '../sidebar.php'; ?>

				<div class="col-lg-10">
					<div class="main-content-container">
					<!-- 在这里添加主要内容部分的内容 -->
						<h2>C3 選擇結構</h2>
						<div class="col-lg-10">
							<div class="main-content-container">	
								<div class="accordion" id="courseAccordion">
									<div class="accordion-item">
										<h2 class="accordion-header" id="headingC4">
											<button class="accordion-button collapsed" type="button" onclick="window.location.href='C3-0.php'">
												選擇結構說明
											</button>
										</h2>
									</div>
									<div class="accordion-item">
										<h2 class="accordion-header" id="headingC3">
											<button class="accordion-button collapsed" type="button" onclick="window.location.href='C3-1.php'">
												C3-1 題目一
											</button>
										</h2>
									</div>
									<div class="accordion-item">
										<h2 class="accordion-header" id="headingC3">
											<button class="accordion-button collapsed" type="button" onclick="window.location.href='C3-2.php'">
												C3-2 題目二
											</button>
										</h2>
									</div>
									<div class="accordion-item">
										<h2 class="accordion-header" id="headingC3">
											<button class="accordion-button collapsed" type="button" onclick="window.location.href='C3-3.php'">
												C3-3 題目三
											</button>
										</h2>
									</div>
									<div class="accordion-item">
										<h2 class="accordion-header" id="headingC3">
											<button class="accordion-button collapsed" type="button" onclick="window.location.href='C3-4.php'">
												C3-4 題目四
											</button>
										</h2>
									</div>
									<div class="accordion-item">
										<h2 class="accordion-header" id="headingC3">
											<button class="accordion-button collapsed" type="button" onclick="window.location.href='C3-5.php'">
												C3-5 題目五
											</button>
										</h2>
									</div>
									<div class="accordion-item">
										<h2 class="accordion-header" id="headingC3">
											<button class="accordion-button collapsed" type="button" onclick="window.location.href='C3-6.php'">
												C3-6 題目六
											</button>
										</h2>
									</div>
								</div>
							</div>
						</div>
					<!-- 在这里添加主要内容部分的内容 -->
					</div>
				</div>
			</div>
		</div>
		<!-- 引入 Bootstrap 的 JavaScript 文件 -->
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
		<script src="../js/ClockTime.js"></script>
	</body>
</html>
