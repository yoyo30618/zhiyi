//自訂程式部分
//預設為true
SoloCodeStep=[0,0,0];//箭頭該顯示的順序
SoloMsgStep=[0,0,0];//箭頭該顯示的順序
SoloMsg=[
  "請輸入成績：<input id='SoloInput' type='number'>",
  "請輸入成績：",
  "請輸入成績：<br>及格！",
  "請輸入成績：<br>不及格！"
];
var SoloInputValue = 0; // 儲存輸入框的值

var SoloCurrentStep = 0; // 目前顯示的步驟
// 隱藏所有步驟箭頭
var SoloArrows = document.querySelectorAll(".solo-step-arrow");
var SolostepArrows = SoloCodeStep.length;
SoloArrows.forEach(function (arrow) {
    arrow.style.visibility = "hidden";
});

function showSoloStep(step) {
  // 隱藏所有步驟箭頭
  SoloArrows.forEach(function (arrow) {
    arrow.style.visibility = "hidden";
  });
  // 顯示指定步驟的箭頭
  var currentStepArrow = document.getElementById("solo-step" + SoloCodeStep[step-1]);
  if (currentStepArrow) {
    currentStepArrow.style.visibility = "visible";
  }
  var stepIndicator = document.getElementById("step-indicator");
  if (stepIndicator) {
    stepIndicator.innerHTML = SoloMsg[SoloMsgStep[step-1]];
  }
  
  // 更新圖片
  var stepImage = document.getElementById("flowpic");
  if (stepImage) {
    var imageSrc = FlowPicPath+"/step"+SoloCodeStep[step-1]+".png";
    if (imageSrc) {
      stepImage.src = imageSrc;
      stepImage.onerror = function() {
        // 圖片載入失敗時顯示 step0.png
        stepImage.src = FlowPicPath+"/step0.png";
      };
    }
  }

  SoloCurrentStep = step;
}

function showSoloPreviousStep() {
  SolostepArrows = SoloCodeStep.length;
  if(SoloCurrentStep==-1)
    SoloCurrentStep=0;
  var previousStep = SoloCurrentStep - 1;
  if (previousStep < 1) {
    previousStep = 1;
  }
  showSoloStep(previousStep);
}

function showSoloNextStep() {
  SolostepArrows = SoloCodeStep.length;
  
  if (SoloCurrentStep === 1) {
    var SoloInput = document.getElementById("SoloInput");
    SoloInputValue=SoloInput.value;
    SoloMsg[0]="請輸入成績：<input id='SoloInput' type='number'>";
    SoloMsg[1]="請輸入成績："+SoloInputValue;
    SoloMsg[2]="請輸入成績："+SoloInputValue+"<br>及格！";
    SoloMsg[3]="請輸入成績："+SoloInputValue+"<br>不及格！";
    if(SoloInputValue>=60){
      SoloCodeStep=[1,2,3];//箭頭該顯示的順序
      SoloMsgStep=[0,1,2];
    }
    else{
      SoloCodeStep=[1,2,4,5];//箭頭該顯示的順序
      SoloMsgStep=[0,1,1,3];
    }
  }
  var nextStep = SoloCurrentStep + 1;
  if (nextStep > SolostepArrows) {
    nextStep = SolostepArrows;
  }
  showSoloStep(nextStep);
}

// 監聽左右切換按鈕的點擊事件
document.getElementById("solo-previous-btn").addEventListener("click", function () {
  showSoloPreviousStep();
});

document.getElementById("solo-next-btn").addEventListener("click", function () {
  showSoloNextStep();
});