var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 5;
var SoloMsgStep = [0,2,3,3,4];
var SoloArrowStep = [0,1,2,3,4];
var SoloFlowStep = [0,1,2,3,4];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
var SoloCodeStep_SVG = 23;
var SoloMsgStep_SVG = [0,1,1,1,1,1,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4];
var SoloArrowStep_SVG = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,3,3,3,3,3,4];
var SoloFlowStep_SVG = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,3,3,3,3,3,4];
var SoloOperationInfo=[
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic1.png"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic2.png"],
        ["DrawText","\"{InputBox1}\"",430,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic3.png"],
        ["DrawText","{InputBox1}",430,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic4.png"],
        ["DrawText","{InputBox1}",430,195,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic5.png"],
        ["DrawText","{InputBox1}",270,185,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic6.png"],
        ["DrawText","{InputBox1}",270,185,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic7.png"],
        ["DrawText","{InputBox1}",270,185,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic8.png"],
        ["DrawText","{InputBox1}",270,185,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic9.png"],
        ["DrawText","{InputBox1}",270,185,20,"black"],
        ["DrawText","\"{InputBox2}\"",430,260,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic10.png"],
        ["DrawText","{InputBox1}",270,185,20,"black"],
        ["DrawText","{InputBox2}",430,260,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic11.png"],
        ["DrawText","{InputBox1}",270,185,20,"black"],
        ["DrawText","{InputBox2}",430,260,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic12.png"],
        ["DrawText","{InputBox1}",270,185,20,"black"],
        ["DrawText","{InputBox2}",270,250,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic13.png"],
        ["DrawText","{InputBox1}",270,185,20,"black"],
        ["DrawText","{InputBox2}",270,250,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic14.png"],
        ["DrawText","{InputBox1}",270,185,20,"black"],
        ["DrawText","{InputBox2}",270,250,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic15.png"],
        ["DrawText","{InputBox1}",270,185,20,"black"],
        ["DrawText","{InputBox2}",270,250,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic16.png"],
        ["DrawText","{InputBox1}",270,185,20,"black"],
        ["DrawText","{InputBox2}",270,250,20,"black"],
        ["DrawText","{InputBox1}",250,485,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic17.png"],
        ["DrawText","{Output1}",270,185,20,"black"],
        ["DrawText","{InputBox2}",270,250,20,"black"],
        ["DrawText","{InputBox1}",250,485,20,"black"],
        ["DrawText","{Output1}",160,485,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic18.png"],
        ["DrawText","{Output1}",270,185,20,"black"],
        ["DrawText","{InputBox2}",270,250,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic19.png"],
        ["DrawText","{Output1}",270,185,20,"black"],
        ["DrawText","{InputBox2}",270,250,20,"black"],
        ["DrawText","{InputBox2}",260,485,20,"black"],
        ["DrawText","{Output1}",210,485,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic20.png"],
        ["DrawText","{Output1}",270,185,20,"black"],
        ["DrawText","{InputBox2}",270,250,20,"black"],
        ["DrawText","{InputBox2}",260,485,20,"black"],
        ["DrawText","{Output1}",210,485,20,"black"],
        ["DrawText","{Output3}",110,485,20,"black"],
        ["DrawText","{Output3}",260,320,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic21.png"],
        ["DrawText","{Output1}",270,185,20,"black"],
        ["DrawText","{InputBox2}",270,250,20,"black"],
        ["DrawText","{InputBox2}",260,485,20,"black"],
        ["DrawText","{Output1}",210,485,20,"black"],
        ["DrawText","{Output3}",110,485,20,"black"],
        ["DrawText","{Output3}",260,320,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic22.png"],
        ["DrawText","{Output1}",270,185,20,"black"],
        ["DrawText","{InputBox2}",270,250,20,"black"],
        ["DrawText","{InputBox2}",260,485,20,"black"],
        ["DrawText","{Output1}",210,485,20,"black"],
        ["DrawText","{Output3}",110,485,20,"black"],
        ["DrawText","{Output3}",260,320,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-8/vision/pic23.png"],
        ["DrawText","{Output3} 公分",230,280,16,"white"]
    ]
];
function SetSolodata(){
    SoloOutput[1]=Number(SoloInput[1])*12;
    SoloOutput[2]=String((SoloOutput[1]+Number(SoloInput[2]))*2.54);
    SoloOutput[3]=(SoloOutput[1]+Number(SoloInput[2]))*2.54;
    if(SoloOutput[2].length>6){
        SoloOutput[3]=String(((SoloOutput[1]+Number(SoloInput[2]))*2.54).toFixed(2))+"...";
    }
}