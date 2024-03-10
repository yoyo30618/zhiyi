var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 5;
var SoloMsgStep = [0,2,3,3,4];
var SoloArrowStep = [0,1,2,2,3];
var SoloFlowStep = [0,1,2,3,4];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
var SoloCodeStep_SVG = 19;
var SoloMsgStep_SVG =  [0,1,1,1,1,1,1,2,3,3,3,3,3,3,3,3,3,3,4];
var SoloArrowStep_SVG =[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,3];
var SoloFlowStep_SVG = [0,1,2,3,4];

var SoloOperationInfo=[
    [
        ["ImgBox",10,10,600,600,"C3-3/vision/pic1.png"],
        ["DrawText","input(\"手掌是否有出汗(1為出汗，0為無):\")",430,160,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-3/vision/pic2.png"],
        ["DrawText","input(\"手掌是否有出汗(1為出汗，0為無):\")",430,160,14,"black"],
        ["DrawText","\"{Input1}\"",460,210,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-3/vision/pic3.png"],
        ["DrawText","int(\"{Input1}\")",430,160,14,"black"],
        ["DrawText","{Input1}",460,210,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-3/vision/pic4.png"],
        ["DrawText","{Input1}",460,210,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-3/vision/pic5.png"],
        ["DrawText","{Input1}",270,205,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-3/vision/pic6.png"],
        ["DrawText","{Input1}",270,205,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-3/vision/pic7.png"],
        ["DrawText","{Input1}",270,205,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-3/vision/pic8.png"],
        ["DrawText","{Input1}",270,205,18,"black"],
        ["DrawText","input(\"每分鐘心跳速度:\")",450,235,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-3/vision/pic9.png"],
        ["DrawText","{Input1}",270,205,18,"black"],
        ["DrawText","input(\"每分鐘心跳速度:\")",450,235,14,"black"],
        ["DrawText","\"{Input2}\"",470,280,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-3/vision/pic10.png"],
        ["DrawText","{Input1}",270,205,18,"black"],
        ["DrawText","int(\"{Input2}\")",450,235,14,"black"],
        ["DrawText","{Input2}",470,280,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-3/vision/pic11.png"],
        ["DrawText","{Input1}",270,205,18,"black"],
        ["DrawText","{Input2}",470,280,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-3/vision/pic12.png"],
        ["DrawText","{Input1}",270,205,18,"black"],
        ["DrawText","{Input2}",270,280,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-3/vision/pic13.png"],
        ["DrawText","{Input1}",270,205,18,"black"],
        ["DrawText","{Input2}",270,280,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-3/vision/pic14.png"],
        ["DrawText","{Input1}",270,205,18,"black"],
        ["DrawText","{Input2}",270,280,18,"black"]
    ],
    [//說謊TT開始
        ["ImgBox",10,10,600,600,"C3-3/vision/pic15.png"],
        ["DrawText","{Input1}",150,185,18,"black"],
        ["DrawText","{Input2}",360,185,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-3/vision/pic16.png"],
        ["DrawText","{Input1}",150,185,18,"black"],
        ["DrawText","{Input2}",360,185,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-3/vision/pic17.png"],
        ["DrawText","{Input1}",150,185,18,"black"],
        ["DrawText","{Input2}",360,185,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-3/vision/pic18.png"],
        ["DrawText","{Input1}",150,185,18,"black"],
        ["DrawText","{Input2}",360,185,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-3/vision/pic19.png"],
        ["DrawText","手掌是否有出汗(1為出汗，0為無):{Input1}",190,260,14,"white"],
        ["DrawText","每分鐘心跳速度:{Input2}",190,280,14,"white"],
        ["DrawText","說謊",190,300,14,"white"]
    ]//說謊TT結束
    ,[//沒說謊FF開始
    ["ImgBox",10,10,600,600,"C3-3/vision/pic20.png"],
    ["DrawText","{Input1}",150,185,18,"black"],
    ["DrawText","{Input2}",360,185,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C3-3/vision/pic21.png"],
    ["DrawText","{Input1}",150,185,18,"black"],
    ["DrawText","{Input2}",360,185,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C3-3/vision/pic22.png"],
    ["DrawText","{Input1}",150,185,18,"black"],
    ["DrawText","{Input2}",360,185,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C3-3/vision/pic23.png"],
    ["DrawText","{Input1}",150,185,18,"black"],
    ["DrawText","{Input2}",360,185,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C3-3/vision/pic24.png"],
    ["DrawText","手掌是否有出汗(1為出汗，0為無):{Input1}",190,260,14,"white"],
    ["DrawText","每分鐘心跳速度:{Input2}",190,280,14,"white"],
    ["DrawText","沒說謊",190,300,14,"white"]
]//沒說謊FF結束
    ,[//沒說謊FT開始
    ["ImgBox",10,10,600,600,"C3-3/vision/pic25.png"],
    ["DrawText","{Input1}",150,185,18,"black"],
    ["DrawText","{Input2}",360,185,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C3-3/vision/pic26.png"],
    ["DrawText","{Input1}",150,185,18,"black"],
    ["DrawText","{Input2}",360,185,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C3-3/vision/pic27.png"],
    ["DrawText","{Input1}",150,185,18,"black"],
    ["DrawText","{Input2}",360,185,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C3-3/vision/pic28.png"],
    ["DrawText","{Input1}",150,185,18,"black"],
    ["DrawText","{Input2}",360,185,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C3-3/vision/pic29.png"],
    ["DrawText","手掌是否有出汗(1為出汗，0為無):{Input1}",190,260,14,"white"],
    ["DrawText","每分鐘心跳速度:{Input2}",190,280,14,"white"],
    ["DrawText","沒說謊",190,300,14,"white"]
]//沒說謊FT結束
    ,[//沒說謊TF開始
    ["ImgBox",10,10,600,600,"C3-3/vision/pic30.png"],
    ["DrawText","{Input1}",150,185,18,"black"],
    ["DrawText","{Input2}",360,185,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C3-3/vision/pic31.png"],
    ["DrawText","{Input1}",150,185,18,"black"],
    ["DrawText","{Input2}",360,185,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C3-3/vision/pic32.png"],
    ["DrawText","{Input1}",150,185,18,"black"],
    ["DrawText","{Input2}",360,185,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C3-3/vision/pic33.png"],
    ["DrawText","{Input1}",150,185,18,"black"],
    ["DrawText","{Input2}",360,185,18,"black"]
],
[
    ["ImgBox",10,10,600,600,"C3-3/vision/pic34.png"],
    ["DrawText","手掌是否有出汗(1為出汗，0為無):{Input1}",190,260,14,"white"],
    ["DrawText","每分鐘心跳速度:{Input2}",190,280,14,"white"],
    ["DrawText","沒說謊",190,300,14,"white"]
]//沒說謊TF結束
];
function SetSolodata(){
    //兩個變數會有四種可能!!!(雖然結果只有True/False，但會有四條路)
    if(SoloInput[1]=="1" && Number(SoloInput[2])>=80){//說謊TT(同範例)
        SoloCodeStep = 5;
        SoloMsgStep = [0,2,3,3,4];
        SoloArrowStep = [0,1,2,2,3];
        SoloFlowStep = [0,1,2,3,4];
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
        SoloCodeStep_SVG = 19;
        SoloMsgStep_SVG =  [0,1,1,1,1,1,1,2,3,3,3,3,3,3,3,3,3,3,4];
        SoloArrowStep_SVG =[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,3];
        SoloFlowStep_SVG = [0,1,2,3,4];
    }
    else if(SoloInput[1]!="1" && Number(SoloInput[2])<80){//沒說謊FF
        SoloCodeStep = 5;
        SoloMsgStep = [0,2,3,3,5];
        SoloArrowStep = [0,1,2,4,5];
        SoloFlowStep = [0,1,2,5,6]
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,19,20,21,22,23];//主要這裡會改，如果都是走到FALSE的話步驟跟箭頭會一樣
        SoloCodeStep_SVG = 19;
        SoloMsgStep_SVG =  [0,1,1,1,1,1,1,2,3,3,3,3,3,3,3,3,3,3,5];
        SoloArrowStep_SVG =[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,4,4,4,5];
        SoloFlowStep_SVG = [0,1,2,3,4];
    }
    else if(SoloInput[1]!="1" && Number(SoloInput[2])>=80){//沒說謊FT
        SoloCodeStep = 5;
        SoloMsgStep = [0,2,3,3,5];
        SoloArrowStep = [0,1,2,4,5];
        SoloFlowStep = [0,1,2,5,6]
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,24,25,26,27,28];//主要這裡會改，如果都是走到FALSE的話步驟跟箭頭會一樣
        SoloCodeStep_SVG = 19;
        SoloMsgStep_SVG =  [0,1,1,1,1,1,1,2,3,3,3,3,3,3,3,3,3,3,5];
        SoloArrowStep_SVG =[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,4,4,4,5];
        SoloFlowStep_SVG = [0,1,2,3,4];
    }
    else{// 沒說謊TF
        SoloCodeStep = 5;
        SoloMsgStep = [0,2,3,3,5];
        SoloArrowStep = [0,1,2,4,5];
        SoloFlowStep = [0,1,2,5,6]
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,29,30,31,32,33];//主要這裡會改，如果都是走到FALSE的話步驟跟箭頭會一樣
        SoloCodeStep_SVG = 19;
        SoloMsgStep_SVG =  [0,1,1,1,1,1,1,2,3,3,3,3,3,3,3,3,3,3,5];
        SoloArrowStep_SVG =[0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,4,4,4,5];
        SoloFlowStep_SVG = [0,1,2,3,4];
    }
}