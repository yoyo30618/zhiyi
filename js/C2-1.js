var SoloCurrentStep = 0; // 目前顯示的步驟
var SoloInput = [0, 0, 0, 0, 0, 0];
var SoloOutput = [0, 0, 0, 0, 0, 0];
var SoloCodeStep = 3;
var SoloMsgStep = [0, 1, 2];
var SoloArrowStep = [0, 1, 2];
var SoloFlowStep = [0, 1, 2];
var SoloOperationStep_SVG = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var SoloCodeStep_SVG = 11;
var SoloMsgStep_SVG = [0,1,1,1,2,3,3,3,3,3,4];
var SoloArrowStep_SVG = [0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2];
var SoloFlowStep_SVG = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2];
var SoloOperationInfo = [
  [["ImgBox", 10, 10, 600, 600, "C2-1/vision/pic1.png"]],
  [
    ["ImgBox", 10, 10, 600, 600, "C2-1/vision/pic2.png"],
    ["DrawText", '"{InputBox1}"', 475, 205, 20, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C2-1/vision/pic3.png"],
    ["DrawText", '"{InputBox1}"', 305, 210, 20, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C2-1/vision/pic4.png"],
    ["DrawText", '"{InputBox1}"', 305, 210, 20, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C2-1/vision/pic5.png"],
    ["DrawText", '"{InputBox1}"', 305, 210, 20, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C2-1/vision/pic6.png"],
    ["DrawText", '"{InputBox1}"', 305, 210, 20, "black"],
    ["DrawText", '"{InputBox2}"', 475, 295, 20, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C2-1/vision/pic7.png"],
    ["DrawText", '"{InputBox1}"', 305, 210, 20, "black"],
    ["DrawText", "{InputBox2}", 475, 295, 20, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C2-1/vision/pic8.png"],
    ["DrawText", '"{InputBox1}"', 305, 210, 20, "black"],
    ["DrawText", "{InputBox2}", 305, 290, 20, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C2-1/vision/pic9.png"],
    ["DrawText", '"{InputBox1}"', 305, 210, 20, "black"],
    ["DrawText", "{InputBox2}", 305, 290, 20, "black"],
  ],
  [
    ["VideoBox", 10, 50, 600, 600, "C2-1/vision/vid1.mp4"],
    ["DrawText", '函式 print(name, num,"號")', 120, 25, 20, "black"],
  ],
  [
    ["ImgBox", 10, 10, 600, 600, "C2-1/vision/pic10.png"],
    ["DrawText", '函式 print(name, num,"號")', 120, 25, 20, "black"],
    ["DrawText", "{Output1} 號", 255, 370, 12, "black"],
  ],
];
function SetSolodata() {
  SoloOutput[1] = SoloInput[1] + " " + SoloInput[2];
}
