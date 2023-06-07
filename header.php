
<?php 
	session_start();//開啟session
	$nowdir=basename(dirname($_SERVER['PHP_SELF']));
	$parentDirectory = ($nowdir === "C1" || $nowdir === "C2") ? "../" : "";
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
									<a class="dropdown-item" href="<?php echo $parentDirectory; ?>C1/C1-1.php">演算法是甚麼?</a>
								</li>
								<!-- 再下一層的範例
									<li class="nav-item dropdown">
										<a class="dropdown-item d-inline d-lg-block" href="/article_filter?category=5"> 前端 <em class="bi bi-chevron-compact-right d-none d-lg-inline float-end"></em> </a>
										<a class="dropdown-item dropdown-toggle d-inline d-lg-none" href="#" id="dropdown-submenu-5" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
										<ul class="dropdown-menu dropdown-submenu" aria-labelledby="dropdown-submenu-5">
											<li>
												<a class="dropdown-item" href="/article_filter?category=7">CSS</a>
											</li>
											<li>
												<a class="dropdown-item" href="/article_filter?category=6">HTML</a>
											</li>
											<li>
												<a class="dropdown-item" href="/article_filter?category=8">Javascript</a>
											</li>
										</ul>
									</li> 
								-->
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
					</ul>
				</li>				
				<li class="nav-item dropdown">
					<a class="nav-link " href="<?php echo $parentDirectory; ?>dashboard.php" id="dropdown-menu-1" role="button">
						儀錶板
					</a>
				</li>
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
								echo "<li><a class='dropdown-item' href='".$parentDirectory."register.php'>Register</a></li>";
							}
						?>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</nav>
