<?php
	if(!session_id()) session_start();//開啟session
?>
<!DOCTYPE html>
<html>
	<head>
		<meta content="width=device-width, initial-scale=1.0" name="viewport" />
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" /><link href="https://cdn.jsdelivr.net/npm/prismjs@1.28.0/themes/prism.min.css" rel="stylesheet" />
		<link href="../style.css" rel="stylesheet" />
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
		<title></title>
	</head>
	<body>
		<?php 
			$ThisPage="C3-3";//要改的地方
			$nowdir=basename(dirname($_SERVER['PHP_SELF']));
			$parentDirectory = ($nowdir === "C1" || $nowdir === "C2"  || $nowdir === "C3"  || $nowdir === "C4") ? "../" : "";
			define('IN_INDEX', true);
			include $parentDirectory.'header.php'; 
			include $parentDirectory.'Fuctions.php'; 
			if(!isset($_SESSION['TELic-LAB_Islogin']))
				echo"<script  language=\"JavaScript\">alert('請先登入');location.href=\"".$parentDirectory."login.php\";</script>";
			LoadStepInfo($ThisPage);//讀取相關步驟資訊
		?>
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
									<?php
										LoadProblemFile($ThisPage);
										LoadProblemHint($ThisPage);
									?>
								</td>
							</tr>
						</table><br>
						<div class="row">
							<div class="col-lg-4">
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
<?php
LoadProblemCode($ThisPage,1);
?>
</pre>
										<div  style='text-align:center'>
											<button id="previous-btn" type="button">上一步</button>
											<button id="next-btn" type="button">下一步</button>
										</div>
									</div>
									<div class="tab-pane fade" id="simulation" role="tabpanel" aria-labelledby="simulation-tab">
										<!-- 左上區塊的程式模擬內容 -->
										<pre>
<?php
LoadProblemCode($ThisPage,2);
?>
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
							<div class="col-lg-8">
								<ul class="nav nav-tabs" id="right-tabs" role="tablist">
									<li class="nav-item" role="presentation">
										<button class="nav-link active" id="visualization-tab" data-bs-toggle="tab" data-bs-target="#visualization" type="button" role="tab" aria-controls="visualization" aria-selected="true">程式邏輯分析</button>
									</li>
									<li class="nav-item" role="presentation">
										<button class="nav-link" id="flowchart-tab" data-bs-toggle="tab" data-bs-target="#flowchart" type="button" role="tab" aria-controls="flowchart" aria-selected="false">程式流程圖</button>
									</li>
								</ul>
								<div class="tab-content" id="right-tabs-content">
									<div class="tab-pane fade show active" id="visualization" role="tabpanel" aria-labelledby="visualization-tab">
										<!-- 右側區塊的程式邏輯分析內容 -->
										<div id="SVGPlace"></div>
									</div>
									<div class="tab-pane fade" id="flowchart" role="tabpanel" aria-labelledby="flowchart-tab">
										<!-- 右側區塊的程式流程圖內容 -->
										<svg width="700" height="700" xmlns="http://www.w3.org/2000/svg">
											<defs>
												<pattern id="image-bg" x="0" y="0" width="100%" height="100%" patternUnits="userSpaceOnUse">
													<image id="flowpic" href="../pic/<?php echo $ThisPage;?>/stepALL.png" x="0" y="0" width="700" height="700" preserveAspectRatio="none" />
												</pattern>
											</defs>
											<rect x="0" y="0" width="700" height="700" fill="url(#image-bg)" /><!--流程圖底圖-->
											<text id='FlowInfo1' class='FlowInfo1' x="0" y="0" fill="black">FlowInfo1</text><!--流程圖提示資訊1-->
											<text id='FlowInfo2' class='FlowInfo2' x="0" y="0" fill="black">FlowInfo2</text><!--流程圖提示資訊2-->
											<text id='FlowInfo3' class='FlowInfo3' x="0" y="0" fill="black">FlowInfo3</text><!--流程圖提示資訊3-->
											<text id='FlowInfo4' class='FlowInfo4' x="0" y="0" fill="black">FlowInfo4</text><!--流程圖提示資訊4-->
											<text id='FlowInfo5' class='FlowInfo5' x="0" y="0" fill="black">FlowInfo5</text><!--流程圖提示資訊5-->
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 引入 Bootstrap 的 JavaScript 文件 -->
		<script src="../js/<?php echo $ThisPage;?>.js"></script>
		<script src="../js/SwitchTag.js"></script>
		<script src="../js/SVG.js"></script>
	</body>
</html>
