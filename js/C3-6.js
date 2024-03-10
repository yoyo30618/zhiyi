var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 10;
var SoloMsgStep =   [0,2,3,3,3,3,3,3,3,6];
var SoloArrowStep = [0,1,2,3,3,5,5,7,7,8];
var SoloFlowStep =  [0,1,2,3,6,7,10,11,12,13];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
var SoloCodeStep_SVG = 30;
var SoloMsgStep_SVG =  [0,1,1,1,1,1,1 ,2,3,3,3,3,3,3, 3,3,3,3,3, 3,3,3,3 ,3,3,3 ,3,3,3 ,6];
var SoloArrowStep_SVG =[0,0,0,0,0,0,0 ,1,1,1,1,1,1,1, 2,2,2,2,2, 3,3,3,3 ,5,5,5 ,7,7,7 ,8];
var SoloFlowStep_SVG = [0,1,2];
var SoloOperationInfo = [
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic1.png"],
    ["DrawText", 'input("請輸入身高（公分）：")', 440, 150, 14, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic2.png"],
    ["DrawText", 'input("請輸入身高（公分）：")', 440, 150, 14, "black"],
    ["DrawText", '"{Input1}"', 460, 195, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic3.png"],
    ["DrawText", 'int("{Input1}")', 440, 150, 14, "black"],
    ["DrawText", "{Input1}", 460, 195, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic4.png"],
    ["DrawText", "{Input1}", 460, 195, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic5.png"],
    ["DrawText", "{Input1}", 265, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic6.png"],
    ["DrawText", "{Input1}", 265, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic7.png"],
    ["DrawText", "{Input1}", 265, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic8.png"],
    ["DrawText", "{Input1}", 265, 185, 18, "black"],
    ["DrawText", 'input("請輸入體重（公斤）")', 430, 215, 14, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic9.png"],
    ["DrawText", "{Input1}", 265, 185, 18, "black"],
    ["DrawText", 'input("請輸入體重（公斤）")', 430, 215, 14, "black"],
    ["DrawText", '"{Input2}"', 460, 250, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic10.png"],
    ["DrawText", "{Input1}", 265, 185, 18, "black"],
    ["DrawText", 'int("{Input2}")', 430, 215, 14, "black"],
    ["DrawText", "{Input2}", 460, 250, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic11.png"],
    ["DrawText", "{Input1}", 265, 185, 18, "black"],
    ["DrawText", "{Input2}", 460, 250, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic12.png"],
    ["DrawText", "{Input1}", 265, 185, 18, "black"],
    ["DrawText", "{Input2}", 265, 250, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic13.png"],
    ["DrawText", "{Input1}", 265, 185, 18, "black"],
    ["DrawText", "{Input2}", 265, 250, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic14.png"],
    ["DrawText", "{Input1}", 265, 185, 18, "black"],
    ["DrawText", "{Input2}", 265, 250, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic15.png"],
    ["DrawText", "{Input1}", 265, 185, 18, "black"],
    ["DrawText", "{Input2}", 265, 250, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic16.png"],
    ["DrawText", "{Input1}", 265, 185, 18, "black"],
    ["DrawText", "{Input2}", 265, 250, 18, "black"],
    ["DrawText", "{Input2}", 265, 480, 18, "black"],
    ["DrawText", "{Input1}", 350, 480, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic17.png"],
    ["DrawText", "{Input1}", 265, 185, 18, "black"],
    ["DrawText", "{Input2}", 265, 250, 18, "black"],
    ["DrawText", "{Input2}", 265, 480, 18, "black"],
    ["DrawText", "{Input1}", 350, 480, 18, "black"],
    ["DrawText", "{Output2}", 270, 320, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic18.png"],
    ["DrawText", "{Input1}", 265, 185, 18, "black"],
    ["DrawText", "{Input2}", 265, 250, 18, "black"],
    ["DrawText", "{Input2}", 265, 480, 18, "black"],
    ["DrawText", "{Input1}", 350, 480, 18, "black"],
    ["DrawText", "{Output2}", 270, 320, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic19.png"],
    ["DrawText", "{Input1}", 265, 185, 18, "black"],
    ["DrawText", "{Input2}", 265, 250, 18, "black"],
    ["DrawText", "{Input2}", 265, 480, 18, "black"],
    ["DrawText", "{Input1}", 350, 480, 18, "black"],
    ["DrawText", "{Output2}", 270, 320, 18, "black"],
    ["DrawText", "{Output2}", 150, 480, 18, "black"],
  ],
  [
    //標準開始
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic54.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic55.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic56.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic57.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic58.png"],
    ["DrawText", "{Output2}", 110, 220, 18, "black"],
    ["DrawText", "{Output2}", 300, 220, 18, "black"],
    ["DrawText", "{Output2}", 335, 385, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic59.png"],
    ["DrawText", "{Output2}", 110, 220, 18, "black"],
    ["DrawText", "{Output2}", 300, 220, 18, "black"],
    ["DrawText", "{Output2}", 335, 385, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic60.png"],
    ["DrawText", "{Output2}", 110, 220, 18, "black"],
    ["DrawText", "{Output2}", 300, 220, 18, "black"],
    ["DrawText", "{Output2}", 335, 385, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic61.png"],
    ["DrawText", "{Output2}", 100, 195, 18, "black"],
    ["DrawText", "{Output2}", 260, 195, 18, "black"],
    ["DrawText", "{Output2}", 285, 320, 14, "black"],
    ["DrawText", "{Output2}", 420, 415, 16, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic62.png"],
    ["DrawText", "{Output2}", 100, 195, 18, "black"],
    ["DrawText", "{Output2}", 260, 195, 18, "black"],
    ["DrawText", "{Output2}", 285, 320, 14, "black"],
    ["DrawText", "{Output2}", 420, 415, 16, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic63.png"],
    ["DrawText", "{Output2}", 100, 195, 18, "black"],
    ["DrawText", "{Output2}", 260, 195, 18, "black"],
    ["DrawText", "{Output2}", 285, 320, 14, "black"],
    ["DrawText", "{Output2}", 420, 415, 16, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic64.png"],
    ["DrawText", "標準", 190, 260, 14, "white"],
  ], //標準結束
  [
    //過重開始
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic43.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic44.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic45.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic46.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic47.png"],
    ["DrawText", "{Output2}", 110, 220, 18, "black"],
    ["DrawText", "{Output2}", 300, 220, 18, "black"],
    ["DrawText", "{Output2}", 335, 385, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic48.png"],
    ["DrawText", "{Output2}", 110, 220, 18, "black"],
    ["DrawText", "{Output2}", 300, 220, 18, "black"],
    ["DrawText", "{Output2}", 335, 385, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic49.png"],
    ["DrawText", "{Output2}", 110, 220, 18, "black"],
    ["DrawText", "{Output2}", 300, 220, 18, "black"],
    ["DrawText", "{Output2}", 335, 385, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic50.png"],
    ["DrawText", "{Output2}", 100, 195, 18, "black"],
    ["DrawText", "{Output2}", 260, 195, 18, "black"],
    ["DrawText", "{Output2}", 285, 320, 14, "black"],
    ["DrawText", "{Output2}", 420, 415, 16, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic51.png"],
    ["DrawText", "{Output2}", 100, 195, 18, "black"],
    ["DrawText", "{Output2}", 260, 195, 18, "black"],
    ["DrawText", "{Output2}", 285, 320, 14, "black"],
    ["DrawText", "{Output2}", 420, 415, 16, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic52.png"],
    ["DrawText", "{Output2}", 100, 195, 18, "black"],
    ["DrawText", "{Output2}", 260, 195, 18, "black"],
    ["DrawText", "{Output2}", 285, 320, 14, "black"],
    ["DrawText", "{Output2}", 420, 415, 16, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic53.png"],
    ["DrawText", "過重", 190, 260, 14, "white"],
  ], //過重結束
  [
    //TF開始
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic25.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic26.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic27.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic28.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic29.png"],
    ["DrawText", "輸入錯誤", 190, 260, 14, "white"],
  ], //TF結束
  [
    //FT開始
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic30.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic31.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic32.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic33.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic34.png"],
    ["DrawText", "輸入錯誤", 190, 260, 14, "white"],
  ], //TF結束
  [
    //過輕開始
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic35.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic36.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic37.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic38.png"],
    ["DrawText", "{Output2}", 130, 185, 18, "black"],
    ["DrawText", "{Output2}", 350, 185, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic39.png"],
    ["DrawText", "{Output2}", 110, 220, 18, "black"],
    ["DrawText", "{Output2}", 300, 220, 18, "black"],
    ["DrawText", "{Output2}", 335, 385, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic40.png"],
    ["DrawText", "{Output2}", 110, 220, 18, "black"],
    ["DrawText", "{Output2}", 300, 220, 18, "black"],
    ["DrawText", "{Output2}", 335, 385, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic41.png"],
    ["DrawText", "{Output2}", 110, 220, 18, "black"],
    ["DrawText", "{Output2}", 300, 220, 18, "black"],
    ["DrawText", "{Output2}", 335, 385, 18, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C3-6/vision/pic42.png"],
    ["DrawText", "過輕", 190, 260, 14, "white"],
  ] //過輕結束
];
function SetSolodata(){
    SoloOutput[1]=Number(SoloInput[2]) / ((Number(SoloInput[1]) / 100) *(Number(SoloInput[1]) / 100) );
    if (Number.isInteger(SoloOutput[1]))SoloOutput[1]=SoloOutput[1].toFixed(1);
    if(String(SoloOutput[1]).length>6){
        SoloOutput[2]=(Number(SoloInput[2]) / ((Number(SoloInput[1]) / 100) *(Number(SoloInput[1]) / 100) )).toFixed(2)+"...";
    }
    else
        SoloOutput[2]=SoloOutput[1];

    if(SoloOutput[1]>50 && SoloOutput[1]<1){//TT輸入錯誤路線一(不可能成立)

    }
    else if(SoloOutput[1]>50 ){//TF輸入錯誤路線二
        SoloCodeStep = 6;
        SoloMsgStep =   [0,2,3,3,3,4];
        SoloArrowStep = [0,1,2,3,3,4];
        SoloFlowStep =  [0,1,2,3,4,5];
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,41,42,43,44,45];
        SoloCodeStep_SVG = 24;
        SoloMsgStep_SVG =  [0,1,1,1,1,1,1 ,2,3,3,3,3,3,3, 3,3,3,3,3, 3,3,3,3 ,4];
        SoloArrowStep_SVG =[0,0,0,0,0,0,0 ,1,1,1,1,1,1,1, 2,2,2,2,2, 3,3,3,3 ,4];
        SoloFlowStep_SVG = [0,1,2];
    }
    else if(SoloOutput[1]<1){//FT輸入錯誤路線三
        SoloCodeStep = 6;
        SoloMsgStep =   [0,2,3,3,3,4];
        SoloArrowStep = [0,1,2,3,3,4];
        SoloFlowStep =  [0,1,2,3,4,5];
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,46,47,48,49,50];
        SoloCodeStep_SVG = 24;
        SoloMsgStep_SVG =  [0,1,1,1,1,1,1 ,2,3,3,3,3,3,3, 3,3,3,3,3, 3,3,3,3 ,4];
        SoloArrowStep_SVG =[0,0,0,0,0,0,0 ,1,1,1,1,1,1,1, 2,2,2,2,2, 3,3,3,3 ,4];
        SoloFlowStep_SVG = [0,1,2];

    }
    else if(SoloOutput[1]<18.5){//標準(同範例)
        SoloCodeStep = 8;
        SoloMsgStep =   [0,2,3,3,3,3,3,5];
        SoloArrowStep = [0,1,2,3,3,5,5,6];
        SoloFlowStep =  [0,1,2,3,6,7,8,9];
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,51,52,53,54,55,56,57,58];
        SoloCodeStep_SVG = 27;
        SoloMsgStep_SVG =  [0,1,1,1,1,1,1 ,2,3,3,3,3,3,3, 3,3,3,3,3, 3,3,3,3 ,3,3,3 ,5];
        SoloArrowStep_SVG =[0,0,0,0,0,0,0 ,1,1,1,1,1,1,1, 2,2,2,2,2, 3,3,3,3 ,5,5,5 ,6];
        SoloFlowStep_SVG = [0,1,2];
    }
    else if(SoloOutput[1]>=18.5 && SoloOutput[1]<24){//過輕
        SoloCodeStep = 10;
        SoloMsgStep =   [0,2,3,3,3,3,3,3,3,6];
        SoloArrowStep = [0,1,2,3,3,5,5,7,7,8];
        SoloFlowStep =  [0,1,2,3,6,7,10,11,12,13];
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
        SoloCodeStep_SVG = 30;
        SoloMsgStep_SVG =  [0,1,1,1,1,1,1 ,2,3,3,3,3,3,3, 3,3,3,3,3, 3,3,3,3 ,3,3,3 ,3,3,3 ,6];
        SoloArrowStep_SVG =[0,0,0,0,0,0,0 ,1,1,1,1,1,1,1, 2,2,2,2,2, 3,3,3,3 ,5,5,5 ,7,7,7 ,8];
        SoloFlowStep_SVG = [0,1,2];
    }
    else{//過重
        SoloCodeStep = 10;
        SoloMsgStep =   [0,2,3,3,3,3,3,3,3,7];
        SoloArrowStep = [0,1,2,3,3,5,5,7,9,10];
        SoloFlowStep =  [0,1,2,3,6,7,10,11,14,15];
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,30,31,32,33,34,35,36,37,38,39,40];
        SoloCodeStep_SVG = 30;
        SoloMsgStep_SVG =  [0,1,1,1,1,1,1 ,2,3,3,3,3,3,3, 3,3,3,3,3, 3,3,3,3 ,3,3,3 ,3,3,3 ,7];
        SoloArrowStep_SVG =[0,0,0,0,0,0,0 ,1,1,1,1,1,1,1, 2,2,2,2,2, 3,3,3,3 ,5,5,5 ,7,7,9 ,10];
        SoloFlowStep_SVG = [0,1,2];
    }
}