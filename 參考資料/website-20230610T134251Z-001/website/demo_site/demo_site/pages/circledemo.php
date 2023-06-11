<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>眼動程式設計-條件判斷</title>

    <!-- Bootstrap Core CSS -->
	
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/demo_2.css" rel="stylesheet">

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
			<div id='page'   data-value="condition"></div>
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
                        <h1 class="page-header">眼動程式設計-條件判斷demo</h1>
									
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
                            <div  class="tooltip-demo tab-content" style="height: 500px">
                                


<h4 >
<custom_div id='cc1_focus' ></custom_div><span class='code_contents1' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="輸入值：輸入一個數值x"> x  = int ( input (" enter a number: "))</span></h4>

<h4 >
<custom_div id='cc2_focus' ></custom_div><span class='code_contents6' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="輸入值x大於0的時候"> if  x > 0 :</span></h4>

<h4 >
<custom_div id='cc3_focus' ></custom_div><span class='code_contents5' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="m的值會等於x乘以2">&emsp;&emsp; m  = x  * 2</span></h4>

<h4 >
<custom_div id='cc4_focus' ></custom_div><span class='code_contents5' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="n的值會等於x減掉50">&emsp;&emsp; n   = x  - 50</span></h4>

<h4 >
<custom_div id='cc5_focus' ></custom_div><span class='code_contents6' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="當輸入值x等於0的時候"> elif x ==  0 :</span></h4>

<h4 >
<custom_div id='cc6_focus' ></custom_div><span class='code_contents5' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="m的值會等於1減掉x的值">&emsp;&emsp; m  = 1  - x</span></h4>

<h4 >
<custom_div id='cc7_focus' ></custom_div><span class='code_contents5' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="n的值會等於0">&emsp;&emsp; n   = 0</span></h4>

<h4 >
<custom_div id='cc8_focus' ></custom_div><span class='code_contents6' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="在此程式表示輸入值x不大於0，也不等於0的其他情形"> else:</span></h4>

<h4 >
<custom_div id='cc9_focus' ></custom_div><span class='code_contents5' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="m的值會等於-1">&emsp;&emsp; m  = -1</span></h4>

<h4 >
<custom_div id='cc10_focus' ></custom_div><span class='code_contents5' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="n的值會等於-1">&emsp;&emsp; n   = -1</span></h4>   

