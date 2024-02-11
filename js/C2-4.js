var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 5;
var SoloMsgStep = [0,1,2,2,3];
var SoloArrowStep = [0,1,2,3,4];
var SoloFlowStep = [0,1,2,3,4];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var SoloCodeStep_SVG = 21;
var SoloMsgStep_SVG = [0,1,1,1,1,2,3,3,3,3,4,5,5,5,5,5,5,5,5,5,6];
var SoloArrowStep_SVG = [0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,4,4];
var SoloFlowStep_SVG = [0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,3,3,3,4,4];
var SoloOperationInfo=[
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic1.png"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic2.png"],
        ["DrawText","\"{InputBox1}\"",435,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic3.png"],
        ["DrawText","{InputBox1}",435,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic4.png"],
        ["DrawText","{InputBox1}",270,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic5.png"],
        ["DrawText","{InputBox1}",270,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic6.png"],
        ["DrawText","{InputBox1}",270,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic6.png"],
        ["DrawText","{InputBox1}",270,195,20,"black"],
        ["DrawText","\"{InputBox2}\"",435,290,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic7.png"],
        ["DrawText","{InputBox1}",270,195,20,"black"],
        ["DrawText","{InputBox2}",435,290,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic8.png"],
        ["DrawText","{InputBox1}",270,195,20,"black"],
        ["DrawText","{InputBox2}",270,255,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic9.png"],
        ["DrawText","{InputBox1}",270,195,20,"black"],
        ["DrawText","{InputBox2}",270,255,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic10.png"],
        ["DrawText","{InputBox1}",270,195,20,"black"],
        ["DrawText","{InputBox2}",270,255,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic10.png"],
        ["DrawText","{InputBox1}",270,195,20,"black"],
        ["DrawText","{InputBox2}",270,255,20,"black"],
        ["DrawText","\"{InputBox3}\"",435,315,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic11.png"],
        ["DrawText","{InputBox1}",270,195,20,"black"],
        ["DrawText","{InputBox2}",270,255,20,"black"],
        ["DrawText","{InputBox3}",435,315,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic12.png"],
        ["DrawText","{InputBox1}",270,195,20,"black"],
        ["DrawText","{InputBox2}",270,255,20,"black"],
        ["DrawText","{InputBox3}",270,315,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic13.png"],
        ["DrawText","{InputBox1}",270,195,20,"black"],
        ["DrawText","{InputBox2}",270,255,20,"black"],
        ["DrawText","{InputBox3}",270,315,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic14.png"],
        ["DrawText","{InputBox1}",270,195,20,"black"],
        ["DrawText","{InputBox2}",270,255,20,"black"],
        ["DrawText","{InputBox3}",270,315,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic14.png"],
        ["DrawText","{InputBox1}",270,195,20,"black"],
        ["DrawText","{InputBox2}",270,255,20,"black"],
        ["DrawText","{InputBox3}",270,315,20,"black"],
        ["DrawText","{InputBox1}",215,490,20,"black"],
        ["DrawText","{InputBox2}",290,490,20,"black"],
        ["DrawText","{InputBox3}",370,490,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic15.png"],
        ["DrawText","{InputBox1}",270,195,20,"black"],
        ["DrawText","{InputBox2}",270,255,20,"black"],
        ["DrawText","{InputBox3}",270,315,20,"black"],
        ["DrawText","{InputBox1}",215,490,20,"black"],
        ["DrawText","{InputBox2}",290,490,20,"black"],
        ["DrawText","{InputBox3}",370,490,20,"black"],
        ["DrawText","{Output1}",135,490,20,"black"],
        ["DrawText","{Output1}",270,375,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic16.png"],
        ["DrawText","{InputBox1}",270,195,20,"black"],
        ["DrawText","{InputBox2}",270,255,20,"black"],
        ["DrawText","{InputBox3}",270,315,20,"black"],
        ["DrawText","{InputBox1}",215,490,20,"black"],
        ["DrawText","{InputBox2}",290,490,20,"black"],
        ["DrawText","{InputBox3}",370,490,20,"black"],
        ["DrawText","{Output1}",135,490,20,"black"],
        ["DrawText","{Output1}",270,375,20,"black"]
    ],
    [
        ["VideoBox",10,0,600,600,"C2-4/vision/vid1.mp4"],
        ["DrawText","函式 print(\"平均分數為：\",avg)",120,25,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic17.png"],
        ["DrawText","函式 print(\"平均分數為：\",avg)",120,25,20,"black"],
        ["DrawText","平均分數為：{Output1}",250,370,12,"black"]
    ]
];
function SetSolodata(){
    SoloOutput[1]=((Number(SoloInput[1])+Number(SoloInput[2])+Number(SoloInput[3]))/3).toFixed(1);
}