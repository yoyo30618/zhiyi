var SoloCurrentStep = 0; // 目前顯示的步驟

var SoloInput = [];
var SoloOutput = ["","及格","不及格","","",""];
var SoloCodeStep = 0;
var SoloMsgStep = [];
var SoloArrowStep = [];
var SoloFlowStep = [];
var SoloOperationInfo=[];
function SetSolodata(){
  if(SoloInput[1]>=60){
    SoloCodeStep = 4;
    SoloMsgStep = [0,1,2,2];
    SoloArrowStep = [0,1,2,2];
    SoloFlowStep = [0,1,2,3];
    SoloOperationInfo=[
        [
            ["DrawLine",10,10,30,30,"black"],
            ["DrawText","步驟一耶黑",10,10,15,"black"]
        ],
        [
            ["DrawLine",10,10,40,40,"black"],
            ["DrawText","步驟二耶黑",10,20,15,"black"]
        ],
        [
            ["DrawLine",10,10,50,50,"black"],
            ["DrawText","步驟三耶黑",10,30,15,"black"]
        ],
        [
            ["DrawLine",10,10,60,60,"black"],
            ["DrawText","步驟五耶黑",10,40,15,"black"]
        ],
        [
            ["DrawLine",10,10,60,60,"black"],
            ["DrawText","步驟六耶黑",10,40,15,"black"]
        ],
        [
            ["DrawLine",10,10,60,60,"black"],
            ["DrawText","步驟七耶黑",10,40,15,"black"]
        ]
    ];
  }
  else{
    SoloCodeStep = 4;
    SoloMsgStep = [0,1,1,3];
    SoloArrowStep = [0,1,3,4];
    SoloFlowStep = [0,1,4,5];
    SoloOperationInfo=[
        [
            ["DrawLine",10,10,30,30,"black"],
            ["DrawText","步驟一耶黑",10,10,15,"black"]
        ],
        [
            ["DrawLine",10,10,40,40,"black"],
            ["DrawText","步驟二耶黑",10,20,15,"black"]
        ],
        [
            ["DrawLine",10,10,50,50,"black"],
            ["DrawText","步驟三耶黑",10,30,15,"black"]
        ],
        [
            ["DrawLine",10,10,60,60,"black"],
            ["DrawText","步驟五耶黑",10,40,15,"black"]
        ],
        [
            ["DrawLine",10,10,60,60,"black"],
            ["DrawText","步驟六耶黑",10,40,15,"black"]
        ],
        [
            ["DrawLine",10,10,60,60,"black"],
            ["DrawText","步驟七耶黑",10,40,15,"black"]
        ]
  ];
  }

}