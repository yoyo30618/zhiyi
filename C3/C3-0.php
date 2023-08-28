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
	<!-- 引入 Bootstrap 的 JavaScript 文件 -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
	<script src="custom.js"></script>
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
						<a href='C3.php' style='color:black;'>C3 選擇結構</a> > <a href='C3-0.php' style='color:black;'>選擇結構說明</a>
						
						<div class="col-lg-10">
							<div class="main-content-container">
								<!-- 在这里添加主要内容部分的内容 -->
								<div id="content1" class="content-section" style='margin:0px auto;text-align:center;'>
									<h3>
									今年的畢業旅行即將在年底前往日本大阪旅遊，但因天氣總是無法預測，為了確保旅程順利，在行前做了周詳的準備，無論遇晴天或是雨天，抑或其他突發情況，都應該有所準備。
									</h3>
									<img src='../pic/C3-0-1.png' style='max-width:100%;'><br>
									<button onclick="showContent(2)" class="btn btn-primary">下一頁</button>
								</div>

								<div id="content2" class="content-section" style='margin:0px auto;text-align:center;display: none;'>
									<table style='margin:0px auto;text-align:center;'>
										<tr>
											<td colspan="2"><h3>請根據天氣有無下雨，選擇對應的圖式 : </h3></td>
										</tr>
										<tr>
											<td><input type="radio" name="weather" value="3" checked><h3>下雨<h3></td>
											<td><input type="radio" name="weather" value="4"><h3>沒下雨<h3></td>
										</tr>
										<tr>
											<td colspan="2"><img src='../pic/C3-0-2.png' style='max-width:100%;'></td>
										</tr>
										<tr>
											<td colspan="2"><button onclick="showContent(0)" class="btn btn-primary">下一頁</button></td>											
										</tr>
									</table>
								</div>
								<div id="content3" class="content-section" style='margin:0px auto;text-align:center;display: none;'>
									<img id="contentImage1" src='../pic/C3-0-3-1.png' style='max-width:100%;'><br>
									<button onclick="travelLstStep()" class="btn btn-primary">上一頁</button>
									<button onclick="travelNxtStep()" class="btn btn-primary">下一頁</button>
								</div>
								<div id="content4" class="content-section" style='margin:0px auto;text-align:center;display: none;'>
									<img id="contentImage2" src='../pic/C3-0-4-1.png' style='max-width:100%;'><br>
									<button onclick="travelLstStep()" class="btn btn-primary">上一頁</button>
									<button onclick="travelNxtStep()" class="btn btn-primary">下一頁</button>
								</div>

								<div id="content5" class="content-section" style="display: none;">
									<h2>
										<img src='../pic/answer.png' width="40" height="40" style='max-width:100%;'>
										提問環節
										<button onclick="showContent(2)" class="btn btn-outline-dark">重新選擇</button>
									</h2>
									
									<p><img src='../pic/question.png' width="40" height="40">想一想，在現實生活中有什麼例子也使用了條件判斷來做出相應的決策呢?</p>
									
									<!-- 提問內容 -->
									<textarea id="answer" class="form-control" rows="3" placeholder="請在這裡回答"></textarea>
									<button id="submitans" onclick="showAlgorithmExplanation()" class="btn btn-primary">提交回答</button>
									<a id='Isanswered' style='color:green;'>感謝你的填答！</a><br><br><br>
									<div id="algorithmExplanation" style="display: none;">
										
										<img src='../pic/C3-0-5.png' style='max-width:100%;'>
										<button onclick="location.href='../C3/C3-1.php'" class="btn btn-success">我了解了，繼續前進！</button>
									</div>
								</div>
								<!-- 在这里添加主要内容部分的内容 -->
							</div>
						</div>

					<!-- 在这里添加主要内容部分的内容 -->					
					</div>
				</div>
			</div>
		</div>
		<script src="../js/ClockTime.js"></script><!--說明頁面特殊計時器-->
	</body>
</html>
