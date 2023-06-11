<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>眼動程式設計-函式</title>

    <!-- Bootstrap Core CSS -->
	
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/demo.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]--> 
<?php
session_start();
if(!isset($_SESSION['username'])&&!isset($_SESSION['id']))
header("refresh:0;url=login.php");

?>
</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                 <a class="navbar-brand" href="main.php">Demo page</a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                
               
            
			
			<div id='uid'   data-value="<?php echo @$_SESSION['id']; ?>"></div>
			<div id='uname'   data-value="<?php echo @$_SESSION['username']; ?>"></div>
			<div id='page'   data-value="function"></div>
              <?php echo @$_SESSION['username']; ?>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <!--<li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li class="divider"></li>-->
                        <li><a href="logout.php?lg=F"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

          
        </nav>

        <!-- Page Content -->
        <div id="page-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">眼動程式設計-函式demo</h1>
									
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <!-- /.row -->
				<div class="row">
				<div class="col-lg-6">
					
                    <div class="panel panel-default ">
                        <div class="panel-heading">
                           程式碼內容
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <!-- Nav tabs -->
                       

                            <!-- Tab panes -->
                            <div  class="tooltip-demo tab-content" style="height: 860px;overflow:auto;">
<div class='code_gp0A'  data-html="true"  data-toggle="tooltip_F1"  data-placement="right"  
title='<canvas id="myCanvas_functionA"  width="380px" height="460px" align="right" >
</canvas>
<script>
	 //for function canvas
	 canvasA = document.getElementById("myCanvas_functionA");
	  //alert(centerX);
	 centerAX = canvasA.width/2;
	 centerAY = canvasA.height / 10-20;
	 contextA = canvasA.getContext("2d");	
	 //繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色[option])
	circle_draw(contextA,centerAX-10,centerAY+10,20,"rgba(204,81,249,0.6)");
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX-10,centerAY+10,"f1",16);	
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX-10, centerAY+30, centerAX-10, centerAY+50);
	//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
	rectangle_draw(contextA,centerAX-10-30,centerAY+50,60,30,"rgba(204,81,249,0.6)");
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX-10,centerAY+65,"t = 0",16);	
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX-10, centerAY+80, centerAX-10, centerAY+100);
	//繪製 菱形(畫布,中心點X,中心點Y,長度,顏色[option])
	diamond_draw(contextA,centerAX-10,centerAY+100,35,"rgba(204,81,249,0.8)");
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX-10,centerAY+123,"for i in",16);
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX-10,centerAY+141,"range(1,a)",16);
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX-10, centerAY+170, centerAX-10, centerAY+190);
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX+20,centerAY+180,"成立",16);
	//繪製 菱形(畫布,中心點X,中心點Y,長度,顏色[option])
	diamond_draw(contextA,centerAX-10,centerAY+190,35,"rgba(204,81,249,1)");			
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX-10,centerAY+225," if i % 2 == 1",16);
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX+120,centerAY+225,"不成立",16);
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX-10, centerAY+260, centerAX-10, centerAY+320);
	//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
	rectangle_draw(contextA,centerAX-10-30,centerAY+320,60,30,"rgba(204,81,249,0.6)");
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX-10,centerAY+335,"return t",16);
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX-10, centerAY+350, centerAX-10, centerAY+370);
	 //繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色[option])
	circle_draw(contextA,centerAX-10,centerAY+390,20,"rgba(204,81,249,0.6)");
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX-10,centerAY+390,"結束",16);

	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX+20,centerAY+295,"不成立",16);
	;
	
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX-10, centerAY+260, centerAX-80, centerAY+280,1/10);
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX-80,centerAY+260,"成立",16);
	//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
	rectangle_draw(contextA,centerAX-80-30,centerAY+280,60,30,"rgba(204,81,249,0.8)");
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX-80,centerAY+295,"t = t + i",16);
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX-110, centerAY+295, centerAX-130, centerAY+295,1/10);
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX-130, centerAY+295, centerAX-130, centerAY+135,1/10);
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX-130, centerAY+135, centerAX-80, centerAY+135);
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX+60, centerAY+135, centerAX+90, centerAY+135,1/10);
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX+90, centerAY+135, centerAX+90, centerAY+335,1/10);
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX+90, centerAY+335, centerAX+20, centerAY+335);
</script>	

