var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [];
var SoloOutput = [0, 0, 0, 0, 0, 0];
var SoloCodeStep = 15;

var SoloMsgStep =    [0,1,1,1,2,2 ,2,3,3 ,3,4,4 ,4,4,5];
var SoloArrowStep =  [0,1,2,3,4,5 ,3,4,5 ,3,4,5 ,3,3,6];
var SoloFlowStep =   [0,1,2,3,4,5 ,3,4,5 ,3,4,5 ,3,6,7];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
var SoloCodeStep_SVG = 37;
var SoloMsgStep_SVG =   [0,1,1,1,1,1,1, 1,1,1, 1,1,1, 1,1,2,2,2,2,2, 2,2,3,3,3,3,3, 3,3,4,4,4,4,4, 4,4,5];
var SoloArrowStep_SVG = [0,0,0,0,0,0,0, 1,1,1, 2,2,2, 3,3,4,5,5,6,6, 3,3,4,5,5,6,6, 3,3,4,5,5,6,6, 3,3,7];
var SoloFlowStep_SVG =  [0,1,2,3,4,5 ,3,4,5 ,3,4,5 ,3,6,7];

var SoloOperationInfo = [
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic1.png"],
        ["DrawText","input(\"請輸入幾次考試:\")",420,160 ,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic2.png"],
        ["DrawText","input(\"請輸入幾次考試:\")",420,160,14,"black"],
        ["DrawText","\"{Input1}\"",440,210,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic3.png"],
        ["DrawText","int(\"{Input1}\")",420,160 ,14,"black"],
        ["DrawText","{Input1}",440,210,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic4.png"],
        ["DrawText","{Input1}",440,210,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic5.png"],
        ["DrawText","{Input1}",250,225,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic6.png"],
        ["DrawText","{Input1}",250,225,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic7.png"],
        ["DrawText","{Input1}",250,225,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic8.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic9.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic10.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic11.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic12.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic13.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic14.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","score = int(input(\"考試成績:\"))",405,325,12,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic15.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"考試成績:\"))",405,325,12,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"考試成績:\"))",405,325,12,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output2}",415,385,18,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output2}",415,385,18,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"],
        ["DrawText","{Output5}",490,452,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output2}",415,385,18,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"],
        ["DrawText","{Output5}",490,452,18,"black"],
        ["DrawText","{Output3}",430,452,18,"black"]
    ],




    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic87.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"考試成績:\"))",405,325,12,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"考試成績:\"))",405,325,12,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"考試成績:\"))",405,325,12,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output2}",415,385,18,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"]
    ],

    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output2}",415,385,18,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"],
        ["DrawText","{Output5}",490,452,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output2}",415,385,18,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"],
        ["DrawText","{Output5}",490,452,18,"black"],
        ["DrawText","{Output3}",430,452,18,"black"]
    ],




    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic87.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"考試成績:\"))",405,325,12,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"考試成績:\"))",405,325,12,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"考試成績:\"))",405,325,12,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output2}",415,385,18,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"]
    ],

    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output2}",415,385,18,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"],
        ["DrawText","{Output5}",490,452,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output2}",415,385,18,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"],
        ["DrawText","{Output5}",490,452,18,"black"],
        ["DrawText","{Output3}",430,452,18,"black"]
    ],


    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic87.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"考試成績:\"))",405,325,12,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic17.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"考試成績:\"))",405,325,12,"black"]
    ],

    [
        ["ImgBox",10,10,600,600,"C4-7/vision/pic18.png"],
        ["DrawText","{Output6}",230,280,16,"white"]
    ]
];
function SetSolodata() {
  //SoloCurrentStep 目前執行到的步數
  //{Output2}為字串陣列 紀錄1,2,3,4,5
  //{Output3}為當前i的數值
  
  Cnt = Number(SoloInput[1]);//迴圈要跑幾次
  Cnt = isNaN(Cnt) ? 3 : Cnt;
  console.log("Cnt:"+Cnt);
  SoloCodeStep_SVG = 13 + 7 * Cnt + 3; //輸入步 每一次迴圈3步
  
  SoloCodeStep = 5+4*Cnt;
  SoloMsgStep =    [0,1,1];
  SoloArrowStep =  [0,1,2];
  SoloFlowStep =   [0,1,2];
  
  for (var i = 1; i <= Cnt; i++) {
    SoloMsgStep.push(12);
    SoloMsgStep.push(11);
    SoloMsgStep.push(12);
    SoloMsgStep.push(12);
    SoloArrowStep.push(3);
    SoloArrowStep.push(4);
    SoloArrowStep.push(5);
    SoloArrowStep.push(6);
    SoloFlowStep.push(3);
    SoloFlowStep.push(4);
    SoloFlowStep.push(5);
    SoloFlowStep.push(6);
  }
  SoloMsgStep.push(12);
  SoloMsgStep.push(12);
  SoloArrowStep.push(3);
  SoloArrowStep.push(7);
  SoloFlowStep.push(7);
  SoloFlowStep.push(8);


  if(SoloCurrentStep<=1){ 
    FlowGrade=[];//分數暫存器，步驟回1時重製作
    for(var i=0;i<999;i++) FlowGrade.push(0);
  }
  else if(SoloCurrentStep>=5){
    if((SoloCurrentStep-5)%4==0){
        FlowGrade[(SoloCurrentStep-5)/4+1]=Number(SoloInput[6]);
        //alert(FlowGrade[1]+" "+FlowGrade[2]+" "+FlowGrade[3]+" "+FlowGrade[4]+" "+FlowGrade[5]+" ");
    }
  }

  if(SoloCurrentStep<5){
    SoloOutput[6] = "<br>";
  }
  else if(SoloCurrentStep==SoloCodeStep-1){//最後一步驟
    SoloOutput[6]="<br>";
    for(var i=1;i<=(SoloCurrentStep-5)/4+1;i++){
        SoloOutput[6]+="考試成績："+FlowGrade[i]+"<br>";
    }
    //再加上平均
    var Temp=0;
    for(var i=1;i<=(SoloCurrentStep-5)/4+1;i++)
        Temp+=FlowGrade[i];
    var ans=Temp/Cnt;
    if (Number.isInteger(ans)) {
        ans = ans.toFixed(1);
    } 
    SoloOutput[6]+="平均為"+ans+"<br>";
  }
  else{
    if((SoloCurrentStep-5)%4==0){
        SoloOutput[6]="<br>";
        for(var i=1;i<=(SoloCurrentStep-5)/4+1;i++){
            SoloOutput[6]+="考試成績："+FlowGrade[i]+"<br>";
        }
    }
  }
  /*以上流程圖*/
  
  SoloMsgStep_SVG =   [0,1,1,1,1,1,1, 1,1,1, 1,1,1];
  SoloArrowStep_SVG = [0,0,0,0,0,0,0, 1,1,1, 2,2,2];

  SoloOperationStep_SVG=[];
  for(var i=0;i<SoloCodeStep_SVG;i++)SoloOperationStep_SVG.push(i);
  for (var i = 1; i <= Cnt; i++) {
    SoloMsgStep_SVG.push(10);
    SoloMsgStep_SVG.push(10);
    SoloMsgStep_SVG.push(9);
    SoloMsgStep_SVG.push(10);
    SoloMsgStep_SVG.push(10);
    SoloMsgStep_SVG.push(10);
    SoloMsgStep_SVG.push(10);
    
    SoloArrowStep_SVG.push(3);
    SoloArrowStep_SVG.push(3);
    SoloArrowStep_SVG.push(4);
    SoloArrowStep_SVG.push(5);
    SoloArrowStep_SVG.push(5);
    SoloArrowStep_SVG.push(6);
    SoloArrowStep_SVG.push(6);
  }
  SoloMsgStep_SVG.push(10);
  SoloMsgStep_SVG.push(10);
  SoloMsgStep_SVG.push(10);
  SoloArrowStep_SVG.push(3);
  SoloArrowStep_SVG.push(3);
  SoloArrowStep_SVG.push(7);
  //初始狀態
  SoloOperationInfo = [
    [
      ["ImgBox", 10, 10, 600, 600, "C4-7/vision/pic1.png"],
      ["DrawText", 'input("請輸入幾次考試:")', 420, 160, 14, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-7/vision/pic2.png"],
      ["DrawText", 'input("請輸入幾次考試:")', 420, 160, 14, "black"],
      ["DrawText", '"{Input1}"', 440, 210, 18, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-7/vision/pic3.png"],
      ["DrawText", 'int("{Input1}")', 420, 160, 14, "black"],
      ["DrawText", "{Input1}", 440, 210, 18, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-7/vision/pic4.png"],
      ["DrawText", "{Input1}", 440, 210, 18, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-7/vision/pic5.png"],
      ["DrawText", "{Input1}", 250, 225, 18, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-7/vision/pic6.png"],
      ["DrawText", "{Input1}", 250, 225, 18, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-7/vision/pic7.png"],
      ["DrawText", "{Input1}", 250, 225, 18, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-7/vision/pic8.png"],
      ["DrawText", "{Input1}", 250, 225, 18, "black"],
      ["DrawText", "{Output2}", 250, 295, 18, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-7/vision/pic9.png"],
      ["DrawText", "{Input1}", 250, 225, 18, "black"],
      ["DrawText", "{Output2}", 250, 295, 18, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-7/vision/pic10.png"],
      ["DrawText", "{Input1}", 250, 225, 18, "black"],
      ["DrawText", "{Output2}", 250, 295, 18, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-7/vision/pic11.png"],
      ["DrawText", "{Input1}", 250, 225, 18, "black"],
      ["DrawText", "{Output2}", 250, 295, 18, "black"],
      ["DrawText", "{Output3}", 250, 365, 18, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-7/vision/pic12.png"],
      ["DrawText", "{Input1}", 250, 225, 18, "black"],
      ["DrawText", "{Output2}", 250, 295, 18, "black"],
      ["DrawText", "{Output3}", 250, 365, 18, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-7/vision/pic13.png"],
      ["DrawText", "{Input1}", 250, 225, 18, "black"],
      ["DrawText", "{Output2}", 250, 295, 18, "black"],
      ["DrawText", "{Output3}", 250, 365, 18, "black"],
    ],
  ];
  for (var i = 0; i < 1; i++) {//第一次的圖不是pic87,例外處理
    var Temp1=[
        ["ImgBox",10,10,600,600,"C4-7/vision/pic14.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","score = int(input(\"考試成績:\"))",405,325,12,"black"]
    ];
    var Temp2=[
        ["ImgBox",10,10,600,600,"C4-7/vision/pic15.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"考試成績:\"))",405,325,12,"black"]
    ];
    var Temp3=[
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"考試成績:\"))",405,325,12,"black"]
    ];
    var Temp4=[
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"]
    ];
    var Temp5=[
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output2}",415,385,18,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"]
    ];
    var Temp6=[
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output2}",415,385,18,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"],
        ["DrawText","{Output5}",490,452,18,"black"]
    ];
    var Temp7=[
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output2}",415,385,18,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"],
        ["DrawText","{Output5}",490,452,18,"black"],
        ["DrawText","{Output3}",430,452,18,"black"]
    ];
    SoloOperationInfo.push(Temp1);
    SoloOperationInfo.push(Temp2);
    SoloOperationInfo.push(Temp3);
    SoloOperationInfo.push(Temp4);
    SoloOperationInfo.push(Temp5);
    SoloOperationInfo.push(Temp6);
    SoloOperationInfo.push(Temp7);
  }
  for (var i = 1; i < Cnt; i++) {//第二次以後
    var Temp1=[
        ["ImgBox",10,10,600,600,"C4-7/vision/pic87.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"考試成績:\"))",405,325,12,"black"]
    ];
    var Temp2=[
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"考試成績:\"))",405,325,12,"black"]
    ];
    var Temp3=[
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"考試成績:\"))",405,325,12,"black"]
    ];
    var Temp4=[
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"]
    ];
    var Temp5=[
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output2}",415,385,18,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"]
    ];

    var Temp6=[
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output2}",415,385,18,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"],
        ["DrawText","{Output5}",490,452,18,"black"]
    ];
    var Temp7=[
        ["ImgBox",10,10,600,600,"C4-7/vision/pic16.png"],
        ["DrawText","{Input1}",250,225,18,"black"],
        ["DrawText","{Output2}",250,295,18,"black"],
        ["DrawText","{Output3}",250,365,18,"black"],
        ["DrawText","{Input2}",250,435,18,"black"],
        ["DrawText","{Output3}",430,265,18,"black"],
        ["DrawText","{Input1}",490,265,18,"black"],
        ["DrawText","score = int(input(\"{Input2}\"))",405,325,12,"black"],
        ["DrawText","{Output2}",415,385,18,"black"],
        ["DrawText","{Output4}",485,385,18,"black"],
        ["DrawText","{Input2}",545,385,18,"black"],
        ["DrawText","{Output5}",490,452,18,"black"],
        ["DrawText","{Output3}",430,452,18,"black"]
    ];
    SoloOperationInfo.push(Temp1);
    SoloOperationInfo.push(Temp2);
    SoloOperationInfo.push(Temp3);
    SoloOperationInfo.push(Temp4);
    SoloOperationInfo.push(Temp5);
    SoloOperationInfo.push(Temp6);
    SoloOperationInfo.push(Temp7);
  }
    var Temp1 = [
      ["ImgBox", 10, 10, 600, 600, "C4-7/vision/pic87.png"],
      ["DrawText", "{Input1}", 250, 225, 18, "black"],
      ["DrawText", "{Output2}", 250, 295, 18, "black"],
      ["DrawText", "{Output3}", 250, 365, 18, "black"],
      ["DrawText", "{Input2}", 250, 435, 18, "black"],
      ["DrawText", "{Output3}", 430, 265, 18, "black"],
      ["DrawText", "{Input1}", 490, 265, 18, "black"],
      ["DrawText", 'score = int(input("考試成績:"))', 405, 325, 12, "black"],
    ];
    var Temp2 = [
      ["ImgBox", 10, 10, 600, 600, "C4-7/vision/pic17.png"],
      ["DrawText", "{Input1}", 250, 225, 18, "black"],
      ["DrawText", "{Output2}", 250, 295, 18, "black"],
      ["DrawText", "{Output3}", 250, 365, 18, "black"],
      ["DrawText", "{Input2}", 250, 435, 18, "black"],
      ["DrawText", "{Output3}", 430, 265, 18, "black"],
      ["DrawText", "{Input1}", 490, 265, 18, "black"],
      ["DrawText", 'score = int(input("考試成績:"))', 405, 325, 12, "black"],
    ];
    var Temp3 = [
      ["ImgBox", 10, 10, 600, 600, "C4-7/vision/pic18.png"],
      ["DrawText", "{Input4}", 230, 280, 16, "white"],
    ];
  //加入結尾列印
  SoloOperationInfo.push(Temp1);
  SoloOperationInfo.push(Temp2);
  SoloOperationInfo.push(Temp3);

