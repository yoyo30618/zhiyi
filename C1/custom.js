function showContent(contentId) {
  // 隱藏所有內容區塊
  document.getElementById("content1").style.display = "none";
  document.getElementById("content2").style.display = "none";
  document.getElementById("content3").style.display = "none";
  document.getElementById("content4").style.display = "none";
  document.getElementById("Isanswered").style.display = "none";
  document.getElementById("Unanswered").style.display = "none";
  document.getElementById("MoveToContent3").style.display = "none";
  ResetGreatBurger();//整理乾淨漢堡區
  ResetAns();//重整填答區
  // 根據contentId參數顯示相應的內容區塊
  document.getElementById("content" + contentId).style.display = "block";
}
function ResetAns(){
	document.getElementById("answer").disabled = false;
	document.getElementById("submitans").disabled = false;
	document.getElementById("Isanswered").style.display = "none";
	document.getElementById("Unanswered").style.display = "none";
	document.getElementById("algorithmExplanation").style.display = "none";
}
function showAlgorithmExplanation() {
  if (document.getElementById("answer").value == "") {
    document.getElementById("Isanswered").style.display = "none";
	document.getElementById("Unanswered").style.display = "inline";

  }
  else {
    // 在這裡添加顯示演算法說明的邏輯
    document.getElementById("answer").disabled = true;
    document.getElementById("submitans").disabled = true;
    document.getElementById("Isanswered").style.display = "inline";
	document.getElementById("Unanswered").style.display = "none";
    document.getElementById("algorithmExplanation").style.display = "block";

    const page = window.location.pathname;
    const ans = document.getElementById("answer").value; // 獲取回答內容
    const data = { page, ans };
    // 使用fetch API將數據發送到伺服器端保存
    fetch("../save_ans.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}

function checkAssembly() {//不檢查，純做漢堡
	var stepOrder = [];
	for (var i = 1; i <= 6; i++) {
	  var stepId = "step" + i;
	  var stepSelect = document.getElementById(stepId);
	  var DropDownstepSelect = document.getElementById("DropDown"+stepId);
	  var selectedIngredient = stepSelect.value;
	  var DropDownIngredient = DropDownstepSelect.value;
	  stepOrder.push(DropDownIngredient+selectedIngredient);
	}
	
	var resultElement = document.getElementById("assemblyResult");
	//疊漢堡時間~
	var StackedBurgerElement = document.getElementById("StackedBurger");
	var BurgerTxt="";
	//第二版疊漢堡時間~
	BurgerList=[];
	for (var i = 0; i < stepOrder.length; i++) {
		if(stepOrder[i].includes("拿走")){
			var removedItemIndex = BurgerList.indexOf(stepOrder[i].substring(2));
			if (removedItemIndex !== -1) {
			  BurgerList.splice(removedItemIndex, 1);
			}
		}
		else if(stepOrder[i].includes("放置")){
			BurgerList.push(stepOrder[i].substring(2));
		}
	}
	//  alert(BurgerList);
	for (var i =  BurgerList.length-1; i>=0; i--) {
		if (BurgerList[i] == "頂部麵包") BurgerTxt += "<img src='../pic/burger-1.png'>";
		if (BurgerList[i] == "生菜") BurgerTxt +="<img src='../pic/burger-2.png'>";
		if (BurgerList[i] == "肉餅") BurgerTxt += "<img src='../pic/burger-3.png'>";
		if (BurgerList[i] == "底部麵包") BurgerTxt +="<img src='../pic/burger-4.png'>";
		if (BurgerList[i] == "起司片") BurgerTxt +="<img src='../pic/burger-5.png'>";
		if (BurgerList[i] == "番茄") BurgerTxt += "<img src='../pic/burger-6.png'>";
		if (BurgerList[i] == "小黃瓜") BurgerTxt += "<img src='../pic/burger-7.png'>";
		if (BurgerList[i] == "培根") BurgerTxt +="<img src='../pic/burger-8.png'>";
		if (BurgerList[i] == "酪梨") BurgerTxt += "<img src='../pic/burger-9.png'>";
		if (BurgerList[i] == "草莓醬") BurgerTxt +="<img src='../pic/burger-10.png'>";
		if (BurgerList[i] == "薯餅") BurgerTxt +="<img src='../pic/burger-11.png'>";
		if (BurgerList[i] == "巧克力醬") BurgerTxt += "<img src='../pic/burger-12.png'>";
	}
	StackedBurgerElement.innerHTML  = BurgerTxt;
	resultElement.style.display = "inline";
  }
var ingredients = ["頂部麵包", "生菜", "肉餅", "底部麵包", "起司片", "番茄", "小黃瓜", "培根", "酪梨", "草莓醬", "薯餅", "巧克力醬"];
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
      '<img src="../pic/burger-' + (i + 1) + '.png" alt="' + ingredients[i] + '" >';
	  
  
	  optionsHTML +='<div class="tooltipX">' + ingredients[i] + '</div>' ;
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
  function Greatdrop(event) {
	  event.preventDefault();
	  var src = event.dataTransfer.getData("drag-src");
	  var alt = event.dataTransfer.getData("drag-alt");
	  var newDiv = event.target;
	
	  if (newDiv.tagName === "IMG") {
		newDiv = newDiv.parentNode;
	  }
	
	  if (newDiv.classList.contains("Greatstep")) {
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
  function checkGreatAssembly() {//檢查流程圖與步驟是否相呼應
	var flowchartOrder = [];
	var GreatAns = ["底部麵包","肉餅","起司片","生菜","番茄","頂部麵包"];
	  var flowchart = document.getElementById("flowchart");
	  var flowchartSteps = flowchart.getElementsByClassName("Greatstep");
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
	//   alert(flowchartOrder);
	  var isCorrectOrder = true;
	  for (var i = 0; i < flowchartOrder.length; i++) {
		if (GreatAns[i] !== flowchartOrder[i]) {
		  isCorrectOrder = false;
		  break;
		}
	  }
	  var resultElement = document.getElementById("assemblyResult");
	  if (isCorrectOrder) {
		resultElement.textContent = "製作成功";
		resultElement.style.color = "green";
		document.getElementById("MoveToContent3").style.display = "inline";
	  } else {
		resultElement.textContent = "製作失敗，請修正錯誤!";
		resultElement.style.color = "red";
		document.getElementById("MoveToContent3").style.display = "none";
	  }
	  //疊漢堡時間~
	  var StackedGreatBurgerElement = document.getElementById("StackedGreatBurger");
	  var BurgerTxt="";
	  for (var i =newburger.length-1; i >=0; i--) {
	  	BurgerTxt+="<img src='";
	  	BurgerTxt+=newburger[i];
	  	BurgerTxt+="'>";
	  }
  
	  StackedGreatBurgerElement.innerHTML  = BurgerTxt;
	  resultElement.style.display = "inline";
	}
  function ResetGreatBurger(){
	Step=['一','二','三','四','五','六'];
	for (var i = 0; i < Step.length; i++) {
		var RstBurger = document.getElementById("GreatFlowStep"+(i+1));
		RstBurger.innerHTML  = "步驟"+Step[i];
		RstBurger.classList.remove("with-ingredient");
	}
	checkGreatAssembly();
  }
  // JavaScript控制提示框顯示
document.addEventListener("DOMContentLoaded", function () {
	var ingredientItems = document.querySelectorAll('.ingredient-item');
  
	ingredientItems.forEach(function (item) {
	  var img = item.querySelector('img');
	  var tooltip = item.querySelector('.tooltipX');
  
	  // 滑鼠移到圖片時顯示提示框
	  img.addEventListener('mouseover', function () {
		tooltip.style.display = 'block';
	  });
  
	  // 滑鼠離開圖片時隱藏提示框
	  img.addEventListener('mouseout', function () {
		tooltip.style.display = 'none';
	  });
	});
  });
  
  function generateGreatBurger(){
	//疊漢堡時間~
	var GreatBurgerElement = document.getElementById("GreatBurger");
	var BurgerTxt="";
	//完美漢堡時間~
	BurgerList=["底部麵包","肉餅","起司片","生菜","番茄","頂部麵包"];
	for (var i = BurgerList.length-1; i>=0; i--) {
		if (BurgerList[i] == "頂部麵包") BurgerTxt += "<img src='../pic/burger-1.png'>";
		if (BurgerList[i] == "生菜") BurgerTxt +="<img src='../pic/burger-2.png'>";
		if (BurgerList[i] == "肉餅") BurgerTxt += "<img src='../pic/burger-3.png'>";
		if (BurgerList[i] == "底部麵包") BurgerTxt +="<img src='../pic/burger-4.png'>";
		if (BurgerList[i] == "起司片") BurgerTxt +="<img src='../pic/burger-5.png'>";
		if (BurgerList[i] == "番茄") BurgerTxt += "<img src='../pic/burger-6.png'>";
		if (BurgerList[i] == "小黃瓜") BurgerTxt += "<img src='../pic/burger-7.png'>";
		if (BurgerList[i] == "培根") BurgerTxt +="<img src='../pic/burger-8.png'>";
		if (BurgerList[i] == "酪梨") BurgerTxt += "<img src='../pic/burger-9.png'>";
		if (BurgerList[i] == "草莓醬") BurgerTxt +="<img src='../pic/burger-10.png'>";
		if (BurgerList[i] == "薯餅") BurgerTxt +="<img src='../pic/burger-11.png'>";
		if (BurgerList[i] == "巧克力醬") BurgerTxt += "<img src='../pic/burger-12.png'>";
	}
	GreatBurgerElement.innerHTML  = BurgerTxt;
  }
  