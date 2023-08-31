var SoloCurrentStep = 0; // 目前顯示的步驟

var SoloInput = [0, 0, 0, 0, 0, 0];
var SoloOutput = [0, 0, 0, 0, 0, 0];
var SoloCodeStep = 4;
var SoloMsgStep = [0, 1, 1, 2];
var SoloArrowStep = [0, 1, 2, 3];
var SoloFlowStep = [0, 1, 2, 3];

var SoloOperationStep_SVG = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];
var SoloCodeStep_SVG = 16;
var SoloMsgStep_SVG = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2];
var SoloArrowStep_SVG = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 4];
var SoloFlowStep_SVG = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 4];
var OriginSoloOperationInfo = [
    [
      ["LeftBox", 0, 0, 200, 300],
      ["RightBox", 250, 0, 200, 300],
      ["ImgBox", 40, 30, 90, 90, "VarBox2.png"],
      ["DrawText", "n", 75, 90, 20, "black"],
      ["ImgBox", 450, 10, 250, 50, "C2-2/C2-2-4.png"],
    ],
    [
      ["LeftBox", 0, 0, 200, 300],
      ["RightBox", 250, 0, 200, 300],
      ["ImgBox", 40, 30, 90, 90, "VarBox2.png"],
      ["DrawText", "n", 75, 90, 20, "black"],
      ["ImgBox", 450, 10, 250, 50, "C2-2/C2-2-5.png"],
      ["ImgBox", 500, 40, 90, 90, "VarBox.png"],
      ["DrawText", "str", 540, 85, 20, "black"],
      ["DrawText", "{InputBox1}", 540, 120, 20, "black"],
    ],
    [
      ["LeftBox", 0, 0, 200, 300],
      ["RightBox", 250, 0, 200, 300],
      ["ImgBox", 40, 30, 90, 90, "VarBox2.png"],
      ["DrawText", "n", 75, 90, 20, "black"],
      ["ImgBox", 450, 10, 250, 50, "C2-2/C2-2-6.png"],
      ["ImgBox", 500, 40, 90, 90, "VarBox.png"],
      ["DrawText", "int", 540, 85, 20, "black"],
      ["DrawText", "{InputBox1}", 540, 120, 20, "black"],
    ],
    [
      ["LeftBox", 0, 0, 200, 300],
      ["RightBox", 250, 0, 200, 300],
      ["ImgBox", 40, 30, 90, 90, "VarBox2.png"],
      ["DrawText", "n", 75, 90, 20, "black"],
      ["ImgBox", 300, 30, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 75, 20, "black"],
      ["DrawText", "{InputBox1}", 330, 110, 20, "black"],
      ["AssignArrow", 130, 90, 290, 100, 18, "指派", "black"],
    ],
    [
      ["LeftBox", 0, 0, 200, 300],
      ["RightBox", 250, 0, 200, 300],
      ["ImgBox", 40, 30, 90, 90, "VarBox2.png"],
      ["DrawText", "n", 75, 90, 20, "black"],
      ["ImgBox", 300, 30, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 75, 20, "black"],
      ["DrawText", "{InputBox1}", 330, 110, 20, "black"],
      ["AssignArrow", 130, 90, 290, 100, 18, "指派", "black"],
      ["ImgBox", 40, 120, 90, 90, "VarBox2.png"],
      ["DrawText", "b", 75, 180, 20, "black"],
    ],
    [
      ["LeftBox", 0, 0, 200, 300],
      ["RightBox", 250, 0, 200, 300],
      ["ImgBox", 40, 30, 90, 90, "VarBox2.png"],
      ["DrawText", "n", 75, 90, 20, "black"],
      ["ImgBox", 300, 30, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 75, 20, "black"],
      ["DrawText", "{InputBox1}", 330, 110, 20, "black"],
      ["AssignArrow", 130, 90, 290, 100, 18, "指派", "black"],
      ["ImgBox", 40, 120, 90, 90, "VarBox2.png"],
      ["DrawText", "b", 75, 180, 20, "black"],
      ["ImgBox", 40, 250, 400, 200, "C2-2/C2-2-1.png"],
      ["DrawText", "{InputBox1}", 240, 385, 20, "black"],
    ],
    [
      ["LeftBox", 0, 0, 200, 300],
      ["RightBox", 250, 0, 200, 300],
      ["ImgBox", 40, 30, 90, 90, "VarBox2.png"],
      ["DrawText", "n", 75, 90, 20, "black"],
      ["ImgBox", 300, 30, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 75, 20, "black"],
      ["DrawText", "{InputBox1}", 330, 110, 20, "black"],
      ["AssignArrow", 130, 90, 290, 100, 18, "指派", "black"],
      ["ImgBox", 40, 120, 90, 90, "VarBox2.png"],
      ["DrawText", "b", 75, 180, 20, "black"],
      ["ImgBox", 40, 250, 400, 200, "C2-2/C2-2-2.png"],
      ["DrawText", "{InputBox1}", 240, 385, 20, "black"]
    ],
    [
      ["LeftBox", 0, 0, 200, 300],
      ["RightBox", 250, 0, 200, 300],
      ["ImgBox", 40, 30, 90, 90, "VarBox2.png"],
      ["DrawText", "n", 75, 90, 20, "black"],
      ["ImgBox", 300, 30, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 75, 20, "black"],
      ["DrawText", "{InputBox1}", 330, 110, 20, "black"],
      ["AssignArrow", 130, 90, 290, 100, 18, "指派", "black"],
      ["ImgBox", 40, 120, 90, 90, "VarBox2.png"],
      ["DrawText", "b", 75, 180, 20, "black"],
      ["ImgBox", 40, 250, 400, 200, "C2-2/C2-2-2.png"],
      ["DrawText", "{InputBox1}", 240, 385, 20, "black"]
    ],
  
    [
      ["LeftBox", 0, 0, 200, 300],
      ["RightBox", 250, 0, 200, 300],
      ["ImgBox", 40, 30, 90, 90, "VarBox2.png"],
      ["DrawText", "n", 75, 90, 20, "black"],
      ["ImgBox", 300, 30, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 75, 20, "black"],
      ["DrawText", "{InputBox1}", 330, 110, 20, "black"],
      ["AssignArrow", 130, 90, 290, 100, 18, "指派", "black"],
      ["ImgBox", 40, 120, 90, 90, "VarBox2.png"],
      ["DrawText", "b", 75, 180, 20, "black"],
      ["ImgBox", 40, 250, 400, 200, "C2-2/C2-2-2.png"],
      ["DrawText", "{InputBox1}", 240, 385, 20, "black"],
      ["ImgBox", 70, 410, 155, 50, "C2-2/C2-2-10.png"],
      ["ImgBox", 70, 445, 160, 40, "C2-2/C2-2-7.png"],
    ],
    [
      ["LeftBox", 0, 0, 200, 300],
      ["RightBox", 250, 0, 200, 300],
      ["ImgBox", 40, 30, 90, 90, "VarBox2.png"],
      ["DrawText", "n", 75, 90, 20, "black"],
      ["ImgBox", 300, 30, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 75, 20, "black"],
      ["DrawText", "{InputBox1}", 330, 110, 20, "black"],
      ["AssignArrow", 130, 90, 290, 100, 18, "指派", "black"],
      ["ImgBox", 40, 120, 90, 90, "VarBox2.png"],
      ["DrawText", "b", 75, 180, 20, "black"],
      ["ImgBox", 40, 250, 400, 200, "C2-2/C2-2-2.png"],
      ["DrawText", "{InputBox1}", 240, 385, 20, "black"],
      ["ImgBox", 70, 410, 155, 50, "C2-2/C2-2-10.png"],
      ["ImgBox", 70, 445, 160, 40, "C2-2/C2-2-7.png"],
      ["DrawText", "{SoloOutput1}", 180, 385, 20, "black"],
      ["ImgBox", 300, 120, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 165, 20, "black"],
      ["DrawText", "{SoloOutput1}", 340, 200, 20, "black"],
      ["DrawText", "...共{SoloOutput1}盒", 250, 470, 20, "black"],
    ],
    [
      ["LeftBox", 0, 0, 200, 300],
      ["RightBox", 250, 0, 200, 300],
      ["ImgBox", 40, 30, 90, 90, "VarBox2.png"],
      ["DrawText", "n", 75, 90, 20, "black"],
      ["ImgBox", 300, 30, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 75, 20, "black"],
      ["DrawText", "{InputBox1}", 330, 110, 20, "black"],
      ["AssignArrow", 130, 90, 290, 100, 18, "指派", "black"],
      ["ImgBox", 40, 120, 90, 90, "VarBox2.png"],
      ["DrawText", "b", 75, 180, 20, "black"],
      ["ImgBox", 40, 250, 400, 200, "C2-2/C2-2-2.png"],
      ["DrawText", "{InputBox1}", 240, 385, 20, "black"],
      ["ImgBox", 70, 410, 155, 50, "C2-2/C2-2-10.png"],
      ["ImgBox", 70, 445, 160, 40, "C2-2/C2-2-7.png"],
      ["DrawText", "{SoloOutput1}", 180, 385, 20, "black"],
      ["ImgBox", 300, 120, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 165, 20, "black"],
      ["DrawText", "{SoloOutput1}", 340, 200, 20, "black"],
      ["DrawText", "...共{SoloOutput1}盒", 250, 470, 20, "black"],
      ["AssignArrow", 130, 175, 290, 185, 18, "指派", "black"],
    ],
    [
      ["LeftBox", 0, 0, 200, 300],
      ["RightBox", 250, 0, 200, 300],
      ["ImgBox", 40, 30, 90, 90, "VarBox2.png"],
      ["DrawText", "n", 75, 90, 20, "black"],
      ["ImgBox", 300, 30, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 75, 20, "black"],
      ["DrawText", "{InputBox1}", 330, 110, 20, "black"],
      ["AssignArrow", 130, 90, 290, 100, 18, "指派", "black"],
      ["ImgBox", 40, 120, 90, 90, "VarBox2.png"],
      ["DrawText", "b", 75, 180, 20, "black"],
      ["ImgBox", 40, 250, 400, 200, "C2-2/C2-2-11.png"],
      ["ImgBox", 70, 410, 155, 50, "C2-2/C2-2-10.png"],
      ["ImgBox", 70, 445, 160, 40, "C2-2/C2-2-7.png"],
      ["ImgBox", 300, 120, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 165, 20, "black"],
      ["DrawText", "{SoloOutput1}", 340, 200, 20, "black"],
      ["DrawText", "...共{SoloOutput1}盒", 250, 470, 20, "black"],
      ["AssignArrow", 130, 175, 290, 185, 18, "指派", "black"],
      ["ImgBox", 40, 210, 90, 90, "VarBox2.png"],
      ["DrawText", "r", 75, 270, 20, "black"],
    ],
    [
      ["LeftBox", 0, 0, 200, 300],
      ["RightBox", 250, 0, 200, 300],
      ["ImgBox", 40, 30, 90, 90, "VarBox2.png"],
      ["DrawText", "n", 75, 90, 20, "black"],
      ["ImgBox", 300, 30, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 75, 20, "black"],
      ["DrawText", "{InputBox1}", 330, 110, 20, "black"],
      ["AssignArrow", 130, 90, 290, 100, 18, "指派", "black"],
      ["ImgBox", 40, 120, 90, 90, "VarBox2.png"],
      ["DrawText", "b", 75, 180, 20, "black"],
      ["ImgBox", 40, 250, 400, 200, "C2-2/C2-2-11.png"],
      ["ImgBox", 70, 410, 155, 50, "C2-2/C2-2-10.png"],
      ["ImgBox", 70, 445, 160, 40, "C2-2/C2-2-7.png"],
      ["ImgBox", 300, 120, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 165, 20, "black"],
      ["DrawText", "{SoloOutput1}", 340, 200, 20, "black"],
      ["DrawText", "...共{SoloOutput1}盒", 250, 470, 20, "black"],
      ["AssignArrow", 130, 175, 290, 185, 18, "指派", "black"],
      ["ImgBox", 40, 210, 90, 90, "VarBox2.png"],
      ["DrawText", "r", 75, 270, 20, "black"],
      ["DrawText", "{InputBox1}", 240, 385, 20, "black"],
    ],
    [
      ["LeftBox", 0, 0, 200, 300],
      ["RightBox", 250, 0, 200, 300],
      ["ImgBox", 40, 30, 90, 90, "VarBox2.png"],
      ["DrawText", "n", 75, 90, 20, "black"],
      ["ImgBox", 300, 30, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 75, 20, "black"],
      ["DrawText", "{InputBox1}", 330, 110, 20, "black"],
      ["AssignArrow", 130, 90, 290, 100, 18, "指派", "black"],
      ["ImgBox", 40, 120, 90, 90, "VarBox2.png"],
      ["DrawText", "b", 75, 180, 20, "black"],
      ["ImgBox", 40, 250, 400, 200, "C2-2/C2-2-11.png"],
      ["ImgBox", 70, 410, 155, 50, "C2-2/C2-2-10.png"],
      ["ImgBox", 70, 445, 160, 40, "C2-2/C2-2-7.png"],
      ["ImgBox", 300, 120, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 165, 20, "black"],
      ["DrawText", "{SoloOutput1}", 340, 200, 20, "black"],
      ["DrawText", "...共{SoloOutput1}盒", 250, 470, 20, "black"],
      ["AssignArrow", 130, 175, 290, 185, 18, "指派", "black"],
      ["ImgBox", 40, 210, 90, 90, "VarBox2.png"],
      ["DrawText", "r", 75, 270, 20, "black"],
      ["DrawText", "{InputBox1}", 240, 385, 20, "black"],
      ["DrawText", "{SoloOutput2}", 180, 385, 20, "black"],
      ["ImgBox", 70, 520, 160, 40, "C2-2/C2-2-8.png"],
      ["DrawText", "...共{SoloOutput2}顆", 250, 550, 20, "black"],
      ["ImgBox", 300, 210, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 255, 20, "black"],
      ["DrawText", "{SoloOutput2}", 340, 290, 20, "black"],
    ],
    [
      ["LeftBox", 0, 0, 200, 300],
      ["RightBox", 250, 0, 200, 300],
      ["ImgBox", 40, 30, 90, 90, "VarBox2.png"],
      ["DrawText", "n", 75, 90, 20, "black"],
      ["ImgBox", 300, 30, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 75, 20, "black"],
      ["DrawText", "{InputBox1}", 330, 110, 20, "black"],
      ["AssignArrow", 130, 90, 290, 100, 18, "指派", "black"],
      ["ImgBox", 40, 120, 90, 90, "VarBox2.png"],
      ["DrawText", "b", 75, 180, 20, "black"],
      ["ImgBox", 40, 250, 400, 200, "C2-2/C2-2-11.png"],
      ["ImgBox", 70, 410, 155, 50, "C2-2/C2-2-10.png"],
      ["ImgBox", 70, 445, 160, 40, "C2-2/C2-2-7.png"],
      ["ImgBox", 300, 120, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 165, 20, "black"],
      ["DrawText", "{SoloOutput1}", 340, 200, 20, "black"],
      ["DrawText", "...共{SoloOutput1}盒", 250, 470, 20, "black"],
      ["AssignArrow", 130, 175, 290, 185, 18, "指派", "black"],
      ["ImgBox", 40, 210, 90, 90, "VarBox2.png"],
      ["DrawText", "r", 75, 270, 20, "black"],
      ["DrawText", "{InputBox1}", 240, 385, 20, "black"],
      ["DrawText", "{SoloOutput2}", 180, 385, 20, "black"],
      ["ImgBox", 70, 520, 160, 40, "C2-2/C2-2-8.png"],
      ["DrawText", "...共{SoloOutput2}顆", 250, 550, 20, "black"],
      ["ImgBox", 300, 210, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 255, 20, "black"],
      ["DrawText", "{SoloOutput2}", 340, 290, 20, "black"],
      ["AssignArrow", 130, 265, 290, 275, 18, "指派", "black"],
    ],
    [
      ["LeftBox", 0, 0, 200, 300],
      ["RightBox", 250, 0, 200, 300],
      ["ImgBox", 40, 30, 90, 90, "VarBox2.png"],
      ["DrawText", "n", 75, 90, 20, "black"],
      ["ImgBox", 300, 30, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 75, 20, "black"],
      ["DrawText", "{InputBox1}", 330, 110, 20, "black"],
      ["AssignArrow", 130, 90, 290, 100, 18, "指派", "black"],
      ["ImgBox", 40, 120, 90, 90, "VarBox2.png"],
      ["DrawText", "b", 75, 180, 20, "black"],
      ["ImgBox", 40, 250, 400, 200, "C2-2/C2-2-11.png"],
      ["ImgBox", 70, 410, 155, 50, "C2-2/C2-2-10.png"],
      ["ImgBox", 70, 445, 160, 40, "C2-2/C2-2-7.png"],
      ["ImgBox", 300, 120, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 165, 20, "black"],
      ["DrawText", "{SoloOutput1}", 340, 200, 20, "black"],
      ["DrawText", "...共{SoloOutput1}盒", 250, 470, 20, "black"],
      ["AssignArrow", 130, 175, 290, 185, 18, "指派", "black"],
      ["ImgBox", 40, 210, 90, 90, "VarBox2.png"],
      ["DrawText", "r", 75, 270, 20, "black"],
      ["DrawText", "{InputBox1}", 240, 385, 20, "black"],
      ["DrawText", "{SoloOutput2}", 180, 385, 20, "black"],
      ["ImgBox", 70, 520, 160, 40, "C2-2/C2-2-8.png"],
      ["DrawText", "...共{SoloOutput2}顆", 250, 550, 20, "black"],
      ["ImgBox", 300, 210, 90, 90, "VarBox.png"],
      ["DrawText", "int", 330, 255, 20, "black"],
      ["DrawText", "{SoloOutput2}", 340, 290, 20, "black"],
      ["AssignArrow", 130, 265, 290, 275, 18, "指派", "black"],
    ]
  ];
