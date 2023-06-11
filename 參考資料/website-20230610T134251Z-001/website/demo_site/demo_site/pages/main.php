<?php
$CL=array();
session_start();
if(!isset($_SESSION['username'])&&!isset($_SESSION['id']))
header("refresh:0;url=login.php");
?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>眼動程式設計-主頁</title>

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
include_once('config/connect.php');
//讀取使用者學習狀況
$q='SELECT `material_id`, count(`material_id`) FROM `history` WHERE `user_id`="'.$_SESSION['id'].'" group by `material_id` ASC';
if ($result=mysqli_query($con,$q))//執行sql
{
	while($row = mysqli_fetch_array($result, MYSQLI_NUM))
	{
		$CL[$row[0]]=$row[1];
	}
	
	//釋放搜尋結果
	mysqli_free_result($result);
//echo "Insert OK";//成功輸出註冊成功	
}else{
			
		die('[Error]' . mysqli_error());
}


mysqli_close($con);//關閉資料庫
//print_r($CL);
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
              <?php echo @$_SESSION['username']; ?>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                       <!-- <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
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
                        <h1 class="page-header">眼動程式設計-主頁</h1>
									
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <!-- /.row -->
				<div class="row">
				<div class="col-lg-12">
					
                    <div class="panel panel panel-info">
                        <div class="panel-heading">
                          Python 課程
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <!-- Nav tabs -->
									<div class="col-lg-4">
									 <div class="panel panel-primary ">
										<div class="panel-heading">
											<div class="row">
												<div class="col-xs-3">
													<i class="fa fa-comments fa-5x"></i>
												</div>
												<div class="col-xs-9 text-right">
													<div class="huge"><?php if(isset($CL['Python_condition']))echo $CL['Python_condition'];
													else echo 0;?></div>
													<div>個人使用次數</div>
												</div>
											</div>
										</div>
										<a href="circledemo.php">
											<div class="panel-footer">
												<span class="pull-left">條件式項目</span>
												<span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
												<div class="clearfix"></div>
											</div>
										</a>
									</div>
									</div>
									
									<div class="col-lg-4">
									 <div class="panel panel-primary ">
										<div class="panel-heading">
											<div class="row">
												<div class="col-xs-3">
													<i class="fa fa-comments fa-5x"></i>
												</div>
												<div class="col-xs-9 text-right">
													<div class="huge"><?php if(isset($CL['Python_loop']))echo $CL['Python_loop'];
													else echo 0;?></div>
													<div>個人使用次數</div>
												</div>
											</div>
										</div>
										<a href="demo.php">
											<div class="panel-footer">
												<span class="pull-left">迴圈項目</span>
												<span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
												<div class="clearfix"></div>
											</div>
										</a>
									</div>
									</div>
									
									<div class="col-lg-4">
									 <div class="panel panel-primary ">
										<div class="panel-heading">
											<div class="row">
												<div class="col-xs-3">
													<i class="fa fa-comments fa-5x"></i>
												</div>
												<div class="col-xs-9 text-right">
													<div class="huge"><?php if(isset($CL['Python_function']))echo $CL['Python_function'];
													else echo 0;?></div>
													<div>個人使用次數</div>
												</div>
											</div>
										</div>
										<a href="demo2.php">
											<div class="panel-footer">
												<span class="pull-left">函式項目</span>
												<span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
												<div class="clearfix"></div>
											</div>
										</a>
									</div>
									</div>
									
                            <!-- Tab panes -->
                           
                        </div>
                        <!-- /.panel-body -->
                    
                        <div class="panel-footer">
                            此區塊顯示個人於此 Python 課程的學習完成度。
                        </div>
					</div>
                    <!-- /.panel -->
					
					
					<div class="panel panel panel-info">
                        <div class="panel-heading">
                          JAVA 課程
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <!-- Nav tabs -->
									<div class="col-lg-4">
									 <fieldset disabled>
									 <div class="panel panel-green ">
										<div class="panel-heading ">
											<div class="row">
												<div class="col-xs-3">
													<i class="fa fa-tasks fa-5x"></i>
												</div>
												<div class="col-xs-9 text-right">
													<div class="huge">--</div>
													<div>個人使用次數</div>
												</div>
											</div>
										</div>
										<a  class="disabled" >

											<div class="panel-footer">
												<span class="pull-left">條件式項目</span>
												<span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
												<div class="clearfix"></div>
											</div>
										</a>
									</div>
									</fieldset>
									</div>
									
									<div class="col-lg-4">
									 <div class="panel panel-green ">
										<div class="panel-heading">
											<div class="row">
												<div class="col-xs-3">
													<i class="fa fa-tasks fa-5x"></i>
												</div>
												<div class="col-xs-9 text-right">
													<div class="huge">--</div>
													<div>個人使用次數</div>
												</div>
											</div>
										</div>
										<a class="disabled" >
											<div class="panel-footer">
												<span class="pull-left">迴圈項目</span>
												<span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
												<div class="clearfix"></div>
											</div>
										</a>
									</div>
									</div>
									
									<div class="col-lg-4">
									 <div class="panel panel-green ">
										<div class="panel-heading">
											<div class="row">
												<div class="col-xs-3">
													<i class="fa fa-tasks fa-5x"></i>
												</div>
												<div class="col-xs-9 text-right">
													<div class="huge">--</div>
													<div>個人使用次數</div>
												</div>
											</div>
										</div>
										<a class="disabled" >
											<div class="panel-footer">
												<span class="pull-left">函式項目</span>
												<span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
												<div class="clearfix"></div>
											</div>
										</a>
									</div>
									</div>
									
                            <!-- Tab panes -->
                           
                        </div>
                        <!-- /.panel-body -->
                    
                        <div class="panel-footer">
                            此區塊顯示個人於此 JAVA 課程的學習完成度。
                        </div>
					</div>
                    <!-- /.panel -->
					
					
					<div class="panel panel panel-info">
                        <div class="panel-heading">
                          C# 課程
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <!-- Nav tabs -->
									<div class="col-lg-4">
									 <div class="panel panel-yellow ">
										<div class="panel-heading">
											<div class="row">
												<div class="col-xs-3">
													<i class="fa fa-th-large fa-5x"></i>
												</div>
												<div class="col-xs-9 text-right">
													<div class="huge">--</div>
													<div>個人使用次數</div>
												</div>
											</div>
										</div>
										<a class="disabled" >
											<div class="panel-footer">
												<span class="pull-left">條件式項目</span>
												<span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
												<div class="clearfix"></div>
											</div>
										</a>
									</div>
									</div>
									
									<div class="col-lg-4">
									 <div class="panel panel-yellow ">
										<div class="panel-heading">
											<div class="row">
												<div class="col-xs-3">
													<i class="fa fa-th-large fa-5x"></i>
												</div>
												<div class="col-xs-9 text-right">
													<div class="huge">--</div>
													<div>個人使用次數</div>
												</div>
											</div>
										</div>
										<a class="disabled" >
											<div class="panel-footer">
												<span class="pull-left">迴圈項目</span>
												<span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
												<div class="clearfix"></div>
											</div>
										</a>
									</div>
									</div>
									
									<div class="col-lg-4">
									 <div class="panel panel-yellow ">
										<div class="panel-heading">
											<div class="row">
												<div class="col-xs-3">
													<i class="fa fa-th-large fa-5x"></i>
												</div>
												<div class="col-xs-9 text-right">
													<div class="huge">--</div>
													<div>個人使用次數</div>
												</div>
											</div>
										</div>
										<a class="disabled" >
											<div class="panel-footer">
												<span class="pull-left">函式項目</span>
												<span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
												<div class="clearfix"></div>
											</div>
										</a>
									</div>
									</div>
									
                            <!-- Tab panes -->
                           
                        </div>
                        <!-- /.panel-body -->
                    
                        <div class="panel-footer">
                            此區塊顯示個人於此 C# 課程的學習完成度。
                        </div>
					</div>
                    <!-- /.panel -->
					
					
					
					
					
					
					
					
                </div>
                <!-- /.col-lg-12 -->
				
				
				
				
				
				
				
				
				
            </div>
			<!-- /.row -->
			
			
		
			
			
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
				rectangle_draw(context,centerX/3-30,centerY+50,60,40,'rgba(118,97,254,0.3)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3,centerY+70,"i=0",16);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3, centerY+90, centerX/3, centerY+130);
				//繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色[option])
				circle_draw(context,centerX/3,centerY+140,10);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3, centerY+150, centerX/3, centerY+170);
				//繪製 菱形(畫布,中心點X,中心點Y,長度,顏色[option])
				diamond_draw(context,centerX/3,centerY+170,30,'rgba(94,252,231,0.6)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3,centerY+190,"While",16);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3,centerY+210,"i<n",16);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3, centerY+230, centerX/3, centerY+330);
				
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX/3-20,centerY+250,40,30,'rgba(178,206,253,1)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3,centerY+265,"NO",16);
				//繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色[option])
				circle_draw(context,centerX/3,centerY+350,20);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3,centerY+350,"結束",16);	
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+60, centerY+200, centerX/3+160, centerY+200);
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX/3+90,centerY+185,40,30,'rgba(178,206,253,1)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+110,centerY+200,"YES",16);
				
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX/3+160,centerY+180,60,40,'rgba(118,97,254,0.3)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+190,centerY+200,"j=0",16);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+190, centerY+220, centerX/3+190, centerY+250);
				
				
				//繪製 菱形(畫布,中心點X,中心點Y,長度,顏色[option])
				diamond_draw(context,centerX/3+190,centerY+250,30);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+190,centerY+270,"While",16);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+190,centerY+290,"j<n",16);
				
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+190, centerY+310, centerX/3+190, centerY+330,1);
				
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX/3+170,centerY+330,40,30,'rgba(178,206,253,1)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+190,centerY+345,"YES",16);
				
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+190, centerY+360, centerX/3+190, centerY+375);
				
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX/3+140,centerY+375,100,60,'rgba(255,40,40,0.3)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+190,centerY+390,"t=x",16);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+190,centerY+405,"x=y",16);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+190,centerY+420,"y=t+x",16);
				
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+190, centerY+435, centerX/3+190, centerY+450);
				
				//繪製 平行四邊形(畫布,中心點X,中心點Y,長度,顏色)
				parallelogram_draw(context,centerX/3+147,centerY+450,80,'rgba(35,255,35,0.3)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+190,centerY+478,"print(y)",16);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+190, centerY+514, centerX/3+190, centerY+540);
				
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX/3+160,centerY+540,60,40,'rgba(255,153,18,0.7)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+190,centerY+560,"j=j+1",16);
				
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+160, centerY+560, centerX/3+80, centerY+560);
				
				//繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色[option])
				circle_draw(context,centerX/3+70,centerY+560,10);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+70, centerY+550, centerX/3+70, centerY+290);
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
				rectangle_draw(context,centerX/3+350,centerY+260,60,40,'rgba(94,252,231,0.6)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3+380,centerY+280,"i=i+1",16);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+380, centerY+260, centerX/3+380, centerY+150);
				//繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色[option])
				circle_draw(context,centerX/3+380,centerY+140,10);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				canvas_arrow(context, centerX/3+370, centerY+140, centerX/3+10, centerY+140);
				
				
				//繪製 圓角矩形(畫布,已繪製矩形,圓角半徑,顏色)
				//drawRoundedRect(context,centerX/18+20,centerY+100, 530, 540,30,'rgba(94,252,231,1)');
				drawRoundedRect(context,centerX/3-80,centerY+100, 530, 540,30,'rgba(94,252,231,1)');
				//繪製 圓角矩形(畫布,已繪製矩形,圓角半徑,顏色)
				drawRoundedRect(context,centerX/3+40,centerY+235, 290, 370,30,'rgba(255,153,18,1)');
				
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
			};
	//初始化畫布
	draw();
	//持續更新函式
	update_draw=function(){ 		
				if((animate_key>0)&&
				($.trim(arrayObj_input).length > 0)&&flow_tips_click ==false)								
				  update_text(arrayObj_input);	
				  //DIV scrollbar保持在底部
				 	//var scrollHeight = $('#output_div').prop("scrollHeight");
					//$('#output_div').scrollTop(scrollHeight,200);
				  
	}
	//sync stop and resume for loop
	delayTime= async function(sync,input_val){
			var index_i=0;
			var cal_n=parseInt(input_val[2]);
			var cal_x=parseInt(input_val[0]);
			var cal_y=parseInt(input_val[1]);
			var cal_t=0;  
			//stop update frame
			clearInterval(action_draw);
	
			if(sync==0){
				//動畫過程禁止操作
				$("#initial_step").attr("disabled",true);
				$("#previous_step").attr("disabled",true);
				$("#next_step").attr("disabled",true);
				$("#final_result").attr("disabled",true);
				//$("#run").attr("disabled",true);
				$("#reset").attr("disabled",true);
				
				//while loop 
				while(index_i<cal_n)
				{
					var index_j=0;
					if(index_i>0){
					$("custom_div").fadeOut(200);												
					$("#cc"+7+"_focus").fadeIn(1000);
					}
					await delay(1000);
					
					
					while(index_j<cal_n)
					{
						
						$("custom_div").fadeOut(200);												
						$("#cc"+9+"_focus").fadeIn(1000);
						cal_t=cal_x;
						cal_x=cal_y;
						cal_y+=cal_t;
						await delay(1000);
						$("custom_div").fadeOut(200);												
						$("#cc"+13+"_focus").fadeIn(1000);						
						$("#final_output").append("y:"+cal_y+"<br/>");
						index_j+=1;		
						await delay(1000);
					
					}												
					index_i+=1;				
				
				}
				sync_switch=2;
				action_draw_inner =setInterval(update_draw, 50);	
				
				/*delay().then(function(){
							
									clearInterval(action_draw);
									 $("#final_output").append('<br/>'+9+'<br/>');
										
										
										
									
									  return delay(2000); // 延遲ㄧ秒
									}).then(function(){
									
									  $("#final_output").append(10+'<br/>');
									
										
									  return delay(2000); // 延遲一秒
									  
									}).then(function(){
									 $("#final_output").append(11+'<br/>');
										
										action_draw_inner =setInterval(update_draw, 50);	
										sync_switch=2;
										
										//return delay(10000); // 延遲一秒
										//sync_switch=2;
									});*/
			}else {
			
				//clearInterval(action_draw_inner);
				//action_draw =setInterval(update_draw, 50);	
				$("#initial_step").attr("disabled",false);
				$("#previous_step").attr("disabled",false);
				$("#next_step").attr("disabled",false);
				$("#final_result").attr("disabled",false);
				//$("#run").attr("disabled",false);
				$("#reset").attr("disabled",false);
				//action_draw =setInterval(update_draw, 50);	
				
				//while loop 
				while(index_i<cal_n)
				{
					var index_j=0;
					while(index_j<cal_n)
					{
						
						cal_t=cal_x;
						cal_x=cal_y;
						cal_y+=cal_t;
							
						$("#final_output").append("y:"+cal_y+"<br/>");
						index_j+=1;	
					
					}												
					index_i+=1;				
				
				}
			// action_draw =setInterval(update_draw, 50);
				if(animate_key==7)
				{		
						//$("custom_div").fadeOut(100);		
				$("#cc"+7+"_focus").fadeOut(200);												
				$("#cc"+13+"_focus").fadeIn(1000);
				//animate_key==6
				}else $("custom_div").fadeOut(100);
				
				
				
			}
	
	
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
				  if(animate_key>=1)
				 // $("#final_output").html("x:"+input_val[0]+"<br/>");
				 text_draw(context,centerX, centerY-10,'[Input]',28,'left');
				 text_draw(context,centerX, centerY+20,'x:'+input_val[0],28,'left');
				  if(animate_key>=2)
				 text_draw(context,centerX, centerY+50,'y:'+input_val[1],28,'left');
				//  $("#final_output").append("y:"+input_val[1]+"<br/>");
				  if(animate_key>=3)
				//  $("#final_output").append("n:"+input_val[2]);
				 text_draw(context,centerX, centerY+80,'n:'+input_val[2],28,'left');
				  //step1.1: draw rectangle line
				  if(animate_key>=4)
				  {
					if(time_y<50)
					time_y+=10;
					else if (previous_step_position>animate_key && time_y>50)
					time_y-=10;
				//	$("#final_output").append(previous_step_position+'/'+animate_key);
					//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				    //rectangle_draw(context,centerX/3-30,centerY+time_y,60,40,'rgba(118,97,254,0.3)');
					
					//繪製 矩形框線
					if(animate_key<=6){
					context.strokeStyle="#ff0000";
					context.strokeRect(centerX/3-30,centerY+time_y,60,40);
					}
					//text_draw(context,centerX-radius*2-30, centerY+radius*2+time_y,input_val[1],28,'right');
					
					//print x & y
					 if(animate_key>=5)
					 $("#final_output").html("x:"+input_val[0]+"<br/>");
					 if(animate_key>=6)
					 $("#final_output").append("y:"+input_val[1]+"<br/>=====以下為while loop計算=====<br/>");
					 
					 
					 
							 //step2 while loop:
						  if(animate_key>=7)
						  {
							if(time_y<100)
							time_y+=10;
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
							
							//step2.1 calculation loop (n)
							if(time_y>=100)
							delayTime(sync_switch,input_val);
												
							
							
						  }
				  }
				  
				  
				  
				  
				  //往下移動
				 //  if((animate_key==1&&time_y<54)
				/*  if((animate_key==2&&time_y<204)
				  ||(animate_key==3&&time_y<360))
				  {
					time_y+=20;
					//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				    //rectangle_draw(context,centerX/3-30,centerY+50,60,40,'rgba(118,97,254,0.3)');
				  }
				  */
				  
				  /*
				  //往上移動
				  if((animate_key==4&&time_y>54)
				  ||(animate_key==5&&time_y>204))
				  {
				    time_y-=20;
				  }
				  */
				  }
	
	
	
	
	}
	//Animate draw (畫面每幀更新幾毫秒)
	action_draw =setInterval(update_draw, 50);	
	//if(sync_switch==2)setInterval(update_draw, 50);	
	
   
	  

	});
	
	
	</script>
	
	
</body>

</html>