<h4 >
<custom_div id='cc11_focus' ></custom_div><span class='code_contents3' data-html="true"  data-toggle="tooltip" data-placement="right"  
title="輸出輸入值 x值,m值與n值"> print( x , m , n )</span></h4>                         



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
                            <div class="tab-content" style="height: 230px">
                               <h4 id='final_output'> 等待運算中...</h4>
                                    

                                    
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
					<button id='code_explanation' type="checkbox" class="btn btn-warning btn-lg btn-block">程式解釋</button>
					
					</div>
					
				</div>
					<!-- Start input something or animation...-->
					<div class="row">
					<div class="col-lg-12">
					<hr/>
						
					    <div id='it1' hidden class="itAll form-group text-right">
						<label>請輸入X：</label>
						<input id="input_text1" class="input_textAll foem-control"  placeholder="Enter the number" type='number'
						 oninput='this.value=parseInt(this.value.replace(/[^\-?\d]/g,""))'>
						</div>
						<!-- <div id='it2' hidden class=" itAll form-group text-right" style= "visibility:hidden">
						<label>m:</label>
						<input id="input_text2" class=" input_textAll foem-control" >
						</div>
						 <div id='it3' hidden class="itAll form-group text-right" style= "visibility:hidden">
						<label>n:</label>
						<input id="input_text3" class="input_textAll foem-control">
						</div>-->
					</div>
					<div class="col-lg-12" >
					<div id="main_canvas" hidden>
					
					<canvas id="myCanvas" width="600px" height="750px" align="right">
					
					</div>
					
					</div>
						
						
					<!-- /. Start input something or animation...-->
					
 
				</div>
				<!-- /.col-lg-6 -->
				 
				</div>
				<!-- /.row -->
				
				
				
				
				
				
            </div>
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
	<script src="../dist/js/ext_jquery_2.js"></script>
	
	<!--draw animation only this page-->
	<script>
	$(function() {	
	 
	 //global function
	 draw=function(input_val){			
				if(context!=''){
				//清除畫布
				context.clearRect(0, 0, canvas.width, canvas.height);
				
				//繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色[option])
				circle_draw(context,centerX/3,centerY,50);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3,centerY,"開始",18);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點Y)
				
				
				
				canvas_arrow(context, centerX/3, centerY+50, centerX/3, centerY+100);
				//繪製 菱形(畫布,中心點X,中心點Y,長度,顏色[option])
				diamond_draw(context,centerX/3,centerY+100,50);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3,centerY+150,"if(x>0)",20);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點Y)
				canvas_arrow(context, centerX/3, centerY+200, centerX/3, centerY+250);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/4.5,centerY+225,"不成立",18);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點Y)
				canvas_arrow(context, centerX/1.5, centerY+150, centerX, centerY+150);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX*0.8,centerY+130,"成立",18);
				
				
				
				//繪製 菱形(畫布,中心點X,中心點Y,長度,顏色[option])
				diamond_draw(context,centerX/3,centerY+250,50);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3,centerY+300,"else if(x==0)",20);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點Y)
				canvas_arrow(context, centerX/3, centerY+350, centerX/3, centerY+400);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/4.5,centerY+375,"不成立",18);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點Y)
				canvas_arrow(context, centerX/1.5, centerY+300, centerX, centerY+300);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX*0.8,centerY+280,"成立",18);
				
				
				//繪製 菱形(畫布,中心點X,中心點Y,長度,顏色[option])
				diamond_draw(context,centerX/3,centerY+400,50);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3,centerY+450,"else",20);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點Y)
				canvas_arrow(context, centerX/3, centerY+500, centerX/3, centerY+550);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/4.5,centerY+525,"不成立",18);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點Y)
				canvas_arrow(context, centerX/1.5, centerY+450, centerX, centerY+450);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX*0.8,centerY+430,"成立",18);
				
				
				//繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色[option])
				circle_draw(context,centerX/3,centerY+600,50,'rgba(127,255,0,1)');
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX/3,centerY+600,"結束",18);
				
				
				
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX,centerY+100,150,80);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX+75,centerY+130,"m=x*2",20);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX+75,centerY+150,"n=x-50",20);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點Y)
				canvas_arrow(context, centerX+(centerX/2), centerY+150, centerX+(centerX/1.5), centerY+150);
				
				
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX,centerY+250,150,80);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX+75,centerY+280,"m=1-x",20);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX+75,centerY+300,"n=0",20);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點Y)
				canvas_arrow(context, centerX+(centerX/2), centerY+300,centerX+(centerX/1.5), centerY+300);
				
				
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw(context,centerX,centerY+410,150,80);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX+75,centerY+435,"m=-1",20);
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊[option])
				text_draw(context,centerX+75,centerY+455,"n=-1",20);
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點Y)
				canvas_arrow(context, centerX+(centerX/2), centerY+450, centerX+(centerX/1.5), centerY+450);
	
				
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點Y)
				canvas_arrow(context, centerX+(centerX/1.5), centerY+150, centerX+(centerX/1.5), centerY+530);
				
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點Y)
				canvas_arrow(context, centerX+(centerX/1.5), centerY+530, centerX/3, centerY+530);
				

				
				 //繪製 文字移動
				 if(input_val!=''){
				   
				  //final 顯示部分
				  if(animate_key==11&&time_y>560)
					 text_draw(context,centerX/6+time_x, centerY+560,input_val,20,'right');
				  else
				    // text_draw(context,centerX-radius*2-30, centerY+radius*2+time_y,input_val,28,'right');
					 
					 text_draw(context,centerX/6+time_x, centerY+time_y-2,input_val,20,'right');
				  
				  
				  
				   
				  
				  //往下移動
				   if((animate_key==1&&time_y<40)
				  ||(animate_key==2&&time_y<80)
				  ||(animate_key==5&&time_y<240)
				  ||(animate_key==8&&time_y<400))
				  {
					time_x = 0;
					time_y+=2;
				  }
				  
				  //往上移動
				  if((animate_key==1&&time_y>40)
				  ||(animate_key==2&&time_y>80)
				  ||(animate_key==5&&time_y>240)
				  ||(animate_key==8&&time_y>400))
				  {
					time_x = 0;
					time_y-=2;
				  }
				  
				   //往右移動
				   if ((animate_key==3||animate_key==6||animate_key==9)&&time_x<400)
				   {   
						time_x+=2;
				   }
				   
			
				   //往左移動
				   if ((animate_key==2||animate_key==5||animate_key==8)&&time_x>=0)
				   {   
						time_x-=2;
				   }
				  //結束移動上一步
				  if((animate_key==4&&time_y>80)
				  ||(animate_key==7&&time_y>240)
				  ||(animate_key==10&&time_y>400))
				  {
					time_y-=2;
				  }
				  if((animate_key==10||animate_key==7||animate_key==4)&&time_x<400){
				  
						time_x+=2;
				  }
				  //結束移動
				  if(animate_key==11&&time_y<=560){
				      
						time_y+=2;				  
				  }
				  if(animate_key==11&&time_x>=0){
				  
						time_x-=2;
				  }
				  
				  
				  }
				}
	}
	
	
	/*********************
	***以下開始繪製圖形***
	*********************/	
	//初始化畫布
	draw('');
	//Animate draw (畫面每幀更新幾毫秒)
	setInterval(function(){ 
				if((animate_key>0)&&
				($.trim($('#input_text1').val()).length > 0)&&flow_tips_click ==false)				
				draw($('#input_text1').val());
	}, 10);	
	
	});
	</script>
	
	
</body>

</html>
