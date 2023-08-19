var SoloCurrentStep = 0; // 目前顯示的步驟

var SoloInput = [];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 0;
var SoloMsgStep = [];
var SoloArrowStep = [];
var SoloFlowStep = [];

function SetSolodata(){//C4-1
  //SoloInput[1]代表迴圈跑幾次
  
  SoloCodeStep=SoloInput[1]*2+4;
  SoloMsgStep=[0,1];
  SoloArrowStep=[0,1];
  SoloFlowStep=[0,1];
  SoloOutput[1]=0;
  for (var i = 1; i <= SoloInput[1]; i++) {
    SoloOutput[1]= SoloOutput[1]+i;
    SoloMsgStep.push(1);
    SoloMsgStep.push(1);
    SoloArrowStep.push(2);
    SoloArrowStep.push(3);
    SoloFlowStep.push(1);
    SoloFlowStep.push(2);
  } 
  SoloMsgStep.push(1);
  SoloMsgStep.push(2);
  SoloArrowStep.push(2);
  SoloArrowStep.push(4);
  SoloFlowStep.push(3);
  SoloFlowStep.push(4);
}