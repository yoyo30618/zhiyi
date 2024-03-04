var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 5;
var SoloMsgStep = [0,2,4,5,6];
var SoloArrowStep = [0,1,2,3,4];
var SoloFlowStep = [0,1,2,3,4];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
var SoloCodeStep_SVG = 27;
var SoloMsgStep_SVG = [0,1,1,1,1,1,1,2,3,3,3,3,3,3,4,5,5,5,5,5,5,5,5,5,5,5,6];
var SoloArrowStep_SVG = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,4];
var SoloFlowStep_SVG = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,4];

var SoloOperationInfo=[
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic1.png"],
        ["DrawText","input(\"請輸入國文成績：\")",425,140,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic2.png"],
        ["DrawText","input(\"請輸入國文成績：\")",425,140,14,"black"],
        ["DrawText","\"{InputBox1}\"",455,190,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic3.png"],
        ["DrawText","float(\"{InputBox1}\")",425,145,14,"black"],
        ["DrawText","{Output1}",455,190,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic4.png"],
        ["DrawText","{Output1}",455,190,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic5.png"],
        ["DrawText","{Output1}",270,190,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic6.png"],
        ["DrawText","{Output1}",270,190,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic7.png"],
        ["DrawText","{Output1}",270,190,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic8.png"],
        ["DrawText","input(\"請輸入英文成績：\")",425,210,14,"black"],
        ["DrawText","{Output1}",270,190,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic9.png"],
        ["DrawText","{Output1}",270,190,20,"black"],
        ["DrawText","input(\"請輸入英文成績：\")",425,210,14,"black"],
        ["DrawText","\"{InputBox2}\"",445,260,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic10.png"],
        ["DrawText","{Output1}",270,190,20,"black"],
        ["DrawText","float(\"{InputBox2}\")",425,210,14,"black"],
        ["DrawText","{Output2}",445,260,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic11.png"],
        ["DrawText","{Output1}",270,190,20,"black"],
        ["DrawText","{Output2}",445,260,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic12.png"],
        ["DrawText","{Output1}",270,190,20,"black"],
        ["DrawText","{Output2}",270,250,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic13.png"],
        ["DrawText","{Output1}",270,190,20,"black"],
        ["DrawText","{Output2}",270,250,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic14.png"],
        ["DrawText","{Output1}",270,190,20,"black"],
        ["DrawText","{Output2}",270,250,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic15.png"],
        ["DrawText","input(\"請輸入數學成績：\")",425,280,14,"black"],
        ["DrawText","{Output1}",270,190,20,"black"],
        ["DrawText","{Output2}",270,250,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic16.png"],
        ["DrawText","input(\"請輸入數學成績：\")",425,280,14,"black"],
        ["DrawText","{Output1}",270,190,20,"black"],
        ["DrawText","{Output2}",270,250,20,"black"],
        ["DrawText","\"{InputBox3}\"",450,325,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic17.png"],
        ["DrawText","float(\"{InputBox3}\")",425,280,14,"black"],
        ["DrawText","{Output1}",270,190,20,"black"],
        ["DrawText","{Output2}",270,250,20,"black"],
        ["DrawText","{Output3}",455,325,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic18.png"],
        ["DrawText","{Output1}",270,190,20,"black"],
        ["DrawText","{Output2}",270,250,20,"black"],
        ["DrawText","{Output3}",455,325,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic19.png"],
        ["DrawText","{Output1}",270,190,20,"black"],
        ["DrawText","{Output2}",270,250,20,"black"],
        ["DrawText","{Output3}",270,315,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic20.png"],
        ["DrawText","{Output1}",270,190,20,"black"],
        ["DrawText","{Output2}",270,250,20,"black"],
        ["DrawText","{Output3}",270,315,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic21.png"],
        ["DrawText","{Output1}",270,190,20,"black"],
        ["DrawText","{Output2}",270,250,20,"black"],
        ["DrawText","{Output3}",270,315,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic22.png"],
        ["DrawText","{Output1}",270,190,20,"black"],
        ["DrawText","{Output2}",270,250,20,"black"],
        ["DrawText","{Output3}",270,315,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic23.png"],
        ["DrawText","{Output1}",270,190,20,"black"],
        ["DrawText","{Output2}",270,250,20,"black"],
        ["DrawText","{Output3}",270,315,20,"black"],
        ["DrawText","{Output1}",220,490,20,"black"],
        ["DrawText","{Output2}",290,490,20,"black"],
        ["DrawText","{Output3}",365,490,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic24.png"],
        ["DrawText","{Output1}",270,190,20,"black"],
        ["DrawText","{Output2}",270,250,20,"black"],
        ["DrawText","{Output3}",270,315,20,"black"],
        ["DrawText","{Output1}",220,490,20,"black"],
        ["DrawText","{Output2}",290,490,20,"black"],
        ["DrawText","{Output3}",365,490,20,"black"],
        ["DrawText","{Output5}",135,490,20,"black"],
        ["DrawText","{Output5}",270,375,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic25.png"],
        ["DrawText","{Output1}",270,190,20,"black"],
        ["DrawText","{Output2}",270,250,20,"black"],
        ["DrawText","{Output3}",270,315,20,"black"],
        ["DrawText","{Output1}",220,490,20,"black"],
        ["DrawText","{Output2}",290,490,20,"black"],
        ["DrawText","{Output3}",365,490,20,"black"],
        ["DrawText","{Output5}",135,490,20,"black"],
        ["DrawText","{Output5}",270,375,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic26.png"],
        ["DrawText","{Output1}",270,190,20,"black"],
        ["DrawText","{Output2}",270,250,20,"black"],
        ["DrawText","{Output3}",270,315,20,"black"],
        ["DrawText","{Output1}",220,490,20,"black"],
        ["DrawText","{Output2}",290,490,20,"black"],
        ["DrawText","{Output3}",365,490,20,"black"],
        ["DrawText","{Output5}",135,490,20,"black"],
        ["DrawText","{Output5}",270,375,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-4/vision/pic27.png"],
        ["DrawText","平均分數為：{Output5}",230,280,16,"white"]
    ]
];
function SetSolodata(){
    var parsedValue1 = parseFloat(SoloInput[1]);
    if (Number.isInteger(parsedValue1))  SoloOutput[1] = parsedValue1.toFixed(1);
    else SoloOutput[1] = parsedValue1;
    var parsedValue2 = parseFloat(SoloInput[2]);
    if (Number.isInteger(parsedValue2))  SoloOutput[2] = parsedValue2.toFixed(1);
    else SoloOutput[2] = parsedValue2;
    var parsedValue3 = parseFloat(SoloInput[3]);
    if (Number.isInteger(parsedValue3))  SoloOutput[3] = parsedValue3.toFixed(1);
    else SoloOutput[3] = parsedValue3;
    SoloOutput[4]=(Number(SoloInput[1])+Number(SoloInput[2])+Number(SoloInput[3]))/3;
    SoloOutput[5]=((Number(SoloInput[1])+Number(SoloInput[2])+Number(SoloInput[3]))/3).toFixed(2);
}