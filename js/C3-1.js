var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [0,0,0,0,0];
var SoloOutput =[0,0,0,0,0];
var SoloCodeStep = 7;
var SoloMsgStep=[0,2,4,5,5,5,6];
var SoloArrowStep =[0,1,2,3,4,6,7];
var SoloFlowStep =[0,1,2,3,4,7,8];
var SoloOperationStep_SVG =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var SoloCodeStep_SVG = 30;
var SoloMsgStep_SVG =[0,1,1,1,1,1,1,2,3,3,3,3,3,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6];
var SoloArrowStep_SVG =[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,4,6,6,7];
var SoloFlowStep_SVG =[0,1,2,3,4,5,6];
var SoloOperationInfo=[
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic1.png"],
        ["DrawText","input(\"請輸入作業分數：\") ",430,145,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic2.png"],
        ["DrawText","input(\"請輸入作業分數：\") ",430,145,14,"black"],
        ["DrawText","\"{Input1}\"",450,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic3.png"],
        ["DrawText","int(\"{Input1}\")",430,145,14,"black"],
        ["DrawText","{Input1}",450,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic4.png"],
        ["DrawText","{Input1}",450,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic5.png"],
        ["DrawText","{Input1}",280,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic6.png"],
        ["DrawText","{Input1}",280,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic7.png"],
        ["DrawText","{Input1}",280,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic8.png"],
        ["DrawText","input(\"請輸入小考分數：\") ",450,207,14,"black"],
        ["DrawText","{Input1}",280,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic9.png"],
        ["DrawText","input(\"請輸入小考分數：\") ",450,207,14,"black"],
        ["DrawText","{Input1}",280,195,18,"black"],
        ["DrawText","\"{Input2}\"",480,250,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic10.png"],
        ["DrawText","int(\"{Input2}\")",450,207,14,"black"],
        ["DrawText","{Input1}",280,195,18,"black"],
        ["DrawText","{Input2}",480,250,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic11.png"],
        ["DrawText","{Input1}",280,195,18,"black"],
        ["DrawText","{Input2}",480,250,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic12.png"],
        ["DrawText","{Input1}",280,195,18,"black"],
        ["DrawText","{Input2}",280,255,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic13.png"],
        ["DrawText","{Input1}",280,195,18,"black"],
        ["DrawText","{Input2}",280,255,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic14.png"],
        ["DrawText","{Input1}",280,195,18,"black"],
        ["DrawText","{Input2}",280,255,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic15.png"],
        ["DrawText","{Input1}",280,195,18,"black"],
        ["DrawText","{Input2}",280,255,18,"black"],
        ["DrawText","input(\"請輸入期末考分數：\") ",450,270,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic16.png"],
        ["DrawText","{Input1}",280,195,18,"black"],
        ["DrawText","{Input2}",280,255,18,"black"],
        ["DrawText","input(\"請輸入期末考分數：\") ",450,270,14,"black"],
        ["DrawText","\"{Input3}\"",480,320,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic17.png"],
        ["DrawText","{Input1}",280,195,18,"black"],
        ["DrawText","{Input2}",280,255,18,"black"],
        ["DrawText"," int(\"{Input3}\")",450,270,14,"black"],
        ["DrawText","{Input3}",480,320,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic18.png"],
        ["DrawText","{Input1}",280,195,18,"black"],
        ["DrawText","{Input2}",280,255,18,"black"],
        ["DrawText","{Input3}",480,320,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic19.png"],
        ["DrawText","{Input1}",280,195,18,"black"],
        ["DrawText","{Input2}",280,255,18,"black"],
        ["DrawText","{Input3}",280,320,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic20.png"],
        ["DrawText","{Input1}",280,195,18,"black"],
        ["DrawText","{Input2}",280,255,18,"black"],
        ["DrawText","{Input3}",280,320,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic21.png"],
        ["DrawText","{Input1}",280,195,18,"black"],
        ["DrawText","{Input2}",280,255,18,"black"],
        ["DrawText","{Input3}",280,320,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic22.png"],
        ["DrawText","{Input1}",280,195,18,"black"],
        ["DrawText","{Input2}",280,255,18,"black"],
        ["DrawText","{Input3}",280,320,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic23.png"],
        ["DrawText","{Input1}",280,195,18,"black"],
        ["DrawText","{Input2}",280,255,18,"black"],
        ["DrawText","{Input3}",280,320,18,"black"],
        ["DrawText","{Input1}",220,495,18,"black"],
        ["DrawText","{Input2}",325,495,18,"black"],
        ["DrawText","{Input3}",425,495,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic24.png"],
        ["DrawText","{Input1}",280,195,18,"black"],
        ["DrawText","{Input2}",280,255,18,"black"],
        ["DrawText","{Input3}",280,320,18,"black"],
        ["DrawText","{Input1}",220,495,18,"black"],
        ["DrawText","{Input2}",325,495,18,"black"],
        ["DrawText","{Input3}",425,495,18,"black"],
        ["DrawText","{Output2}",280,380,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic25.png"],
        ["DrawText","{Input1}",280,195,18,"black"],
        ["DrawText","{Input2}",280,255,18,"black"],
        ["DrawText","{Input3}",280,320,18,"black"],
        ["DrawText","{Input1}",220,495,18,"black"],
        ["DrawText","{Input2}",325,495,18,"black"],
        ["DrawText","{Input3}",425,495,18,"black"],
        ["DrawText","{Output2}",280,380,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic26.png"],
        ["DrawText","{Input1}",280,195,18,"black"],
        ["DrawText","{Input2}",280,255,18,"black"],
        ["DrawText","{Input3}",280,320,18,"black"],
        ["DrawText","{Input1}",220,495,18,"black"],
        ["DrawText","{Input2}",325,495,18,"black"],
        ["DrawText","{Input3}",425,495,18,"black"],
        ["DrawText","{Output2}",280,380,18,"black"],
        ["DrawText","{Output2}",125,495,18,"black"]
    ],//不及格開始(同範例)
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic27.png"],
        ["DrawText","{Output2}",230,185,18,"black"]
        
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic28.png"],
        ["DrawText","{Output2}",230,185,18,"black"]
        
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic29.png"],
        ["DrawText","{Output2}",230,185,18,"black"]
        
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic30.png"],
        ["DrawText","學期總成績: {Output2} 分，不及格!",190,250,14,"white"]
    ]//不及格結束(同範例)
    ,//及格開始
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic31.png"],
        ["DrawText","{Output2}",230,185,18,"black"]
        
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic32.png"],
        ["DrawText","{Output2}",230,185,18,"black"]
        
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic33.png"],
        ["DrawText","{Output2}",230,185,18,"black"]
        
    ],
    [
        ["ImgBox",10,10,600,600,"C3-1/vision/pic34.png"],
        ["DrawText","學期總成績: {Output2} 分，及格了!",190,250,14,"white"]
    ]//及格結束
];
function SetSolodata(){
    SoloOutput[1]=Number(SoloInput[1])*0.4+Number(SoloInput[2])*0.2+Number(SoloInput[3])*0.4;
    if (Number.isInteger(SoloOutput[1]))SoloOutput[2]=SoloOutput[1].toFixed(1);
    else SoloOutput[2]=Number(SoloInput[1]).toFixed(2)+"...";
    if (Number.isInteger(SoloOutput[1]))SoloOutput[1]=SoloOutput[1].toFixed(1);
    if(Number(SoloInput[1])*0.4+Number(SoloInput[2])*0.2+Number(SoloInput[3])*0.4>=60){//及格
        SoloCodeStep = 7;
        SoloMsgStep=[0,2,4,5,5,5,7];
        SoloArrowStep =[0,1,2,3,4,4,5];
        SoloFlowStep =[0,1,2,3,4,5,6];
        SoloOperationStep_SVG =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,30,31,32,33];
        SoloCodeStep_SVG = 30;
        SoloMsgStep_SVG =  [0,1,1,1,1,1,1,2,3,3,3,3,3,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7];
        SoloArrowStep_SVG =[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,4,4,4,5];
        SoloFlowStep_SVG =[0,1,2,3,4,5,6];
    }
    else{//不及格
        SoloCodeStep = 7;
        SoloMsgStep=[0,2,4,5,5,5,6];
        SoloArrowStep =[0,1,2,3,4,6,7];
        SoloFlowStep =[0,1,2,3,4,7,8];
        SoloOperationStep_SVG =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
        SoloCodeStep_SVG = 30;
        SoloMsgStep_SVG =[0,1,1,1,1,1,1,2,3,3,3,3,3,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6];
        SoloArrowStep_SVG =[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,4,6,6,7];
        SoloFlowStep_SVG =[0,1,2,3,4,7,8];
    }
}