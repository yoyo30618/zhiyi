
var Israin = 3;
var NowRainStep = 1;
function showContent(contentId) {
  // 隱藏所有內容區塊
  document.getElementById("content1").style.display = "none";
  document.getElementById("content2").style.display = "none";
  document.getElementById("content3").style.display = "none";
  document.getElementById("content4").style.display = "none";
  document.getElementById("content5").style.display = "none";
  document.getElementById("Isanswered").style.display = "none";

  // 根據contentId參數顯示相應的內容區塊
  if(contentId==0){//決定目前有沒有下雨
    var selectedWeather = document.querySelector('input[name="weather"]:checked');
    contentId = selectedWeather.value;
    Israin = selectedWeather.value;
    NowRainStep=0;
    travelNxtStep();
  }
  document.getElementById("content" + contentId).style.display = "block";
}
function travelLstStep() {
  if(NowRainStep==1){
  }
  else{
    NowRainStep-=1;
    var imageElement1 = document.getElementById("contentImage1");
    var imageElement2 = document.getElementById("contentImage2");
    imageElement1.src = '../pic/C3-0-'+Israin+'-'+NowRainStep+'.png';
    imageElement2.src = '../pic/C3-0-'+Israin+'-'+NowRainStep+'.png';
  }
}
function travelNxtStep() {
  if(NowRainStep==6){
    showContent(5);
  }
  else{
    NowRainStep+=1;
    var imageElement1 = document.getElementById("contentImage1");
    var imageElement2 = document.getElementById("contentImage2");
    imageElement1.src = '../pic/C3-0-'+Israin+'-'+NowRainStep+'.png';
    imageElement2.src = '../pic/C3-0-'+Israin+'-'+NowRainStep+'.png';
  }
}

function ResetAns() {
  // 在這裡添加顯示演算法說明的邏輯
  document.getElementById("answer").disabled = false;
  document.getElementById("submitans").disabled = false;
  document.getElementById("Isanswered").style.display = "none";
  document.getElementById("algorithmExplanation").style.display = "none";
}

function showAlgorithmExplanation() {
  // 在這裡添加顯示演算法說明的邏輯
  document.getElementById("answer").disabled = true;
  document.getElementById("submitans").disabled = true;
  document.getElementById("Isanswered").style.display = "inline";
  document.getElementById("algorithmExplanation").style.display = "block";
  
  const page = window.location.pathname;
  const ans = document.getElementById("answer").value; // 獲取回答內容
  const data = { page, ans};
  // 使用fetch API將數據發送到伺服器端保存
  fetch("../save_ans.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
} 