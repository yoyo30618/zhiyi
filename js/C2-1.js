var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [0, 0, 0, 0, 0, 0];
var SoloOutput = [0, 0, 0, 0, 0, 0];
var SoloCodeStep = 3;
var SoloMsgStep = [0,2,4];
var SoloArrowStep = [0, 1, 2];
var SoloFlowStep = [0, 1, 2];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
var SoloCodeStep_SVG = 14;
var SoloMsgStep_SVG = [5,1,1,1,1,1,2,3,3,3,3,3,3,4];
var SoloArrowStep_SVG = [0,0,0,0,0,0,1,1,1,1,1,1,1,2];
var SoloFlowStep_SVG = [0,0,0,0,1,1,1,1,2,2];
var SoloOperationInfo = [
    [
        ["ImgBox",10,10,600,600,"C2-1/vision/pic1.png"],
        ["DrawText","input(\"請輸入名字：\")",445,155,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-1/vision/pic2.png"],
        ["DrawText","\"{InputBox1}\"",450,210,20,"black"],
        ["DrawText","input(\"請輸入名字：\")",445,155,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-1/vision/pic3.png"],
        ["DrawText","\"{InputBox1}\"",450,210,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-1/vision/pic4.png"],
        ["DrawText","\"{InputBox1}\"",260,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-1/vision/pic5.png"],
        ["DrawText","\"{InputBox1}\"",260,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-1/vision/pic6.png"],
        ["DrawText","\"{InputBox1}\"",260,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-1/vision/pic7.png"],
        ["DrawText","\"{InputBox1}\"",260,195,20,"black"],
        ["DrawText","input(\"請輸入座號：\")",445,240,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-1/vision/pic8.png"],
        ["DrawText","\"{InputBox1}\"",260,195,20,"black"],
        ["DrawText","input(\"請輸入座號：\")",445,240,14,"black"],
        ["DrawText","\"{InputBox2}\"",475,295,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-1/vision/pic9.png"],
        ["DrawText","\"{InputBox1}\"",260,195,20,"black"],
        ["DrawText","int(\"{InputBox2}\")",445,240,14,"black"],
        ["DrawText","{InputBox2}",475,295,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-1/vision/pic10.png"],
        ["DrawText","\"{InputBox1}\"",260,195,20,"black"],
        ["DrawText","{InputBox2}",475,295,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-1/vision/pic11.png"],
        ["DrawText","\"{InputBox1}\"",260,195,20,"black"],
        ["DrawText","{InputBox2}",280,295,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-1/vision/pic12.png"],
        ["DrawText","\"{InputBox1}\"",260,195,20,"black"],
        ["DrawText","{InputBox2}",280,295,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-1/vision/pic13.png"],
        ["DrawText","\"{InputBox1}\"",260,195,20,"black"],
        ["DrawText","{InputBox2}",280,295,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-1/vision/pic14.png"],
        ["DrawText","{InputBox1} {InputBox2} 號",255,280,16,"white"]
    ]
];
function SetSolodata() {
  SoloOutput[1] = SoloInput[1] + " " + SoloInput[2];
}
