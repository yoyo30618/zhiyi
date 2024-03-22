var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 5;
var SoloMsgStep =   [0,1,1,1,3];
var SoloArrowStep = [0,1,3,3,4];
var SoloFlowStep =  [0,1,4,5,6];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
var SoloCodeStep_SVG = 14;
var SoloMsgStep_SVG =  [0,1,1,1,1,1,1 ,1,1,1 ,1,1,1,3];
var SoloArrowStep_SVG =[0,0,0,0,0,0,0 ,1,1,1 ,3,3,3,4];
var SoloFlowStep_SVG = [0,1,2];
var SoloOperationInfo=[
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic1.png"],
        ["DrawText","input(\"請輸入年齡：\")",420,140 ,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic2.png"],
        ["DrawText","input(\"請輸入年齡：\")",420,140,14,"black"],
        ["DrawText","\"{Input1}\"",460,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic3.png"],
        ["DrawText","int(\"{Input1}\")",420,140,14,"black"],
        ["DrawText","{Input1}",460,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic4.png"],
        ["DrawText","{Input1}",460,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic5.png"],
        ["DrawText","{Input1}",260,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic6.png"],
        ["DrawText","{Input1}",260,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic7.png"],
        ["DrawText","{Input1}",260,190,18,"black"]
    ],
    [//200元開始
        ["ImgBox",10,10,600,600,"C3-5/vision/pic12.png"],
        ["DrawText","{Input1}",260,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic13.png"],
        ["DrawText","{Input1}",260,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic14.png"],
        ["DrawText","{Input1}",260,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic15.png"],
        ["DrawText","{Input1}",220,210,18,"black"],
        ["DrawText","{Input1}",340,370,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic16.png"],
        ["DrawText","{Input1}",220,210,18,"black"],
        ["DrawText","{Input1}",340,370,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic17.png"],
        ["DrawText","{Input1}",220,210,18,"black"],
        ["DrawText","{Input1}",340,370,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic18.png"],
        ["DrawText","票價200元",190,260,14,"white"]
    ],//200元結束
    //150元開始
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic8.png"],
        ["DrawText","{Input1}",260,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic9.png"],
        ["DrawText","{Input1}",260,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic10.png"],
        ["DrawText","{Input1}",260,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic11.png"],
        ["DrawText","票價150元",190,260,14,"white"]
    ]
    //150元結束
    ,[//170元開始
        ["ImgBox",10,10,600,600,"C3-5/vision/pic19.png"],
        ["DrawText","{Input1}",260,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic20.png"],
        ["DrawText","{Input1}",260,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic21.png"],
        ["DrawText","{Input1}",260,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic22.png"],
        ["DrawText","{Input1}",220,210,18,"black"],
        ["DrawText","{Input1}",340,370,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic23.png"],
        ["DrawText","{Input1}",220,210,18,"black"],
        ["DrawText","{Input1}",340,370,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic24.png"],
        ["DrawText","{Input1}",220,210,18,"black"],
        ["DrawText","{Input1}",340,370,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-5/vision/pic25.png"],
        ["DrawText","票價170元",190,260,14,"white"]
    ]//170元結束
];
function SetSolodata(){
    if(Number(SoloInput[1])>=60){//150
    SoloCodeStep = 4;
    SoloMsgStep =   [0,1,1,2];
    SoloArrowStep = [0,1,1,2];
    SoloFlowStep =  [0,1,2,3];
    SoloOperationStep_SVG = [0,1,2,3,4,5,6,14,15,16,17];
    SoloCodeStep_SVG = 11;
    SoloMsgStep_SVG =  [0,1,1,1,1,1,1  ,1,1,1,3];
    SoloArrowStep_SVG =[0,0,0,0,0,0,0  ,1,1,1,2];
    SoloFlowStep_SVG = [0,1,2];
    }
    else if(Number(SoloInput[1])>=13){//200(同範例)
        SoloCodeStep = 5;
        SoloMsgStep =   [0,1,1,1,3];
        SoloArrowStep = [0,1,3,3,4];
        SoloFlowStep =  [0,1,4,5,6];
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
        SoloCodeStep_SVG = 14;
        SoloMsgStep_SVG =  [0,1,1,1,1,1,1 ,1,1,1 ,1,1,1,3];
        SoloArrowStep_SVG =[0,0,0,0,0,0,0 ,1,1,1 ,3,3,3,4];
        SoloFlowStep_SVG = [0,1,2];
    }
    else{//170
        SoloCodeStep = 5;
        SoloMsgStep =   [0,1,1,1,4];
        SoloArrowStep = [0,1,3,5,6];
        SoloFlowStep =  [0,1,4,7,8];
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,18,19,20,21,22,23,24];
        SoloCodeStep_SVG = 14;
        SoloMsgStep_SVG =  [0,1,1,1,1,1,1 ,1,1,1 ,1,1,1,4];
        SoloArrowStep_SVG =[0,0,0,0,0,0,0 ,1,1,1 ,3,3,5,6];
        SoloFlowStep_SVG = [0,1,2];
    }
}