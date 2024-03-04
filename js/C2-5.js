var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 5;
var SoloMsgStep = [0,1,2];
var SoloArrowStep = [0,1,2];
var SoloFlowStep = [0,1,2];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12];
var SoloCodeStep_SVG = 13;
var SoloMsgStep_SVG = [0,1,1,1,1,1,1,1,1,1,1,1,2];
var SoloArrowStep_SVG = [0,0,0,0,0,0,0,1,1,1,1,1,2];
var SoloFlowStep_SVG =[0,0,0,0,0,0,0,1,1,1,1,1,2];
var SoloOperationInfo=[
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic1.png"],
        ["DrawText","input(\"請輸入新台幣金額\")",435,150,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic2.png"],
        ["DrawText","input(\"請輸入新台幣金額\")",435,150,14,"black"],
        ["DrawText","\"{InputBox1}\"",465,205,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic3.png"],
        ["DrawText","int(\"{InputBox1}\")",435,150,14,"black"],
        ["DrawText","{InputBox1}",465,205,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic4.png"],
        ["DrawText","{InputBox1}",465,205,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic5.png"],
        ["DrawText","{InputBox1}",270,190,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic6.png"],
        ["DrawText","{InputBox1}",270,190,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic7.png"],
        ["DrawText","{InputBox1}",270,190,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic8.png"],
        ["DrawText","{InputBox1}",270,190,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic9.png"],
        ["DrawText","{InputBox1}",270,190,20,"black"],
        ["DrawText","{InputBox1}",250,440,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic10.png"],
        ["DrawText","{InputBox1}",270,190,20,"black"],
        ["DrawText","{Output2}",260,290,20,"black"],
        ["DrawText","{InputBox1}",250,440,20,"black"],
        ["DrawText","{Output2}",140,440,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic11.png"],
        ["DrawText","{InputBox1}",270,190,20,"black"],
        ["DrawText","{Output2}",260,290,20,"black"],
        ["DrawText","{InputBox1}",250,440,20,"black"],
        ["DrawText","{Output2}",140,440,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic12.png"],
        ["DrawText","{InputBox1}",270,190,20,"black"],
        ["DrawText","{Output2}",260,290,20,"black"],
        ["DrawText","{InputBox1}",250,440,20,"black"],
        ["DrawText","{Output2}",140,440,20,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C2-5/vision/pic13.png"],
        ["DrawText","新台幣 {InputBox1} 共可換",230,280,16,"white"],
        ["DrawText","日圓 {Output2} 元",230,300,16,"white"]
    ]
];
function SetSolodata(){
    SoloOutput[1]=String(Number(SoloInput[1]) * 4.72 * 0.95);
    SoloOutput[2]=String(Number(SoloInput[1]) * 4.72 * 0.95);
    if(SoloOutput[2].length>5){
        SoloOutput[2]=String((Number(SoloInput[1]) * 4.72 * 0.95).toFixed(2))+"...";
    }
}