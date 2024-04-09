var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [];
var SoloOutput = [0, 0, 0, 0, 0, 0];
var SoloCodeStep = 10;
var SoloMsgStep =   [0,1,1,1,1,1,1,2,3,3,3,3,3,3,4,5,5,5,5,5,5 ,5,5 ,5,6 ,6,7 ,7,8 ,8,9 ,9,10];
var SoloArrowStep = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2 ,3,3 ,3,4 ,3,4 ,3,4 ,3,4 ,3,4];
var SoloFlowStep = [0,1,2,3,6,7,10,11,12,13];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32];
var SoloCodeStep_SVG = 33;
var SoloMsgStep_SVG =   [0,1,1,1,1,1,1,2,3,3,3,3,3,3,4,5,5,5,5,5,5 ,5,5 ,5,6 ,6,7 ,7,8 ,8,9 ,9,10];
var SoloArrowStep_SVG = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2 ,3,3 ,3,4 ,3,4 ,3,4 ,3,4 ,3,4];
var SoloFlowStep_SVG = [0,1,2,3,6,7,10,11,12,13];
var SoloOperationInfo = [
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic1.png"],
      ["DrawText","input(\"請輸入a:\")",450,150 ,14,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic2.png"],
      ["DrawText","input(\"請輸入a:\")",450,150 ,14,"black"],
      ["DrawText","\"{Input1}\"",470,205,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic3.png"],
      ["DrawText","int(\"{Input1}\")",450,150 ,14,"black"],
      ["DrawText","{Input1}",470,205,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic4.png"],
      ["DrawText","{Input1}",470,205,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic5.png"],
      ["DrawText","{Input1}",265,210,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic6.png"],
      ["DrawText","{Input1}",265,210,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic7.png"],
      ["DrawText","{Input1}",265,210,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic8.png"],
      ["DrawText","{Input1}",265,210,18,"black"],
      ["DrawText","input(\"請輸入b:\")",455,225 ,14,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic9.png"],
      ["DrawText","{Input1}",265,210,18,"black"],
      ["DrawText","input(\"請輸入b:\")",455,225 ,14,"black"],
      ["DrawText","\"{Input2}\"",480,275,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic10.png"],
      ["DrawText","{Input1}",265,210,18,"black"],
      ["DrawText","int(\"{Input2}\")",455,225 ,14,"black"],
      ["DrawText","{Input2}",480,275,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic11.png"],
      ["DrawText","{Input1}",265,210,18,"black"],
      ["DrawText","{Input2}",480,275,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic12.png"],
      ["DrawText","{Input1}",265,210,18,"black"],
      ["DrawText","{Input2}",265,275,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic13.png"],
      ["DrawText","{Input1}",265,210,18,"black"],
      ["DrawText","{Input2}",265,275,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic14.png"],
      ["DrawText","{Input1}",265,210,18,"black"],
      ["DrawText","{Input2}",265,275,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic15.png"],
      ["DrawText","{Input1}",265,210,18,"black"],
      ["DrawText","{Input2}",265,275,18,"black"],
      ["DrawText","input(\"請輸入c:\")",440,295 ,14,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic16.png"],
      ["DrawText","{Input1}",265,210,18,"black"],
      ["DrawText","{Input2}",265,275,18,"black"],
      ["DrawText","input(\"請輸入c:\")",440,295 ,14,"black"],
      ["DrawText","\"{Input3}\"",470,340,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic17.png"],
      ["DrawText","{Input1}",265,210,18,"black"],
      ["DrawText","{Input2}",265,275,18,"black"],
      ["DrawText","int(\"{Input3}\")",440,295 ,14,"black"],
      ["DrawText","{Input3}",470,340,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic18.png"],
      ["DrawText","{Input1}",265,210,18,"black"],
      ["DrawText","{Input2}",265,275,18,"black"],
      ["DrawText","{Input3}",470,340,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic19.png"],
      ["DrawText","{Input1}",265,210,18,"black"],
      ["DrawText","{Input2}",265,275,18,"black"],
      ["DrawText","{Input3}",265,340,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic20.png"],
      ["DrawText","{Input1}",265,210,18,"black"],
      ["DrawText","{Input2}",265,275,18,"black"],
      ["DrawText","{Input3}",265,340,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic21.png"],
      ["DrawText","{Input1}",265,210,18,"black"],
      ["DrawText","{Input2}",265,275,18,"black"],
      ["DrawText","{Input3}",265,340,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic22.png"],
      ["DrawText","{Input1}",250,210,18,"black"],
      ["DrawText","{Input2}",250,275,18,"black"],
      ["DrawText","{Input3}",250,340,18,"black"],
      ["DrawText","{Input1}",445,225,18,"black"],
      ["DrawText","{Input2}",480,225,18,"black"],
      ["DrawText","{Input3}",545,225,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic23.png"],
      ["DrawText","{Input1}",250,210,18,"black"],
      ["DrawText","{Input2}",250,275,18,"black"],
      ["DrawText","{Input3}",250,340,18,"black"],
      ["DrawText","{Input1}",445,225,18,"black"],
      ["DrawText","{Input2}",480,225,18,"black"],
      ["DrawText","{Input3}",545,225,18,"black"],
      ["DrawText","{Output2}",390,285,14,"black"],
      ["ImgBox",390,303,20,20,"C4-3/vision/pic25.png"],
      ["DrawText","{Output3}",250,410,18,"black"]
  ]
];
function SetSolodata() {
  //SoloCurrentStep 目前執行到的步數
  //{Output2}為字串陣列 紀錄3,6,9,12,15
  //{Output3}為當前i的數值
  /*
  一步的原始數值，每次增加"ImgBox"12的X40,
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic24.png"],
      ["DrawText","{Input1}",250,210,18,"black"],
      ["DrawText","{Input2}",250,275,18,"black"],
      ["DrawText","{Input3}",250,340,18,"black"],
      ["DrawText","{Input1}",445,225,18,"black"],
      ["DrawText","{Input2}",480,225,18,"black"],
      ["DrawText","{Input3}",545,225,18,"black"],
      ["DrawText","{Output2}",390,285,14,"black"],
      ["ImgBox",390,303,20,20,"C4-3/vision/pic25.png"],
      ["DrawText","{Output3}",250,410,18,"black"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-3/vision/pic24.png"],
      ["DrawText","{Input1}",250,210,18,"black"],
      ["DrawText","{Input2}",250,275,18,"black"],
      ["DrawText","{Input3}",250,340,18,"black"],
      ["DrawText","{Input1}",445,225,18,"black"],
      ["DrawText","{Input2}",480,225,18,"black"],
      ["DrawText","{Input3}",545,225,18,"black"],
      ["DrawText","{Output2}",390,285,14,"black"],
      ["ImgBox",390,303,20,20,"C4-3/vision/pic25.png"],
      ["DrawText","{Output3}",250,410,18,"black"],
      ["DrawText","{Output1}",520,410,18,"black"]
  ]
  */
Cnt=0;
if(SoloCurrentStep>21){
    var Temp = Number(SoloInput[2]);
    while ((Temp - Number(SoloInput[1])) % Number(SoloInput[3]) != 0) {
      Temp -= 1; //最後一個數字
    }
    console.log("Temp:"+Temp);
    Cnt = Math.floor((Temp-Number(SoloInput[1]))/Number(SoloInput[3]))+1;//迴圈要跑幾次
}
Cnt = isNaN(Cnt) ? 5 : Cnt;

  console.log("Cnt:"+Cnt);
  
  if(Cnt>=5&&SoloCurrentStep==27)SoloCurrentStep=29;//跳過點點點的步驟
  if(Cnt>=5&&SoloCurrentStep==28)SoloCurrentStep=26;//跳過點點點的步驟
  SoloCodeStep_SVG = 23 + 2 * (Cnt>=5?5:Cnt); //輸入步 每一次迴圈兩步
  
  SoloMsgStep_SVG =   [0,1,1,1,1,1,1,2,3,3,3,3,3,3,4,5,5,5,5,5,5,5,5];
  SoloArrowStep_SVG = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3];

  SoloOperationStep_SVG=[];
  for(var i=0;i<SoloCodeStep_SVG;i++)SoloOperationStep_SVG.push(i);
  for (var i = 1; i <= Cnt&&i<=5; i++) {
    SoloMsgStep_SVG.push(11);
    SoloMsgStep_SVG.push(11);
    SoloArrowStep_SVG.push(3);
    SoloArrowStep_SVG.push(4);
  }
  //初始狀態
  SoloOperationInfo = [
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic1.png"],
        ["DrawText","input(\"請輸入a:\")",450,150 ,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic2.png"],
        ["DrawText","input(\"請輸入a:\")",450,150 ,14,"black"],
        ["DrawText","\"{Input1}\"",470,205,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic3.png"],
        ["DrawText","int(\"{Input1}\")",450,150 ,14,"black"],
        ["DrawText","{Input1}",470,205,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic4.png"],
        ["DrawText","{Input1}",470,205,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic5.png"],
        ["DrawText","{Input1}",265,210,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic6.png"],
        ["DrawText","{Input1}",265,210,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic7.png"],
        ["DrawText","{Input1}",265,210,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic8.png"],
        ["DrawText","{Input1}",265,210,18,"black"],
        ["DrawText","input(\"請輸入b:\")",455,225 ,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic9.png"],
        ["DrawText","{Input1}",265,210,18,"black"],
        ["DrawText","input(\"請輸入b:\")",455,225 ,14,"black"],
        ["DrawText","\"{Input2}\"",480,275,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic10.png"],
        ["DrawText","{Input1}",265,210,18,"black"],
        ["DrawText","int(\"{Input2}\")",455,225 ,14,"black"],
        ["DrawText","{Input2}",480,275,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic11.png"],
        ["DrawText","{Input1}",265,210,18,"black"],
        ["DrawText","{Input2}",480,275,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic12.png"],
        ["DrawText","{Input1}",265,210,18,"black"],
        ["DrawText","{Input2}",265,275,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic13.png"],
        ["DrawText","{Input1}",265,210,18,"black"],
        ["DrawText","{Input2}",265,275,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic14.png"],
        ["DrawText","{Input1}",265,210,18,"black"],
        ["DrawText","{Input2}",265,275,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic15.png"],
        ["DrawText","{Input1}",265,210,18,"black"],
        ["DrawText","{Input2}",265,275,18,"black"],
        ["DrawText","input(\"請輸入c:\")",440,295 ,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic16.png"],
        ["DrawText","{Input1}",265,210,18,"black"],
        ["DrawText","{Input2}",265,275,18,"black"],
        ["DrawText","input(\"請輸入c:\")",440,295 ,14,"black"],
        ["DrawText","\"{Input3}\"",470,340,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic17.png"],
        ["DrawText","{Input1}",265,210,18,"black"],
        ["DrawText","{Input2}",265,275,18,"black"],
        ["DrawText","int(\"{Input3}\")",440,295 ,14,"black"],
        ["DrawText","{Input3}",470,340,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic18.png"],
        ["DrawText","{Input1}",265,210,18,"black"],
        ["DrawText","{Input2}",265,275,18,"black"],
        ["DrawText","{Input3}",470,340,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic19.png"],
        ["DrawText","{Input1}",265,210,18,"black"],
        ["DrawText","{Input2}",265,275,18,"black"],
        ["DrawText","{Input3}",265,340,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic20.png"],
        ["DrawText","{Input1}",265,210,18,"black"],
        ["DrawText","{Input2}",265,275,18,"black"],
        ["DrawText","{Input3}",265,340,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic21.png"],
        ["DrawText","{Input1}",265,210,18,"black"],
        ["DrawText","{Input2}",265,275,18,"black"],
        ["DrawText","{Input3}",265,340,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic22.png"],
        ["DrawText","{Input1}",250,210,18,"black"],
        ["DrawText","{Input2}",250,275,18,"black"],
        ["DrawText","{Input3}",250,340,18,"black"],
        ["DrawText","{Input1}",445,225,18,"black"],
        ["DrawText","{Input2}",480,225,18,"black"],
        ["DrawText","{Input3}",545,225,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C4-3/vision/pic23.png"],
        ["DrawText","{Input1}",250,210,18,"black"],
        ["DrawText","{Input2}",250,275,18,"black"],
        ["DrawText","{Input3}",250,340,18,"black"],
        ["DrawText","{Input1}",445,225,18,"black"],
        ["DrawText","{Input2}",480,225,18,"black"],
        ["DrawText","{Input3}",545,225,18,"black"],
        ["DrawText","{Output2}",390,285,14,"black"],
        ["ImgBox",390,303,20,20,"C4-3/vision/pic25.png"],
        ["DrawText","{Output3}",250,410,18,"black"]
    ]
  ];
  //
  for (var i = 0; i < Cnt&&i<5; i++) {
    var Temp =[
      ["ImgBox",10,10,600,600,"C4-3/vision/pic24.png"],
      ["DrawText","{Input1}",250,210,18,"black"],
      ["DrawText","{Input2}",250,275,18,"black"],
      ["DrawText","{Input3}",250,340,18,"black"],
      ["DrawText","{Input1}",445,225,18,"black"],
      ["DrawText","{Input2}",480,225,18,"black"],
      ["DrawText","{Input3}",545,225,18,"black"],
      ["DrawText","{Output2}",390,285,14,"black"],
      ["ImgBox",390 + i * 40,303,20,20,"C4-3/vision/pic25.png"],
      ["DrawText","{Output3}",250,410,18,"black"]
  ];
    var Temp2 =[
      ["ImgBox",10,10,600,600,"C4-3/vision/pic24.png"],
      ["DrawText","{Input1}",250,210,18,"black"],
      ["DrawText","{Input2}",250,275,18,"black"],
      ["DrawText","{Input3}",250,340,18,"black"],
      ["DrawText","{Input1}",445,225,18,"black"],
      ["DrawText","{Input2}",480,225,18,"black"],
      ["DrawText","{Input3}",545,225,18,"black"],
      ["DrawText","{Output2}",390,285,14,"black"],
      ["ImgBox",390 + i * 40,303,20,20,"C4-3/vision/pic25.png"],
      ["DrawText","{Output3}",250,410,18,"black"],
      ["DrawText","{Output3}",520,410,18,"black"]
    ];
    //加入迴圈點點
    SoloOperationInfo.push(Temp);
    SoloOperationInfo.push(Temp2);
  }

  SoloOutput[1] = "";
  console.log("SoloCodeStep_SVG:"+SoloCodeStep_SVG);
  console.log("SoloMsgStep_SVG:"+SoloMsgStep_SVG);
  console.log("SoloCurrentStep:"+SoloCurrentStep);
  console.log("Cnt:"+Cnt);
  if (SoloCurrentStep > 23) {
    var Temp = Number(SoloInput[2]);
    while ((Temp - Number(SoloInput[1])) % Number(SoloInput[3]) != 0) {
      Temp -= 1; //最後一個數字
    }
    console.log("Temp:" + Temp);
    if (SoloCurrentStep == 24 || SoloCurrentStep == 25) {
      //印第一個
      SoloOutput[1] = SoloOutput[1] + Number(SoloInput[1]) + "";
    } else if (SoloCurrentStep == 26 || SoloCurrentStep == 27) {
      //印第二個
      SoloOutput[1] = SoloOutput[1] + Number(SoloInput[1]) + "<br>";
      SoloOutput[1] =
        SoloOutput[1] +
        Number(Number(SoloInput[1]) + Number(SoloInput[3])) +
        "";
    } else if (SoloCurrentStep == 28 || SoloCurrentStep == 29) {//印到末第三個
        if(Cnt==3 || Cnt==4){
            SoloOutput[1] = SoloOutput[1] +Number(Number(SoloInput[1]))  +"<br>"+Number(Number(SoloInput[1]) + Number(SoloInput[3])*1) +"<br>"+Number(Number(SoloInput[1]) + Number(SoloInput[3])*2);
        }
        else{
            for (
                var i = Number(SoloInput[1]);
                i < Temp - Number(SoloInput[3]);
                i += Number(SoloInput[3])
            ) {
                if (i != Number(SoloInput[1])) SoloOutput[1] = SoloOutput[1] + "<br>";
                SoloOutput[1] = SoloOutput[1] + i;
             }
        }
    } else if (SoloCurrentStep == 30 || SoloCurrentStep == 31) {//印到末第一個
        if(Cnt==3 || Cnt==4){
            SoloOutput[1] = SoloOutput[1] +Number(Number(SoloInput[1]))  +"<br>"+Number(Number(SoloInput[1]) + Number(SoloInput[3])*1) +"<br>"+Number(Number(SoloInput[1]) + Number(SoloInput[3])*2)+"<br>"+Number(Number(SoloInput[1]) + Number(SoloInput[3])*3);
        }
        else{
            for (
                var i = Number(SoloInput[1]);
                i <= Temp - Number(SoloInput[3]);
                i += Number(SoloInput[3])
            ) {
                if (i != Number(SoloInput[1])) SoloOutput[1] = SoloOutput[1] + "<br>";
                SoloOutput[1] = SoloOutput[1] + i;
            }
        }
    } else if (SoloCurrentStep == 32) {
      //印到末第一個
      for (var i = Number(SoloInput[1]); i <= Temp; i += Number(SoloInput[3])) {
        if (i != Number(SoloInput[1])) SoloOutput[1] = SoloOutput[1] + "<br>";
        SoloOutput[1] = SoloOutput[1] + i;
      }
    }
  }
  SoloOutput[2] = "";
  if(Cnt<=5){
    for (var i = Number(SoloInput[1]); i <= Number(SoloInput[2]); i+=Number(SoloInput[3])) {
      if (i != Number(SoloInput[1])) SoloOutput[2] = SoloOutput[2] + "　,　";
      SoloOutput[2] = SoloOutput[2] + i;
    }
  }
  else{
    for (var i = 0; i <= 1; i++) {
      if (i != 0) SoloOutput[2] = SoloOutput[2] + "　,　";
      SoloOutput[2] = SoloOutput[2] + (Number(SoloInput[1])+i*Number(SoloInput[3]));//前兩位
    }
    SoloOutput[2] = SoloOutput[2] + "　,　.....";
    for (var i = 1; i >=0; i--) {//末兩位
        SoloOutput[2] = SoloOutput[2] + "　,  ";
      var Temp=Number(SoloInput[2]);
      while((Temp-Number(SoloInput[1]))%Number(SoloInput[3])!=0){
        Temp-=1;//最後一個數字
      }
      SoloOutput[2] = SoloOutput[2] + Number(Temp-(Number(SoloInput[3])*i));
    }
  }
  SoloOutput[3] = Number(SoloInput[1]);
  if(SoloCurrentStep>22)
    SoloOutput[3] = Number(SoloInput[1])+Number(SoloInput[3])*(Math.floor((SoloCurrentStep - 23)/2));
  if(Cnt>5){
    if(SoloCurrentStep==27||SoloCurrentStep==28)
      SoloOutput[3] = "...";
    if(SoloCurrentStep>28){
        var Temp=Number(SoloInput[2]);
        while((Temp-Number(SoloInput[1]))%Number(SoloInput[3])!=0){
          Temp-=1;//最後一個數字
        }
        if(SoloCurrentStep==29||SoloCurrentStep==30)
            SoloOutput[3] = Number(Temp-(Number(SoloInput[3])));
        if(SoloCurrentStep==31||SoloCurrentStep==32||SoloCurrentStep==33)
            SoloOutput[3] = Number(Temp);
    }
  }        
}
