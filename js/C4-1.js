var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [];
var SoloOutput = [0, 0, 0, 0, 0, 0];
var SoloCodeStep = 10;
var SoloMsgStep = [
  0, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,
];
var SoloArrowStep = [
  0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
];
var SoloFlowStep = [
  0, 1, 2, 3, 6, 7, 10, 11, 12, 13, 1, 2, 3, 6, 7, 10, 11, 12, 13, 1, 2, 3, 6,
  7, 10, 11, 12, 13,
];
var SoloOperationStep_SVG = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22,
];
var SoloCodeStep_SVG = 23;
var SoloMsgStep_SVG = [
  0, 1, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
];
var SoloArrowStep_SVG = [
  0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
];
var SoloFlowStep_SVG = [
  0, 1, 2, 3, 6, 7, 10, 11, 12, 13, 1, 2, 3, 6, 7, 10, 11, 12, 13, 1, 2, 3, 6,
  7, 10, 11, 12, 13,
];

var SoloOperationInfo = [
  [
    ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic1.png"],
    ["DrawText", 'input("請輸入n:")', 450, 158, 14, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic2.png"],
    ["DrawText", 'input("請輸入n:")', 450, 158, 14, "black"],
    ["DrawText", '"{Input1}"', 470, 205, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic3.png"],
    ["DrawText", 'int("{Input1}")', 450, 158, 14, "black"],
    ["DrawText", "{Input1}", 470, 205, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic4.png"],
    ["DrawText", "{Input1}", 470, 205, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic5.png"],
    ["DrawText", "{Input1}", 265, 195, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic6.png"],
    ["DrawText", "{Input1}", 265, 195, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic7.png"],
    ["DrawText", "{Input1}", 265, 195, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic8.png"],
    ["DrawText", "{Input1}", 265, 195, 18, "black"],
    ["DrawText", "{Input1}", 140, 350, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic9.png"],
    ["DrawText", "{Input1}", 265, 195, 18, "black"],
    ["DrawText", "{Output3}", 265, 270, 18, "black"],
    ["DrawText", "{Input1}", 140, 350, 18, "black"],
    ["DrawText", "{Output2}", 265, 350, 14, "black"],
    ["ImgBox", 255, 377, 25, 25, "C4-1/vision/pic12.png"],
  ],
];
function SetSolodata() {
  //SoloCurrentStep 目前執行到的步數
  //{Output2}為字串陣列 紀錄1~n 1　,　2　,　3　,　4　,　5　,　6　,　7
  //{Output3}為當前i的數值
  /*
  一步的原始數值，每次增加"ImgBox"12的X40
  [
      ["ImgBox",10,10,600,600,"C4-1/vision/pic10.png"],
      ["DrawText","{Input1}",265,195,18,"black"],
      ["DrawText","{Output3}",265,270,18,"black"],
      ["DrawText","{Input1}",140,350,18,"black"],
      ["DrawText","{Output2}",265,350,14,"black"],
      ["ImgBox",255,377,25,25,"C4-1/vision/pic12.png"]
  ],
  [
      ["ImgBox",10,10,600,600,"C4-1/vision/pic11.png"],
      ["DrawText","{Input1}",265,195,18,"black"],
      ["DrawText","{Output3}",265,270,18,"black"],
      ["DrawText","{Input1}",140,350,18,"black"],
      ["DrawText","{Output2}",265,350,14,"black"],
      ["ImgBox",255,377,25,25,"C4-1/vision/pic12.png"],
      ["DrawText","{Output3}",425,495,18,"black"]
  ]
  */

  Cnt = Number(SoloInput[1]);
  SoloCodeStep_SVG = 9 + 2 * (Cnt>=7?7:Cnt); //輸入7步 每一次迴圈兩步
  SoloMsgStep_SVG = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  SoloArrowStep_SVG = [0, 0, 0, 0, 0, 0, 0, 1, 1];

  SoloOperationStep_SVG=[];
  for(var i=0;i<SoloCodeStep_SVG;i++)SoloOperationStep_SVG.push(i);
  for (var i = 1; i <= Cnt&&i<=7; i++) {
    SoloMsgStep_SVG.push(9);
    SoloMsgStep_SVG.push(9);
    SoloArrowStep_SVG.push(1);
    SoloArrowStep_SVG.push(2);
  }
  //初始狀態
  SoloOperationInfo = [
    [
      ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic1.png"],
      ["DrawText", 'input("請輸入n:")', 450, 158, 14, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic2.png"],
      ["DrawText", 'input("請輸入n:")', 450, 158, 14, "black"],
      ["DrawText", '"{Input1}"', 470, 205, 18, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic3.png"],
      ["DrawText", 'int("{Input1}")', 450, 158, 14, "black"],
      ["DrawText", "{Input1}", 470, 205, 18, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic4.png"],
      ["DrawText", "{Input1}", 470, 205, 18, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic5.png"],
      ["DrawText", "{Input1}", 265, 195, 18, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic6.png"],
      ["DrawText", "{Input1}", 265, 195, 18, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic7.png"],
      ["DrawText", "{Input1}", 265, 195, 18, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic8.png"],
      ["DrawText", "{Input1}", 265, 195, 18, "black"],
      ["DrawText", "{Input1}", 140, 350, 18, "black"],
    ],
    [
      ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic9.png"],
      ["DrawText", "{Input1}", 265, 195, 18, "black"],
      ["DrawText", "{Output3}", 265, 270, 18, "black"],
      ["DrawText", "{Input1}", 140, 350, 18, "black"],
      ["DrawText", "{Output2}", 265, 350, 14, "black"],
      ["ImgBox", 255, 377, 25, 25, "C4-1/vision/pic12.png"],
    ],
  ];
  //
  for (var i = 0; i < Cnt&&i<7; i++) {
    var Temp = [
      ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic10.png"],
      ["DrawText", "{Input1}", 265, 195, 18, "black"],
      ["DrawText", "{Output3}", 265, 270, 18, "black"],
      ["DrawText", "{Input1}", 140, 350, 18, "black"],
      ["DrawText", "{Output2}", 265, 350, 14, "black"],
      ["ImgBox", 255 + i * 40, 377, 25, 25, "C4-1/vision/pic12.png"],
    ];
    var Temp2 = [
      ["ImgBox", 10, 10, 600, 600, "C4-1/vision/pic11.png"],
      ["DrawText", "{Input1}", 265, 195, 18, "black"],
      ["DrawText", "{Output3}", 265, 270, 18, "black"],
      ["DrawText", "{Input1}", 140, 350, 18, "black"],
      ["DrawText", "{Output2}", 265, 350, 14, "black"],
      ["ImgBox", 255 + i * 40, 377, 25, 25, "C4-1/vision/pic12.png"],
      ["DrawText", "{Output3}", 425, 495, 18, "black"],
    ];
    //加入迴圈點點
    SoloOperationInfo.push(Temp);
    SoloOperationInfo.push(Temp2);
  }
  SoloOutput[1] = "";
  console.log("SoloCodeStep_SVG:"+SoloCodeStep_SVG);
  console.log("SoloCurrentStep:"+SoloCurrentStep);
  console.log("Cnt:"+Cnt);
  if (Cnt <= 7) {
    for (var i = 1; i <= Cnt-Math.floor((SoloCodeStep_SVG-SoloCurrentStep)/2); i++) {
      SoloOutput[1] = SoloOutput[1] + i + "<br>";
    }
    
  } 
  else {
    if (SoloCurrentStep > 8) {
      if (SoloCurrentStep >= 16) {
        for (var i = 1; i <= Cnt-Math.floor((SoloCodeStep_SVG-SoloCurrentStep)/2); i++) {
          SoloOutput[1] = SoloOutput[1] + i + "<br>";
        }
      }
       else {
        for (var i = 1; i <= (SoloCurrentStep - 8) / 2; i++) {
          SoloOutput[1] = SoloOutput[1] + i + "<br>";
        }
      }
    }
  }
  SoloOutput[2] = "";
  if(Cnt<=7){
    for (var i = 1; i <= Cnt; i++) {
      if (i != 1) SoloOutput[2] = SoloOutput[2] + "　,　";
      SoloOutput[2] = SoloOutput[2] + i;
    }
  }
  else{
    for (var i = 1; i <= 3; i++) {
      if (i != 1) SoloOutput[2] = SoloOutput[2] + "　,　";
      SoloOutput[2] = SoloOutput[2] + i;
    }
    SoloOutput[2] = SoloOutput[2] + "　,　.....";
    for (var i = Cnt-2; i <= Cnt; i++) {
      if (i != 1) SoloOutput[2] = SoloOutput[2] + "　,  ";
      SoloOutput[2] = SoloOutput[2] + i;
    }
  }
  SoloOutput[3] = 1;
  if(SoloCurrentStep>9)
    SoloOutput[3] = Math.floor((SoloCurrentStep - 9) / 2)+1;
  if(Cnt>7){
    if(SoloCurrentStep==15||SoloCurrentStep==16)
      SoloOutput[3] = "...";
    if(SoloCurrentStep>16)
      SoloOutput[3] =  Cnt-Math.floor((SoloCodeStep_SVG-SoloCurrentStep+1)/2)+1;
  }
}
