var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 5;
var SoloMsgStep = [0,1,1,1,2];
var SoloArrowStep = [0,1,1,2,3];
var SoloFlowStep = [0,1,2,3,4];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var SoloCodeStep_SVG = 16;
var SoloMsgStep_SVG = [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2];
var SoloArrowStep_SVG = [0,0,0,0,0,0,0,1,1,1,2,2,2,2,2,3];
var SoloFlowStep_SVG = [0,1,2,3,4];
var SoloOperationInfo=[
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic1.png"],
        ["DrawText","input(\"請輸入消費金額：\")",430,140,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic2.png"],
        ["DrawText","input(\"請輸入消費金額：\")",430,140,14,"black"],
        ["DrawText","\"{Input1}\"",455,185,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic3.png"],
        ["DrawText","int(\"{Input1}\")",430,140,14,"black"],
        ["DrawText","{Input1}",455,185,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic4.png"],
        ["DrawText","{Input1}",455,185,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic5.png"],
        ["DrawText","{Input1}",270,185,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic6.png"],
        ["DrawText","{Input1}",270,185,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic7.png"],
        ["DrawText","{Input1}",270,185,18,"black"]
    ],
    [//打七折開始
        ["ImgBox",10,10,600,600,"C3-2/vision/pic8.png"],
        ["DrawText","{Input1}",220,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic9.png"],
        ["DrawText","{Input1}",220,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic10.png"],
        ["DrawText","{Input1}",220,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic11.png"],
        ["DrawText","{Input1}",270,185,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic12.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Input1}",280,450,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic13.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Output2}",270,260,18,"black"],
        ["DrawText","{Input1}",280,450,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic14.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Output2}",270,260,18,"black"],
        ["DrawText","{Input1}",280,450,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic15.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Output2}",270,260,18,"black"],
        ["DrawText","{Input1}",280,450,18,"black"],
        ["DrawText","{Output2}",170,450,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic16.png"],
        ["DrawText","{Input1} 元滿萬打七折 ，",200,260,18,"white"],
        ["DrawText","應付 {Output2}元",200,280,18,"white"]
    ]//打七折結束(同範例)
    ,//打八折開始
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic17.png"],
        ["DrawText","{Input1}",220,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic18.png"],
        ["DrawText","{Input1}",220,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic19.png"],
        ["DrawText","{Input1}",220,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic20.png"],
        ["DrawText","{Input1}",270,185,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic21.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Input1}",280,450,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic22.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Output2}",270,260,18,"black"],
        ["DrawText","{Input1}",280,450,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic23.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Output2}",270,260,18,"black"],
        ["DrawText","{Input1}",280,450,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic24.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Output2}",270,260,18,"black"],
        ["DrawText","{Input1}",280,450,18,"black"],
        ["DrawText","{Output2}",170,450,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-2/vision/pic25.png"],
        ["DrawText","{Input1} 元打八折 ，",200,260,18,"white"],
        ["DrawText","應付 {Output2}元",200,280,18,"white"]
    ]//打八折結束
];
function SetSolodata(){
    if(Number(SoloInput[1])>=10000)
        SoloOutput[1]=Number(SoloInput[1])*0.7;
    else
        SoloOutput[1]=Number(SoloInput[1])*0.8;
    SoloOutput[2]=SoloOutput[1].toFixed(2)+"...";
    if(Number(SoloInput[1])>=10000){//打七折(同範例)
        SoloCodeStep = 5;
        SoloMsgStep = [0,1,1,1,2];
        SoloArrowStep = [0,1,1,2,3];
        SoloFlowStep = [0,1,2,3,4];
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        SoloCodeStep_SVG = 16;
        SoloMsgStep_SVG = [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2];
        SoloArrowStep_SVG = [0,0,0,0,0,0,0,1,1,1,2,2,2,2,2,3];
        SoloFlowStep_SVG = [0,1,2,3,4];
    }
    else{//打八折
        SoloCodeStep = 5;
        SoloMsgStep = [0,1,1,1,3];
        SoloArrowStep = [0,1,4,5,6];
        SoloFlowStep = [0,1,5,6,7];
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,16,17,18,19,20,21,22,23,24];
        SoloCodeStep_SVG = 16;
        SoloMsgStep_SVG = [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3];
        SoloArrowStep_SVG = [0,0,0,0,0,0,0,1,4,4,5,5,5,5,5,6];
        SoloFlowStep_SVG =[0,1,5,6,7];
    }
}