'>
<h4>
<custom_div id='ccA_focus' ></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip"  data-placement="right"  
title="f1代表函式名稱,a代表傳入值"> def  f1 ( a ):</span>
</h4>
<h4>
<custom_div id='ccA_focus' ></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip"  data-placement="right"  
title="初始值設為0">&nbsp;&nbsp;&nbsp;&nbsp;t = 0</span>
</h4>
<h4>
<custom_div id='ccA_focus' ></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip"  data-placement="right"  
title="從1開始執行到a-1">&nbsp;&nbsp;&nbsp;&nbsp;for i in range (1, a):</span>
</h4>
<h4>
<custom_div id='ccA_focus' ></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip"  data-placement="right"  
title="判斷i除以2的餘數是否等於1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if i % 2 == 1:</span>
</h4>
<h4>
<custom_div id='ccA_focus' ></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip"  data-placement="right"  
title="變數遞增<br/>每次執行完原本的t會加上i，t的值會更新為t+i">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;t = t + i</span>
</h4>
<h4>
<custom_div id='ccA_focus' ></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip"  data-placement="right"  
title="回傳值，回傳更新後的t值">&nbsp;&nbsp;&nbsp;&nbsp;return t</span>
</h4>
</div> 
  <div  class='code_gp0B'  data-html="true"  data-toggle="tooltip_F2"  data-placement="right"  
title='<canvas id="myCanvas_functionB"  width="380px" height="460px" align="right" ></canvas>

<script>
	 //for function canvas
	 canvasA = document.getElementById("myCanvas_functionB");
	  //alert(centerX);
	 centerAX = canvasA.width/2;
	 centerAY = canvasA.height / 10-20;
	 contextA = canvasA.getContext("2d");	
	 //繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色[option])
	circle_draw(contextA,centerAX-10,centerAY+10,20,"rgba(252,47,116,0.6)");
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX-10,centerAY+10,"f2",16);	
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX-10, centerAY+30, centerAX-10, centerAY+50);
	//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
	rectangle_draw(contextA,centerAX-10-30,centerAY+50,60,30,"rgba(252,47,116,0.6)");
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX-10,centerAY+65,"t = 0",16);	
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX-10, centerAY+80, centerAX-10, centerAY+100);
	//繪製 菱形(畫布,中心點X,中心點Y,長度,顏色[option])
	diamond_draw(contextA,centerAX-10,centerAY+100,35,"rgba(252,47,116,0.8)");
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX-10,centerAY+123,"for i in",16);
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX-10,centerAY+141,"range(1,a)",16);
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX-10, centerAY+170, centerAX-10, centerAY+190);
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX+20,centerAY+180,"成立",16);
	//繪製 菱形(畫布,中心點X,中心點Y,長度,顏色[option])
	diamond_draw(contextA,centerAX-10,centerAY+190,35,"rgba(252,47,116,1)");			
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX-10,centerAY+225," if i % 2 == 0",16);
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX+120,centerAY+225,"不成立",16);
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX-10, centerAY+260, centerAX-10, centerAY+320);
	//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
	rectangle_draw(contextA,centerAX-10-30,centerAY+320,60,30,"rgba(252,47,116,0.6)");
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX-10,centerAY+335,"return t",16);
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX-10, centerAY+350, centerAX-10, centerAY+370);
	 //繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色[option])
	circle_draw(contextA,centerAX-10,centerAY+390,20,"rgba(252,47,116,0.6)");
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX-10,centerAY+390,"結束",16);

	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX+20,centerAY+295,"不成立",16);
	;
	
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX-10, centerAY+260, centerAX-80, centerAY+280,1/10);
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX-80,centerAY+260,"成立",16);
	//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
	rectangle_draw(contextA,centerAX-80-30,centerAY+280,60,30,"rgba(252,47,116,0.8)");
	//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
	text_draw(contextA,centerAX-80,centerAY+295,"t = t + i",16);
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX-110, centerAY+295, centerAX-130, centerAY+295,1/10);
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX-130, centerAY+295, centerAX-130, centerAY+135,1/10);
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX-130, centerAY+135, centerAX-80, centerAY+135);
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX+60, centerAY+135, centerAX+90, centerAY+135,1/10);
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX+90, centerAY+135, centerAX+90, centerAY+335,1/10);
	//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
	canvas_arrow(contextA, centerAX+90, centerAY+335, centerAX+20, centerAY+335);
