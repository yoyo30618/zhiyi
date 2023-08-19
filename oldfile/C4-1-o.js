//自訂程式部分
//預設為true
SoloCodeStep=[0,0,0];//箭頭該顯示的順序
SoloMsgStep=[0,0,0];
SoloPicStep=[0,0,0];
SoloMsg=[
  "請輸入n：<input id='SoloInput' type='number'>",
  "請輸入n：0",
  "請輸入n：<br>"
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
  // 隱藏所有變數文字
  var Texts = document.querySelectorAll(".step-text");
  Texts.forEach(function (Text) {
    Text.style.visibility = "hidden";
  });
  // 顯示指定步驟的箭頭
  var currentStepArrow = document.querySelectorAll("#solo-step" + SoloCodeStep[step-1]);
  currentStepArrow.forEach(function(stepArrow) {
    stepArrow.style.visibility = "visible";
  });
  // 顯示指定步驟的變數文字
  var currentStepText = document.querySelectorAll("#text-step" + SoloCodeStep[step-1]);
  currentStepText.forEach(function(StepText) {
    StepText.style.visibility = "visible";
  });
  // 顯示指定步驟的訊息
  var stepIndicator = document.getElementById("step-indicator");
  if (stepIndicator) {
    stepIndicator.innerHTML = SoloMsg[SoloMsgStep[step-1]];
  }
  // 更新圖片
  var stepImage = document.getElementById("flowpic");
  if (stepImage) {
    var imageSrc = FlowPicPath+"/step"+SoloPicStep[step-1]+".png";
    if (imageSrc) {
      stepImage.setAttribute("href", imageSrc); // 移除 href 属性
      // stepImage.setAttribute("xlink:href", imageSrc); // 添加 xlink:href 属性
      stepImage.onerror = function() {
        // 圖片載入失敗時顯示 step0.png
        stepImage.setAttribute("href", FlowPicPath+"/step0.png");
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
  if (SoloCurrentStep === 1) {//a.push(4);  
    var SoloInput = document.getElementById("SoloInput");
    SoloInputValue=SoloInput.value;
    SoloMsgStep=[];
    SoloCodeStep=[];

    SoloPicStep=[];

    SoloMsgStep.push(0);
    SoloMsgStep.push(1);
    SoloCodeStep.push(1);
    SoloCodeStep.push(2);
    SoloPicStep.push(1);
    SoloPicStep.push(1);
    var sum=0;
    for (var i = 1; i <= SoloInputValue; i++) {
      SoloMsgStep.push(1);
      SoloMsgStep.push(1);
      SoloCodeStep.push(3);
      SoloCodeStep.push(4);
      SoloPicStep.push(2);
      SoloPicStep.push(3);
      sum=sum+i;
    }
    SoloMsgStep.push(1);//最後一次迴圈判定
    SoloCodeStep.push(3);//最後一次迴圈判定
    SoloPicStep.push(4);

    SoloMsgStep.push(2);
    SoloCodeStep.push(5);
    SoloPicStep.push(5);
    //修改訊息內容
    SoloMsg=[];
    SoloMsg[0]="請輸入n：<input id='SoloInput' type='number'>";
    SoloMsg[1]="請輸入n："+SoloInputValue;
    SoloMsg[2]="請輸入n："+SoloInputValue+"<br>"+sum;
    var textX = document.getElementsByClassName("step-textX");

    //注意!!改這改這
    alert(textX);
    textX.innerHTML = "n="+SoloInputValue;
  }
  SolostepArrows = SoloCodeStep.length;  
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

$(document).ready(function(){
  $('#hintButton').click(function() {
    $('#hint1').popover({
      content: '一個整數變數表示迴圈範圍',
      placement: 'top',
      trigger: 'manual'
    }).popover('show');
    $('#hint2').popover({
      content: '重複結構',
      placement: 'top',
      trigger: 'manual'
    }).popover('show');
    $('#hint3').popover({
      content: '1+2+3+...+n',
      placement: 'top',
      trigger: 'manual'
    }).popover('show');
    $('#hint4').popover({
      content: '輸出總和結果',
      placement: 'top',
      trigger: 'manual'
    }).popover('show');
  });
});