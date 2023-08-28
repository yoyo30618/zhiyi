<?php
	if (!defined('IN_INDEX')) {
		// 如果未定义 IN_INDEX 常量，表示未通过合法入口文件引入，终止脚本执行
		exit('Access denied.');
	}
	session_start();//開啟session
	$nowdir=basename(dirname($_SERVER['PHP_SELF']));
	$parentDirectory = ($nowdir === "C1" || $nowdir === "C2"  || $nowdir === "C3"  || $nowdir === "C4") ? "../" : "";
?>
<nav class="navbar navbar-expand-lg navbar-dark">
	<div class="container">
		<a class="navbar-brand" href="<?php echo $parentDirectory; ?>index.php">
			TELiC LAB
		</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
			<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" id="dropdown-menu-1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						課程分類
					</a>
					<ul class="dropdown-menu nested-dropdown-menu" aria-labelledby="dropdown-menu-1">
					<li class="nav-item dropdown">
							<a class="dropdown-item d-inline d-lg-block" href="<?php echo $parentDirectory; ?>C1/C1.php">C1 程式設計初探<span class="bi bi-chevron-compact-right"></span><em class="bi bi-chevron-compact-right d-none d-lg-inline float-end"></em> </a>
							<a class="dropdown-item dropdown-toggle d-inline d-lg-none" id="dropdown-submenu-1" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
							<ul class="dropdown-menu dropdown-submenu" aria-labelledby="dropdown-submenu-1">
								<li>
									<a class="dropdown-item" href="<?php echo $parentDirectory; ?>C1/C1-0.php">演算法是甚麼?</a>
								</li>
							</ul>
						</li>						
						<li class="nav-item dropdown">
							<a class="dropdown-item d-inline d-lg-block" href="<?php echo $parentDirectory; ?>C2/C2.php">C2 循序結構<em class="bi bi-chevron-compact-right d-none d-lg-inline float-end"></em> </a>
							<a class="dropdown-item dropdown-toggle d-inline d-lg-none" href="#" id="dropdown-submenu-1" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
							<ul class="dropdown-menu dropdown-submenu" aria-labelledby="dropdown-submenu-1">
								<li>
									<a class="dropdown-item" href="<?php echo $parentDirectory; ?>C2/C2-1.php">題目一</a>
								</li>								
								<li>
									<a class="dropdown-item" href="<?php echo $parentDirectory; ?>C2/C2-2.php">題目二</a>
								</li>								
								<li>
									<a class="dropdown-item" href="<?php echo $parentDirectory; ?>C2/C2-3.php">題目三</a>
								</li>
							</ul>
						</li>						
						<li class="nav-item dropdown">
							<a class="dropdown-item d-inline d-lg-block" href="<?php echo $parentDirectory; ?>C3/C3.php">C3 選擇結構<em class="bi bi-chevron-compact-right d-none d-lg-inline float-end"></em> </a>
							<a class="dropdown-item dropdown-toggle d-inline d-lg-none" href="#" id="dropdown-submenu-1" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
							<ul class="dropdown-menu dropdown-submenu" aria-labelledby="dropdown-submenu-1">
								<li>
									<a class="dropdown-item" href="<?php echo $parentDirectory; ?>C3/C3-0.php">選擇結構說明</a>
								</li>
								<li>
									<a class="dropdown-item" href="<?php echo $parentDirectory; ?>C3/C3-1.php">題目一</a>
								</li>								
								<li>
									<a class="dropdown-item" href="<?php echo $parentDirectory; ?>C3/C3-2.php">題目二</a>
								</li>								
								<li>
									<a class="dropdown-item" href="<?php echo $parentDirectory; ?>C3/C3-3.php">題目三</a>
								</li>
							</ul>
						</li>						
						<li class="nav-item dropdown">
							<a class="dropdown-item d-inline d-lg-block" href="<?php echo $parentDirectory; ?>C4/C4.php">C4 重複結構<em class="bi bi-chevron-compact-right d-none d-lg-inline float-end"></em> </a>
							<a class="dropdown-item dropdown-toggle d-inline d-lg-none" href="#" id="dropdown-submenu-1" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
							<ul class="dropdown-menu dropdown-submenu" aria-labelledby="dropdown-submenu-1">
								<li>
									<a class="dropdown-item" href="<?php echo $parentDirectory; ?>C4/C4-0.php">重複結構說明</a>
								</li>
								<li>
									<a class="dropdown-item" href="<?php echo $parentDirectory; ?>C4/C4-1.php">題目一</a>
								</li>								
								<li>
									<a class="dropdown-item" href="<?php echo $parentDirectory; ?>C4/C4-2.php">題目二</a>
								</li>								
								<li>
									<a class="dropdown-item" href="<?php echo $parentDirectory; ?>C4/C4-3.php">題目三</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>		
				<?php
					if(isset($_SESSION['TELic-LAB_Islogin']) && $_SESSION['TELic-LAB_Islogin']=="1"  ){
						?>
						<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" id="dropdown-menu-1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									儀錶板
								</a>
								<ul class="dropdown-menu nested-dropdown-menu" aria-labelledby="dropdown-menu-1">
								<a class="dropdown-item d-inline d-lg-block" href="<?php echo $parentDirectory; ?>dashboard.php">頁面紀錄儀錶板<em class="bi bi-chevron-compact-right d-none d-lg-inline float-end"></em> </a>
								<a class="dropdown-item d-inline d-lg-block" href="<?php echo $parentDirectory; ?>dashboardTag.php">頁籤紀錄儀錶板<em class="bi bi-chevron-compact-right d-none d-lg-inline float-end"></em> </a>
												
								</ul>
							</li>	
						<?php
					}
				?>
			</ul>
			<ul class="navbar-nav ms-auto">
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						<?php 
							if(isset($_SESSION['TELic-LAB_Islogin']) && $_SESSION['TELic-LAB_Islogin']=="1"){
								echo "歡迎，".$_SESSION['TELic-LAB_Account'];
							}
							else{
								echo "帳戶管理";
							}
						?>
					</a>
					<ul class="dropdown-menu" aria-labelledby="accountDropdown">
						<?php 
							if(isset($_SESSION['TELic-LAB_Islogin']) && $_SESSION['TELic-LAB_Islogin']=="1"){
								echo "<li><a class='dropdown-item' href='".$parentDirectory."dashboard.php'>DashBoard</a></li>";
								echo "<li><a class='dropdown-item' href='".$parentDirectory."logout.php'>Logout</a></li>";
							}
							else{
								echo "<li><a class='dropdown-item' href='".$parentDirectory."login.php'>Login</a></li>";
								echo "<li><a class='dropdown-item' href='".$parentDirectory."Signup.php'>Signup</a></li>";
							}
						?>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</nav>
