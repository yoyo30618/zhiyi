<?php
	$Env="Local"; //Server Local TELic
	if($Env=="Server") $db_link=@mysqli_connect("127.0.0.1","yoyo30618","yoyo0516");
	else if($Env=="Local") $db_link=@mysqli_connect("127.0.0.1","yoyo30618","yoyo0516");
	else $db_link=@mysqli_connect("mariadb","root","yoyo0516");
	if(!$db_link)
		die("資料庫連線失敗<br>");
	else{
		mysqli_query($db_link, 'SET NAMES utf8');
		if($Env=="Server") $seldb=@mysqli_select_db($db_link,"BearTest");
		else if($Env=="Local") $seldb=@mysqli_select_db($db_link,"TELic-LAB");
		else $seldb=@mysqli_select_db($db_link,"zhiyi");
		if(!$seldb)
			die("資料庫選擇失敗<br>");
	}
?>