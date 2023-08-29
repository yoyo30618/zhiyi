var SoloCurrentStep = 0; // 目前顯示的步驟

var SoloInput = [0,0,0,0,0,0];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 3;
var SoloMsgStep = [0,1,2];
var SoloArrowStep = [0,1,2];
var SoloFlowStep = [0,1,2];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11];
var SoloCodeStep_SVG = 10;
var SoloMsgStep_SVG = [0,0,0,0,1,1,1,1,2,2];
var SoloArrowStep_SVG = [0,0,0,0,1,1,1,1,2,2];
var SoloFlowStep_SVG = [0,0,0,0,1,1,1,1,2,2];
var SoloOperationInfo=[ 
  [],[],[],[],[],[]
];
function SetSolodata(){
  SoloOutput[1]=parseInt(Number(SoloInput[1])/6);
  SoloOutput[2]=(Number(SoloInput[1])%6);
}
