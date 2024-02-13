var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 5;
var SoloMsgStep = [0,1,2,2,3];
var SoloArrowStep = [0,1,2,3,4];
var SoloFlowStep = [0,1,2,3,4];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10];
var SoloCodeStep_SVG = 11;
var SoloMsgStep_SVG = [0,1,1,1,1,1,1,1,1,1,2];
var SoloArrowStep_SVG = [0,0,0,0,0,1,1,1,1,2,2];
var SoloFlowStep_SVG = [0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,3,3,3,4,4];

var SoloOperationInfo=[
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic1.png"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic2.png"],
        ["DrawText","\"{InputBox1}\"",435,200,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic3.png"],
        ["DrawText","{InputBox1}",435,200,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic4.png"],
        ["DrawText","{InputBox1}",270,200,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic5.png"],
        ["DrawText","{InputBox1}",270,200,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic6.png"],
        ["DrawText","{InputBox1}",270,200,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic6.png"],
        ["DrawText","{InputBox1}",270,200,20,"black"],
        ["DrawText","{InputBox1}",250,440,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic7.png"],
        ["DrawText","{InputBox1}",270,200,20,"black"],
        ["DrawText","{InputBox1}",250,440,20,"black"],
        ["DrawText","{Output2}",140,440,20,"black"],
        ["DrawText","{Output2}",270,300,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic8.png"],
        ["DrawText","{InputBox1}",270,200,20,"black"],
        ["DrawText","{InputBox1}",250,440,20,"black"],
        ["DrawText","{Output2}",140,440,20,"black"],
        ["DrawText","{Output2}",270,300,20,"black"]
    ],
    [
        ["VideoBox",10,0,600,600,"C2-5/vision/vid1.mp4"],
        ["DrawText","函式 print(\"新台幣\", TWD, \"共可換日圓\", JPY, \"元\")",120,25,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic9.png"],
        ["DrawText","函式 print(\"新台幣\", TWD, \"共可換日圓\", JPY, \"元\")",120,25,20,"black"],
        ["DrawText","新台幣 {InputBox1} 共可換",250,370,12,"black"],
        ["DrawText","日圓 {Output2} 元",250,390,12,"black"]
    ]
];
function SetSolodata(){
    SoloOutput[1]=String(Number(SoloInput[1]) * 4.72 * 0.95);
    SoloOutput[2]=String(Number(SoloInput[1]) * 4.72 * 0.95);
    if(SoloOutput[2].length>5){
        SoloOutput[2]=String((Number(SoloInput[1]) * 4.72 * 0.95).toFixed(2))+"...";
    }
}