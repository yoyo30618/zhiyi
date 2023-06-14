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
				echo"<script  language=\"JavaScript\">alert('請先登入');location.href=\"../login.php\";</script>";
		?>
		<div class="container-fluid content">
			<div class="row">
				<?php include '../sidebar.php'; ?>

				<div class="col-lg-10">
					<div class="main-content-container">
					<!-- 在这里添加主要内容部分的内容 -->
						<a href='C1.php' style='color:black;'>C1 程式設計初探</a> > <a href='C1-1.php' style='color:black;'>C1-1 演算法是什麼?</a>
						
						<div class="col-lg-10">
							<div class="main-content-container">
								<!-- 在这里添加主要内容部分的内容 -->
								<div id="content1" class="content-section" style='margin:0px auto;text-align:center;'>
       								<h2>關於我成為漢堡研發部門人員的故事</h2>
									<p>歡迎你成為美味漢堡研發部的成員！公司將交給你第一份的任務：開發美味漢堡的食譜。</p>
									<img src='../pic/C1-1-1.png'>
									<p>接下來，您將進行漢堡拼裝的任務。</p>
									<button onclick="showContent(2)" class="btn btn-primary">開始漢堡拼裝任務</button>
								</div>

								<div id="content2" class="content-section" style="display: none;">
									<h2>
										漢堡拼裝任務
										<button onclick="showContent(1)" class="btn btn-outline-dark">返回上個步驟</button>
									</h2>
									請你開發一個美味漢堡的食譜，並用流程圖表達，讓漢堡工廠可以依照食譜的步驟生產漢堡。<br>
									(請先完成每位漢堡的食譜，並根據食譜的製作流程，將食材拖拉至流程圖中，完成符合食譜的流程圖)
									<div class="ingredient-section">
										<h4>食材區</h4>
										<div class="row">
											<script>document.write(generateIngredientSelects());</script>
										</div>
									</div>
									<br>

									<div class="row">
										<div class="col-lg-4 step-section">
											<h4>步驟區</h4>
											<p>在這裡您可以使用下拉式選單選擇食材。</p>										
											<!-- 步驟一 -->
											<label for="step1">步驟一</label>
											<select id="step1" class="form-select">
												<script>document.write(generateIngredientOptions());</script>
											</select>										
											<!-- 步驟二 -->
											<label for="step2">步驟二</label>
											<select id="step2" class="form-select">
												<script>document.write(generateIngredientOptions());</script>
											</select>										
											<!-- 步驟三 -->
											<label for="step3">步驟三</label>
											<select id="step3" class="form-select">
												<script>document.write(generateIngredientOptions());</script>
											</select>										
											<!-- 步驟四 -->
											<label for="step4">步驟四</label>
											<select id="step4" class="form-select">
												<script>document.write(generateIngredientOptions());</script>
											</select>										
											<!-- 步驟五 -->
											<label for="step5">步驟五</label>
											<select id="step5" class="form-select">
												<script>document.write(generateIngredientOptions());</script>
											</select>										
											<!-- 步驟六 -->
											<label for="step6">步驟六</label>
											<select id="step6" class="form-select">
												<script>document.write(generateIngredientOptions());</script>
											</select>
										</div>
										<div class="col-lg-4 flow-section">
											<h4>流程圖</h4>
											<p>在這裡您可以拖動食材來組裝漢堡。</p>
											<div id="flowchart">
												<div id="start">
													Start
												</div>
												<h6>⇩</h6>
												<div id="FlowStep1" class="step" ondrop="drop(event)" ondragover="allowDrop(event)">
													步驟一
												</div>
												<h6>⇩</h6>
												<div id="FlowStep2" class="step" ondrop="drop(event)" ondragover="allowDrop(event)">
													步驟二
												</div>
												<h6>⇩</h6>
												<div id="FlowStep3" class="step" ondrop="drop(event)" ondragover="allowDrop(event)">
													步驟三
												</div>
												<h6>⇩</h6>
												<div id="FlowStep4" class="step" ondrop="drop(event)" ondragover="allowDrop(event)">
													步驟四
												</div>
												<h6>⇩</h6>
												<div id="FlowStep5" class="step" ondrop="drop(event)" ondragover="allowDrop(event)">
													步驟五
												</div>
												<h6>⇩</h6>
												<div id="FlowStep6" class="step"  ondrop="drop(event)" ondragover="allowDrop(event)">
													步驟六
												</div>
												<h6>⇩</h6>
												<div id="stop">
													Stop
												</div>
											</div>
										</div>
										<div class="col-lg-4 make-section">
											<h4>組裝結果顯示</h4>
											<p>這裡將顯示您組裝的結果。</p>
											<button onclick="ResetBurger()" class="btn btn-primary">重設我的漢堡</button><br><br>
											<button onclick="checkAssembly()" class="btn btn-primary">檢查步驟區與流程圖區的順序</button><br><br>
											<button onclick="showContent(3)" class="btn btn-primary" id="MoveToContent3">移動到下個步驟</button><br><br>
											<div id="assemblyResult" style="display: none;"></div>
											<div class="stacked-images" id="StackedBurger">
												
											</div>
										</div>

									</div>
								</div>

								<div id="content3" class="content-section" style="display: none;">
									<h2>
										提問環節
										<button onclick="showContent(2)" class="btn btn-outline-dark">返回上個步驟</button>
									</h2>
									<p>想一想，為甚麼製作漢堡順序不一樣時，所產生的漢堡結果會不一樣呢?</p>
									
									<!-- 提問內容 -->
									<textarea id="answer" class="form-control" rows="3" placeholder="請在這裡回答"></textarea>
									<button id="submitans" onclick="showAlgorithmExplanation()" class="btn btn-primary">提交回答</button>
									<a id='Isanswered' style='color:green;'>感謝你的填答！</a><br><br><br>
									<div id="algorithmExplanation" style="display: none;">
										<h3>這就是演算法</h3>
										<img src='../pic/C1-1-3.png'>
										<button onclick="location.href='../C2/C2.php'" class="btn btn-success">我了解了，繼續前進！</button>
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
	</body>
</html>
