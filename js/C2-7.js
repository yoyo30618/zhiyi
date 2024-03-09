var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 5;
var SoloMsgStep = [0,2,3,4];
var SoloArrowStep = [0,1,2,3];
var SoloFlowStep = [0,1,2,3];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var SoloCodeStep_SVG = 20;
var SoloMsgStep_SVG = [0,1,1,1,1,1,1,2,3,3,3,3,3,3,3,3,3,3,3,4];
var SoloArrowStep_SVG = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,3];
var SoloFlowStep_SVG = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,3];
var SoloOperationInfo=[
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic1.png"],
        ["DrawText","input(\"請輸入身高(公尺):\")",430,140,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic2.png"],
        ["DrawText","input(\"請輸入身高(公尺):\")",430,140,14,"black"],
        ["DrawText","\"{InputBox1}\"",445,185,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic3.png"],
        ["DrawText","float(\"{InputBox1}\")",430,140,14,"black"],
        ["DrawText","{Output3}",445,185,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic4.png"],
        ["DrawText","{Output3}",445,185,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic5.png"],
        ["DrawText","{Output3}",280,180,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic6.png"],
        ["DrawText","{Output3}",280,180,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic7.png"],
        ["DrawText","{Output3}",280,180,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic8.png"],
        ["DrawText","{Output3}",280,180,20,"black"],
        ["DrawText","input(\"請輸入體重:\")",430,210,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic9.png"],
        ["DrawText","{Output3}",280,180,20,"black"],
        ["DrawText","input(\"請輸入體重:\")",430,210,14,"black"],
        ["DrawText","\"{InputBox2}\"",455,255,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic10.png"],
        ["DrawText","{Output3}",280,180,20,"black"],
        ["DrawText","float(\"{InputBox2}\")",430,210,14,"black"],
        ["DrawText","{Output4}",460,255,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic11.png"],
        ["DrawText","{Output3}",280,180,20,"black"],
        ["DrawText","{Output4}",460,255,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic12.png"],
        ["DrawText","{Output3}",280,180,20,"black"],
        ["DrawText","{Output4}",280,250,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic13.png"],
        ["DrawText","{Output3}",280,180,20,"black"],
        ["DrawText","{Output4}",280,250,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic14.png"],
        ["DrawText","{Output3}",280,180,20,"black"],
        ["DrawText","{Output4}",280,250,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic15.png"],
        ["DrawText","{Output3}",280,180,20,"black"],
        ["DrawText","{Output4}",280,250,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic16.png"],
        ["DrawText","{Output3}",280,180,20,"black"],
        ["DrawText","{Output4}",280,250,20,"black"],
        ["DrawText","{Output4}",250,465,20,"black"],
        ["DrawText","{Output3}",345,465,20,"black"],
        ["DrawText","{Output3}",410,465,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic17.png"],
        ["DrawText","{Output3}",280,180,20,"black"],
        ["DrawText","{Output4}",280,250,20,"black"],
        ["DrawText","{Output4}",250,465,20,"black"],
        ["DrawText","{Output3}",345,465,20,"black"],
        ["DrawText","{Output3}",410,465,20,"black"],
        ["DrawText","{Output2}",260,320,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic18.png"],
        ["DrawText","{Output3}",280,180,20,"black"],
        ["DrawText","{Output4}",280,250,20,"black"],
        ["DrawText","{Output4}",250,465,20,"black"],
        ["DrawText","{Output3}",345,465,20,"black"],
        ["DrawText","{Output3}",410,465,20,"black"],
        ["DrawText","{Output2}",260,320,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic19.png"],
        ["DrawText","{Output3}",280,180,20,"black"],
        ["DrawText","{Output4}",280,250,20,"black"],
        ["DrawText","{Output4}",250,465,20,"black"],
        ["DrawText","{Output3}",345,465,20,"black"],
        ["DrawText","{Output3}",410,465,20,"black"],
        ["DrawText","{Output2}",160,465,20,"black"],
        ["DrawText","{Output2}",260,320,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-7/vision/pic20.png"],
        ["DrawText","BMI為 {Output2}",230,280,16,"white"]
    ]
];
function SetSolodata(){
    var parsedValue1 = parseFloat(SoloInput[1]);
    if (Number.isInteger(parsedValue1))  SoloOutput[3] = parsedValue1.toFixed(1);
    else SoloOutput[3] = parsedValue1;
    var parsedValue2 = parseFloat(SoloInput[2]);
    if (Number.isInteger(parsedValue2))  SoloOutput[4] = parsedValue2.toFixed(1);
    else SoloOutput[4] = parsedValue2;

    SoloOutput[1]=String(Number(SoloInput[2])/(Number(SoloInput[1])*Number(SoloInput[1])));
    SoloOutput[2]=String(Number(SoloInput[2])/(Number(SoloInput[1])*Number(SoloInput[1])));
    if(SoloOutput[2].length>6){
        SoloOutput[2]=String((Number(SoloInput[2])/(Number(SoloInput[1])*Number(SoloInput[1]))).toFixed(2))+"...";
    }
}