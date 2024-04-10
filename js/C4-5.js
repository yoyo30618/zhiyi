var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [];
var SoloOutput = [0, 0, 0, 0, 0, 0];
var SoloCodeStep = 21;
var SoloMsgStep =    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2];
var SoloArrowStep =  [0,1,2,2,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,4];
var SoloFlowStep =   [0,1,2,3,4,5,6,4,5,6,4,5,6,4,5,6,4,5,6,7,8];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
var SoloCodeStep_SVG = 28;
var SoloMsgStep_SVG =   [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2];
var SoloArrowStep_SVG = [0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,2,3,3,2,3,3,2,3,3,2,3,3,4];
var SoloFlowStep_SVG = [0,1,2,3,6,7,10,11,12,13];
var SoloOperationInfo = [
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic1.png"],
        ["DrawText","input(\"請輸入n:\")",360,150 ,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic2.png"],
        ["DrawText","input(\"請輸入n:\")",360,150 ,14,"black"],
        ["DrawText","\"{Input1}\"",390,200,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic3.png"],
        ["DrawText","int(\"{Input1}\")",360,150 ,14,"black"],
        ["DrawText","{Input1}",390,200,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic4.png"],
        ["DrawText","{Input1}",390,200,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic5.png"],
        ["DrawText","{Input1}",215,215,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic6.png"],
        ["DrawText","{Input1}",215,215,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic7.png"],
        ["DrawText","{Input1}",215,215,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic8.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","0",215,305,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic9.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","0",215,305,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic10.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","0",215,305,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic11.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","0",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic12.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","0",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",340,287,20,20,"C4-5/vision/pic14.png"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic13.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","0",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",340,287,20,20,"C4-5/vision/pic14.png"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic13.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","0",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",340,287,20,20,"C4-5/vision/pic14.png"],
        ["DrawText","0",455,400,18,"black"],
        ["DrawText","1",535,400,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic13.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","1",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",340,287,20,20,"C4-5/vision/pic14.png"],
        ["DrawText","0",455,400,18,"black"],
        ["DrawText","1",535,400,18,"black"],
        ["DrawText","1",375,400,18,"black"]
    ]


    ,
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic13.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","1",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",380,287,20,20,"C4-5/vision/pic14.png"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic13.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","1",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",380,287,20,20,"C4-5/vision/pic14.png"],
        ["DrawText","1",455,400,18,"black"],
        ["DrawText","2",535,400,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic13.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","3",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",380,287,20,20,"C4-5/vision/pic14.png"],
        ["DrawText","1",455,400,18,"black"],
        ["DrawText","2",535,400,18,"black"],
        ["DrawText","3",375,400,18,"black"]
    ]

    ,
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic13.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","3",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",420,287,20,20,"C4-5/vision/pic14.png"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic13.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","3",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",420,287,20,20,"C4-5/vision/pic14.png"],
        ["DrawText","3",455,400,18,"black"],
        ["DrawText","3",535,400,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic13.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","6",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",420,287,20,20,"C4-5/vision/pic14.png"],
        ["DrawText","3",455,400,18,"black"],
        ["DrawText","3",535,400,18,"black"],
        ["DrawText","6",375,400,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic13.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","6",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",510,287,20,20,"C4-5/vision/pic14.png"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic13.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","6",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",510,287,20,20,"C4-5/vision/pic14.png"],
        ["DrawText","36",455,400,18,"black"],
        ["DrawText","9",535,400,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic13.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","45",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",510,287,20,20,"C4-5/vision/pic14.png"],
        ["DrawText","36",455,400,18,"black"],
        ["DrawText","9",535,400,18,"black"],
        ["DrawText","45",375,400,18,"black"]
    ]

    ,
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic13.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","45",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",550,287,20,20,"C4-5/vision/pic14.png"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic13.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","45",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",550,287,20,20,"C4-5/vision/pic14.png"],
        ["DrawText","45",455,400,18,"black"],
        ["DrawText","{Input1}",535,400,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic13.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","55",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",550,287,20,20,"C4-5/vision/pic14.png"],
        ["DrawText","45",455,400,18,"black"],
        ["DrawText","{Input1}",535,400,18,"black"],
        ["DrawText","55",375,400,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic15.png"],
        ["DrawText","55",230,280,16,"white"]
    ]

];
function SetSolodata() {
  //SoloCurrentStep 目前執行到的步數
  //{Output2}為字串陣列 紀錄3,6,9,12,15
  //{Output3}為當前i的數值
  
  Cnt = Math.floor(Number(SoloInput[1])/2);//迴圈要跑幾次
  Cnt = isNaN(Cnt) ? 6 : Cnt;
  if(Cnt>6&&SoloCurrentStep==21)SoloCurrentStep=24;//跳過點點點的步驟
  if(Cnt>6&&SoloCurrentStep==23)SoloCurrentStep=20;//跳過點點點的步驟
  console.log("Cnt:"+Cnt);
  SoloCodeStep_SVG = 13 + 3 * (Cnt>=6?6:Cnt); //輸入步 每一次迴圈3步
  
  if(Cnt<=6){
    SoloCodeStep = 6+3*Cnt;
    SoloMsgStep =    [0,1,1,1];
    SoloArrowStep =  [0,1,2,2];
    SoloFlowStep =   [0,1,2,3];
    for (var i = 1; i <= Cnt; i++) {
        SoloMsgStep.push(1);
        SoloMsgStep.push(1);
        SoloMsgStep.push(1);
        SoloArrowStep.push(2);
        SoloArrowStep.push(2);
        SoloArrowStep.push(3);
        SoloFlowStep.push(4);
        SoloFlowStep.push(5);
        SoloFlowStep.push(6);
    }
    SoloMsgStep.push(1);
    SoloMsgStep.push(2);
    SoloArrowStep.push(2);
    SoloArrowStep.push(4);
    SoloFlowStep.push(7);
    SoloFlowStep.push(8);
}
else{
    SoloCodeStep = 6+3*(Cnt>=6?6:Cnt);
    SoloMsgStep =    [0,1,1,1];
    SoloArrowStep =  [0,1,2,2];
    SoloFlowStep =   [0,1,2,3];
    for (var i = 1; i <= (Cnt>5?5:Cnt); i++) {
        SoloMsgStep.push(1);
        SoloMsgStep.push(1);
        SoloMsgStep.push(1);
        SoloArrowStep.push(2);
        SoloArrowStep.push(2);
        SoloArrowStep.push(3);
        SoloFlowStep.push(4);
        SoloFlowStep.push(5);
        SoloFlowStep.push(6);
    }
    SoloMsgStep.push(1);
    SoloMsgStep.push(2);
    SoloArrowStep.push(2);
    SoloArrowStep.push(4);
    SoloFlowStep.push(7);
    SoloFlowStep.push(8);
}
  SoloMsgStep_SVG =   [0,1,1,1,1,1,1,1,1,1,1,1];
  SoloArrowStep_SVG = [0,0,0,0,0,0,0,1,1,1,2,2];

  SoloOperationStep_SVG=[];
  for(var i=0;i<SoloCodeStep_SVG;i++)SoloOperationStep_SVG.push(i);
  for (var i = 1; i <= Cnt&&i<=6; i++) {
    SoloMsgStep_SVG.push(1);
    SoloMsgStep_SVG.push(1);
    SoloMsgStep_SVG.push(1);
    SoloArrowStep_SVG.push(2);
    SoloArrowStep_SVG.push(3);
    SoloArrowStep_SVG.push(3);
  }
  SoloMsgStep_SVG.push(2);
  SoloArrowStep_SVG.push(4);
  //初始狀態
  SoloOperationInfo = [
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic1.png"],
        ["DrawText","input(\"請輸入n:\")",360,150 ,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic2.png"],
        ["DrawText","input(\"請輸入n:\")",360,150 ,14,"black"],
        ["DrawText","\"{Input1}\"",390,200,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic3.png"],
        ["DrawText","int(\"{Input1}\")",360,150 ,14,"black"],
        ["DrawText","{Input1}",390,200,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic4.png"],
        ["DrawText","{Input1}",390,200,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic5.png"],
        ["DrawText","{Input1}",215,215,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic6.png"],
        ["DrawText","{Input1}",215,215,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic7.png"],
        ["DrawText","{Input1}",215,215,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic8.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","{Output3}",215,305,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic9.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","{Output3}",215,305,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic10.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","{Output3}",215,305,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic11.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","{Output3}",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-5/vision/pic12.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","{Output3}",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",340,287,20,20,"C4-5/vision/pic14.png"]
    ]
];
  //
  for (var i = 0; i < Cnt&&i<6; i++) {
    var Temp =[
        ["ImgBox",10,10,600,600,"C4-5/vision/pic13.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","{Output3}",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",340+40*i,287,20,20,"C4-5/vision/pic14.png"]
    ];
    var Temp2 =[
        ["ImgBox",10,10,600,600,"C4-5/vision/pic13.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","{Output3}",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",340+40*i,287,20,20,"C4-5/vision/pic14.png"],
        ["DrawText","{Output4}",455,400,18,"black"],
        ["DrawText","{Output5}",535,400,18,"black"]
    ];
    var Temp3 =[
        ["ImgBox",10,10,600,600,"C4-5/vision/pic13.png"],
        ["DrawText","{Input1}",215,215,18,"black"],
        ["DrawText","{Output3}",215,305,18,"black"],
        ["DrawText","{Input1}",465,205,18,"black"],
        ["DrawText","{Output2}",350,260,14,"black"],
        ["ImgBox",340+40*i,287,20,20,"C4-5/vision/pic14.png"],
        ["DrawText","{Output4}",455,400,18,"black"],
        ["DrawText","{Output5}",535,400,18,"black"],
        ["DrawText","{Output3}",375,400,18,"black"]
    ]
    //加入迴圈點點
    SoloOperationInfo.push(Temp);
    SoloOperationInfo.push(Temp2);
    SoloOperationInfo.push(Temp3);
  }
  var Temp4 =
  [
      ["ImgBox",10,10,600,600,"C4-5/vision/pic15.png"],
      ["DrawText","{Output1}",230,280,16,"white"]
  ];
  //加入結尾列印
  SoloOperationInfo.push(Temp4);

  SoloOutput[1] = "";
  console.log("SoloCodeStep_SVG:"+SoloCodeStep_SVG);
  console.log("SoloMsgStep_SVG:"+SoloMsgStep_SVG);
  console.log("SoloCurrentStep:"+SoloCurrentStep);
  console.log("Cnt:"+Cnt);

  SoloOutput[2] = "";
  if(Cnt<=6){
    for (var i = 2; i <= Number(SoloInput[1]); i+=2) {
      if (i != 2) SoloOutput[2] = SoloOutput[2] + "　,　";
      SoloOutput[2] = SoloOutput[2] + i;
    }
  }
  else{
    for (var i = 2; i <= 6; i+=2) {//前三位
      if (i != 2) SoloOutput[2] = SoloOutput[2] + "　,　";
      SoloOutput[2] = SoloOutput[2] + i;
    }
    SoloOutput[2] = SoloOutput[2] + "　,　.....";
    var Temp=0;
    if(SoloCurrentStep>10)Temp=Number(SoloInput[1]);
    if(Temp%2!=0)Temp-=1;
    for (var i = Temp-2; i <= Temp; i+=2) {//後兩位
      SoloOutput[2] = SoloOutput[2] + "　,　";
      SoloOutput[2] = SoloOutput[2] + i;
    }
  }
  
SoloOutput[1]=0;
for(i=2;i<=Number(SoloInput[1]);i+=2){
    SoloOutput[1]+=i;
}
if(SoloCurrentStep<14)SoloOutput[3]=0;
if(SoloCurrentStep==14)SoloOutput[3]=2;
if(SoloCurrentStep==17)SoloOutput[3]=6;
if(SoloCurrentStep==20)SoloOutput[3]=12;
if(Cnt<=6){
    if(SoloCurrentStep==23)SoloOutput[3]=20;
    if(SoloCurrentStep==26)SoloOutput[3]=30;
    if(SoloCurrentStep==29)SoloOutput[3]=32;
}
else{
    var Temp=0;
    if(SoloCurrentStep>10)Temp=Number(SoloInput[1]);
    if(Temp%2!=0)Temp-=1;
    if(SoloCurrentStep==23)SoloOutput[3]="...";
    if(SoloCurrentStep==26)SoloOutput[3]=SoloOutput[1]-Temp;
    if(SoloCurrentStep==29)SoloOutput[3]=SoloOutput[1];
} 

SoloOutput[4]="";
if(SoloCurrentStep==13||SoloCurrentStep==14)SoloOutput[4]=0;
if(SoloCurrentStep==16||SoloCurrentStep==17)SoloOutput[4]=2;
if(SoloCurrentStep==19||SoloCurrentStep==20)SoloOutput[4]=6;
if(Cnt<=6){
    if(SoloCurrentStep==22||SoloCurrentStep==23)SoloOutput[4]=12;
    if(SoloCurrentStep==25||SoloCurrentStep==26)SoloOutput[4]=20;
    if(SoloCurrentStep==28||SoloCurrentStep==29)SoloOutput[4]=32;
}
else{
    var Temp=0;
    if(SoloCurrentStep>10)Temp=Number(SoloInput[1]);
    if(Temp%2!=0)Temp-=1;
    if(SoloCurrentStep==22||SoloCurrentStep==23)SoloOutput[4]="...";
    if(SoloCurrentStep==25||SoloCurrentStep==26)SoloOutput[4]=SoloOutput[1]-Temp-(Temp-2);
    if(SoloCurrentStep==28||SoloCurrentStep==29)SoloOutput[4]=SoloOutput[1]-Temp;
}


SoloOutput[5]="";
if(SoloCurrentStep==13||SoloCurrentStep==14)SoloOutput[5]=2;
if(SoloCurrentStep==16||SoloCurrentStep==17)SoloOutput[5]=4;
if(SoloCurrentStep==19||SoloCurrentStep==20)SoloOutput[5]=6;
if(Cnt<=6){
    if(SoloCurrentStep==22||SoloCurrentStep==23)SoloOutput[5]=8;
    if(SoloCurrentStep==25||SoloCurrentStep==26)SoloOutput[5]=10;
    if(SoloCurrentStep==28||SoloCurrentStep==29)SoloOutput[5]=12;
}
else{
    var Temp=0;
    if(SoloCurrentStep>10)Temp=Number(SoloInput[1]);
    if(Temp%2!=0)Temp-=1;
    if(SoloCurrentStep==22||SoloCurrentStep==23)SoloOutput[5]="...";
    if(SoloCurrentStep==25||SoloCurrentStep==26)SoloOutput[5]=Temp-2;
    if(SoloCurrentStep==28||SoloCurrentStep==29)SoloOutput[5]=Temp;
}
}
