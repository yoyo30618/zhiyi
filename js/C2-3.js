var SoloCurrentStep = 0; // 目前顯示的步驟

var SoloInput = [];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 4;
var SoloMsgStep = [0,1,1,2];
var SoloArrowStep = [0,1,2,3];
var SoloFlowStep = [0,1,2,3];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
var SoloCodeStep_SVG = 18;
var SoloMsgStep_SVG = [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2];
var SoloArrowStep_SVG = [0,0,0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3];
var SoloFlowStep_SVG = [0,0,0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3];

var SoloOperationInfo=[
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic1.png"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic2.png"],
        ["DrawText","\"{InputBox1}\"",450,200,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic3.png"],
        ["DrawText","{InputBox1}",450,200,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic4.png"],
        ["DrawText","{InputBox1}",450,200,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic5.png"],
        ["DrawText","{InputBox1}",280,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic6.png"],
        ["DrawText","{InputBox1}",280,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic7.png"],
        ["DrawText","{InputBox1}",280,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic8.png"],
        ["DrawText","{InputBox1}",280,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic9.png"],
        ["DrawText","{InputBox1}",280,195,20,"black"],
        ["DrawText","{InputBox1}",210,490,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic10.png"],
        ["DrawText","{InputBox1}",280,195,20,"black"],
        ["DrawText","{InputBox1}",210,490,20,"black"],
        ["DrawText","{Output1}",130,490,20,"black"],
        ["DrawText","{Output1}",280,270,20,"black"],
        ["DrawText","{Output1}",550,470,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic11.png"],
        ["DrawText","{InputBox1}",280,195,20,"black"],
        ["DrawText","{InputBox1}",210,490,20,"black"],
        ["DrawText","{Output1}",130,490,20,"black"],
        ["DrawText","{Output1}",280,270,20,"black"],
        ["DrawText","{Output1}",550,470,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic12.png"],
        ["DrawText","{InputBox1}",280,195,20,"black"],
        ["DrawText","{InputBox1}",210,490,20,"black"],
        ["DrawText","{Output1}",130,490,20,"black"],
        ["DrawText","{Output1}",280,270,20,"black"],
        ["DrawText","{Output1}",550,470,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic13.png"],
        ["DrawText","{InputBox1}",280,195,20,"black"],
        ["DrawText","{Output1}",280,270,20,"black"],
        ["DrawText","{Output1}",550,470,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic14.png"],
        ["DrawText","{InputBox1}",280,195,20,"black"],
        ["DrawText","{InputBox1}",210,490,20,"black"],
        ["DrawText","{Output1}",280,270,20,"black"],
        ["DrawText","{Output1}",550,470,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic15.png"],
        ["DrawText","{InputBox1}",280,195,20,"black"],
        ["DrawText","{InputBox1}",210,490,20,"black"],
        ["DrawText","{Output2}",130,490,20,"black"],
        ["DrawText","{Output1}",280,270,20,"black"],
        ["DrawText","{Output2}",280,355,20,"black"],
        ["DrawText","{Output1}",550,470,20,"black"],
        ["DrawText","{Output2}",550,510,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic16.png"],
        ["DrawText","{InputBox1}",280,195,20,"black"],
        ["DrawText","{InputBox1}",210,490,20,"black"],
        ["DrawText","{Output2}",130,490,20,"black"],
        ["DrawText","{Output1}",280,270,20,"black"],
        ["DrawText","{Output2}",280,355,20,"black"],
        ["DrawText","{Output1}",550,470,20,"black"],
        ["DrawText","{Output2}",550,510,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic17.png"],
        ["DrawText","{InputBox1}",280,195,20,"black"],
        ["DrawText","{InputBox1}",210,490,20,"black"],
        ["DrawText","{Output2}",130,490,20,"black"],
        ["DrawText","{Output1}",280,270,20,"black"],
        ["DrawText","{Output2}",280,355,20,"black"],
        ["DrawText","{Output1}",550,470,20,"black"],
        ["DrawText","{Output2}",550,510,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-3/vision/pic18.png"],
        ["DrawText","{Output3}",230,280,16,"white"],
        ["DrawText","{Output4}",230,300,16,"white"]
    ]
];
function SetSolodata(){
    SoloOutput[1]= Math.floor(Number(SoloInput[1]) / 6);
    SoloOutput[2]=Number(SoloInput[1])%6;
    SoloOutput[3]="總共可以販售"+SoloOutput[1]+"盒雞蛋";
    SoloOutput[4]="，剩餘"+SoloOutput[2]+"顆雞蛋";
}