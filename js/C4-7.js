var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [];
var SoloOutput = [0, 0, 0, 0, 0, 0];
var SoloCodeStep = 21;
var SoloMsgStep =    [0,1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7];
var SoloArrowStep =  [0,1,2,2,2,3,4,2,3,4,2,3,4,2,3,4,2,3,4,2,5];
var SoloFlowStep =   [0,1,2,3,4,5,6,4,5,6,4,5,6,4,5,6,4,5,6,7,8];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32];
var SoloCodeStep_SVG = 33;
var SoloMsgStep_SVG =   [0,1,1,1,1,1,1, 1,1,1, 1,1, 1,2,2,2, 2,3,3,3, 3,4,4,4, 4,5,5,5, 5,6,6,6 ,7];
var SoloArrowStep_SVG = [0,0,0,0,0,0,0, 1,1,1, 2,2, 2,3,4,4, 2,3,4,4, 2,3,4,4, 2,3,4,4, 2,3,4,4 ,5];
var SoloFlowStep_SVG = [0,1,2,3,6,7,10,11,12,13];

var SoloOperationInfo = [ [
    ["ImgBox",10,10,600,600,"C4-6/vision/pic1.png"],
    ["DrawText","input(\"請輸入幾次考試:\")",420,160 ,14,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic2.png"],
    ["DrawText","input(\"請輸入幾次考試:\")",420,160,14,"black"],
    ["DrawText","\"5\"",440,210,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic3.png"],
    ["DrawText","int(\"5\")",420,160 ,14,"black"],
    ["DrawText","5",440,210,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic4.png"],
    ["DrawText","5",440,210,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic5.png"],
    ["DrawText","{Input1}",250,225,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic6.png"],
    ["DrawText","{Input1}",250,225,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic7.png"],
    ["DrawText","{Input1}",250,225,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic8.png"],
    ["DrawText","{Input1}",250,225,18,"black"],
    ["DrawText","{Output2}",250,295,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic9.png"],
    ["DrawText","{Input1}",250,225,18,"black"],
    ["DrawText","{Output2}",250,295,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic10.png"],
    ["DrawText","{Input1}",250,225,18,"black"],
    ["DrawText","{Output2}",250,295,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic11.png"],
    ["DrawText","{Input1}",250,225,18,"black"],
    ["DrawText","{Output2}",250,295,18,"black"],
    ["DrawText","{Input1}",495,150,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic12.png"],
    ["DrawText","{Input1}",250,225,18,"black"],
    ["DrawText","{Output2}",250,295,18,"black"],
    ["DrawText","{Input1}",495,150,18,"black"],
    ["DrawText","{Input5}",405,200,14,"black"],
    ["ImgBox",400,219,20,20,"C4-6/vision/pic18.png"],
    ["DrawText","{Output3}",250,365,18,"black"]
]];
function SetSolodata() {
  //SoloCurrentStep 目前執行到的步數
  //{Output2}為字串陣列 紀錄1,2,3,4,5
  //{Output3}為當前i的數值
  if(Number(SoloInput[1])>5){
    alert("請輸入小於或等於5的數字");
    SoloCurrentStep-=1;
  }
  Cnt = Number(SoloInput[1]);//迴圈要跑幾次
  Cnt = isNaN(Cnt) ? 5 : Cnt;
  Cnt = (Cnt>5) ? 5 : Cnt;
  console.log("Cnt:"+Cnt);
  SoloCodeStep_SVG = 13 + 4 * (Cnt>=5?5:Cnt); //輸入步 每一次迴圈3步
  
  SoloCodeStep = 6+3*Cnt;
  SoloMsgStep =    [0,1,1,1];
  SoloArrowStep =  [0,1,2,2];
  SoloFlowStep =   [0,1,2,3];

  
  for (var i = 1; i <= Cnt&&i<=5; i++) {
    SoloMsgStep.push(12);
    SoloMsgStep.push(11);
    SoloMsgStep.push(12);
    SoloArrowStep.push(2);
    SoloArrowStep.push(3);
    SoloArrowStep.push(4);
    SoloFlowStep.push(4);
    SoloFlowStep.push(5);
    SoloFlowStep.push(6);
  }
  SoloMsgStep.push(12);
  SoloMsgStep.push(12);
  SoloArrowStep.push(2);
  SoloArrowStep.push(5);
  SoloFlowStep.push(7);
  SoloFlowStep.push(8);




  var TEMP="";
  SoloOutput[6]="";
  if(SoloCurrentStep==1) FlowGrade=[0,0,0,0,0,0,0];//分數暫存器，步驟回1時重製作
  if(SoloCurrentStep==6)FlowGrade[1]=Number(SoloInput[6]);
  if(SoloCurrentStep==9)FlowGrade[2]=Number(SoloInput[6]);
  if(SoloCurrentStep==12)FlowGrade[3]=Number(SoloInput[6]);
  if(SoloCurrentStep==15)FlowGrade[4]=Number(SoloInput[6]);
  if(SoloCurrentStep==18)FlowGrade[5]=Number(SoloInput[6]);
  if(SoloCurrentStep<6)SoloOutput[6] = "<br>";
  if(SoloCurrentStep>=6)SoloOutput[6]="<br>考試成績："+FlowGrade[1]+"<br>";
  if(SoloCurrentStep>=9)SoloOutput[6]="<br>考試成績："+FlowGrade[1]+"<br>考試成績："+FlowGrade[2]+"<br>";
  if(SoloCurrentStep>=12)SoloOutput[6]="<br>考試成績："+FlowGrade[1]+"<br>考試成績："+FlowGrade[2]+"<br>考試成績："+FlowGrade[3]+"<br>";
  if(SoloCurrentStep>=15)SoloOutput[6]="<br>考試成績："+FlowGrade[1]+"<br>考試成績："+FlowGrade[2]+"<br>考試成績："+FlowGrade[3]+"<br>考試成績："+FlowGrade[4]+"<br>";
  if(SoloCurrentStep>=18)SoloOutput[6]="<br>考試成績："+FlowGrade[1]+"<br>考試成績："+FlowGrade[2]+"<br>考試成績："+FlowGrade[3]+"<br>考試成績："+FlowGrade[4]+"<br>考試成績："+FlowGrade[5]+"<br>";


  if(SoloCurrentStep>=(20-(5-Cnt)*3)){//最終列印
    var Avg=(FlowGrade[1]+FlowGrade[2]+FlowGrade[3]+FlowGrade[4]+FlowGrade[5])/Cnt;
    SoloOutput[6]=SoloOutput[6]+Avg;
  }
  /*以上流程圖*/
  SoloMsgStep_SVG =   [0,1,1,1,1,1,1, 1,1,1, 1,1];
  SoloArrowStep_SVG = [0,0,0,0,0,0,0, 1,1,1, 2,2];

  SoloOperationStep_SVG=[];
  for(var i=0;i<SoloCodeStep_SVG;i++)SoloOperationStep_SVG.push(i);
  for (var i = 1; i <= Cnt&&i<=5; i++) {
    SoloMsgStep_SVG.push(9);
    SoloMsgStep_SVG.push(10);
    SoloMsgStep_SVG.push(10);
    SoloMsgStep_SVG.push(10);
    
    SoloArrowStep_SVG.push(2);
    SoloArrowStep_SVG.push(3);
    SoloArrowStep_SVG.push(4);
    SoloArrowStep_SVG.push(4);
  }
  SoloMsgStep_SVG.push(10);
  SoloArrowStep_SVG.push(5);
  //初始狀態
  SoloOperationInfo = [ [
    ["ImgBox",10,10,600,600,"C4-6/vision/pic1.png"],
    ["DrawText","input(\"請輸入幾次考試:\")",420,160 ,14,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic2.png"],
    ["DrawText","input(\"請輸入幾次考試:\")",420,160,14,"black"],
    ["DrawText","\"{Input1}\"",440,210,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic3.png"],
    ["DrawText","int(\"{Input1}\")",420,160 ,14,"black"],
    ["DrawText","{Input1}",440,210,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic4.png"],
    ["DrawText","{Input1}",440,210,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic5.png"],
    ["DrawText","{Input1}",250,225,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic6.png"],
    ["DrawText","{Input1}",250,225,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic7.png"],
    ["DrawText","{Input1}",250,225,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic8.png"],
    ["DrawText","{Input1}",250,225,18,"black"],
    ["DrawText","{Output2}",250,295,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic9.png"],
    ["DrawText","{Input1}",250,225,18,"black"],
    ["DrawText","{Output2}",250,295,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic10.png"],
    ["DrawText","{Input1}",250,225,18,"black"],
    ["DrawText","{Output2}",250,295,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic11.png"],
    ["DrawText","{Input1}",250,225,18,"black"],
    ["DrawText","{Output2}",250,295,18,"black"],
    ["DrawText","{Input1}",495,150,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C4-6/vision/pic12.png"],
    ["DrawText","{Input1}",250,225,18,"black"],
    ["DrawText","{Output2}",250,295,18,"black"],
    ["DrawText","{Input1}",495,150,18,"black"],
    ["DrawText","{Input5}",405,200,14,"black"],
    ["ImgBox",400,219,20,20,"C4-6/vision/pic18.png"],
    ["DrawText","{Output3}",250,365,18,"black"]
]];
  //
  for (var i = 0; i < Cnt&&i<5; i++) {
    var Temp1=[
        ["ImgBox",10,10,600,600,"C4-6/vision/pic13.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Input1}",495,150,18,"black"],
        ["DrawText","{Input5}",405,200,14,"black"],
        ["ImgBox",400+40*i,219,20,20,"C4-6/vision/pic18.png"],
        ["DrawText","{Output3}",250,365,18,"black"]
    ];
    var Temp2=[
        ["ImgBox",10,10,600,600,"C4-6/vision/pic14.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Input1}",495,150,18,"black"],
        ["DrawText","{Input5}",405,200,14,"black"],
        ["ImgBox",400+40*i,219,20,20,"C4-6/vision/pic18.png"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Output4}",250,435,18,"black"],
        ["DrawText","{Output4}",520,300,18,"black"]
    ];
    var Temp3=[
        ["ImgBox",10,10,600,600,"C4-6/vision/pic15.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Input1}",495,150,18,"black"],
        ["DrawText","{Input5}",405,200,14,"black"],
        ["ImgBox",400+40*i,219,20,20,"C4-6/vision/pic18.png"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Output4}",250,435,18,"black"],
        ["DrawText","{Output4}",520,300,18,"black"],
        ["DrawText","{Output5}",475,385,18,"black"],
        ["DrawText","{Output4}",540,385,18,"black"]
    ];
    var Temp4=[
        ["ImgBox",10,10,600,600,"C4-6/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Input1}",495,150,18,"black"],
        ["DrawText","{Input5}",405,200,14,"black"],
        ["ImgBox",400+40*i,219,20,20,"C4-6/vision/pic18.png"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Output4}",250,435,18,"black"],
        ["DrawText","{Output4}",520,300,18,"black"],
        ["DrawText","{Output5}",475,385,18,"black"],
        ["DrawText","{Output4}",540,385,18,"black"],
        ["DrawText","{Output2}",400,385,18,"black"]
    ]
    //加入迴圈點點
    SoloOperationInfo.push(Temp1);
    SoloOperationInfo.push(Temp2);
    SoloOperationInfo.push(Temp3);
    SoloOperationInfo.push(Temp4);
  }
  var Temp5 =
  [
    ["ImgBox",10,10,600,600,"C4-6/vision/pic17.png"],
    ["DrawText","{Input4}",230,280,16,"white"]
  ];
  //加入結尾列印
  SoloOperationInfo.push(Temp5);
/*開搞*/
////////////////////////////////1,2,3,4,5
  if(SoloCurrentStep==1) Grade=[0,0,0,0,0,0];//分數暫存器，步驟回1時重製作
  if(SoloCurrentStep==13)Grade[1]=Number(SoloInput[2]);
  if(SoloCurrentStep==17)Grade[2]=Number(SoloInput[2]);
  if(SoloCurrentStep==21)Grade[3]=Number(SoloInput[2]);
  if(SoloCurrentStep==25)Grade[4]=Number(SoloInput[2]);
  if(SoloCurrentStep==29)Grade[5]=Number(SoloInput[2]);
  //alert(Grade[1]+" "+Grade[2]+" "+Grade[3]+" "+Grade[4]+" "+Grade[5]+" ");
  SoloInput[5]="";
  if(SoloCurrentStep>8){
    for(var i=1;i<=Cnt;i++){
        if(i!=1) SoloInput[5]=SoloInput[5]+"　,　";
        SoloInput[5]=SoloInput[5]+i;
    }
  }
  console.log("SoloCodeStep_SVG:"+SoloCodeStep_SVG);
  console.log("SoloMsgStep_SVG:"+SoloMsgStep_SVG);
  console.log("SoloCurrentStep:"+SoloCurrentStep);
  console.log("Cnt:"+Cnt);




  var TEMP="";
  if(SoloCurrentStep<13)SoloOutput[1] = "<br>";
  if(SoloCurrentStep>=13)SoloOutput[1]="<br>考試成績："+Grade[1]+"<br>";
  if(SoloCurrentStep>=17)SoloOutput[1]="<br>考試成績："+Grade[1]+"<br>考試成績："+Grade[2]+"<br>";
  if(SoloCurrentStep>=21)SoloOutput[1]="<br>考試成績："+Grade[1]+"<br>考試成績："+Grade[2]+"<br>考試成績："+Grade[3]+"<br>";
  if(SoloCurrentStep>=25)SoloOutput[1]="<br>考試成績："+Grade[1]+"<br>考試成績："+Grade[2]+"<br>考試成績："+Grade[3]+"<br>考試成績："+Grade[4]+"<br>";
  if(SoloCurrentStep>=29)SoloOutput[1]="<br>考試成績："+Grade[1]+"<br>考試成績："+Grade[2]+"<br>考試成績："+Grade[3]+"<br>考試成績："+Grade[4]+"<br>考試成績："+Grade[5]+"<br>";






  if(SoloCurrentStep<15)SoloOutput[2]=0;
  if(SoloCurrentStep==15)SoloOutput[2]=Grade[1];
  if(SoloCurrentStep==19)SoloOutput[2]=Grade[1]+Grade[2];
  if(SoloCurrentStep==23)SoloOutput[2]=Grade[1]+Grade[2]+Grade[3];
  if(SoloCurrentStep==27)SoloOutput[2]=Grade[1]+Grade[2]+Grade[3]+Grade[4];
  if(SoloCurrentStep==31)SoloOutput[2]=Grade[1]+Grade[2]+Grade[3]+Grade[4]+Grade[5];

  if(SoloCurrentStep<12)SoloOutput[3]=1;
  if(SoloCurrentStep==12)SoloOutput[3]=1;
  if(SoloCurrentStep==16)SoloOutput[3]=2;
  if(SoloCurrentStep==20)SoloOutput[3]=3;
  if(SoloCurrentStep==24)SoloOutput[3]=4;
  if(SoloCurrentStep==28)SoloOutput[3]=5;

  if(SoloCurrentStep<13)SoloOutput[4]=0;
  if(SoloCurrentStep==13)SoloOutput[4]=Grade[1];
  if(SoloCurrentStep==17)SoloOutput[4]=Grade[2];
  if(SoloCurrentStep==21)SoloOutput[4]=Grade[3];
  if(SoloCurrentStep==25)SoloOutput[4]=Grade[4];
  if(SoloCurrentStep==29)SoloOutput[4]=Grade[5];
  
  if(SoloCurrentStep<18)SoloOutput[5]=0;
  if(SoloCurrentStep==18)SoloOutput[5]=Grade[1];
  if(SoloCurrentStep==22)SoloOutput[5]=Grade[1]+Grade[2];
  if(SoloCurrentStep==26)SoloOutput[5]=Grade[1]+Grade[2]+Grade[3];
  if(SoloCurrentStep==30)SoloOutput[5]=Grade[1]+Grade[2]+Grade[3]+Grade[4];
  if(SoloCurrentStep==34)SoloOutput[5]=Grade[1]+Grade[2]+Grade[3]+Grade[4]+Grade[5];
  if(SoloCurrentStep>=(32-(5-Cnt)*4)){//最終列印
    SoloInput[4]=SoloOutput[2]/Cnt;
    if (Number.isInteger(SoloInput[4])) {
        SoloInput[4] = SoloInput[4].toFixed(1);
    } else {
        SoloInput[4] = SoloInput[4];
    }
    SoloOutput[1]="";
    if(SoloCurrentStep==16)SoloOutput[1]="<br>考試成績："+Grade[1];
    if(SoloCurrentStep==20)SoloOutput[1]="<br>考試成績："+Grade[1]+"<br>考試成績："+Grade[2];
    if(SoloCurrentStep==24)SoloOutput[1]="<br>考試成績："+Grade[1]+"<br>考試成績："+Grade[2]+"<br>考試成績："+Grade[3];
    if(SoloCurrentStep==28)SoloOutput[1]="<br>考試成績："+Grade[1]+"<br>考試成績："+Grade[2]+"<br>考試成績："+Grade[3]+"<br>考試成績："+Grade[4];
    if(SoloCurrentStep==32)SoloOutput[1]="<br>考試成績："+Grade[1]+"<br>考試成績："+Grade[2]+"<br>考試成績："+Grade[3]+"<br>考試成績："+Grade[4]+"<br>考試成績："+Grade[5];
    SoloOutput[1]=SoloOutput[1]+"<br>"+SoloInput[4];

  }
}
