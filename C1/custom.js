function showContent(contentId) {
  // 隱藏所有內容區塊
  document.getElementById("content1").style.display = "none";
  document.getElementById("content2").style.display = "none";
  document.getElementById("content3").style.display = "none";
  document.getElementById("Isanswered").style.display = "none";
  document.getElementById("MoveToContent3").style.display = "none";
  ResetBurger();//整理乾淨漢堡區
  ResetAns();//重整填答區
  // 根據contentId參數顯示相應的內容區塊
  document.getElementById("content" + contentId).style.display = "block";
}
function ResetAns(){
	document.getElementById("answer").disabled = false;
	document.getElementById("submitans").disabled = false;
	document.getElementById("Isanswered").style.display = "none";
	document.getElementById("algorithmExplanation").style.display = "none";
}
function showAlgorithmExplanation() {
  // 在這裡添加顯示演算法說明的邏輯
  document.getElementById("answer").disabled = true;
  document.getElementById("submitans").disabled = true;
  document.getElementById("Isanswered").style.display = "inline";
  document.getElementById("algorithmExplanation").style.display = "block";
  
  const page = window.location.pathname;
  const ans = document.getElementById("answer").value; // 獲取回答內容
  const data = { page, ans};
  // 使用fetch API將數據發送到伺服器端保存
  fetch("../save_ans.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

}

function checkAssembly() {//檢查流程圖與步驟是否相呼應
	var stepOrder = [];
	var flowchartOrder = [];
	for (var i = 1; i <= 6; i++) {
	  var stepId = "step" + i;
	  var stepSelect = document.getElementById(stepId);
	  var selectedIngredient = stepSelect.value;
	  stepOrder.push(selectedIngredient);
	}
	var flowchart = document.getElementById("flowchart");
	var flowchartSteps = flowchart.getElementsByClassName("step");
	var newburger=[];
	for (var i = 0; i < flowchartSteps.length; i++) {
	  var step = flowchartSteps[i];
	  var img = step.querySelector("img");  
	  if (img) {
		newburger.push(img.src);
		flowchartOrder.push(img.alt);
	  } else {
		flowchartOrder.push(null);
	  }
	}
	var isCorrectOrder = true;
	for (var i = 0; i < stepOrder.length; i++) {
	  if (stepOrder[i] !== flowchartOrder[i]) {
		isCorrectOrder = false;
		break;
	  }
	}
	var resultElement = document.getElementById("assemblyResult");
	if (isCorrectOrder) {
	  resultElement.textContent = "步驟區與流程圖區的順序相符！";
	  resultElement.style.color = "green";
	  document.getElementById("MoveToContent3").style.display = "inline";
	} else {
	  resultElement.textContent = "步驟區與流程圖區的順序不符！";
	  resultElement.style.color = "red";
	  document.getElementById("MoveToContent3").style.display = "none";
	}
	//疊漢堡時間~
	var StackedBurgerElement = document.getElementById("StackedBurger");
	var BurgerTxt="";
	for (var i = 0; i < newburger.length; i++) {
		BurgerTxt+="<img src='";
		BurgerTxt+=newburger[i];
		BurgerTxt+="'>";
	}
	StackedBurgerElement.innerHTML  = BurgerTxt;
	resultElement.style.display = "inline";
  }
var ingredients = ["頂部麵包", "生菜", "肉餅", "底部麵包", "起司片", "番茄"];
function generateIngredientOptions() {
  var optionsHTML = "";
  for (var i = 0; i < ingredients.length; i++)
    optionsHTML +=
      '<option value="' + ingredients[i] + '">' +
      ingredients[i] +
      "</option>";
  return optionsHTML;
}
function generateIngredientSelects() {
  var optionsHTML = "";
  for (var i = 0; i < ingredients.length; i++) {
    optionsHTML += '<div class="col-lg-2">';
    optionsHTML +=
      '<div class="ingredient-item" draggable="true" ondragstart="drag(event)">';
    optionsHTML +=
      '<img src="../pic/burger-' + (i + 1) + '.png" alt="' + ingredients[i] + '">';
    optionsHTML += "</div>";
    optionsHTML += "</div>";
  }
  return optionsHTML;
}
function allowDrop(event) {
	event.preventDefault();
}
function drag(event) {
	event.dataTransfer.setData("drag-src", event.target.src);
	event.dataTransfer.setData("drag-alt", event.target.alt);
}
function drop(event) {
	event.preventDefault();
	var src = event.dataTransfer.getData("drag-src");
	var alt = event.dataTransfer.getData("drag-alt");
	var newDiv = event.target;
  
	if (newDiv.tagName === "IMG") {
	  newDiv = newDiv.parentNode;
	}
  
	if (newDiv.classList.contains("step")) {
	  if (event.dataTransfer.getData("drag-src").includes("burger-")) {
		newDiv.innerHTML = "";
		var img = document.createElement("img");
		img.src = src;
		img.alt = alt;
		img.draggable = true;
		img.ondragstart = function (e) {
		  drag(e);
		};
		img.ondrop = function (e) {
		  drop(e);
		};
		img.ondragover = function (e) {
		  allowDrop(e);
		};
		newDiv.appendChild(img);
		newDiv.classList.add("with-ingredient");
	  }
	}
  }  
  function ResetBurger(){
	Step=['一','二','三','四','五','六'];
	for (var i = 0; i < Step.length; i++) {
		var RstBurger = document.getElementById("FlowStep"+(i+1));
		RstBurger.innerHTML  = "步驟"+Step[i];
		RstBurger.classList.remove("with-ingredient");
	}
	checkAssembly();
  }