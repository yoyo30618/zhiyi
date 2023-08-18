var SoloCurrentStep = 0; // 目前顯示的步驟

var SoloInput = [];
var SoloCodeStep = 0;
var SoloMsgStep = [];
var SoloArrowStep = [];
var SoloFlowStep = [];

function SetSolodata(){
  if(SoloInput[1]>=60){
    SoloCodeStep = 4;
    SoloMsgStep = [0,1,1,2];
    SoloArrowStep = [0,1,1,2];
    SoloFlowStep = [0,1,2,3];
  }
  else{
    SoloCodeStep = 4;
    SoloMsgStep = [0,1,1,3];
    SoloArrowStep = [0,1,3,4];
    SoloFlowStep = [0,1,4,5];
  }
}