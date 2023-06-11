<?PHP
header("Content-Type: text/html; charset=utf8");
if(!isset($_POST["submit"])){
echo"<script>alert('階段執行錯誤，將回到登入頁面。');</script>";
header("refresh:0;url=login.php");
exit;

}//檢測是否有submit操作 
include_once('config/connect.php');//連結資料庫
$id = $_POST['id'];//post獲得使用者名稱錶單值
$passowrd = $_POST['password'];//post獲得使用者密碼單值

if ($id && $passowrd){//如果使用者名稱和密碼都不為空
$sql = "select * from user where id = '$id' and password='$passowrd'";//檢測資料庫是否有對應的username和password的sql

if ($result=mysqli_query($con,$sql))//執行sql
{
    //返回查詢數
    $rows=mysqli_fetch_assoc($result);   
	
	
	
    //釋放資源
    mysqli_free_result($result);	
}

if(isset($rows)&&$rows){
	//0 false 1 true
session_start();
$_SESSION['username'] = $rows['name'];
$_SESSION['id'] = $rows['id'];

//setcookie
if(!empty($_POST["remember"])) {
				setcookie ("id",$_POST["id"],time()+ (10 * 365 * 24 * 60 * 60));
				setcookie ("password",$_POST["password"],time()+ (10 * 365 * 24 * 60 * 60));
			} else {				
					setcookie ("id","");
					setcookie ("password","");				
			}

header("refresh:0;url=main.php");//如果成功跳轉至welcome.html頁面
exit;
}else{
$sql = "select * from user where id = '$id'";//檢測資料庫id
if ($result=mysqli_query($con,$sql))//執行sql
{
	 //返回查詢數
    $rows=mysqli_fetch_assoc($result);   
}
if(isset($rows)&&$rows)
echo"<script>
alert('密碼輸入錯誤!');
window.location.href='login.php?err=1';
</script>";

else
echo "
<script>
if(confirm('查無使用者資訊，是否需要註冊？'))
{
	window.location.href='signup.php?id=$id&password=$passowrd';
	
}else
{
	
	window.location.href='login.php';	
	
}
//setTimeout(function(){window.location.href='login.php';},1000);
</script>
";
//如果錯誤使用js 1秒後跳轉到登入頁面重試;
}
}else{//如果使用者名稱或密碼有空
echo"<script>alert('表單填寫不完全。');</script>";
header("refresh:0;url=login.php");
}
mysqli_close($con);//關閉資料庫
?>