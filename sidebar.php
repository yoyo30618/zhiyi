<?php
	if (!defined('IN_INDEX')) {
		// 如果未定义 IN_INDEX 常量，表示未通过合法入口文件引入，终止脚本执行
		exit('Access denied.');
	}
	$nowdir=basename(dirname($_SERVER['PHP_SELF']));
?>
<div class="col-lg-2 bg-light menu-col">
	<div class="accordion" id="courseAccordion">
		<div class="accordion-item">
			<h2 class="accordion-header" id="headingC1">
				<button aria-controls="collapseC1" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC1" data-bs-toggle="collapse" type="button">
					C1 程式設計初探
				</button>
			</h2>
			<div aria-labelledby="headingC1" class="accordion-collapse collapse <?php if($nowdir==="C1") echo "show"; ?>" data-bs-parent="#courseAccordion" id="collapseC1" >
				<div class="accordion-body">
					<ul class="list-unstyled">
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C1/C1-0.php'" aria-controls="collapseC1-0" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC1-0" data-bs-toggle="collapse" type="button">
								演算法是什麼
								<span class="visually-hidden">Toggle Button</span>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="accordion-item">
			<h2 class="accordion-header" id="headingC2">
				<button aria-controls="collapseC2" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC2" data-bs-toggle="collapse" type="button">
					C2 循序結構
				</button>
			</h2>
			<div aria-labelledby="headingC2" class="accordion-collapse collapse <?php if($nowdir==="C2") echo "show"; ?>" data-bs-parent="#courseAccordion" id="collapseC2">
				<div class="accordion-body">
					<ul class="list-unstyled">
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C2/C2-1.php'"  aria-controls="collapseC2-1" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC2-1" data-bs-toggle="collapse" type="button">
							C2-1 題目一
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C2/C2-2.php'"  aria-controls="collapseC2-2" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC2-2" data-bs-toggle="collapse" type="button">
							C2-2 題目二
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C2/C2-3.php'"  aria-controls="collapseC2-3" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC2-3" data-bs-toggle="collapse" type="button">
							C2-3 題目三
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C2/C2-4.php'"  aria-controls="collapseC2-4" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC2-4" data-bs-toggle="collapse" type="button">
							C2-4 題目四
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C2/C2-5.php'"  aria-controls="collapseC2-5" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC2-5" data-bs-toggle="collapse" type="button">
							C2-5 題目五
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C2/C2-6.php'"  aria-controls="collapseC2-6" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC2-6" data-bs-toggle="collapse" type="button">
							C2-6 題目六
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C2/C2-7.php'"  aria-controls="collapseC2-7" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC2-7" data-bs-toggle="collapse" type="button">
							C2-7 題目七
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C2/C2-8.php'"  aria-controls="collapseC2-8" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC2-8" data-bs-toggle="collapse" type="button">
								C2-8 題目八
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="accordion-item">
			<h2 class="accordion-header" id="headingC3">
				<button aria-controls="collapseC3" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC3" data-bs-toggle="collapse" type="button">
					C3 選擇結構
				</button>
			</h2>
			<div aria-labelledby="headingC3" class="accordion-collapse collapse <?php if($nowdir==="C3") echo "show"; ?>" data-bs-parent="#courseAccordion" id="collapseC3">
				<div class="accordion-body">
					<ul class="list-unstyled">
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C3/C3-0.php'"  aria-controls="collapseC3-0" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC4-0" data-bs-toggle="collapse" type="button">
								選擇結構說明
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C3/C3-1.php'"  aria-controls="collapseC3-1" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC3-1" data-bs-toggle="collapse" type="button">
								C3-1 題目一
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C3/C3-2.php'"  aria-controls="collapseC3-2" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC3-2" data-bs-toggle="collapse" type="button">
							C3-2 題目二
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C3/C3-3.php'"  aria-controls="collapseC3-3" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC3-3" data-bs-toggle="collapse" type="button">
							C3-3 題目三
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C3/C3-4.php'"  aria-controls="collapseC3-4" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC3-4" data-bs-toggle="collapse" type="button">
							C3-4 題目四
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C3/C3-5.php'"  aria-controls="collapseC3-5" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC3-5" data-bs-toggle="collapse" type="button">
							C3-5 題目五
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C3/C3-6.php'"  aria-controls="collapseC3-6" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC3-6" data-bs-toggle="collapse" type="button">
							C3-6 題目六
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="accordion-item">
			<h2 class="accordion-header" id="headingC4">
				<button aria-controls="collapseC4" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC4" data-bs-toggle="collapse" type="button">
					C4 重複結構
				</button>
			</h2>
			<div aria-labelledby="headingC4" class="accordion-collapse collapse <?php if($nowdir==="C4") echo "show"; ?>" data-bs-parent="#courseAccordion" id="collapseC4">
				<div class="accordion-body">
					<ul class="list-unstyled">
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C4/C4-0.php'"  aria-controls="collapseC4-0" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC4-0" data-bs-toggle="collapse" type="button">
								重複結構說明
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C4/C4-1.php'"  aria-controls="collapseC4-1" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC4-1" data-bs-toggle="collapse" type="button">
								題目一
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C4/C4-2.php'"  aria-controls="collapseC4-2" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC4-2" data-bs-toggle="collapse" type="button">
								題目二
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C4/C4-3.php'"  aria-controls="collapseC4-3" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC4-3" data-bs-toggle="collapse" type="button">
								題目三
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C4/C4-4.php'"  aria-controls="collapseC4-4" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC4-4" data-bs-toggle="collapse" type="button">
								題目四
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C4/C4-5.php'"  aria-controls="collapseC4-5" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC4-5" data-bs-toggle="collapse" type="button">
								題目五
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C4/C4-6.php'"  aria-controls="collapseC4-6" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC4-6" data-bs-toggle="collapse" type="button">
								題目六
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C4/C4-7.php'"  aria-controls="collapseC4-7" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC4-7" data-bs-toggle="collapse" type="button">
								題目七
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