</script>	






'>
<h4>
<custom_div id='ccB_focus' ></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip"  data-placement="right"  
title="f2代表函式名稱,a代表傳入值"> def  f2 ( a ):</span>
</h4>
<h4>
<custom_div id='ccB_focus' ></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip"  data-placement="right"  
title="初始值設為0">&nbsp;&nbsp;&nbsp;&nbsp;t = 0</span>
</h4>
<h4>
<custom_div id='ccB_focus' ></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip"  data-placement="right"  
title="從1開始執行到a-1">&nbsp;&nbsp;&nbsp;&nbsp;for i in range (1, a):</span>
</h4>
<h4>
<custom_div id='ccB_focus' ></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip"  data-placement="right"  
title="判斷i除以2的餘數是否等於0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if i % 2 == 0:</span>
</h4>
<h4>
<custom_div id='ccB_focus' ></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip"  data-placement="right"  
title="變數遞增<br/>每次執行完原本的t會加上i，t的值會更新為t+i">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;t = t + i</span>
</h4>
<h4>
<custom_div id='ccB_focus' ></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip"  data-placement="right"  
title="回傳值，回傳更新後的t值">&nbsp;&nbsp;&nbsp;&nbsp;return t</span>
</h4>
</div>  
<div class='code_contents1'>
<h4>
<custom_div id='cc1_focus' ></custom_div><span class='code_contents1' data-html="true"  data-toggle="tooltip"  data-placement="right"  
title="輸入數值：x,y分別輸入一個數值"> x = int(input("enter a number: "))</span>
</h4>
<h4 >
<custom_div id='cc2_focus' ></custom_div><span class='code_contents1'  data-html="true"  data-toggle="tooltip" data-placement="right"  
title="輸入數值：x,y分別輸入一個數值"> y = int(input("enter a number: "))</span></h4>
<h4>
</div>




<div class='code_gp1'>


<h4 >
<custom_div id='cc3_focus' ></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="根據i值進行迴圈，從1執行到x"> for i in range ( 1, x+1 ):</span></h4>
<h4 >
<custom_div id='cc4_focus' ></custom_div><span class='code_contents2' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="設立初始值j等於1">&nbsp;&nbsp;&nbsp;&nbsp;j = 1;</span></h4>

<div class='code_gp2'>
<h4 >
<custom_div id='cc5_focus' ></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="當j值小於等於i值時進入while迴圈">&nbsp;&nbsp;&nbsp;&nbsp;while ( j <= i):</span></h4>
<div class='code_gp3'>
<h4 >
<custom_div id='cc6_focus' ></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="若y值大於0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if y > 0:</span></h4>
<h4 >
<custom_div id='cc7_focus' ></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="呼叫函式f1，並帶入數值j">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s = f1 ( j )</span></h4>
<h4 >
<custom_div id='cc8_focus' ></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="反之,若y值小於或等於0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:</span></h4>
<h4 >
<custom_div id='cc9_focus' ></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="呼叫函式f2，並帶入數值j">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s = f2 ( j )</span></h4>
</div><h4 >
<custom_div id='cc10_focus' ></custom_div><span class='code_contents3' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="輸出經過呼叫函式計算後取代的s值">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print( s )</span></h4>

