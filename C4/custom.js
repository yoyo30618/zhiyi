
var currentArrow = 0;
var currentLoopArrow = 0;
let timerIds = [];
function showContent(contentId) {
  // 隱藏所有內容區塊
  document.getElementById("content1").style.display = "none";
  document.getElementById("content2").style.display = "none";
  document.getElementById("content3").style.display = "none";
  document.getElementById("content4").style.display = "none";
  document.getElementById("Isanswered").style.display = "none";
  var animateMotion = document.querySelector("#movingImage animateMotion");
  console.log("停止動畫2");
  animateMotion.endElement();
  

  // 根據contentId參數顯示相應的內容區塊
  document.getElementById("content" + contentId).style.display = "block";
  if (contentId == 2) {
	  currentArrow = 0;
	  currentLoopArrow = 0;
    console.log("開始動畫2");
    animateMotion.beginElement();
    toggleArrow();
  }
  if (contentId == 3) {
    currentArrow = 0;
    currentLoopArrow = 0;
    toggleLoopArrow();
    var video = document.getElementById("Content3Video");
    video.play();
  }
}
function clearAllTimeouts() {
  for (let timerId of timerIds) {
    clearTimeout(timerId);
  }
  timerIds = [];// 清空定时器数组
}
function toggleArrow() {
  var endImage = document.getElementById("endImage");
  endImage.style.visibility = "hidden";
  let prevArrowElements = document.querySelectorAll("[class^='arrow']");
  prevArrowElements.forEach(element => {
    element.style.visibility = "hidden";
  });

  var currentArrowElement = document.querySelector(
    ".arrow" + ((currentArrow % 17) + 1)
  );
  if (currentArrowElement) {
    currentArrowElement.style.visibility = "visible";
  }
  currentArrow = currentArrow + 1;
  if (currentArrow < 17) {
    clearAllTimeouts();
    timerIds.push(setTimeout(toggleArrow, 1500));
  } else {
    let prevArrowElements = document.querySelectorAll("[class^='arrow']");
    prevArrowElements.forEach(element => {
      element.style.visibility = "hidden";
    });
    currentArrowElement = document.querySelector(".arrow17");
    currentArrowElement.style.visibility = "visible";
    endImage.style.visibility = "visible";
  }
}

function toggleLoopArrow() {
  let prevArrowElements = document.querySelectorAll("[class^='newarrow']");
  prevArrowElements.forEach(element => {
    element.style.visibility = "hidden";
  });

  var currentArrowElement = document.querySelector(
    ".newarrow" + ((currentLoopArrow % 4) + 1)
  );
  if (currentArrowElement) currentArrowElement.style.visibility = "visible";
  currentLoopArrow = currentLoopArrow + 1;
  if (currentLoopArrow < 17){ 
    clearAllTimeouts();
    timerIds.push(setTimeout(toggleLoopArrow, 1500));
  }
  else {
    let prevArrowElements = document.querySelectorAll("[class^='newarrow']");
    prevArrowElements.forEach(element => {
      element.style.visibility = "hidden";
    });
    currentArrowElement = document.querySelector(".newarrow5");
    currentArrowElement.style.visibility = "visible";
    endImage.style.visibility = "visible";
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