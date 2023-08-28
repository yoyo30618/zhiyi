var leftTabs = new bootstrap.Tab(document.getElementById("left-tabs"));
var rightTabs = new bootstrap.Tab(document.getElementById("right-tabs"));
let PageFirstStartTime = Date.now(); // 變數用於儲存用戶進入頁面的時間
let ThisTagStartTime = Date.now(); // 變數用於儲存用戶進入某一頁籤的時間

// 初始化頁籤
leftTabs.show();
rightTabs.show();

document.addEventListener("DOMContentLoaded", function () {
  // 預設選中 "程式範例" 頁籤
  var exampleTab = document.getElementById("example-tab");
  var exampleTabInstance = new bootstrap.Tab(exampleTab);
  exampleTabInstance.show();

  // 預設選中 "程式視覺化" 頁籤
  var visualizationTab = document.getElementById("visualization-tab");
  var visualizationTabInstance = new bootstrap.Tab(visualizationTab);
  visualizationTabInstance.show();
});

// 監聽頁籤切換事件
//左邊切換頁籤
document
  .getElementById("left-tabs")
  .addEventListener("shown.bs.tab", function (event) {
    const toTabText = event.relatedTarget.textContent;
    const page = window.location.pathname;
    const lookTime = Date.now() - ThisTagStartTime;
    const rightTabs = document
      .getElementById("right-tabs")
      .querySelectorAll(".nav-link");
    rightTabs.forEach((tab) => {
      if (tab.classList.contains("active")) {
        currentRightTab = tab.textContent;
      }
    });
    const left = toTabText;
    const right = currentRightTab;
    const data = { left, right, page, lookTime };
    fetch("../save_visit_time.php", {
      // 使用fetch API將數據發送到伺服器端保存
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    ThisTagStartTime = Date.now();
  });
//右邊切換頁籤
document
  .getElementById("right-tabs")
  .addEventListener("shown.bs.tab", function (event) {
    // 右側區塊的頁籤切換處理
    const toTabText = event.relatedTarget.textContent;
    const page = window.location.pathname;
    const lookTime = Date.now() - ThisTagStartTime;
    const leftTabs = document
      .getElementById("left-tabs")
      .querySelectorAll(".nav-link");
    leftTabs.forEach((tab) => {
      if (tab.classList.contains("active")) {
        currentLeftTab = tab.textContent;
      }
    });
    const left = currentLeftTab;
    const right = toTabText;
    const data = { left, right, page, lookTime };
    fetch("../save_visit_time.php", {
      // 使用fetch API將數據發送到伺服器端保存
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    ThisTagStartTime = Date.now();
  });

// 監聽用戶離開頁面或關閉瀏覽器的事件
window.onbeforeunload = function (event) {
  // 計算用戶在此頁面上的停留時間
  const page = window.location.pathname;
  const visitTime = Date.now() - PageFirstStartTime;
  const lookTime = Date.now() - ThisTagStartTime;
  const rightTabs = document
    .getElementById("right-tabs")
    .querySelectorAll(".nav-link");
  rightTabs.forEach((tab) => {
    if (tab.classList.contains("active")) {
      currentRightTab = tab.textContent;
    }
  });
  const leftTabs = document
    .getElementById("left-tabs")
    .querySelectorAll(".nav-link");
  leftTabs.forEach((tab) => {
    if (tab.classList.contains("active")) {
      currentLeftTab = tab.textContent;
    }
  });
  const left = currentLeftTab;
  const right = currentRightTab;
  const data = { page, visitTime, left, right, lookTime };

  // 使用fetch API將數據發送到伺服器端保存
  fetch("../save_visit_time.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  ThisTagStartTime = Date.now();
  // 返回字符串值，顯示給用戶確認對話框
  return "您確定要離開本頁面嗎？";
};
function hiddenArrowText() {
  var Arrows = document.querySelectorAll(".step-arrow");
  Arrows.forEach(function (arrow) {
    arrow.style.visibility = "hidden";
  });
  var Arrows = document.querySelectorAll(".solo-step-arrow");
  Arrows.forEach(function (arrow) {
    arrow.style.visibility = "hidden";
  });
}
hiddenArrowText();

//*******************以下為步驟相關********************* */
var currentStep = 0; // 目前顯示的步驟
// 監聽左右切換按鈕的點擊事件
document.getElementById("previous-btn").addEventListener("click", function () {
  if (currentStep == 0) showStep(0);
  else showStep(currentStep - 1);
});
document.getElementById("next-btn").addEventListener("click", function () {
  if (currentStep == CodeStep - 1) showStep(currentStep);
  else showStep(currentStep + 1);
});

// 監聽左右切換按鈕的點擊事件
document
  .getElementById("solo-previous-btn")
  .addEventListener("click", function () {
    SetSolodata();
    if (SoloCurrentStep == 0) showSoloStep(0);
    else showSoloStep(SoloCurrentStep - 1);
  });

document.getElementById("solo-next-btn").addEventListener("click", function () {
  //如果遇到對話框要先處理 記錄起來!
  if (SoloCurrentStep == SoloCodeStep - 1) showSoloStep(SoloCurrentStep);
  else {
    //如果目前這一步  有輸入框 要記錄輸入框內容
    var SoloInput1 = document.getElementById("SoloInput1");
    if (SoloInput1) SoloInput[1] = SoloInput1.value;
    var SoloInput2 = document.getElementById("SoloInput2");
    if (SoloInput2) SoloInput[2] = SoloInput2.value;
    var SoloInput3 = document.getElementById("SoloInput3");
    if (SoloInput3) SoloInput[3] = SoloInput3.value;
    var SoloInput4 = document.getElementById("SoloInput4");
    if (SoloInput4) SoloInput[4] = SoloInput4.value;
    var SoloInput5 = document.getElementById("SoloInput5");
    if (SoloInput5) SoloInput[5] = SoloInput5.value;
    SetSolodata();
    showSoloStep(SoloCurrentStep + 1);
  }
});

function showStep(step) {
  currentStep = step;
  hiddenArrowText();
  DrawSvg(step);
  // 顯示指定步驟的箭頭
  var currentStepArrow = document.querySelectorAll("#step" + ArrowStep[step]);
  currentStepArrow.forEach(function (stepArrow) {
    stepArrow.style.visibility = "visible";
  });
  // 顯示指定步驟的訊息
  var stepIndicator = document.getElementById("step-indicator");
  if (stepIndicator) {
    NowMsg = Msg[MsgStep[step]]; //如果有輸入框  要替換
    for (let i = 1; i <= 5; i++) {
      const placeholder = "{Input" + i + "}";
      const placeBoxholder = "{InputBox" + i + "}";
      const placeoutholder = "{Output" + i + "}";
      NowMsg = NowMsg.replace(
        new RegExp(placeholder, "g"),
        DefaultInput["Input" + i]
      );
      NowMsg = NowMsg.replace(
        new RegExp(placeBoxholder, "g"),
        DefaultInput["Input" + i]
      );
      NowMsg = NowMsg.replace(
        new RegExp(placeoutholder, "g"),
        DefaultOutput["Output" + i]
      );
    }
    stepIndicator.innerHTML = NowMsg;
  }
  // 更新流程圖
  var stepImage = document.getElementById("flowpic");
  if (stepImage) {
    var imageSrc = FlowPicPath + "/step" + FlowStep[step] + ".png";
    if (imageSrc) {
      stepImage.setAttribute("href", imageSrc); // 移除 href 属性
      stepImage.onerror = function () {
        stepImage.setAttribute("href", FlowPicPath + "/stepALL.png");
      };
    }
  }
  //在流程圖加註文字
  function updateFlowInfo(flowInfoId, newX, newY, newText) {
    var flowInfoElement = document.getElementById(flowInfoId);
    if (flowInfoElement) {
      flowInfoElement.setAttribute("x", newX);
      flowInfoElement.setAttribute("y", newY);
      flowInfoElement.textContent = newText;
    }
  }

  // 批量更新流程图提示信息
  for (let i = 1; i <= 5; i++) {
    let flowInfoId = "FlowInfo" + i;
    let flowInfoArray = eval("FlowInfo" + i); // 获取对应的 FlowInfo 数组
    let newX = flowInfoArray[FlowStep[step]][1];
    let newY = flowInfoArray[FlowStep[step]][2];
    let newText = flowInfoArray[FlowStep[step]][0];

    for (let i = 1; i <= 5; i++) {
      const placeholder = "{Input" + i + "}";
      const placeBoxholder = "{InputBox" + i + "}";
      const placeoutholder = "{Output" + i + "}";
      newText = newText.replace(
        new RegExp(placeholder, "g"),
        DefaultInput["Input" + i]
      );
      newText = newText.replace(
        new RegExp(placeBoxholder, "g"),
        DefaultInput["Input" + i]
      );
      newText = newText.replace(
        new RegExp(placeoutholder, "g"),
        DefaultOutput["Output" + i]
      );
    }
    updateFlowInfo(flowInfoId, newX, newY, newText);
  }
}
function showSoloStep(step) {
  SoloCurrentStep = step;
  hiddenArrowText();
  DrawSoloSvg(step);
  // 顯示指定步驟的箭頭
  var currentStepArrow = document.querySelectorAll(
    "#solo-step" + SoloArrowStep[step]
  );
  currentStepArrow.forEach(function (stepArrow) {
    stepArrow.style.visibility = "visible";
  });
  // 顯示指定步驟的訊息
  var stepIndicator = document.getElementById("step-indicator");
  if (stepIndicator) {
    NowMsg = Msg[SoloMsgStep[step]]; //如果有輸入框  要替換
    for (let i = 1; i <= 5; i++) {
      const placeholder = "{Input" + i + "}";
      const placeBoxholder = "{InputBox" + i + "}";
      const placeoutholder = "{Output" + i + "}";
      NowMsg = NowMsg.replace(new RegExp(placeholder, "g"), SoloInput[i]);
      NowMsg = NowMsg.replace(
        new RegExp(placeBoxholder, "g"),
        "<input id='SoloInput" +
          i +
          "' type='number' value='" +
          SoloInput[i] +
          "'>"
      );
      NowMsg = NowMsg.replace(new RegExp(placeoutholder, "g"), SoloOutput[i]);
    }
    stepIndicator.innerHTML = NowMsg;
  }
  // 更新流程圖
  var stepImage = document.getElementById("flowpic");
  if (stepImage) {
    var imageSrc = FlowPicPath + "/step" + SoloFlowStep[step] + ".png";
    if (imageSrc) {
      stepImage.setAttribute("href", imageSrc); // 移除 href 属性
      stepImage.onerror = function () {
        stepImage.setAttribute("href", FlowPicPath + "/stepALL.png");
      };
    }
  }
  //在流程圖加註文字
  function updateFlowInfo(flowInfoId, newX, newY, newText) {
    var flowInfoElement = document.getElementById(flowInfoId);
    if (flowInfoElement) {
      flowInfoElement.setAttribute("x", newX);
      flowInfoElement.setAttribute("y", newY);
      flowInfoElement.textContent = newText;
    }
  }

  // 批量更新流程图提示信息
  for (let i = 1; i <= 5; i++) {
    let flowInfoId = "FlowInfo" + i;
    let flowInfoArray = eval("FlowInfo" + i); // 获取对应的 FlowInfo 数组
    let newX = flowInfoArray[SoloFlowStep[step]][1];
    let newY = flowInfoArray[SoloFlowStep[step]][2];
    let newText = flowInfoArray[SoloFlowStep[step]][0];

    for (let i = 1; i <= 5; i++) {
      const placeholder = "{Input" + i + "}";
      const placeBoxholder = "{InputBox" + i + "}";
      const placeoutBoxholder = "{Output" + i + "}";
      newText = newText.replace(new RegExp(placeholder, "g"), SoloInput[i]);
      newText = newText.replace(new RegExp(placeBoxholder, "g"), SoloInput[i]);
      newText = newText.replace(
        new RegExp(placeoutBoxholder, "g"),
        SoloOutput[i]
      );
    }
    updateFlowInfo(flowInfoId, newX, newY, newText);
  }
}
function DrawSvg(step) {
  var svgContent = generateSvgContent(step, 0);
  var svgContainer = document.querySelector("#SVGPlace");
  if (svgContainer) {
    svgContainer.innerHTML = svgContent;
  }
}
function DrawSoloSvg(step) {
  var svgContent = generateSvgContent(step, 1);
  var svgContainer = document.querySelector("#SVGPlace");
  if (svgContainer) {
    svgContainer.innerHTML = svgContent;
  }
}

function generateSvgContent(step, IsSolo) {
  //將目前步驟之SVG指令包裝
  var svgContent =
    '<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">';
  if (IsSolo) {
    for (var Operation of SoloOperationInfo[SoloFlowStep[step]]) {
      if (Operation[0] == "DrawLine")
        svgContent += DrawLine(Operation[1],Operation[2],Operation[3],Operation[4],Operation[5]);
      else if (Operation[0] == "DrawText")
        svgContent += DrawText(Operation[1],Operation[2],Operation[3],Operation[4],Operation[5]);
      else if (Operation[0] == "DrawArrow")
        svgContent += DrawArrow(Operation[1],Operation[2],Operation[3],Operation[4],Operation[5]);
      else if (Operation[0] == "InputBox")
        svgContent += InputBox(Operation[1],Operation[2],Operation[3],Operation[4],Operation[5]);
      else if (Operation[0] == "OutputBox")
        svgContent += OutputBox(Operation[1],Operation[2],Operation[3],Operation[4],Operation[5]);
      else if (Operation[0] == "IfBox")
        svgContent += IfBox(Operation[1],Operation[2],Operation[3],Operation[4],Operation[5]);
      else if (Operation[0] == "ForBox")
        svgContent += ForBox(Operation[1],Operation[2],Operation[3],Operation[4],Operation[5]);
    }
  } 
  else {
    for (var Operation of OperationInfo[FlowStep[step]]) {
      if (Operation[0] == "DrawLine")
        svgContent += DrawLine(Operation[1],Operation[2],Operation[3],Operation[4],Operation[5]);
      else if (Operation[0] == "DrawText")
        svgContent += DrawText(Operation[1],Operation[2],Operation[3],Operation[4],Operation[5]);
      else if (Operation[0] == "DrawArrow")
        svgContent += DrawArrow(Operation[1],Operation[2],Operation[3],Operation[4],Operation[5]);
      else if (Operation[0] == "InputBox")
        svgContent += InputBox(Operation[1],Operation[2],Operation[3],Operation[4],Operation[5]);
      else if (Operation[0] == "OutputBox")
        svgContent += OutputBox(Operation[1],Operation[2],Operation[3],Operation[4],Operation[5]);
      else if (Operation[0] == "IfBox")
        svgContent += IfBox(Operation[1],Operation[2],Operation[3],Operation[4],Operation[5]);
        else if (Operation[0] == "ForBox")
        svgContent += ForBox(Operation[1],Operation[2],Operation[3],Operation[4],Operation[5],Operation[6],Operation[7],Operation[8],Operation[9]);
        else if (Operation[0] == "InfoTextBox")
        svgContent += InfoTextBox(Operation[1],Operation[2],Operation[3],Operation[4],Operation[5],Operation[6],Operation[7],Operation[8]);
    
    }
  }
  svgContent += "</svg>";
  return svgContent;
}
