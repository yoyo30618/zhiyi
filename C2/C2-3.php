<!DOCTYPE html>
<html>
	<head>
		<meta content="width=device-width, initial-scale=1.0" name="viewport" />
		<!-- 引入 Bootstrap 的 CSS 文件 -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" /><link href="https://cdn.jsdelivr.net/npm/prismjs@1.28.0/themes/prism.min.css" rel="stylesheet" />
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
		<script> //在此設定本次程式預設執行順序
			CodeStep=[1,2,4,5];//箭頭該顯示的順序
			PicStep=[1,2,5,6];
			MsgStep=[
				"請輸入成績：59",
				"請輸入成績：59",
				"請輸入成績：59<br>及格！",
				"請輸入成績：59",
				"請輸入成績：59<br>不及格！"
			];
			FlowPicPath='../pic/C2-1';
		</script>
		<div class="container-fluid content">
			<div class="row">
				<?php include '../sidebar.php'; ?>
				<div class="col-lg-10">
					<!--  主要部分  -->
					<div class="main-content-container">
					
						
						<table style='margin:auto;text-align:center;width:100%;font-size: 20px;'>
							<tr>
								<td><button type="button" class="btn btn-secondary rounded-circle" id="hintButton" >?</button></td>
								<td>
									請寫一個程式，
									<text class="inputstyle" id="hint1">讓使用者自行輸入成績</text>
									，並
									<text class="ifstyle" id="hint2">判斷該成績是否及格</text>
									，並
									<text class="outputstyle" id="hint3">輸出相對應的結果</text>
									。<br>
									(如 輸入成績:90 輸出:及格!；輸入成績:55 輸出:不及格!)
								</td>
							</tr>
						</table><br>
						<div class="row">
							<div class="col-lg-6">
								<ul class="nav nav-tabs" id="left-tabs" role="tablist">
									<li class="nav-item" role="presentation">
										<button class="nav-link active" id="example-tab" data-bs-toggle="tab" data-bs-target="#example" type="button" role="tab" aria-controls="example" aria-selected="true">程式範例</button>
									</li>
									<li class="nav-item" role="presentation">
										<button class="nav-link" id="simulation-tab" data-bs-toggle="tab" data-bs-target="#simulation" type="button" role="tab" aria-controls="simulation" aria-selected="false">程式模擬</button>
									</li>
								</ul>
								<div class="tab-content" id="left-tabs-content">
									<div class="tab-pane fade show active" id="example" role="tabpanel" aria-labelledby="example-tab">
										<!-- 左上區塊的程式範例內容 -->
<pre>
<code class="language-python">
<a id='step1' class='step-arrow'> ➥</a><text class="inputstyle">grade = int(input("請輸入成績:"))</text>
<a id='step2' class='step-arrow'> ➥</a><text class="ifstyle">if(<text class="inputstyle">grade</text> >= 60):</text>
<a id='step3' class='step-arrow'> ➥</a>    <text class="outputstyle">print("及格!")</text>
<a id='step4' class='step-arrow'> ➥</a><text class="ifstyle">else:</text>
<a id='step5' class='step-arrow'> ➥</a>    <text class="outputstyle">print("不及格!")</text>
</code>
</pre>
										<div  style='text-align:center'>
											<button id="previous-btn" type="button">上一步</button>
											<button id="next-btn" type="button">下一步</button>
										</div>
									</div>
									<div class="tab-pane fade" id="simulation" role="tabpanel" aria-labelledby="simulation-tab">
										<!-- 左上區塊的程式模擬內容 -->
<pre>
<code class="language-python">
<a id='solo-step1' class='solo-step-arrow'> ➥</a><text class="inputstyle">grade = int(input("請輸入成績:"))</text>
<a id='solo-step2' class='solo-step-arrow'> ➥</a><text class="ifstyle">if(<text class="inputstyle">grade</text> >= 60):</text>
<a id='solo-step3' class='solo-step-arrow'> ➥</a>    <text class="outputstyle">print("及格!")</text>
<a id='solo-step4' class='solo-step-arrow'> ➥</a><text class="ifstyle">else:</text>
<a id='solo-step5' class='solo-step-arrow'> ➥</a>    <text class="outputstyle">print("不及格!")</text>
</code>
</pre>
										<div  style='text-align:center'>
											<button id="solo-previous-btn" type="button">上一步</button>
											<button id="solo-next-btn" type="button">下一步</button>
										</div>
									</div>
								</div><br>
								<div id="step-indicator">
									<!-- 左下區塊的程式執行結果顯示 -->
									程式執行結果顯示：<br>
								</div>
							</div>
							<div class="col-lg-6">
								<ul class="nav nav-tabs" id="right-tabs" role="tablist">
									<li class="nav-item" role="presentation">
										<button class="nav-link active" id="visualization-tab" data-bs-toggle="tab" data-bs-target="#visualization" type="button" role="tab" aria-controls="visualization" aria-selected="true">程式視覺化</button>
									</li>
									<li class="nav-item" role="presentation">
										<button class="nav-link" id="flowchart-tab" data-bs-toggle="tab" data-bs-target="#flowchart" type="button" role="tab" aria-controls="flowchart" aria-selected="false">程式流程圖</button>
									</li>
								</ul>
								<div class="tab-content" id="right-tabs-content">
									<div class="tab-pane fade show active" id="visualization" role="tabpanel" aria-labelledby="visualization-tab">
										<!-- 右側區塊的程式視覺化內容 -->
										視覺化<br><br><br><br><br><br><br><br><br><br><br><br><br>
									</div>
									<div class="tab-pane fade" id="flowchart" role="tabpanel" aria-labelledby="flowchart-tab">
										<!-- 右側區塊的程式流程圖內容 -->
										<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
											<defs>
												<pattern id="image-bg" x="0" y="0" width="100%" height="100%" patternUnits="userSpaceOnUse">
													<image id="flowpic" href="../pic/C2-1/step0.png" x="0" y="0" width="500" height="500" preserveAspectRatio="none" />
												</pattern>
											</defs>
											<rect x="0" y="0" width="500" height="500" fill="url(#image-bg)" />
											<text id='text-step1' class='step-text' x="290" y="140" fill="black">grade=59</text>
											<text id='text-step2' class='step-text' x="220" y="200" fill="black">grade=59</text>
											<text id='text-step3' class='step-text' x="360" y="220" fill="black">grade=59</text>
											<text id='text-step4' class='step-text' x="220" y="310" fill="black">grade=59</text>
											<text id='text-step5' class='step-text' x="270" y="390" fill="black">grade=59</text>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!--  主要部分  -->
				</div>
			</div>
		</div>
		<!-- 引入 Bootstrap 的 JavaScript 文件 -->
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
		<script src="../js/SwitchTag.js"></script>
		<script src="../js/ClockTime.js"></script>
	</body>
</html>
