var SoloCurrentStep = 0; // 目前顯示的步驟

var SoloInput = [0,0,0,0,0,0];
var SoloOutput = [0,0,0,0,0,0];
var SoloCodeStep = 3;
var SoloMsgStep = [0,1,2];
var SoloArrowStep = [0,1,2];
var SoloFlowStep = [0,1,2];
var SoloOperationStep_SVG = [0,1,2,3,4,5,6,7,8,9,10,11];
var SoloCodeStep_SVG = 10;
var SoloMsgStep_SVG = [0,0,0,0,1,1,1,1,2,2];
var SoloArrowStep_SVG = [0,0,0,0,1,1,1,1,2,2];
var SoloFlowStep_SVG = [0,0,0,0,1,1,1,1,2,2];
var SoloOperationInfo=[ 
    [
        ["LeftBox",0,0,200,300],
        ["RightBox",250,0,200,300],
        ["ImgBox",50,50,100,100,"C2-1/C2-1-2.png"],
        ["ImgBox",450,10,250,50,"C2-1/C2-1-4.png"]
    ],
    [
        ["LeftBox",0,0,200,300],
        ["RightBox",250,0,200,300],
        ["ImgBox",50,50,100,100,"C2-1/C2-1-2.png"],
        ["ImgBox",450,10,250,50,"C2-1/C2-1-5.png"],
        ["ImgBox",500,40,100,100,"VarBox.png"],
        ["DrawText","str",540,85,20,"black"],
        ["DrawText","{InputBox1}",540,120,20,"black"]
    ],
    [
        ["LeftBox",0,0,200,300],
        ["RightBox",250,0,200,300],
        ["ImgBox",50,50,100,100,"C2-1/C2-1-2.png"],
        ["ImgBox",450,10,250,50,"C2-1/C2-1-6.png"],
        ["ImgBox",500,40,100,100,"VarBox.png"],
        ["DrawText","float",530,85,20,"black"],
        ["DrawText","{InputBox1}",530,120,20,"black"]
    ],
    [
        ["LeftBox",0,0,200,300],
        ["RightBox",250,0,200,300],
        ["ImgBox",50,50,100,100,"C2-1/C2-1-2.png"],
        ["ImgBox",300,40,100,100,"VarBox.png"],
        ["DrawText","float",330,85,20,"black"],
        ["DrawText","{InputBox1}",330,120,20,"black"],
        ["AssignArrow",120,90,290,100,18,"指派","black"]
    ],
    [
        ["LeftBox",0,0,200,300],
        ["RightBox",250,0,200,300],
        ["ImgBox",50,50,100,100,"C2-1/C2-1-2.png"],
        ["ImgBox",300,40,100,100,"VarBox.png"],
        ["DrawText","float",330,85,20,"black"],
        ["DrawText","{InputBox1}",330,120,20,"black"],
        ["AssignArrow",120,90,290,100,18,"指派","black"],
        ["ImgBox",50,150,100,100,"C2-1/C2-1-3.png"],
        ["ImgBox",50,250,350,300,"C2-1/C2-1-7.png"]
    ],
    [
        ["LeftBox",0,0,200,300],
        ["RightBox",250,0,200,300],
        ["ImgBox",50,50,100,100,"C2-1/C2-1-2.png"],
        ["ImgBox",300,40,100,100,"VarBox.png"],
        ["DrawText","float",330,85,20,"black"],
        ["DrawText","{InputBox1}",330,120,20,"black"],
        ["AssignArrow",120,90,290,100,18,"指派","black"],
        ["ImgBox",50,150,100,100,"C2-1/C2-1-3.png"],
        ["ImgBox",50,250,350,300,"C2-1/C2-1-7.png"],
        ["DrawText","{InputBox1}",250,435,16,"black"]
    ],
    [
        ["LeftBox",0,0,200,300],
        ["RightBox",250,0,200,300],
        ["ImgBox",50,50,100,100,"C2-1/C2-1-2.png"],
        ["ImgBox",300,40,100,100,"VarBox.png"],
        ["DrawText","float",330,85,20,"black"],
        ["DrawText","{InputBox1}",330,120,20,"black"],
        ["AssignArrow",120,90,290,100,18,"指派","black"],
        ["ImgBox",50,150,100,100,"C2-1/C2-1-3.png"],
        ["ImgBox",50,250,350,300,"C2-1/C2-1-7.png"],
        ["DrawText","{InputBox1}",250,435,16,"black"],
        ["DrawText","{Output1}",130,435,16,"black"],
        ["ImgBox",300,140,100,100,"VarBox.png"],
        ["DrawText","float",330,185,20,"black"],
        ["DrawText","{Output1}",330,220,20,"black"]
    ],
    [
        ["LeftBox",0,0,200,300],
        ["RightBox",250,0,200,300],
        ["ImgBox",50,50,100,100,"C2-1/C2-1-2.png"],
        ["ImgBox",300,40,100,100,"VarBox.png"],
        ["DrawText","float",330,85,20,"black"],
        ["DrawText","{InputBox1}",330,120,20,"black"],
        ["AssignArrow",120,90,290,100,18,"指派","black"],
        ["ImgBox",50,150,100,100,"C2-1/C2-1-3.png"],
        ["ImgBox",50,250,350,300,"C2-1/C2-1-7.png"],
        ["DrawText","{InputBox1}",250,435,16,"black"],
        ["DrawText","{Output1}",130,435,16,"black"],
        ["ImgBox",300,140,100,100,"VarBox.png"],
        ["DrawText","float",330,185,20,"black"],
        ["DrawText","{Output1}",330,220,20,"black"],
        ["AssignArrow",120,190,290,200,18,"指派","black"]
    ],
    [
        ["LeftBox",0,0,200,300],
        ["RightBox",250,0,200,300],
        ["ImgBox",50,50,100,100,"C2-1/C2-1-2.png"],
        ["ImgBox",300,40,100,100,"VarBox.png"],
        ["DrawText","float",330,85,20,"black"],
        ["DrawText","{InputBox1}",330,120,20,"black"],
        ["AssignArrow",120,90,290,100,18,"指派","black"],
        ["ImgBox",50,150,100,100,"C2-1/C2-1-3.png"],
        ["ImgBox",50,250,350,300,"C2-1/C2-1-7.png"],
        ["DrawText","{InputBox1}",250,435,16,"black"],
        ["DrawText","{Output1}",130,435,16,"black"],
        ["ImgBox",300,140,100,100,"VarBox.png"],
        ["DrawText","float",330,185,20,"black"],
        ["DrawText","{Output1}",330,220,20,"black"],
        ["AssignArrow",120,190,290,200,18,"指派","black"],
        ["ImgBox",50,300,350,450,"C2-1/C2-1-1.png"]
    ],
    [
        ["LeftBox",0,0,200,300],
        ["RightBox",250,0,200,300],
        ["ImgBox",50,50,100,100,"C2-1/C2-1-2.png"],
        ["ImgBox",300,40,100,100,"VarBox.png"],
        ["DrawText","float",330,85,20,"black"],
        ["DrawText","{InputBox1}",330,120,20,"black"],
        ["AssignArrow",120,90,290,100,18,"指派","black"],
        ["ImgBox",50,150,100,100,"C2-1/C2-1-3.png"],
        ["ImgBox",50,250,350,300,"C2-1/C2-1-7.png"],
        ["DrawText","{InputBox1}",250,435,16,"black"],
        ["DrawText","{Output1}",130,435,16,"black"],
        ["ImgBox",300,140,100,100,"VarBox.png"],
        ["DrawText","float",330,185,20,"black"],
        ["DrawText","{Output1}",330,220,20,"black"],
        ["AssignArrow",120,190,290,200,18,"指派","black"],
        ["ImgBox",50,300,350,450,"C2-1/C2-1-1.png"],
        ["DrawText","華氏溫度為:{Output1}度",130,560,20,"black"]
    ]
];
function SetSolodata(){
  SoloOutput[1]=(9/5*(Number(SoloInput[1]))+32).toFixed(1);
}