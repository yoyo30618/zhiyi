var leftTabs = new bootstrap.Tab(document.getElementById("left-tabs"));
var rightTabs = new bootstrap.Tab(document.getElementById("right-tabs"));

// 初始化頁籤
leftTabs.show();
rightTabs.show();

// 監聽頁籤切換事件
document
  .getElementById("left-tabs")
  .addEventListener("shown.bs.tab", function (event) {
    // 左上區塊的頁籤切換處理
  });

document
  .getElementById("right-tabs")
  .addEventListener("shown.bs.tab", function (event) {
    // 右側區塊的頁籤切換處理
  });

var currentStep = 0; // 目前顯示的步驟

// 隱藏所有步驟箭頭
var Arrows = document.querySelectorAll(".step-arrow");
var stepArrows = CodeStep.length;
Arrows.forEach(function (arrow) {
    arrow.style.visibility = "hidden";
});

function showStep(step) {
  // 隱藏所有步驟箭頭
  Arrows.forEach(function (arrow) {
    arrow.style.visibility = "hidden";
  });
  // 顯示指定步驟的箭頭
  var currentStepArrow = document.getElementById("step" + CodeStep[step-1]);
  if (currentStepArrow) {
    currentStepArrow.style.visibility = "visible";
  }
  var stepIndicator = document.getElementById("step-indicator");
  if (stepIndicator) {
    stepIndicator.innerHTML = MsgStep[step-1];
  }

  // 更新圖片
  var stepImage = document.getElementById("flowpic");
  if (stepImage) {
    var imageSrc = FlowPicPath+"/step"+PicStep[step-1]+".png";
    if (imageSrc) {
      stepImage.src = imageSrc;
      stepImage.onerror = function() {
        // 圖片載入失敗時顯示 step0.png
        stepImage.src = FlowPicPath+"/step0.png";
      };
    }
  }

  currentStep = step;
}

function showPreviousStep() {
  var previousStep = currentStep - 1;
  if (previousStep < 1) {
    previousStep = 1;
  }
  showStep(previousStep);
}

function showNextStep() {
  var nextStep = currentStep + 1;
//   var totalSteps = stepArrows.length;
  if (nextStep > stepArrows) {
    nextStep = stepArrows;
  }
  showStep(nextStep);
}

// 監聽左右切換按鈕的點擊事件
document.getElementById("previous-btn").addEventListener("click", function () {
  showPreviousStep();
});

document.getElementById("next-btn").addEventListener("click", function () {
  showNextStep();
});
document.addEventListener("DOMContentLoaded", function() {
    // 預設選中 "程式範例" 頁籤
    var exampleTab = document.getElementById("example-tab");
    var exampleTabInstance = new bootstrap.Tab(exampleTab);
    exampleTabInstance.show();
  
    // 預設選中 "程式視覺化" 頁籤
    var visualizationTab = document.getElementById("visualization-tab");
    var visualizationTabInstance = new bootstrap.Tab(visualizationTab);
    visualizationTabInstance.show();
  });
  