var SoloOperationInfo = [];//因為改變數字 會改變雞蛋  所以有一個原始(不加蛋) 根據輸入才加蛋
function AddEgg($x,$y){
    Egg=[];
    Egg.push("ImgBox");
    Egg.push($x);
    Egg.push($y);
    Egg.push(40);
    Egg.push(30);
    Egg.push("C2-2/C2-2-3.png");
    return Egg;
}
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
function SetSolodata() {
  SoloOutput[1] = parseInt(Number(SoloInput[1]) / 6);
  SoloOutput[2] = Number(SoloInput[1]) % 6;
  SoloOperationInfo=[];SoloOperationInfo=deepCopy(OriginSoloOperationInfo);//避免影響到原始陣列
  //第五開始出現蛋蛋，根據蛋蛋數量畫一排，如果10顆以內直接畫整排，超過則加入省略符號
  if(SoloInput[1]>=10){
    for(var $i = 0; $i < 4; $i++){
        SoloOperationInfo[5].push(AddEgg(65+($i*25),410));
        SoloOperationInfo[6].push(AddEgg(65+($i*25),410));
    }    
    SoloOperationInfo[5].push(["DrawText", "......", 185, 440, 20, "black"]);//省略符號
    SoloOperationInfo[6].push(["DrawText", "......", 185, 440, 20, "black"]);//省略符號
    for(var $i = 6; $i < 10; $i++){
        SoloOperationInfo[5].push(AddEgg(65+($i*25),410));
        SoloOperationInfo[6].push(AddEgg(65+($i*25),410));
    }
  }
  else{
    for(var $i = 0; $i < SoloInput[1]; $i++){
        SoloOperationInfo[5].push(AddEgg(65+($i*25),410));
        SoloOperationInfo[6].push(AddEgg(65+($i*25),410));
    }
  }
  //第七開始出現分切蛋蛋，根據蛋蛋數量畫一排，其他畫下面
  if(SoloOutput[1]>=1){
    for(var $i = 0; $i < 6; $i++){
        for(var $j = 7; $j < 16; $j++)
            SoloOperationInfo[$j].push(AddEgg(65+($i*25),410));
    }    
  }
  //第七開始出現分切蛋蛋，餘數蛋蛋
  for(var $i = 0; $i < SoloOutput[2]; $i++){
    for(var $j = 7; $j < 16; $j++)
        SoloOperationInfo[$j].push(AddEgg(65+($i*25),485));
  }    

}