<h4> <custom_div id='cc11_focus'></custom_div><span class='code_contents4' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="while迴圈執行過後j值會加1，並取代掉原本的j值，並重新回到原本的迴圈條件式判斷是否繼續執行">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j  = j  + 1</span></h4>
</div>
<h4 >
<custom_div id='c12_focus' ></custom_div><span class='code_contents3' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="輸出換行">&nbsp;&nbsp;&nbsp;&nbsp;print( '\n' )</span></h4>
</div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    
					</div>
                    <!-- /.panel -->
					<div class="panel panel-default ">
                        <div class="panel-heading">
                           程式輸出結果
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <!-- Nav tabs -->
                       

                            <!-- Tab panes -->
                            <div id='output_div' class="panel-body tab-content" style="height: 180px;overflow:auto;">
                               <h4 id='final_output'> 等待運算中...</h4>
                                    
						
                      </div>
							       <div class="col-lg-12">
					<button id='scrollbar_btn' type="button" class="btn btn-default btn-lg btn-block">捲動到最底</button>
					</div> 
                        </div>
                        <!-- /.panel-body -->
                    
					</div>
                </div>
                <!-- /.col-lg-6 -->
				
				<div class="col-lg-6" class="btn-group-toggle" data-toggle="buttons">
				<div class="row">
					<div class="col-lg-3">
					<button id='sl_tips' type="checkbox" class="btn btn-warning btn-lg btn-block">模擬提示</button>
					</div>
					<div class="col-lg-3" >
					<button  id='flow_tips' type="checkbox" class="btn btn-warning btn-lg btn-block">流程提示</button>
					</div>
					<div class="col-lg-3">
					<button id='framework_tips' type="checkbox" class="btn btn-warning btn-lg btn-block">架構提示</button>
					</div>
					<div class="col-lg-3">
					<button  id='code_explanation' type="checkbox" class="btn btn-warning btn-lg btn-block">程式解釋</button>
					</div>
					
				</div>
					<!-- Start input something or animation...-->
					<div class="row">
					<div class="col-lg-12">
					<hr/>
						<div id='it1' hidden class="itAll form-group text-right col-lg-6">
						<label>請輸入x：
						<input id="input_text1" class="input_textAll form-control " placeholder="Enter the number" type='number'
						 oninput='this.value=parseInt(this.value.replace(/[^\-?\d]/g,""))'>
						</label></div>
						<div id='it2' hidden class="itAll form-group text-right col-lg-6">
						<label>請輸入y：
						<input id="input_text2" class="input_textAll form-control" placeholder="Enter the number" type='number'
						oninput='this.value=parseInt(this.value.replace(/[^\-?\d]/g,""))'>
						</label></div>
						<!--<div id='it3' hidden class="itAll form-group text-right col-lg-4">
						<label>請輸入n：
						<input id="input_text3" class="input_textAll form-control" placeholder="Enter the number" type='number'
						 oninput='this.value=this.value.replace(/[^\d]|^[0]/g,"")'>
						</label></div>-->
					</div>
					
					<div class="col-lg-12" >
					<div id="main_canvas2" hidden>
					<!-- canvas調整(原600,750)-->
					<canvas id="myCanvas"  width="600px" height="750px" align="right" ></canvas>
					
					</div>
					
					</div>
						
						
					<!-- /. Start input something or animation...-->
					
 
				</div>
				<!-- /.col-lg-6 -->
				 
				</div>
				<!-- /.row -->
				
				
				
				
				
				
            </div><hr>
			<div id='function_bar' class="row" style="width:80%; margin:auto;" hidden>
				
					<div class="col-lg-2">
					<button id='run' type="checkbox" class="btn btn-success btn-lg btn-block">執行</button>
					</div>
					<div class="col-lg-2">
					<button  disabled id='initial_step' type="checkbox" class="btn btn-info btn-lg btn-block">最初</button>
					</div>
					<div class="col-lg-2">
					<button disabled id='previous_step' type="checkbox" class="btn btn-info btn-lg btn-block">上一步</button>
					</div>
					<div class="col-lg-2">
					<button disabled id='next_step' type="checkbox" class="btn btn-info btn-lg btn-block">下一步</button>
					</div>
					<div class="col-lg-2">
					<button disabled id='final_result' type="checkbox" class="btn btn-warning btn-lg btn-block">最終結果</button>
					</div>
					<div class="col-lg-2">
					<button  id='reset' type="checkbox" class="btn btn-info btn-lg btn-block">重新輸入</button>
					</div>
					
					
					
				</div>
	
				<br/>
			
		
			
			
			</div>
            <!-- /.container-fluid -->
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="../bower_components/jquery/dist/jquery.min.js"></script>
	
		
    <!-- Bootstrap Core JavaScript -->
    <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
   
    <!-- Metis Menu Plugin JavaScript -->
    <script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>
	<!-- 20200514 updated -->
	<script src="../dist/js/ext_jquery.js"></script>
	
	<!--draw animation only this page-->
	<script>
	
	$(function() {	


	 //global function
	 draw=function(){			
				if(context!=''){
				
				
				//重設XY
				//centerX = centerX+40;
				//centerY = centerY -30;
				//清除畫布
				context.clearRect(0, 0, canvas.width, canvas.height);
				
				//繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色[option])
				circle_draw(context,centerX/3,centerY,20);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3,centerY,"開始",16);				
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3, centerY+20, centerX/3, centerY+50);
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX/3-60,centerY+50,120,50,'rgba(164,224,248,0.6)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3,centerY+65,"x=input()",16);
				text_draw(context,centerX/3,centerY+85,"y=input()",16);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3, centerY+100, centerX/3, centerY+130);
				//繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色[option])
				circle_draw(context,centerX/3,centerY+140,10);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3, centerY+150, centerX/3, centerY+170);
				//繪製 菱形(畫布,中心點X,中心點Y,長度,顏色[option])
				diamond_draw(context,centerX/3,centerY+170,35,'rgba(94,252,231,0.6)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3,centerY+190,"for i in",16);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3,centerY+208,"range(1,x+1)",16);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3, centerY+240, centerX/3, centerY+330);
				
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX/3-20,centerY+260,40,30,'rgba(178,206,253,1)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3,centerY+275,"NO",16);
				//繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色[option])
				circle_draw(context,centerX/3,centerY+350,20);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3,centerY+350,"結束",16);	
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+70, centerY+205, centerX/3+160, centerY+205);
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX/3+90,centerY+190,40,30,'rgba(178,206,253,1)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+110,centerY+205,"YES",16);
				
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX/3+160,centerY+185,60,40,'rgba(118,97,254,0.3)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+190,centerY+205,"j=1",16);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+190, centerY+225, centerX/3+190, centerY+250);
				
				
				//繪製 菱形(畫布,中心點X,中心點Y,長度,顏色[option])
				diamond_draw(context,centerX/3+190,centerY+250,30);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+190,centerY+272,"While",16);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+190,centerY+290,"j ≦ i",16);
				
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+190, centerY+310, centerX/3+190, centerY+330,1);
				
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX/3+170,centerY+320,40,30,'rgba(178,206,253,1)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+190,centerY+335,"YES",16);
				
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+190, centerY+350, centerX/3+190, centerY+375);
				
				//繪製 菱形(畫布,中心點X,中心點Y,長度,顏色[option])
				diamond_draw(context,centerX/3+190,centerY+375,30,'rgba(248,244,32,0.6)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+190,centerY+405,"if(x>0)",16);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+248, centerY+405, centerX/3+265, centerY+405);
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX/3+265,centerY+390,50,30,'rgba(204,81,249,0.6)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+290,centerY+405,"def f1",16);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+250,centerY+380,"成立",16);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+248, centerY+480, centerX/3+265, centerY+480);
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX/3+265,centerY+465,50,30,'rgba(252,47,116,0.6)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+290,centerY+480,"def f2",16);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+250,centerY+455,"成立",16);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+150,centerY+435,"不成立",16);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				//text_draw(context,centerX/3+190,centerY+390,"t=x",16);
				
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				//text_draw(context,centerX/3+190,centerY+420,"y=t+x",16);
				
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+190, centerY+435, centerX/3+190, centerY+450);
				//繪製 菱形(畫布,中心點X,中心點Y,長度,顏色[option])
				diamond_draw(context,centerX/3+190,centerY+450,30,'rgba(248,244,32,0.6)');
				
				
				//繪製 平行四邊形(畫布,中心點X,中心點Y,長度,顏色)
				//parallelogram_draw(context,centerX/3+147,centerY+450,80,'rgba(35,255,35,0.3)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+190,centerY+480,"else",16);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+190, centerY+510, centerX/3+190, centerY+525);
				//繪製 平行四邊形(畫布,中心點X,中心點Y,長度,顏色)
				parallelogram_draw(context,centerX/3+152,centerY+525,70,'rgba(248,244,32,0.6)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+190,centerY+550,"print(s)",16);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+190, centerY+581, centerX/3+190, centerY+603);
				
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX/3+160,centerY+603,60,40,'rgba(255,153,18,0.7)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+190,centerY+623,"j = j+1",16);
				
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+160, centerY+623, centerX/3+80, centerY+623);
				
				//繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色[option])
				circle_draw(context,centerX/3+70,centerY+623,10);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+70, centerY+613, centerX/3+70, centerY+290);
				//繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色[option])
				circle_draw(context,centerX/3+70,centerY+280,10);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+80, centerY+280, centerX/3+130, centerY+280);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+250, centerY+280, centerX/3+280, centerY+280,1);
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX/3+280,centerY+265,40,30,'rgba(178,206,253,1)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+300,centerY+280,"NO",16);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+320, centerY+280, centerX/3+350, centerY+280);
				
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX/3+350,centerY+260,70,40,'rgba(94,252,231,0.6)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+385,centerY+280,"print('\\n')",16);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+385, centerY+260, centerX/3+385, centerY+150);
				//繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色[option])
				circle_draw(context,centerX/3+385,centerY+140,10);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+375, centerY+140, centerX/3+10, centerY+140);
				
				
				//繪製 圓角矩形(畫布,已繪製矩形,圓角半徑,顏色)
				drawRoundedRect(context,centerX/18+15,centerY+115, 530, 540,30,'rgba(94,252,231,1)');
				//drawRoundedRect(context,centerX/3-80,centerY+100, 530, 540,30,'rgba(94,252,231,1)');
				//繪製 圓角矩形(畫布,已繪製矩形,圓角半徑,顏色)
				drawRoundedRect(context,centerX/3+40,centerY+235, 295, 415,30,'rgba(255,153,18,1)');
				//繪製 圓角矩形(畫布,已繪製矩形,圓角半徑,顏色)
				drawRoundedRect(context,centerX/3+120,centerY+360, 205, 230,30,'rgba(248,244,32,1)');
				/*
				
				//繪製 菱形(畫布,中心點X,中心點Y,長度,顏色[option])
				diamond_draw(context,centerX,centerY+100,50);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX,centerY+100+50,"Input",20);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX, centerY+200, centerX, centerY+250);
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX-75,centerY+250,150,100);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX,centerY+300,"Print",20);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX, centerY+350, centerX, centerY+400);
				//繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色[option])
				circle_draw(context,centerX,centerY+450,50,'rgba(127,255,0,1)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX,centerY+450,"結束",20);
				
				
				//繪製 平行四邊形(畫布,中心點X,中心點Y,長度,顏色)
				//parallelogram_draw(context,centerX,centerY,100);
				*/
				
				
				}
				
				
				//for function 
				/*if(contextA!=''&&contextB!=''){
					alert(canvasA);
					//清除畫布
				contextA.clearRect(0, 0, canvasA.width, canvasA.height);
				//清除畫布
				contextB.clearRect(0, 0, canvasB.width, canvasB.height);
					
					//繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色[option])
				circle_draw(contextA,centerABX/3,centerABY,20);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(contextA,centerABX/3,centerABY,"開始",16);				
				}*/
				
				
				
				
	}
	
	
	/*********************
	***以下開始繪製圖形***
	*********************/	
	//設定同步開關
	sync_switch=0;
	//同步延遲delay [promise 寫法]
	var delay = function(s){
	  return new Promise(function(resolve,reject){
			 setTimeout(resolve,s); 
				 });
			}
	//初始化畫布
	draw();
	//持續更新函式
	update_draw=function(){ 		
				if((animate_key>0)&&
				($.trim(arrayObj_input).length > 0))								
				  update_text(arrayObj_input);	
				  //DIV scrollbar保持在底部
				 	//var scrollHeight = $('#output_div').prop("scrollHeight");
					//$('#output_div').scrollTop(scrollHeight,200);
				  
	}
	//for call function
	var j;
	 f1 = function(val_in){
								var t =0;
								for(i=1;i<parseInt(val_in);i++){
									if (i % 2 ==1)
									t = t + i;
								}
								return t;
								}
	 f2 = function(val_in){
															var t =0;
															for(i=1;i<parseInt(val_in);i++){
																if (i % 2 ==0)
																t = t + i;
															}
															return t;
								}
	
	
	update_text=function(input_val){
	//繪製 文字移動
				draw();
				 if(input_val!=''){
				   
				  //final 顯示部分
				//  if(animate_key==3&&time_y>204)
				 //    text_draw(context,centerX-radius*2-30,centerY+radius*2+time_y,'歡迎 '+input_val,28,'right');
				 // else
				 //    text_draw(context,centerX-radius*2-30, centerY+radius*2+time_y,input_val,28,'right');
					
				  //step1:input Show x,y,z 
				
				//  $("#final_output").append("y:"+input_val[1]+"<br/>");
				 //step1.1: draw rectangle line
				 
					  if(animate_key>=1){
					  // $("#final_output").html("x:"+input_val[0]+"<br/>");
				 text_draw(context,centerX, centerY-10,'[Input]',28,'left');
				 text_draw(context,centerX, centerY+20,'x:'+input_val[0],28,'left');
				 $("#final_output").html("x:"+input_val[0]+"<br/>");
				  }
				  if(animate_key>=2)
				  {
					  if(animate_key>=2){
					  text_draw(context,centerX, centerY+50,'y:'+input_val[1],28,'left');
					  $("#final_output").append("y:"+input_val[1]);
					  }
						if(time_y<50)
						time_y+=10;
						else if (previous_step_position>animate_key && time_y>50)
						time_y-=5;
						//繪製 矩形框線
						if(animate_key<3){
						context.strokeStyle="#ff0000";
						context.strokeRect(centerX/3-60,centerY+time_y,120,50);
						}
						//繪製 矩形框線
						
					//text_draw(context,centerX-radius*2-30, centerY+radius*2+time_y,input_val[1],28,'right');
						 //step2 while loop:
						  if(animate_key==3)
						  {
							$("#final_output").append("<br/>=====以下為function計算=====<br/>");
							if(time_y<115)
							time_y+=5;
							else if (previous_step_position>animate_key && time_y>115)
						    time_y-=5;
							//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
							//rectangle_draw(context,centerX/3-30,centerY+time_y,60,40,'rgba(118,97,254,0.3)');
							
							//繪製 矩形框線
							//context.strokeStyle="#ff0000";
							//context.strokeRect(centerX/3-80,centerY+time_y,530, 540);
							//繪製 圓角矩形(畫布,已繪製矩形,圓角半徑,顏色)
						//drawRoundedRect(context,centerX/18+20,centerY+100, 530, 540,30,'rgba(94,252,231,1)');
							drawRoundedRect(context,centerX/3-80,centerY+time_y, 530, 540,30,'rgba(255,0,0,1)');
							//text_draw(context,centerX-radius*2-30, centerY+radius*2+time_y,input_val[1],28,'right');
							//$("#final_output").append(previous_step_position+'/'+animate_key);
							//$("#final_output").append('<br/>'+animate_key+'<br/>');
							
							
							//step2. function 計算
							
								
							
							
							if(input_val){
								//clearInterval(action_draw);
								for(var i=1;i<parseInt(input_val[0])+1;i++){
									 j=1;
									while(j<=i)
									{
										if(parseInt(input_val[1])>0)
										$("#final_output").append(f1(parseInt(j)));
										else		
									    $("#final_output").append(f2(parseInt(j)));
										//$("#final_output").append(f2(parseInt(j)));
										j++;
										//console.log(j);
									}
									$("#final_output").append("<br/>");
								}
								
								//$("#final_output").append(f1(parseInt(input_val[0])));
								//
							}
							
							
							
							
						  }
							 
					 
					 
						
				  }
				  
		
				  }
	
	
	
	
	}
	//Animate draw (畫面每幀更新幾毫秒)
	action_draw =setInterval(update_draw, 50);	
	//if(sync_switch==2)setInterval(update_draw, 50);	
	
   
	  

	});
	
	
	</script>
	
	
</body>

</html>
