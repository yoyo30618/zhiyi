
var currentArrow = 0;
var currentLoopArrow = 0;
function showContent(contentId) {
  // 隱藏所有內容區塊
  document.getElementById("content1").style.display = "none";
  document.getElementById("content2").style.display = "none";
  document.getElementById("content3").style.display = "none";
  document.getElementById("content4").style.display = "none";
  document.getElementById("Isanswered").style.display = "none";

  // 根據contentId參數顯示相應的內容區塊
  document.getElementById("content" + contentId).style.display = "block";
  if (contentId == 2) {
	currentArrow = 0;
	currentLoopArrow = 0;
    toggleArrow();
    var movingImage = document.getElementById("movingImage");
    movingImage.setAttribute("visibility", "visible");
    var animateMotion = document.querySelector("#movingImage animateMotion");
    animateMotion.beginElement();
  }
  if (contentId == 3) {
	currentArrow = 0;
	currentLoopArrow = 0;
    toggleLoopArrow();
    var movingImage = document.getElementById("movingLoopImage");
    movingImage.setAttribute("visibility", "visible");
    var animateMotion = document.querySelector("#movingLoopImage animateMotion");
    animateMotion.beginElement();
  }
}
function toggleArrow() {
  var prevArrowElement = document.querySelector(
    ".arrow" + (((currentArrow + 16) % 17) + 1)
  );
  if (prevArrowElement) {
    prevArrowElement.style.visibility = "hidden";
  }

  var currentArrowElement = document.querySelector(
    ".arrow" + ((currentArrow % 17) + 1)
  );
  if (currentArrowElement) {
    currentArrowElement.style.visibility = "visible";
  }
  currentArrow = currentArrow + 1;
  if (currentArrow < 17) {
    setTimeout(toggleArrow, 1500);
  } else {
    var endImage = document.getElementById("endImage");
    endImage.setAttribute("visibility", "visible");
  }
}

function toggleLoopArrow() {
  var prevArrowElement = document.querySelector(
    ".newarrow" + (((currentLoopArrow + 3) % 4) + 1)
  );
  if (prevArrowElement) prevArrowElement.style.visibility = "hidden";
  var currentArrowElement = document.querySelector(
    ".newarrow" + ((currentLoopArrow % 4) + 1)
  );
  if (currentArrowElement) currentArrowElement.style.visibility = "visible";
  currentLoopArrow = currentLoopArrow + 1;
  if (currentLoopArrow < 17) setTimeout(toggleLoopArrow, 1500);
  else {
	prevArrowElement = document.querySelector(".newarrow1");
	prevArrowElement.style.visibility = "hidden";
	prevArrowElement = document.querySelector(".newarrow2");
	prevArrowElement.style.visibility = "hidden";
	prevArrowElement = document.querySelector(".newarrow3");
	prevArrowElement.style.visibility = "hidden";
	prevArrowElement = document.querySelector(".newarrow4");
	prevArrowElement.style.visibility = "hidden";
	currentArrowElement = document.querySelector(".newarrow5");
	currentArrowElement.style.visibility = "visible";
    var endImage = document.getElementById("LoopendImage");
    endImage.setAttribute("visibility", "visible");
  }
}

function ResetAns() {
  // 在這裡添加顯示演算法說明的邏輯
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