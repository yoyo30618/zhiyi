<?php
	session_start();//開啟session
?>
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
					if(isset($_POST['recordsearch']) &&$_POST['recordsearch']!=""){
						$sql_query_allrecordsearch="SELECT Account,Page,CodeMode,FlowOperation,SUM(Time) AS AccumulatedTime FROM `actionrecord` WHERE `Account` = '".$_POST['recordsearch']."'GROUP BY Account,Page,CodeMode,FlowOperation ORDER BY Account,Page,CodeMode,FlowOperation";
						$sql_query_recordsearch="SELECT * FROM `actionrecord` WHERE `Account`='".$_POST['recordsearch']."'";
					}
					else if(isset($_SESSION['TELic-LAB_Islogin']) && $_SESSION['TELic-Verify']=="T"){
						$sql_query_allrecordsearch="SELECT Account,Page,CodeMode,FlowOperation,SUM(Time) AS AccumulatedTime FROM `actionrecord` GROUP BY Account,Page,CodeMode,FlowOperation ORDER BY Account,Page,CodeMode,FlowOperation;";	
						$sql_query_recordsearch="SELECT * FROM `actionrecord` WHERE 1";
					}
					else{
						$sql_query_allrecordsearch="SELECT Account,Page,CodeMode,FlowOperation,SUM(Time) AS AccumulatedTime FROM `actionrecord` WHERE `Account` = '".$_SESSION['TELic-LAB_Account']."'GROUP BY Account,Page,CodeMode,FlowOperation ORDER BY Account,Page,CodeMode,FlowOperation";	
						$sql_query_recordsearch="SELECT * FROM `actionrecord` WHERE `Account`='".$_SESSION['TELic-LAB_Account']."'";					
					}
					$allrecordsearch_result=mysqli_query($db_link,$sql_query_allrecordsearch) or die("查詢失敗");
					$recordsearch_result=mysqli_query($db_link,$sql_query_recordsearch) or die("查詢失敗");
				?>
				<div class="col-lg-10">
					<div class="main-content-container">
						<form action='dashboardTag.php' method='POST'>
							<table class="table table-hover">
								<thead>
									<tr>
									<th scope="col" colspan="3">各頁籤切換紀錄</th>
									<th scope="col">
										<?php
											if(isset($_SESSION['TELic-LAB_Islogin']) && $_SESSION['TELic-Verify']=="T"){
												$search="";
												if(isset($_POST["recordsearch"])) $search=$_POST["recordsearch"];
												echo "<input type='text' class='form-control' placeholder='Username' name='recordsearch' value='".$search."'>";
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
										<th scope="col">左頁籤</th>
										<th scope="col">右頁籤</th>
										<th scope="col">時長(秒)</th>
									</tr>
								</thead>
								<tbody>
									<?php
										while($row_allrecordsearch=mysqli_fetch_array($allrecordsearch_result)){
											$nowpage=$row_allrecordsearch['Page'];
											echo "<tr>";
												echo "<th scope='row'>".$row_allrecordsearch['Account']."</th>";
												echo "<td>".$nowpage."</td>";
												echo "<td>".$row_allrecordsearch['CodeMode']."</td>";
												echo "<td>".$row_allrecordsearch['FlowOperation']."</td>";
												echo "<td>".((int)$row_allrecordsearch['AccumulatedTime']/1000)."</td>";
											echo "</tr>";
										}
									?>
								</tbody>
							</table>
							<table class="table table-hover">
								<thead>
									<tr>
										<th scope="col" colspan="2">各頁籤切換紀錄</th>
										<th scope="col"></th>
										<th scope="col"></th>
										<th scope="col"></th>
										<th scope="col"></th>
									</tr>
									<tr>
										<th scope="col">#</th>
										<th scope="col">帳號</th>
										<th scope="col">頁面</th>
										<th scope="col">左頁籤</th>
										<th scope="col">右頁籤</th>
										<th scope="col">時長(秒)</th>
									</tr>
								</thead>
								<tbody>
									<?php
										while($row_recordsearch=mysqli_fetch_array($recordsearch_result)){
											$nowpage=$row_recordsearch['Page'];
											echo "<tr>";
												echo "<th scope='row'>".$row_recordsearch['_ID']."</th>";
												echo "<td>".$row_recordsearch['Account']."</td>";
												echo "<td>".$nowpage."</td>";
												echo "<td>".$row_recordsearch['CodeMode']."</td>";
												echo "<td>".$row_recordsearch['FlowOperation']."</td>";
												echo "<td>".((int)$row_recordsearch['Time']/1000)."</td>";
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
