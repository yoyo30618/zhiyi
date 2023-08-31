<!DOCTYPE html>
<html>
	<head>
		<meta content="width=device-width, initial-scale=1.0" name="viewport" />
		<!-- 引入 Bootstrap 的 CSS 文件 -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />

		<!-- 引入自定義的 CSS 文件 -->
		<link href="style.css" rel="stylesheet" />
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
				<?php include 'sidebar.php'; ?>
				<?php
					include_once("conn_mysql.php");
					if(isset($_POST['Anssearch']) &&$_POST['Anssearch']!="")
						$sql_query_Anssearch="SELECT * FROM `ansrecord` WHERE `Account`='".$_POST['Anssearch']."'";
					else if(isset($_SESSION['TELic-LAB_Islogin']) && $_SESSION['TELic-Verify']=="T")
						$sql_query_Anssearch="SELECT * FROM `ansrecord` WHERE 1";
					else
						$sql_query_Anssearch="SELECT * FROM `ansrecord` WHERE `Account`='".$_SESSION['TELic-LAB_Account']."'";	
					$Anssearch_result=mysqli_query($db_link,$sql_query_Anssearch) or die("查詢失敗");
				?>
				<div class="col-lg-10">
					<div class="main-content-container">
						<form action='dashboardAns.php' method='POST'>
							<table class="table table-hover">
								<thead>
									<tr>
									<th scope="col" colspan="2">各章節回答紀錄</th>
									<th scope="col">
										<?php
											if(isset($_SESSION['TELic-LAB_Islogin']) && $_SESSION['TELic-Verify']=="T"){
												$search="";
												if(isset($_POST["Anssearch"])) $search=$_POST["Anssearch"];
												echo "<input type='text' class='form-control' placeholder='Username' name='Anssearch' value='".$search."'>";
											}
										?>
									</th>
									<th scope="col">
										<?php
											if(isset($_SESSION['TELic-LAB_Islogin']) && $_SESSION['TELic-Verify']=="T")
												echo "<button type='submit' class='btn btn-success'>查詢</button>";
										?>
									</th>
									</tr>
									<tr>
										<th scope="col">帳號</th>
										<th scope="col">頁面</th>
										<th scope="col">答案</th>
										<th scope="col">時間</th>
									</tr>
								</thead>
								<tbody>
									<?php
										while($row_Anssearch=mysqli_fetch_array($Anssearch_result)){
											echo "<tr>";
												echo "<th scope='row'>".$row_Anssearch['Account']."</th>";
												echo "<td>".$row_Anssearch['Page']."</td>";
												echo "<td>".$row_Anssearch['ans']."</td>";
												echo "<td>".$row_Anssearch['TimeStarp']."</td>";
											echo "</tr>";
										}
									?>
								</tbody>
							</table>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- 引入 Bootstrap 的 JavaScript 文件 -->
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
	</body>
</html>
