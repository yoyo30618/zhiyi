let PageFirstStartTime = Date.now(); // 變數用於儲存用戶進入頁面的時間
// 監聽用戶離開頁面或關閉瀏覽器的事件
window.onbeforeunload = function (event) {
  // 計算用戶在此頁面上的停留時間
  const page = window.location.pathname;
  const visitTime = Date.now() - PageFirstStartTime;
  const data = {page, visitTime};
  // 使用fetch API將數據發送到伺服器端保存
  fetch("../save_visit_time.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // 返回字符串值，顯示給用戶確認對話框
  return "您確定要離開本頁面嗎？";
};