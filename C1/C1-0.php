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
						<a href='C1.php' style='color:black;'>C1 程式設計初探</a> > <a href='C1-0.php' style='color:black;'>C1 演算法是什麼?</a>
						
						<div class="col-lg-10">
							<div class="main-content-container">
								<!-- 在这里添加主要内容部分的内容 -->
								<div id="content1" class="content-section" style='margin:0px auto;text-align:center;'>
									<p style="text-align:left;font-size:20pt;line-height:1.7">
								當我們遇到問題時，通常會先思考解題方法再開始行動，若要讓電腦幫我們解決問題，就更需要有清楚的<text style='color:red;'>指令</text>與嚴謹的步驟<text style='color:red;'>順序</text>與流程設計，而這一系列的指令與其順序，就稱為演算法。<br>
先以日常生活要處理的任務來舉例，若要製作一個「美味蟹堡」，可先上網搜尋美味蟹堡的食譜，而食譜上的步驟就可視為製作此漢堡的<text style='color:red;'>演算法(Algorithm)</text>。只不過，做菜做漢堡的食材與順序要求沒那麼嚴謹，但電腦的指令與順序是非常嚴謹的呢!<br>
不過，我們先以日常生活的任務來熟悉指令與順序。<br>
首先，歡迎你成為漢堡公司的一員，我們交給你的第一份任務是：製作考試滿分堡。<br>
									</p>
									<img src='../pic/C1-1-0.png' style='max-width:100%;'><br>

									<button onclick="showContent(2)" class="btn btn-primary">下一頁</button>
								</div>

								<div id="content2" class="content-section" style="display: none;">
									<h2>
										漢堡拼裝任務
										<button onclick="showContent(1)" class="btn btn-outline-dark">返回上個步驟</button>
									</h2>
									<h4>
									請先觀察考試滿分堡的圖示，思考該如何逐步完成這個漢堡，再將食材積木拖拉至流程圖中，完成符合考試滿分堡的流程圖，讓漢堡工廠可以依照你制定的流程生產漢堡。
									</h4>
									<div class="ingredient-section">
										<h4>食材積木區</h4>
										<div class="row">
											<script>document.write(generateIngredientSelects());</script>
										</div>
									</div>
									<br>

									<div class="row">
										<div class="col-lg-4 step-section">
											<h3>考試滿分堡</h3>
											<div class="stacked-images" id="GreatBurger">
												
											</div>
											<script>generateGreatBurger();</script>
										</div>
										<div class="col-lg-4 flow-section">
											<h4>流程圖</h4>
											<p>在這裡您可以拖動食材來組裝漢堡。</p>
											<div id="flowchart" style="line-height:0.8">
												Start<br>⇩<br>
												<div id="GreatFlowStep1" class="Greatstep" ondrop="Greatdrop(event)" ondragover="allowDrop(event)">
													步驟一
												</div>⇩<br>
												<div id="GreatFlowStep2" class="Greatstep" ondrop="Greatdrop(event)" ondragover="allowDrop(event)">
													步驟二
												</div>⇩<br>
												<div id="GreatFlowStep3" class="Greatstep" ondrop="Greatdrop(event)" ondragover="allowDrop(event)">
													步驟三
												</div>⇩<br>
												<div id="GreatFlowStep4" class="Greatstep" ondrop="Greatdrop(event)" ondragover="allowDrop(event)">
													步驟四
												</div>⇩<br>
												<div id="GreatFlowStep5" class="Greatstep" ondrop="Greatdrop(event)" ondragover="allowDrop(event)">
													步驟五
												</div>⇩<br>
												<div id="GreatFlowStep6" class="Greatstep"  ondrop="Greatdrop(event)" ondragover="allowDrop(event)">
													步驟六
												</div>⇩<br>
												Stop
											</div>
										</div>
										<div class="col-lg-4 make-section">
											<h4>組裝結果顯示</h4>
											<p>這裡將顯示您組裝的結果。</p>
											<button onclick="ResetGreatBurger()" class="btn btn-primary">重設我的漢堡</button><br><br>
											<button onclick="checkGreatAssembly()" class="btn btn-primary">檢查步驟區與流程圖區的順序</button><br><br>
											<button onclick="showContent(3)" class="btn btn-primary" id="MoveToContent3">移動到下個步驟</button><br><br>
											<div id="assemblyResult" style="display: none;"></div>
											<div class="stacked-images" id="StackedGreatBurger">
												
											</div>
										</div>

									</div>
								</div>
								<div id="content3" class="content-section" style="display: none;">
									<h2>
										漢堡拼裝任務
										<button onclick="showContent(2)" class="btn btn-outline-dark">返回上個步驟</button>
									</h2>
									<p style="text-align:left;font-size:20pt;line-height:1.7">
									餐飲業競爭激烈，漢堡店一間一間的開，因此漢堡公司將指派你第二個任務：開發一個新產品，讓漢堡工廠可以依照食譜的步驟生產漢堡(請完成漢堡新食譜，漢堡工廠將依據你提供的食譜進行製作)。</p>
									<div class="ingredient-section">
										<h4>食材區</h4>
										<div class="row">
											<script>document.write(generateIngredientSelects());</script>
										</div>
									</div>
									<br>

									<div class="row">
										<div class="col-lg-8 step-section">
											<h4>漢堡新食譜</h4>
											<p>在這裡您可以使用下拉式選單選擇食材。</p>		
											<table style="width:100%">
												<tr>
													<td style="width:10%"></td>
													<td style="width:35%">動作</td>
													<td style="width:55%">食材</td>
												</tr>				
												<tr>
													<td>1.</td>
													<td>											
														<select id="DropDownstep1" class="form-select">
															<option  value="放置">放置</option>
															<option  value="拿走">拿走</option>
														</select>	
													</td>
													<td>											
														<select id="step1" class="form-select">
															<script>document.write(generateIngredientOptions());</script>
														</select>	
													</td>
												</tr>				
												<tr>
													<td>2.</td>
													<td>											
														<select id="DropDownstep2" class="form-select">
															<option  value="放置">放置</option>
															<option  value="拿走">拿走</option>
														</select>	
													</td>
													<td>											
														<select id="step2" class="form-select">
															<script>document.write(generateIngredientOptions());</script>
														</select>	
													</td>
												</tr>				
												<tr>
													<td>3.</td>
													<td>											
														<select id="DropDownstep3" class="form-select">
															<option  value="放置">放置</option>
															<option  value="拿走">拿走</option>
														</select>	
													</td>
													<td>											
														<select id="step3" class="form-select">
															<script>document.write(generateIngredientOptions());</script>
														</select>	
													</td>
												</tr>				
												<tr>
													<td>4.</td>
													<td>											
														<select id="DropDownstep4" class="form-select">
															<option  value="放置">放置</option>
															<option  value="拿走">拿走</option>
														</select>	
													</td>
													<td>											
														<select id="step4" class="form-select">
															<script>document.write(generateIngredientOptions());</script>
														</select>	
													</td>
												</tr>				
												<tr>
													<td>5.</td>
													<td>											
														<select id="DropDownstep5" class="form-select">
															<option  value="放置">放置</option>
															<option  value="拿走">拿走</option>
														</select>	
													</td>
													<td>											
														<select id="step5" class="form-select">
															<script>document.write(generateIngredientOptions());</script>
														</select>	
													</td>
												</tr>				
												<tr>
													<td>6.</td>
													<td>											
														<select id="DropDownstep6" class="form-select">
															<option  value="放置">放置</option>
															<option  value="拿走">拿走</option>
														</select>	
													</td>
													<td>											
														<select id="step6" class="form-select">
															<script>document.write(generateIngredientOptions());</script>
														</select>	
													</td>
												</tr>		
											</table>				
										</div>
										<div class="col-lg-4 make-section">
											<h4>組裝結果顯示</h4>
											<p>這裡將顯示您組裝的結果。</p>
											<button onclick="checkAssembly()" class="btn btn-primary">開始製作</button><br><br>
											<button onclick="showContent(4)" class="btn btn-primary" id="MoveToContent3">移動到下個步驟</button><br><br>
											<div id="assemblyResult" style="display: none;"></div>
											<div class="stacked-images" id="StackedBurger">
												
											</div>
										</div>

									</div>
								</div>

								<div id="content4" class="content-section" style="display: none;">
									<h2>
										<img src='../pic/answer.png' width="40" height="40">
										提問環節
										<button onclick="showContent(3)" class="btn btn-outline-dark">返回上個步驟</button>
									</h2>
									
									<p><img src='../pic/question.png' width="40" height="40">和同學分享彼此製作的漢堡，為什麼每個人製作出來的漢堡不同?</p>
									
									<!-- 提問內容 -->
									<textarea id="answer" class="form-control" rows="3" placeholder="請在這裡回答"></textarea>
									<button id="submitans" onclick="showAlgorithmExplanation()" class="btn btn-primary">提交回答</button>
									<a id='Isanswered' style='color:green;'>完成作答!</a><br><br><br>
									<a id='Unanswered' style='color:red;'>請試著回答問題!</a><br><br><br>
									<div id="algorithmExplanation" style="display: none;">
										<h3>這就是演算法</h3>
										<img src='../pic/C1-1-3.png' style='max-width:100%;'>
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
		<script src="../js/ClockTime.js"></script><!--說明頁面特殊計時器-->
	</body>
</html>
