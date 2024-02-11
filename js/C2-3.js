var SoloCurrentStep = 0; // 目前顯示的步驟

var SoloInput = [];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 5;
var SoloMsgStep = [0,1,2,2,3];
var SoloArrowStep = [0,1,2,3,4];
var SoloFlowStep = [0,1,2,3,4];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var SoloCodeStep_SVG = 15;
var SoloMsgStep_SVG = [0,1,1,1,1,1,1,1,1,1,1,1,1,1,2];
var SoloArrowStep_SVG = [0,0,0,0,0,1,1,1,1,2,2,2,2,3,3];
var SoloFlowStep_SVG = [0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,3,3,3,4,4];

var SoloOperationInfo=[ 
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic1.png"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic1.png"],
        ["DrawText","\"{InputBox1}\"",450,200,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic2.png"],
        ["DrawText","{InputBox1}",450,200,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic3.png"],
        ["DrawText","{InputBox1}",280,200,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic4.png"],
        ["DrawText","{InputBox1}",280,200,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic5.png"],
        ["DrawText","{InputBox1}",280,200,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic5.png"],
        ["DrawText","{InputBox1}",280,200,20,"black"],
        ["DrawText","{InputBox1}",200,480,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic6.png"],
        ["DrawText","{InputBox1}",280,200,20,"black"],
        ["DrawText","{InputBox1}",200,480,20,"black"],
        ["DrawText","{Output1}",280,280,20,"black"],
        ["DrawText","{Output1}",120,480,20,"black"],
        ["DrawText","{Output1}",530,450,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic7.png"],
        ["DrawText","{InputBox1}",280,200,20,"black"],
        ["DrawText","{InputBox1}",200,480,20,"black"],
        ["DrawText","{Output1}",280,280,20,"black"],
        ["DrawText","{Output1}",120,480,20,"black"],
        ["DrawText","{Output1}",530,450,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic8.png"],
        ["DrawText","{InputBox1}",280,200,20,"black"],
        ["DrawText","{Output1}",280,280,20,"black"],
        ["DrawText","{Output1}",530,450,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic8.png"],
        ["DrawText","{InputBox1}",280,200,20,"black"],
        ["DrawText","{InputBox1}",200,480,20,"black"],
        ["DrawText","{Output1}",280,280,20,"black"],
        ["DrawText","{Output1}",530,450,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic9.png"],
        ["DrawText","{InputBox1}",280,200,20,"black"],
        ["DrawText","{InputBox1}",200,480,20,"black"],
        ["DrawText","{Output1}",280,280,20,"black"],
        ["DrawText","{Output2}",120,480,20,"black"],
        ["DrawText","{Output2}",280,360,20,"black"],
        ["DrawText","{Output1}",530,450,20,"black"],
        ["DrawText","{Output2}",530,500,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic10.png"],
        ["DrawText","{InputBox1}",280,200,20,"black"],
        ["DrawText","{InputBox1}",200,480,20,"black"],
        ["DrawText","{Output1}",280,280,20,"black"],
        ["DrawText","{Output2}",120,480,20,"black"],
        ["DrawText","{Output2}",280,360,20,"black"],
        ["DrawText","{Output1}",530,450,20,"black"],
        ["DrawText","{Output2}",530,500,20,"black"]
    ],
    [
        ["VideoBox",10,0,600,600,"C2-3/vision/vid1.mp4"],
        ["DrawText","函式 print (\"總共可以販售\",  b , \"盒雞蛋，剩餘\",  r , \"顆雞蛋\")",120,25,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic11.png"],
        ["DrawText","函式 print (\"總共可以販售\",  b , \"盒雞蛋，剩餘\",  r , \"顆雞蛋\")",120,25,20,"black"],
        ["DrawText","{Output3}",250,370,12,"black"],
        ["DrawText","{Output4}",250,385,12,"black"]
    ]
];
function SetSolodata(){
    SoloOutput[1]= Math.floor(Number(SoloInput[1]) / 6);
    SoloOutput[2]=Number(SoloInput[1])%6;
    SoloOutput[3]="總共可以販售"+SoloOutput[1]+"盒雞蛋";
    SoloOutput[4]="剩餘"+SoloOutput[2]+"顆雞蛋";
}