/*開搞*/
////////////////////////////////1,2,3,4,5
  if(SoloCurrentStep==1){ 
    Grade=[];//分數暫存器，步驟回1時重製作
    for(var i=0;i<999;i++) Grade.push(0);
  }
  else if(SoloCurrentStep>=16){
    if((SoloCurrentStep-16)%7==0){
        Grade[(SoloCurrentStep-16)/7+1]=Number(SoloInput[2]);
        //alert(Grade[1]+" "+Grade[2]+" "+Grade[3]+" "+Grade[4]+" "+Grade[5]+" ");
    }
  }
  console.log("SoloCodeStep_SVG:"+SoloCodeStep_SVG);
  console.log("SoloMsgStep_SVG:"+SoloMsgStep_SVG);
  console.log("SoloCurrentStep:"+SoloCurrentStep);
  console.log("Cnt:"+Cnt);


  if(SoloCurrentStep<16){
    SoloOutput[1] = "<br>";
  }
  else if(SoloCurrentStep==SoloCodeStep_SVG-1){//最後一步驟
    SoloOutput[1]="<br>";
    for(var i=1;i<=(SoloCurrentStep-16)/7+1;i++){
        SoloOutput[1]+="考試成績："+Grade[i]+"<br>";
    }
    //再加上平均
    var Temp=0;
    for(var i=1;i<=(SoloCurrentStep-16)/7+1;i++)
        Temp+=Grade[i];
    var ans=Temp/Cnt;
    if (Number.isInteger(ans)) {
        ans = ans.toFixed(1);
    } 
    SoloOutput[1]+="平均為"+ans+"<br>";
    SoloInput[4]="平均為"+ans+"<br>";
  }
  else{
    if((SoloCurrentStep-16)%7==0){
        SoloOutput[1]="<br>";
        for(var i=1;i<=(SoloCurrentStep-16)/7+1;i++){
            SoloOutput[1]+="考試成績："+Grade[i]+"<br>";
        }
    }
  }

  if(SoloCurrentStep<17){
    SoloOutput[2] = 0;
  }
  else{
    SoloOutput[2] = 0;
    for(var i=1;i<=(SoloCurrentStep-17)/7+1;i++){
        SoloOutput[2] += Grade[i];
    }
  }

  if(SoloCurrentStep<19){
    SoloOutput[3] = 1;
  }
  else{
    SoloOutput[3]=Math.floor((SoloCurrentStep-19)/7)+2;
  }
  
  if(SoloCurrentStep<23){
    SoloOutput[4] = 0;
  }
  else{
    SoloOutput[4] = 0;
    for(var i=1;i<=(SoloCurrentStep-23)/7+1;i++){
        SoloOutput[4] += Grade[i];
    }
  }
  
  if(SoloCurrentStep<19){
    SoloOutput[5] = 1;
  }
  else{
    SoloOutput[5]=Math.floor((SoloCurrentStep-18)/7)+1;
  }
}
