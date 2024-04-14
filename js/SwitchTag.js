var leftTabs = new bootstrap.Tab(document.getElementById("left-tabs"));
var rightTabs = new bootstrap.Tab(document.getElementById("right-tabs"));
let PageFirstStartTime = Date.now(); // 變數用於儲存用戶進入頁面的時間
let ThisTagStartTime = Date.now(); // 變數用於儲存用戶進入某一頁籤的時間
NowTag = document.getElementById("right-tabs").querySelectorAll(".nav-link");
NowTagValue="程式邏輯分析";
function showStep(step) {
  currentStep = step;
  hiddenArrowText();
  DrawSvg(step);
  // 顯示指定步驟的箭頭
  if(NowTagValue=="程式邏輯分析") var currentStepArrow = document.querySelectorAll("#step" + ArrowStep_SVG[step]);
  else var currentStepArrow = document.querySelectorAll("#step" + ArrowStep[step]);
  currentStepArrow.forEach(function (stepArrow) {
    stepArrow.style.visibility = "visible";
  });
  // 顯示指定步驟的訊息
  var stepIndicator = document.getElementById("step-indicator");
  if (stepIndicator) {
    if(NowTagValue=="程式邏輯分析") NowMsg = Msg[MsgStep_SVG[step]];
    else  NowMsg = Msg[MsgStep[step]];
    for (let i = 1; i <= 6; i++) {
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
    if(NowTagValue=="程式邏輯分析")
      var imageSrc = FlowPicPath + "/step" + FlowStep_SVG[step] + ".png";
    else 
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
  // for (let i = 1; i <= CodeStep; i++) {
  //   let flowInfoId = "FlowInfo" + i;
  //   let flowInfoArray = eval("FlowInfo" + i); // 获取对应的 FlowInfo 数组
  //   if(NowTagValue=="程式邏輯分析"){
  //     // newX = flowInfoArray[FlowStep_SVG[step]][1];
  //     // newY = flowInfoArray[FlowStep_SVG[step]][2];
  //     // newText = flowInfoArray[FlowStep_SVG[step]][0];
  //   }
  //   else{
  //     // newX = flowInfoArray[FlowStep[step]][1];
  //     // newY = flowInfoArray[FlowStep[step]][2];
  //     // newText = flowInfoArray[FlowStep[step]][0];
  //   }
  //   for (let i = 1; i <= 5; i++) {
  //     const placeholder = "{Input" + i + "}";
  //     const placeBoxholder = "{InputBox" + i + "}";
  //     const placeoutholder = "{Output" + i + "}";
  //     newText = newText.replace(
  //       new RegExp(placeholder, "g"),
  //       DefaultInput["Input" + i]
  //     );
  //     newText = newText.replace(
  //       new RegExp(placeBoxholder, "g"),
  //       DefaultInput["Input" + i]
  //     );
  //     newText = newText.replace(
  //       new RegExp(placeoutholder, "g"),
  //       DefaultOutput["Output" + i]
  //     );
  //   }
  //   updateFlowInfo(flowInfoId, newX, newY, newText);
  // }
}
function showSoloStep(step) {
  SoloCurrentStep = step;
  hiddenArrowText();
  DrawSoloSvg(step);
  // 顯示指定步驟的箭頭
  if(NowTagValue=="程式邏輯分析") var currentStepArrow = document.querySelectorAll("#solo-step" + SoloArrowStep_SVG[step]);
  else var currentStepArrow = document.querySelectorAll("#solo-step" + SoloArrowStep[step]);
  currentStepArrow.forEach(function (stepArrow) {
    stepArrow.style.visibility = "visible";
  });
  // 顯示指定步驟的訊息
  var stepIndicator = document.getElementById("step-indicator");
  if (stepIndicator) {
    if(NowTagValue=="程式邏輯分析") NowMsg = Msg[SoloMsgStep_SVG[step]];
    else  NowMsg = Msg[SoloMsgStep[step]];
    for (let i = 1; i <= 6; i++) {
      const placeholder = "{Input" + i + "}";
      const placeBoxholder = "{InputBox" + i + "}";
      const placeBoxholderTXT = "{InputBoxTXT" + i + "}";
      const placeoutholder = "{Output" + i + "}";
      if( SoloInput[i]=="") SoloInput[i]="(錯誤)未輸入";
      NowMsg = NowMsg.replace(new RegExp(placeholder, "g"), SoloInput[i]);
      NowMsg = NowMsg.replace(
        new RegExp(placeBoxholder, "g"),
        "<input id='SoloInput" +
          i +
          "' type='number'"+
          "'>"
      );
      NowMsg = NowMsg.replace(
        new RegExp(placeBoxholderTXT, "g"),
        "<input id='SoloInput" +
          i +
          "' type='text'"+
          "'>"
      );
      NowMsg = NowMsg.replace(new RegExp(placeoutholder, "g"), SoloOutput[i]);
    }
    stepIndicator.innerHTML = NowMsg;
  }
  // 更新流程圖
  var stepImage = document.getElementById("flowpic");
  if (stepImage) {
    if(NowTagValue=="程式邏輯分析")
      var imageSrc = FlowPicPath + "/step" + SoloFlowStep_SVG[step] + ".png";
    else
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
  // for (let i = 1; i <= CodeStep; i++) {
  //   let flowInfoId = "FlowInfo" + i;
  //   let flowInfoArray = eval("FlowInfo" + i); // 获取对应的 FlowInfo 数组
  //   if(NowTagValue=="程式邏輯分析"){
  //     // newX = flowInfoArray[SoloFlowStep_SVG[step]][1];
  //     // newY = flowInfoArray[SoloFlowStep_SVG[step]][2];
  //     // newText = flowInfoArray[SoloFlowStep_SVG[step]][0];
  //   }
  //   else{
  //     // newX = flowInfoArray[SoloFlowStep[step]][1];
  //     // newY = flowInfoArray[SoloFlowStep[step]][2];
  //     // newText = flowInfoArray[SoloFlowStep[step]][0];
  //   }
  //   for (let i = 1; i <= 5; i++) {
  //     const placeholder = "{Input" + i + "}";
  //     const placeBoxholder = "{InputBox" + i + "}";
  //     const placeoutBoxholder = "{Output" + i + "}";
  //     if( SoloInput[i]=="") SoloInput[i]="(錯誤)未輸入";
  //     newText = newText.replace(new RegExp(placeholder, "g"), SoloInput[i]);
  //     newText = newText.replace(new RegExp(placeBoxholder, "g"), SoloInput[i]);
  //     newText = newText.replace(
  //       new RegExp(placeoutBoxholder, "g"),
  //       SoloOutput[i]
  //     );
  //   }
  //   updateFlowInfo(flowInfoId, newX, newY, newText);
  // }
}
// 初始化頁籤
leftTabs.show();
rightTabs.show();
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
  if(NowTagValue=="程式邏輯分析"){
    if (currentStep == CodeStep_SVG - 1) showStep(currentStep);
    else showStep(currentStep + 1);
  }
  else{
    if (currentStep == CodeStep - 1) showStep(currentStep);
    else showStep(currentStep + 1);
  }
});

// 監聽左右切換按鈕的點擊事件
document
  .getElementById("solo-previous-btn")
  .addEventListener("click", function () {
    SoloCurrentStep=SoloCurrentStep-1;
    SetSolodata();
    if (SoloCurrentStep <= 0) showSoloStep(0);
    else showSoloStep(SoloCurrentStep);
  });

document.getElementById("solo-next-btn").addEventListener("click", function () {
  //如果遇到對話框要先處理 記錄起來!
  if(NowTagValue=="程式邏輯分析"){
    if (SoloCurrentStep == SoloCodeStep_SVG - 1) showSoloStep(SoloCurrentStep);
    else{
      Flag=true;
      //如果目前這一步  有輸入框 要記錄輸入框內容
      var SoloInput1 = document.getElementById("SoloInput1");
      if (SoloInput1){ 
        if(SoloInput1.value=="")
          {alert("請檢查輸入格式");Flag=False;}  
        else if(Number(SoloInput1.value)<0)
          {alert("請勿輸入負數");Flag=False;}
        else
          SoloInput[1] = SoloInput1.value;
      }
      var SoloInput2 = document.getElementById("SoloInput2");
      if (SoloInput2){ 
        if(SoloInput2.value=="")
          {alert("請檢查輸入格式");Flag=False;}
        else if(Number(SoloInput2.value)<0)
          {alert("請勿輸入負數");Flag=False;}
        else
          SoloInput[2] = SoloInput2.value;
      }
      var SoloInput3 = document.getElementById("SoloInput3");
      if (SoloInput3){ 
        if(SoloInput3.value=="")
          {alert("請檢查輸入格式");Flag=False;}
        else if(Number(SoloInput3.value)<0)
            {alert("請勿輸入負數");Flag=False;}
        else
          SoloInput[3] = SoloInput3.value;
      }
      var SoloInput4 = document.getElementById("SoloInput4");
      if (SoloInput4){ 
        if(SoloInput4.value=="")
          {alert("請檢查輸入格式");Flag=False;}
        else if(Number(SoloInput4.value)<0)
            {alert("請勿輸入負數");Flag=False;}
        else
          SoloInput[4] = SoloInput4.value;
      }
      var SoloInput5 = document.getElementById("SoloInput5");
      if (SoloInput5){ 
        if(SoloInput5.value=="")
          {alert("請檢查輸入格式");Flag=False;}
        else if(Number(SoloInput5.value)<0)
          {alert("請勿輸入負數");Flag=False;}
        else
          SoloInput[5] = SoloInput5.value;
      }
      var SoloInput6 = document.getElementById("SoloInput6");
      if (SoloInput6){ 
        if(SoloInput6.value=="")
          {alert("請檢查輸入格式");Flag=False;}
        else if(Number(SoloInput6.value)<0)
          {alert("請勿輸入負數");Flag=False;}
        else
          SoloInput[6] = SoloInput6.value;
      }
      if(Flag){
        
        SoloCurrentStep =SoloCurrentStep + 1;
        SetSolodata();
        showSoloStep(SoloCurrentStep);
      }
    }
  }
  else{
    if (SoloCurrentStep == SoloCodeStep - 1) showSoloStep(SoloCurrentStep);
    else {
      Flag=true;
      //如果目前這一步  有輸入框 要記錄輸入框內容
      var SoloInput1 = document.getElementById("SoloInput1");
      if (SoloInput1){ 
        if(SoloInput1.value=="")
          {alert("請檢查輸入格式");Flag=False;}
        else
          SoloInput[1] = SoloInput1.value;
      }
      var SoloInput2 = document.getElementById("SoloInput2");
      if (SoloInput2){ 
        if(SoloInput2.value=="")
          {alert("請檢查輸入格式");Flag=False;}
        else
          SoloInput[2] = SoloInput2.value;
      }
      var SoloInput3 = document.getElementById("SoloInput3");
      if (SoloInput3){ 
        if(SoloInput3.value=="")
          {alert("請檢查輸入格式");Flag=False;}
        else
          SoloInput[3] = SoloInput3.value;
      }
      var SoloInput4 = document.getElementById("SoloInput4");
      if (SoloInput4){ 
        if(SoloInput4.value=="")
          {alert("請檢查輸入格式");Flag=False;}
        else
          SoloInput[4] = SoloInput4.value;
      }
      var SoloInput5 = document.getElementById("SoloInput5");
      if (SoloInput5){ 
        if(SoloInput5.value=="")
          {alert("請檢查輸入格式");Flag=False;}
        else
          SoloInput[5] = SoloInput5.value;
      }
      var SoloInput6 = document.getElementById("SoloInput6");
      if (SoloInput6){ 
        if(SoloInput6.value=="")
          {alert("請檢查輸入格式");Flag=False;}
        else
          SoloInput[6] = SoloInput6.value;
      }
      if(Flag){
        SoloCurrentStep =SoloCurrentStep + 1;
        SetSolodata();
        showSoloStep(SoloCurrentStep);
      }
    }
  }
});

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
function AddSVG(Operation) {
  SVGname=Operation[0];
  TpOperation=[];
  for (let z = 0; z < Operation.length; z++) {
    Tp=String(Operation[z]);
    for (let i = 1; i <= 5; i++) {
      const placeholder = "{Input" + i + "}";
      const placeBoxholder = "{InputBox" + i + "}";
      const placeoutholder = "{Output" + i + "}";
      const placesolooutholder = "{SoloOutput" + i + "}";
      Tp = Tp.replace(new RegExp(placeholder, "g"),SoloInput[i]);
      Tp = Tp.replace(new RegExp(placeBoxholder, "g"),SoloInput[i]);
      Tp = Tp.replace(new RegExp(placeoutholder, "g"),SoloOutput[i]);
      Tp = Tp.replace(new RegExp(placesolooutholder, "g"),SoloOutput[i]);
    }
    TpOperation.push(Tp);
  }
  if (SVGname == "DrawLine")
    //OK
    svgContent = DrawLine(
      TpOperation[1],
      TpOperation[2],
      TpOperation[3],
      TpOperation[4],
      TpOperation[5]
    );
  else if (SVGname == "DrawText")
    //OK
    svgContent = DrawText(
      TpOperation[1],
      TpOperation[2],
      TpOperation[3],
      TpOperation[4],
      TpOperation[5]
    );
  else if (SVGname == "DrawArrow")
    //OK
    svgContent = DrawArrow(
      TpOperation[1],
      TpOperation[2],
      TpOperation[3],
      TpOperation[4],
      TpOperation[5]
    );
  else if (SVGname == "InputBox")
    svgContent = InputBox(
      TpOperation[1],
      TpOperation[2],
      TpOperation[3],
      TpOperation[4],
      TpOperation[5]
    );
  else if (SVGname == "OutputBox")
    svgContent = OutputBox(
      TpOperation[1],
      TpOperation[2],
      TpOperation[3],
      TpOperation[4],
      TpOperation[5]
    );
  else if (SVGname == "IfBox")
    svgContent = IfBox(
      TpOperation[1],
      TpOperation[2],
      TpOperation[3],
      TpOperation[4],
      TpOperation[5]
    );
  else if (SVGname == "ForBox")
    //OK
    svgContent = ForBox(
      TpOperation[1],
      TpOperation[2],
      TpOperation[3],
      TpOperation[4],
      TpOperation[5],
      TpOperation[6],
      TpOperation[7],
      TpOperation[8],
      TpOperation[9]
    );
  else if (SVGname == "InfoTextBox")
    //OK
    svgContent = InfoTextBox(
      TpOperation[1],
      TpOperation[2],
      TpOperation[3],
      TpOperation[4],
      TpOperation[5],
      TpOperation[6],
      TpOperation[7],
      TpOperation[8]
    );
  else if (SVGname == "VideoBox")
    //OK
    svgContent = VideoBox(
      TpOperation[1],
      TpOperation[2],
      TpOperation[3],
      TpOperation[4],
      TpOperation[5]
    );
  else if (SVGname == "ImgBox")
    //OK
    svgContent = ImgBox(
      TpOperation[1],
      TpOperation[2],
      TpOperation[3],
      TpOperation[4],
      TpOperation[5]
    );
  else if (SVGname == "AssignArrow")
    //OK
    svgContent = AssignArrow(
      TpOperation[1],
      TpOperation[2],
      TpOperation[3],
      TpOperation[4],
      TpOperation[5],
      TpOperation[6],
      TpOperation[7]
    );
  else if (SVGname == "LeftBox")
    //OK
    svgContent = LeftBox(
      TpOperation[1],
      TpOperation[2],
      TpOperation[3],
      TpOperation[4]
    );
  else if (SVGname == "RightBox")
    //OK
    svgContent = RightBox(
      TpOperation[1],
      TpOperation[2],
      TpOperation[3],
      TpOperation[4]
    );
  else if (SVGname == "PrintBox")
    //OK
    svgContent = PrintBox(
      TpOperation[1],
      TpOperation[2],
      TpOperation[3],
      TpOperation[4]
    );
  return svgContent;
}

function generateSvgContent(step, IsSolo) {
  //將目前步驟之SVG指令包裝
  var svgContent =
    '<svg width="700" height="700" xmlns="http://www.w3.org/2000/svg" id="your-svg-id">';
  if (IsSolo) {
    if (step > SoloOperationStep_SVG.length) {//不幹
    } else if (SoloOperationStep_SVG[step] > SoloOperationInfo.length) {//也不幹
    } else {
      for (var Operation of SoloOperationInfo[SoloOperationStep_SVG[step]])
        svgContent += AddSVG(Operation);
    }
  } 
  else {
    if (step > OperationStep_SVG.length) {//不幹
    } else if (OperationStep_SVG[step] > OperationInfo.length) {//也不幹
    } else {
      for (var Operation of OperationInfo[OperationStep_SVG[step]])
        svgContent += AddSVG(Operation);
    }
    // for (var Operation of OperationInfo[OperationStep_SVG[(step>=length(OperationStep_SVG))?step:0]])
    // for (var Operation of OperationInfo[OperationStep_SVG[step]])
    //   svgContent += AddSVG(Operation);
  }
  svgContent += "</svg>";
  return svgContent;
}

document.addEventListener("DOMContentLoaded", function () {
  // 預設選中 "程式範例" 頁籤
  var exampleTab = document.getElementById("example-tab");
  var exampleTabInstance = new bootstrap.Tab(exampleTab);
  exampleTabInstance.show();
  // 預設選中 "程式邏輯分析" 頁籤
  var visualizationTab = document.getElementById("visualization-tab");
  var visualizationTabInstance = new bootstrap.Tab(visualizationTab);
  visualizationTabInstance.show();
  showStep(0);
  
});
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
      if (left == "程式範例") showSoloStep(0);
      else showStep(0);
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
      if (left == "程式範例") showStep(0);
      else showSoloStep(0);
      fetch("../save_visit_time.php", {
        // 使用fetch API將數據發送到伺服器端保存
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      ThisTagStartTime = Date.now();
      currentStep = 0;
      SoloCurrentStep = 0;
      NowTag.forEach((tab) => {
        if (tab.classList.contains("active")) {
          NowTagValue = tab.textContent;
        }
      });
    });