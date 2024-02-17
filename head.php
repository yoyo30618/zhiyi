<?php
	if (!defined('IN_INDEX')) {
		exit('Access denied.');
	}
	session_start();//開啟session
	$nowdir=basename(dirname($_SERVER['PHP_SELF']));
	$parentDirectory = ($nowdir === "C1" || $nowdir === "C2"  || $nowdir === "C3"  || $nowdir === "C4") ? "../" : "";
?>