var SoloCurrentStep = 0; // 目前顯示的步驟

var SoloInput = [];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 5;
var SoloMsgStep = [0,1,2,2,3];
var SoloArrowStep = [0,1,2,3,4];
var SoloFlowStep = [0,1,2,3,4];

function SetSolodata(){
  SoloOutput[1]=((Number(SoloInput[1])+Number(SoloInput[2])+Number(SoloInput[3]))/3).toFixed(2);;
}