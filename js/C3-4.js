var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 6;
var SoloMsgStep = [0,2,4,5,5,6];
var SoloArrowStep = [0,1,2,3,3,4];
var SoloFlowStep = [0,1,2,3,4,5];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
var SoloCodeStep_SVG = 27;
var SoloMsgStep_SVG =   [0,1,1,1,1,1,1,2,3,3,3,3,3,3,4,5,5,5,5,5,5,5,5,5,5,5,6];
var SoloArrowStep_SVG = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,4];
var SoloFlowStep_SVG = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,4];
var SoloOperationInfo=[
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic1.png"],
        ["DrawText","input(\"請輸入a邊長:\")",420,147,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic2.png"],
        ["DrawText","input(\"請輸入a邊長:\")",420,147,14,"black"],
        ["DrawText","\"{Input1}\"",460,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic3.png"],
        ["DrawText","int(\"{Input1}\")",420,147,14,"black"],
        ["DrawText","{Input1}",460,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic4.png"],
        ["DrawText","{Input1}",460,190,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic5.png"],
        ["DrawText","{Input1}",270,185,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic6.png"],
        ["DrawText","{Input1}",270,185,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic7.png"],
        ["DrawText","{Input1}",270,185,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic8.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","input(\"請輸入b邊長:\")",430,200,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic9.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","input(\"請輸入b邊長:\")",430,200,14,"black"],
        ["DrawText","\"{Input2}\"",455,250,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic10.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","int(\"{Input2}\")",430,200,14,"black"],
        ["DrawText","{Input2}",455,250,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic11.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Input2}",455,250,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic12.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Input2}",270,250,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic13.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Input2}",270,250,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic14.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Input2}",270,250,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic15.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Input2}",270,250,18,"black"],
        ["DrawText","input(\"請輸入c邊長:\")",430,270,14,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic16.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Input2}",270,250,18,"black"],
        ["DrawText","input(\"請輸入c邊長:\")",430,270,14,"black"],
        ["DrawText","\"{Input3}\"",470,315,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic17.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Input2}",270,250,18,"black"],
        ["DrawText","int(\"{Input3}\")",430,270,14,"black"],
        ["DrawText","{Input3}",470,315,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic18.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Input2}",270,250,18,"black"],
        ["DrawText","{Input3}",470,315,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic19.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Input2}",270,250,18,"black"],
        ["DrawText","{Input3}",270,320,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic20.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Input2}",270,250,18,"black"],
        ["DrawText","{Input3}",270,320,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic21.png"],
        ["DrawText","{Input1}",270,185,18,"black"],
        ["DrawText","{Input2}",270,250,18,"black"],
        ["DrawText","{Input3}",270,320,18,"black"]
    ],//TTT開始
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic22.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic23.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic24.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic25.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic26.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic27.png"],
        ["DrawText","可以構成三角形",190,260,14,"white"]
    ]//TTT結束
    ,//TTF開始
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic28.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic29.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic30.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic31.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic32.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic33.png"],
        ["DrawText","不能構成三角形",190,260,14,"white"]
    ]//TTF結束
    ,//TFT開始
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic34.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic35.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic36.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic37.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic38.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic39.png"],
        ["DrawText","不能構成三角形",190,260,14,"white"]
    ],//TFT結束
    [ //TFF開始
        ["ImgBox",10,10,600,600,"C3-4/vision/pic40.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic41.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic42.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic43.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic44.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic45.png"],
        ["DrawText","不能構成三角形",190,260,14,"white"]
    ],//TFF結束
    [//FFF開始
        ["ImgBox",10,10,600,600,"C3-4/vision/pic46.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic47.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic48.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic49.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic50.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic51.png"],
        ["DrawText","不能構成三角形",190,260,14,"white"]
    ],//FFF結束
    [//FFT開始
        ["ImgBox",10,10,600,600,"C3-4/vision/pic52.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic53.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic54.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic55.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic56.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic57.png"],
        ["DrawText","不能構成三角形",190,260,14,"white"]
    ],//FFT結束
    [//FTT開始
        ["ImgBox",10,10,600,600,"C3-4/vision/pic58.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic59.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic60.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic61.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic62.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic63.png"],
        ["DrawText","不能構成三角形",190,260,14,"white"]
    ],//FTT結束
    [//FTF開始
        ["ImgBox",10,10,600,600,"C3-4/vision/pic64.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic65.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic66.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic67.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic68.png"],
        ["DrawText","{Input1}",70,195,18,"black"],
        ["DrawText","{Input2}",120,195,18,"black"],
        ["DrawText","{Input3}",175,195,18,"black"],

        ["DrawText","{Input1}",270,195,18,"black"],
        ["DrawText","{Input3}",320,195,18,"black"],
        ["DrawText","{Input2}",370,195,18,"black"],

        ["DrawText","{Input2}",450,195,18,"black"],
        ["DrawText","{Input3}",510,195,18,"black"],
        ["DrawText","{Input1}",560,195,18,"black"]
    ],
    [
        ["ImgBox",10,10,600,600,"C3-4/vision/pic69.png"],
        ["DrawText","不能構成三角形",190,260,14,"white"]
    ]//FTF結束
];
function SetSolodata(){
    //共有三個變數，八種可能ˊˋ (a+b)>c,(a+c)>b,(b+c)>a
    var T1=(Number(SoloInput[1])+Number(SoloInput[2]))>Number(SoloInput[3]);
    var T2=(Number(SoloInput[1])+Number(SoloInput[3]))>Number(SoloInput[2]);
    var T3=(Number(SoloInput[2])+Number(SoloInput[3]))>Number(SoloInput[1]);
    if(T1 && T2 && T3){//TTT
        SoloMsgStep = [0,2,4,5,5,6];
        SoloArrowStep = [0,1,2,3,3,4];
        SoloFlowStep = [0,1,2,3,4,5];
        SoloMsgStep_SVG =   [0,1,1,1,1,1,1,2,3,3,3,3,3,3,4,5,5,5,5,5,5,5,5,5,5,5,6];
        SoloArrowStep_SVG = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,4];
        SoloFlowStep_SVG = [0,1,2,3,4,5];
    }
    else{
        SoloMsgStep = [0,2,4,5,5,7];
        SoloArrowStep = [0,1,2,3,5,6];
        SoloFlowStep = [0,1,2,3,6,7];
        SoloMsgStep_SVG =   [0,1,1,1,1,1,1,2,3,3,3,3,3,3,4,5,5,5,5,5,5,5,5,5,5,5,7];
        SoloArrowStep_SVG = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,5,6];
        SoloFlowStep_SVG = [0,1,2,3,6,7];
    }
    if(T1 && T2 && T3){//TTT
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
    }
    else if(T1 && T2 && !T3){//TTF
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,27,28,29,30,31,32];
    }
    else if(T1 && !T2 && T3){//TFT
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,33,34,35,36,37,38];
    }
    else if(T1 && !T2 && !T3){//TFF
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,39,40,41,42,43,44];
    }
    else if(!T1 && !T2 && !T3){//FFF
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,45,46,47,48,49,50];
    }
    else if(!T1 && !T2 && T3){//FFT
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,51,52,53,54,55,56];
    }
    else if(!T1 && T2 && T3){//FTT
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,57,58,59,60,61,62];
    }
    else if(!T1 && T2 && !T3){//FTF
        SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,63,64,65,66,67,68];
    }
}