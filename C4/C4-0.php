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
						<a href='C4.php' style='color:black;'>C4 重複結構</a> > <a href='C4-0.php' style='color:black;'>重複結構說明</a>
						
						<div class="col-lg-10">
							<div class="main-content-container">
								<!-- 在这里添加主要内容部分的内容 -->
								<div id="content1" class="content-section" style='margin:0px auto;text-align:center;'>
									<h4>
										一學期一次的體適能測驗要來了，在測量心肺功能的項目，總共要跑4圈操場，以記錄完成1600公尺時的時間。<br><br>
										第一圈，我們會跑過兩次彎道兩次直道…<br>
										第二圈，我們會跑過兩次彎道兩次直道…<br>
										第三圈，我們會跑過兩次彎道兩次直道…<br>
										第四圈，我們會跑過兩次彎道兩次直道…<br><br>
									</h4>
									<h2>每一圈，我們都經歷一樣的歷程，且都會在相同位置遇上直道、彎道。</h2>
									<img src='../pic/playground.png'><br>
									<button onclick="showContent(2)" class="btn btn-primary">下一頁</button>
								</div>

								<div id="content2" class="content-section" style='margin:0px auto;text-align:center;display: none;'>
									<h3>
										在還沒有學迴圈之前，如果我們用循序結構來實踐，需要<text style='color:red'>重複</text>輸入多次一模一樣的程式碼。<br>
									</h3>
									<div class="row">
										<div class="col-lg-2" style='background-color: #F7A4A4;border-radius: 10px;padding: 10px;text-align:left;'>
											<h5>
												<text class='arrow1'>➔</text>print("跑彎道")<br>
												<text style='visibility: hidden;' class='arrow2'>➔</text>print("跑直道")<br>
												<text style='visibility: hidden;' class='arrow3'>➔</text>print("跑彎道")<br>
												<text style='visibility: hidden;' class='arrow4'>➔</text>print("跑直道")<br>
												<text style='visibility: hidden;' class='arrow5'>➔</text>print("跑彎道")<br>
												<text style='visibility: hidden;' class='arrow6'>➔</text>print("跑直道")<br>
												<text style='visibility: hidden;' class='arrow7'>➔</text>print("跑彎道")<br>
												<text style='visibility: hidden;' class='arrow8'>➔</text>print("跑直道")<br>
												<text style='visibility: hidden;' class='arrow9'>➔</text>print("跑彎道")<br>
												<text style='visibility: hidden;' class='arrow10'>➔</text>print("跑直道")<br>
												<text style='visibility: hidden;' class='arrow11'>➔</text>print("跑彎道")<br>
												<text style='visibility: hidden;' class='arrow12'>➔</text>print("跑直道")<br>
												<text style='visibility: hidden;' class='arrow13'>➔</text>print("跑彎道")<br>
												<text style='visibility: hidden;' class='arrow14'>➔</text>print("跑直道")<br>
												<text style='visibility: hidden;' class='arrow15'>➔</text>print("跑彎道")<br>
												<text style='visibility: hidden;' class='arrow16'>➔</text>print("跑直道")<br>
												<text style='visibility: hidden;' class='arrow17'>➔</text>print("測驗結束！")<br>
											</h5>

										</div>
										<div class="col-lg-10 flow-section">
											<svg id="animation" width="600" height="450">
												<!-- 操场底图 -->
												<image x="0" y="0" width="600" height="450" xlink:href="../pic/playground.png" />

												<!-- 沿路径滑动的跑步人偶 -->
												<image id="movingImage" x="0" y="0" width="50" height="50" xlink:href="../pic/runningman.png" visibility="hidden">
													<animateMotion dur="6s" repeatCount="4" fill="freeze">
														<mpath href="#motionPath" />
													</animateMotion>
												</image>
												<!-- 逆时针路径 -->
												<path id="motionPath" d="M400,300 A50,50 0 0,0 400,50 L120,50 A50,50 0 0,0 120,300 L400,300" fill="transparent" stroke="none" />
											    <image id="endImage" x="450" y="330" width="100" height="100" xlink:href="../pic/finish.png" visibility="hidden" />

											</svg>
											<br><button onclick="showContent(3)" class="btn btn-primary">下一頁</button>
										</div>	
									</div>
								</div>
								<div id="content3" class="content-section" style='margin:0px auto;text-align:center;display: none;'>
									<h3>
									在程式的世界裡，我們可以使用「迴圈」，來處理重複的程序。<br>
									</h3>
									<div class="row">
										<div class="col-lg-2" style='background-color: #E2F0D9;border-radius: 10px;padding: 10px;text-align:left;'>
											<h5>
											<text style='visibility: hidden;'>➔</text>for i in range(4) :<br>
												<text class='newarrow1'>➔</text>&emsp;print("跑彎道")<br>
												<text style='visibility: hidden;' class='newarrow2'>➔</text>&emsp;print("跑直道")<br>
												<text style='visibility: hidden;' class='newarrow3'>➔</text>&emsp;print("跑彎道")<br>
												<text style='visibility: hidden;' class='newarrow4'>➔</text>&emsp;print("跑直道")<br>
												<text style='visibility: hidden;' class='newarrow5'>➔</text>print("測驗結束！")<br>
											</h5>

										</div>
										<div class="col-lg-10 flow-section">


											<svg id="animation" width="600" height="450">
												<!-- 操场底图 -->
												<image x="0" y="0" width="600" height="450" xlink:href="../pic/playground.png" />

												<!-- 沿路径滑动的跑步人偶 -->
												<image id="movingLoopImage" x="0" y="0" width="50" height="50" xlink:href="../pic/runningman.png" visibility="hidden">
													<animateMotion dur="6s" repeatCount="4" fill="freeze">
														<mpath href="#motionPath" />
													</animateMotion>
												</image>
												<!-- 逆时针路径 -->
												<path id="motionPath" d="M400,300 A50,50 0 0,0 400,50 L120,50 A50,50 0 0,0 120,300 L400,300" fill="transparent" stroke="none" />
											    <image id="LoopendImage" x="450" y="330" width="100" height="100" xlink:href="../pic/finish.png" visibility="hidden" />

											</svg>
											<br><button onclick="showContent(4)" class="btn btn-primary">下一頁</button>
										</div>	
									</div>
								</div>

								<div id="content4" class="content-section" style="display: none;">
									<h2>
										<img src='../pic/answer.png' width="40" height="40">
										提問環節
										<button onclick="showContent(2)" class="btn btn-outline-dark">返回上個步驟</button>
									</h2>
									
									<p><img src='../pic/question.png' width="40" height="40">想一想，使用迴圈來處理重複的程序有什麼優點呢?</p>
									
									<!-- 提問內容 -->
									<textarea id="answer" class="form-control" rows="3" placeholder="請在這裡回答"></textarea>
									<button id="submitans" onclick="showAlgorithmExplanation()" class="btn btn-primary">提交回答</button>
									<a id='Isanswered' style='color:green;'>感謝你的填答！</a><br><br><br>
									<div id="algorithmExplanation" style="display: none;">
										
										<img src='../pic/C4-0-1.png'>
										<button onclick="location.href='../C4/C4-1.php'" class="btn btn-success">我了解了，繼續前進！</button>
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
