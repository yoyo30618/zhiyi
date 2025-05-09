var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 5;
var SoloMsgStep = [0,1,1,2,3];
var SoloArrowStep = [0,1,2,3,4];
var SoloFlowStep = [0,1,2,3,3];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
var SoloCodeStep_SVG = 19;
var SoloMsgStep_SVG = [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3];
var SoloArrowStep_SVG = [0,0,0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,4];
var SoloFlowStep_SVG = [0,0,0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,4];
var SoloOperationInfo=[
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic1.png"],
        ["DrawText","input(\"請輸入半徑\")",430,145,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic2.png"],
        ["DrawText","input(\"請輸入半徑\")",430,145,14,"black"],
        ["DrawText","\"{InputBox1}\"",470,190,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic3.png"],
        ["DrawText","int(\"{InputBox1}\")",430,145,14,"black"],
        ["DrawText","{InputBox1}",470,190,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic4.png"],
        ["DrawText","{InputBox1}",470,190,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic5.png"],
        ["DrawText","{InputBox1}",280,190,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic6.png"],
        ["DrawText","{InputBox1}",280,190,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic7.png"],
        ["DrawText","{InputBox1}",280,190,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic8.png"],
        ["DrawText","{InputBox1}",280,190,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic9.png"],
        ["DrawText","{InputBox1}",280,190,20,"black"],
        ["DrawText","{InputBox1}",250,460,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic10.png"],
        ["DrawText","{InputBox1}",280,190,20,"black"],
        ["DrawText","{InputBox1}",250,460,20,"black"],
        ["DrawText","{Output3}",280,255,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic11.png"],
        ["DrawText","{InputBox1}",280,190,20,"black"],
        ["DrawText","{InputBox1}",250,460,20,"black"],
        ["DrawText","{Output3}",280,255,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic12.png"],
        ["DrawText","{InputBox1}",280,190,20,"black"],
        ["DrawText","{InputBox1}",250,460,20,"black"],
        ["DrawText","{Output3}",280,255,20,"black"],
        ["DrawText","{Output3}",145,460,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic13.png"],
        ["DrawText","{InputBox1}",280,190,20,"black"],
        ["DrawText","{Output3}",280,255,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic14.png"],
        ["DrawText","{InputBox1}",280,190,20,"black"],
        ["DrawText","{InputBox1}",250,460,20,"black"],
        ["DrawText","{Output3}",280,255,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic15.png"],
        ["DrawText","{InputBox1}",280,190,20,"black"],
        ["DrawText","{InputBox1}",250,460,20,"black"],
        ["DrawText","{Output3}",280,255,20,"black"],
        ["DrawText","{Output4}",280,330,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic16.png"],
        ["DrawText","{InputBox1}",280,190,20,"black"],
        ["DrawText","{InputBox1}",250,460,20,"black"],
        ["DrawText","{Output3}",280,255,20,"black"],
        ["DrawText","{Output4}",280,330,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic17.png"],
        ["DrawText","{InputBox1}",280,190,20,"black"],
        ["DrawText","{InputBox1}",250,460,20,"black"],
        ["DrawText","{Output3}",280,255,20,"black"],
        ["DrawText","{Output4}",145,460,20,"black"],
        ["DrawText","{Output4}",280,330,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic18.png"],
        ["DrawText","圓面積為 {Output3}",240,280,16,"white"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-6/vision/pic19.png"],
        ["DrawText","圓面積為 {Output3}",240,280,16,"white"],
        ["DrawText","圓周長為 {Output4}",240,300,16,"white"]
    ]
];
function SetSolodata(){
    SoloOutput[1]=String(Number(SoloInput[1]) * Number(SoloInput[1]) * 3.14);
    SoloOutput[2]=String(Number(SoloInput[1]) * 2 * 3.14);
    SoloOutput[3]=String(Number(SoloInput[1]) * Number(SoloInput[1]) * 3.14);
    SoloOutput[4]=String(Number(SoloInput[1]) * 2 * 3.14);
    if(SoloOutput[3].length>6){
        SoloOutput[3]=String((Number(SoloInput[1]) * Number(SoloInput[1]) * 3.14).toFixed(2))+"...";
    }
    if(SoloOutput[4].length>6){
        SoloOutput[4]=String((Number(SoloInput[1]) * 2 * 3.14).toFixed(2))+"...";
    }
}