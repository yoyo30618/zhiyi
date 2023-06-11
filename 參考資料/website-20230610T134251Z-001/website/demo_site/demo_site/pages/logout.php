<?php
if(isset($_GET['lg'])&&$_GET['lg']=='F'){
session_start();
session_destroy();
echo
"<script>
	alert('已登出，將回到登入頁面。');
	window.location.href='login.php';
</script>";

}
?>