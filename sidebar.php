<?php
	if (!defined('IN_INDEX')) {
		// 如果未定义 IN_INDEX 常量，表示未通过合法入口文件引入，终止脚本执行
		exit('Access denied.');
	}
?>
<div class="col-lg-2 bg-light menu-col">
	<div class="accordion" id="courseAccordion">
		<div class="accordion-item">
			<h2 class="accordion-header" id="headingC1">
				<button aria-controls="collapseC1" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC1" data-bs-toggle="collapse" type="button">
					C1 程式設計初探
				</button>
			</h2>
			<div aria-labelledby="headingC1" class="accordion-collapse collapse" data-bs-parent="#courseAccordion" id="collapseC1">
				<div class="accordion-body">
					<ul class="list-unstyled">
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C1/C1-1.php'" aria-controls="collapseC1-1" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC1-1" data-bs-toggle="collapse" type="button">
								C1-1 演算法是甚麼
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
			<div aria-labelledby="headingC2" class="accordion-collapse collapse" data-bs-parent="#courseAccordion" id="collapseC2">
				<div class="accordion-body">
					<ul class="list-unstyled">
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C2/C2-1.php'"  aria-controls="collapseC2-1" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC2-1" data-bs-toggle="collapse" type="button">
								題目一
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C2/C2-2.php'"  aria-controls="collapseC2-2" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC2-2" data-bs-toggle="collapse" type="button">
								題目二
							</button>
						</li>
						<li>
							<button onclick="location.href='<?php echo $parentDirectory; ?>C2/C2-3.php'"  aria-controls="collapseC2-2" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseC2-2" data-bs-toggle="collapse" type="button">
								題目三
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
