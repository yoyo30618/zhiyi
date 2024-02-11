var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [0,0,0,0,0,0];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 3;
var SoloMsgStep = [0,1,2];
var SoloArrowStep = [0,1,2];
var SoloFlowStep = [0,1,2];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11];
var SoloCodeStep_SVG = 10;
var SoloMsgStep_SVG = [0,1,1,1,1,1,1,1,1,2];
var SoloArrowStep_SVG = [0,0,0,0,1,1,1,1,2,2];
var SoloFlowStep_SVG = [0,0,0,0,1,1,1,1,2,2];
var SoloOperationInfo=[ 
    [
        ["ImgBox",10,10,600,600,"C2-2/vision/pic1.png"],
        ["DrawText","\"{InputBox1}\"",450,205,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-2/vision/pic2.png"],
        ["DrawText","{InputBox2}",450,205,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-2/vision/pic3.png"],
        ["DrawText","{InputBox2}",280,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-2/vision/pic4.png"],
        ["DrawText","{InputBox2}",280,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-2/vision/pic5.png"],
        ["DrawText","{InputBox2}",280,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-2/vision/pic6.png"],
        ["DrawText","{InputBox2}",280,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-2/vision/pic6.png"],
        ["DrawText","{InputBox2}",280,195,20,"black"],
        ["DrawText","{InputBox2}",305,455,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-2/vision/pic7.png"],
        ["DrawText","{InputBox2}",280,195,20,"black"],
        ["DrawText","{InputBox2}",305,455,20,"black"],
        ["DrawText","{Output1}",280,300,20,"black"],
        ["DrawText","{Output1}",160,455,20,"black"]
    ],
    [
        ["VideoBox",10,0,600,600,"C2-2/vision/vid1.mp4"],
        ["DrawText","函式 print(\"華氏溫度為： \",     f    , \"度\")",120,25,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-2/vision/pic8.png"],
        ["DrawText","函式 print(\"華氏溫度為： \",     f    , \"度\")",120,25,20,"black"],
        ["DrawText","華氏溫度為{Output1}度",255,370,12,"black"]
    ]
];
function SetSolodata(){
    SoloInput[2]=Number(SoloInput[1]).toFixed(1);
    SoloOutput[1]=(9/5*(Number(SoloInput[1]))+32).toFixed(1);
}