//全域變數存放
//不加 var 為全域變數宣告(整個html頁面適用)
$(function() {	
	//動態大小
	//canvas.width = this.documentElement.clientWidth;
	//canvas.height = this.documentElement.clientHeight;
	
	//alert(0);
	
	
	 //步驟位置
	 step_position=0;
	 //繪圖的時間位置x 及 y
	 time_y=-100;
	 time_x=-100;
	 //動畫關鍵值
	 animate_key=0;
	 
	 //依序對應 模擬提示,流程提示,架構提示,程式解釋 點選的開關
	 sl_tips_click=true;
	 flow_tips_click=true;
	 framework_tips_click=true;
	 code_explanation_click=true;	
	 
	//存放draw函式的object
     //myModule = {};
	 
	 //畫布參數指定
	 canvas = document.getElementById('myCanvas');
	 //for function canvas
	 //canvasA = document.getElementById('myCanvas_functionA');
	 //canvasB = document.getElementById('myCanvas_functionB');
	 
	 
	 //canvas.width = 600;
	 //canvas.height = document.getElementById('main_canvas2').style.height;
	 
	 
	 //alert(centerX);
	 centerX = canvas.width/2+40;
	 centerY = canvas.height / 10-30;
	
	 radius = 50;
	 if (canvas.getContext) {			
				context = canvas.getContext('2d');	
				//for function canvas
				//contextA = canvasA.getContext('2d');	
				//contextB = canvasB.getContext('2d');	
				
	 }else {
		 context = '';
		// contextA = '';
		// contextB = '';
	 }
	 
	 //計算指標div個數
	  cc_count = $("custom_div").length;
	  //記錄前次的按鈕選項
	  previous_step_position=0;
	  
	  var m = ""; //需計算之m值
	var n = ""; //需計算之n值
	check_page=document.getElementById("page").getAttribute("data-value");
	//input id
	arrayObj = new Array();　
	//input value
	arrayObj_input = new Array();
});




//tooltip
//滑鼠移過去將顯示標籤內的title內容
$(function() {
	//目前為滑鼠hover事件
	//將改為 自動撥放事件(Pending)
	$('[data-toggle="tooltip"]').tooltip('disable');
	//$("[data-toggle='tooltip_A123']").tooltip();
	
});

//button click 事件
//彙集頁面使用的點擊事件
$(function() {
	 /*****************************************
	 **css 相關內容請參閱 ~\dist\css\demo.css**
	 *****************************************/
	
	//模擬提示 click 事件
	$("#sl_tips").click(function(){
				//點擊變色(加入 class=hightlight 並移除原始 btn-warning)
				if ( sl_tips_click === true ) {
				  $(this).removeClass('btn-warning').addClass('highlight');
				  sl_tips_click =false;
				} else if ( sl_tips_click === false ) {
				 $(this).removeClass('highlight').addClass('btn-warning');
				  sl_tips_click =true;
				}
				//開啟 input div標籤內容(毫秒)
				$(".itAll").toggle(500);
				
	});	
	
	//流程提示 click 事件
	 $("#flow_tips").click(function(){
		
				//點擊變色(加入 class=hightlight 並移除原始 btn-warning)			
				if ( flow_tips_click === true ) {
				 $(this).removeClass('btn-warning').addClass('highlight');
				 flow_tips_click =false;
				 $('[data-toggle="tooltip_F2"]').tooltip('enable');
				 $('[data-toggle="tooltip_F1"]').tooltip('enable');
				} else if ( flow_tips_click === false ) {
				$(this).removeClass('highlight').addClass('btn-warning');
				  flow_tips_click =true;
				 
				 	 $('[data-toggle="tooltip_F2"]').tooltip('disable');
					  $('[data-toggle="tooltip_F1"]').tooltip('disable');
				  //$('#A1234').tooltip('enable');
				}
				//開啟 canvas標籤內容(毫秒)
				$("#main_canvas").toggle(500);				
				$("#main_canvas2").toggle(500);
	});	
			
	//架構提示 click 事件	
	$("#framework_tips").click(function(){
				//點擊變色(加入 class=hightlight 並移除原始 btn-warning)	
				if ( framework_tips_click === true ) {
				  $(this).removeClass('btn-warning').addClass('highlight');
				  //顯示 程式解釋 按鈕 
				  //$("#code_explanation").attr("disabled",false);
				  framework_tips_click =false;
				} else if ( framework_tips_click === false ) {
				  $(this).removeClass('highlight').addClass('btn-warning');
				  framework_tips_click =true;
				  //隱藏 程式解釋 按鈕  並回復原始class 內容
				 // $("#code_explanation").attr("disabled",true);
				 // $("#code_explanation").removeClass('highlight').addClass('btn-warning');
				  //隱藏 tooltip效果
				 // $('[data-toggle="tooltip"]').tooltip('disable');
				}
				
				//該行程式碼加入class(底色變色的class)
				//$("#code_contents1").toggleClass('code1');
				//$("#code_contents2").toggleClass('code2');
				$('.code_contents1').toggleClass('code_blue');
				$('.code_contents2').toggleClass('code_purple');
				$('.code_contents3').toggleClass('code_green');
				$('.code_contents5').toggleClass('code_red');
				$('.code_gp1').toggleClass('code_gp_green');
				$('.code_gp2').toggleClass('code_gp_orange');
				//for demo2(函式)
				$('.code_gp3').toggleClass('code_gp_yellow');
				$('.code_gp0A').toggleClass('code_gp_pinkA');
				$('.code_gp0B').toggleClass('code_gp_pinkB');
	});		
			
	//程式解釋 click 事件		
	$("#code_explanation").click(function(){
			   //點擊變色(加入 class=hightlight 並移除原始 btn-warning)	
			   if ( code_explanation_click === true ) {
				  $(this).removeClass('btn-warning').addClass('highlight');
				  code_explanation_click =false;
				  //顯示 tooltip效果
				  $('[data-toggle="tooltip"]').tooltip('enable');			
				} else if ( code_explanation_click === false ) {
				  $(this).removeClass('highlight').addClass('btn-warning');
				  code_explanation_click =true;
				  //隱藏 tooltip效果
				 $('[data-toggle="tooltip"]').tooltip('disable');
				}
	});
	
	/*******************************
	***以下區域為底部六個按鈕事件***
	*******************************/
	
	// 執行 按鈕 click事件
	$("#run").click(function(){
		
				//偵測使用者是否有輸入任何值
				//input 數量
				 var input_count = $("input").length;
				// var arrayObj = new Array();　
				 var i =0;
				 //偵測使用者是否有輸入任何值
				//$('ID(or Class)').each(function(){ /...code here.../ });
				//遍历一个jQuery对象，为每个匹配元素执行一个函数。
				 $('.input_textAll').each(function(){
					if(!$(this).val()){
						//alert($(this).attr('id'));
						$(this).addClass("error_input");
						if(i==0)
						{
							$(this).focus();
							
							alert("Enter text please.");							
							i++;
						}
						
					} else{
						$(this).removeClass("error_input");
						arrayObj.push($(this).attr('id'));
						arrayObj_input.push($(this).val());
					}});
				//alert(arrayObj.length);
				//若有的話 輸入欄位& 執行按鈕 =唯讀 & 失效
				//其他 按鈕 改成可操作的狀態
			
				if(arrayObj.length==input_count)
				{
					//alert('進來了');
					$('.input_textAll').addClass("lock_input");
					$('.input_textAll').attr("readonly",true);
					//$('.input_textAll').css('background-color', 'yellow');
					
					$("#initial_step").attr("disabled",false);
					$("#previous_step").attr("disabled",false);
					$("#next_step").attr("disabled",false);
					$("#final_result").attr("disabled",false);
					$("#run").attr("disabled",true);
					//先隱藏custom_div內容,在增加三角形指標的class
					$("custom_div").hide();
					$("custom_div").addClass("glyphicon glyphicon-play fa-1x text-danger");
					//顯示標註首個code內容
					$("#cc1_focus").fadeToggle(1000);
					step_position=1;
					animate_key=1;
					if(check_page!='function')
					var obj={"x":arrayObj_input[0],"y":arrayObj_input[1],"n":arrayObj_input[2]};
					else var obj={"x":arrayObj_input[0],"y":arrayObj_input[1]};
					var myJSON = JSON.stringify(obj);
					//alert(document.getElementById("uid").getAttribute("data-value"));
					//寫入DB
					 $.post("page_submit.php",
						  {
							submit:"CheckOK",
							id:document.getElementById("uid").getAttribute("data-value"),
							name:document.getElementById("uname").getAttribute("data-value"),
							input:myJSON,
							from:check_page
							//department:$('#department').val(),
							//type:$('#type').val()
						  },
						  function(data,status){
							 alert("Data Loaded: " + data);
								/*if(data&&data=="註冊失敗，已有相同的使用者編號。")
									alert('請重新輸入使用者編號。');
									else{
										if(confirm("Data: " + data + "\nStatus: " + status))
										{
											alert('重新回到登入頁面。');
											window.location.href='login.php';	
											
										}else
										{
											alert('重新回到登入頁面。');
											window.location.href='login.php';	
											
										}
										
									}*/
								
						  });
					
					
					
					
				}
				else
				{
				  //alert("Enter text please.");  
				 // $("#input_text1").focus();
				
				  step_position=0;				  
				 }
	});
	// 最初 按鈕 click事件
	$("#initial_step").click(function(){
		
				$("#previous_step").attr("disabled",false);
				$("#next_step").attr("disabled",false);
				step_position=1;	
				animate_key=1;
                time_y=-100;
				
				//三角指標 指向 首個code內容
				$("custom_div").fadeOut(200);
				$("#cc1_focus").fadeIn(1000);
				//$("#cc2_focus").fadeOut(1000);	
				
				//還原 輸出結果 內容
				$("#final_output").hide();
				$("#final_output").html("等待運算中...");
				$("#final_output").fadeIn(1000);
				
	});
	$("#scrollbar_btn").click(function(){
		var scrollHeight = $('#output_div').prop("scrollHeight");
		$('#output_div').scrollTop(scrollHeight,200);
	});
	//上一步  按鈕 click事件
	$("#previous_step").click(function(){
				
				//判斷目前 步驟所在位置
				//淡出淡入 三角指標 至 上個位置
				//若目前位置為final 則同時還原輸出結果內容
				/*if(step_position===2)
				{
				$("#cc2_focus").fadeToggle(1000);
				$("#cc1_focus").fadeToggle(1000);
				step_position=1;
				animate_key=4;
				}
				
				if(step_position===3)
				{
				$("#cc2_focus").fadeIn(1000);
				step_position=2;
				animate_key=5;
				$("#final_output").hide();
				$("#final_output").html("等待運算中...");
				$("#final_output").fadeIn(1000);
				}*/
				
				if((step_position>1 &&step_position<=7)&& step_position<=cc_count)
				{
				//$("#cc2_focus").fadeToggle(1000);
				//$("#cc1_focus").fadeToggle(1000);
							
				previous_step_position=step_position;
				step_position--;
				animate_key--;				
				var cc_id="#cc"+step_position+"_focus";							
				$("custom_div").fadeOut(200);
				$(cc_id).fadeIn(1000);
					if(previous_step_position==cc_count)
					{
						$("#final_output").hide();
						$("#final_output").html("等待運算中...");
						$("#final_output").fadeIn(1000);						
					}
				}
				
				
				
				
				
				
	});
	// 下一步 按鈕 click事件
	$("#next_step").click(function(){
		
		
				//判斷目前 步驟所在位置
				//淡出淡入 三角指標 至 下個位置
				if(check_page!='function')
				var max=7;
				else var max=3;
				if((step_position>=1 &&step_position<max)&& step_position<cc_count)
				{
				//$("#cc1_focus").fadeToggle(1000);
				//$("#cc2_focus").fadeToggle(1000);
				previous_step_position=step_position;
				step_position++;
				animate_key++;				
				var cc_id="#cc"+step_position+"_focus";							
				$("custom_div").fadeOut(200);
				$(cc_id).fadeIn(1000);
				//alert(step_position);
				}
	});
	// 最終結果 按鈕 click事件
	$("#final_result").click(function(){
				//step_position=cc_count;
				//animate_key=cc_count;
				if(check_page!='function')
				var max=7;
				else var max=3;
				
				step_position=max;
				animate_key=max;
				if(check_page!='function'){
				$("#previous_step").attr("disabled",true);
				$("#next_step").attr("disabled",true);}
				//淡出隱藏所有三角指標
				//$("custom_div").fadeOut(200);
				var cc_id="#cc"+step_position+"_focus";		
				//var cc_id="#cc"+13+"_focus";
				$("custom_div").fadeOut(200);
				$(cc_id).fadeIn(1000);
				//先隱藏寫入final 的三角指標 + 程式輸出內容
				//再淡入顯示 final_output 標籤內容
				//$("#final_output").hide();
				//$("#final_output").html("<div class='glyphicon glyphicon-play fa-1x text-success'></div> 歡迎 "+$('#input_text1').val());
				//$("#final_output").fadeIn(1000);
	});
	// 重置 按鈕 click事件
	$("#reset").click(function(){
				//重置所有變更及背景色
				$('.input_textAll').val('');
				$('.input_textAll').attr("readonly",false);
				//$('.input_textAll').css('background-color', 'transparent');
				$('.input_textAll').removeClass("lock_input");
				$('.input_textAll').removeClass("error_input");
				$("#initial_step").attr("disabled",true);
				$("#previous_step").attr("disabled",true);
				$("#next_step").attr("disabled",true);
				$("#final_result").attr("disabled",true);
				$("#run").attr("disabled",false);
				$("custom_div").removeClass("glyphicon glyphicon-play fa-1x text-danger");
				step_position=0;
				$("#final_output").hide();
				$("#final_output").html("等待運算中...");
				$("#final_output").fadeIn(1000);
				animate_key=0;
				arrayObj=[];
				arrayObj_input=[];
				//重新繪製圖形
		 		draw('');
				time_y=-100;	
				//重新開啟thread
				if(sync_switch==2)
				{					
					sync_switch=0;
					clearInterval(action_draw_inner);
					//alert(sync_switch);
					action_draw =setInterval(update_draw, 50);
				}
	});
	
	/***********************************
	***以下區域為使用者Input text事件***
	***********************************/
	//input_text1 輸入事件
	$(".input_textAll").keyup(function(){
				var value = $( this ).val();		
			  //確認使用者有輸入任何值
			  if($.trim(value).length > 0)
			  {
				  //顯示 底層六個按鈕區塊
				  $("#function_bar").show();
				  //網頁捲動至底部
				  //$('html,body').animate({ scrollTop: 9999 }, 'slow');
			  }
			  else  
			  {
				  //alert("Enter text please.");  
				 // $(".input_text1").focus();
			  }
	});
		
			
			
			
	
});



$(function() {
			 //declare global function		
			 
				//繪製 圓形(畫布,中心點X,中心點Y,半徑,顏色)
			 	circle_draw=function(context_,centerX_,centerY_,radius_,rgba_)
				{
				  context_.beginPath();
				  context_.arc(centerX_, centerY_ , radius_, 0, 2 * Math.PI, false);
				  //填充顏色
				  context_.fillStyle = 'rgba(255,255,255,0)';
				  context_.fill();				  
				  context_.lineWidth = 2;
				  //線條顏色
				  if(!rgba_||rgba_=='')
					context_.strokeStyle = 'rgba(9,9,220,1)';
				  else 			  
					context_.strokeStyle = rgba_;
				  context_.closePath();
				  context_.stroke();
				}
				//繪製 文字(畫布,中心點X,中心點Y,文字內容,文字大小,對齊)
				text_draw=function(context_,centerX_,centerY_,text_,textsize_,align_)
				{
				  context_.font = textsize_+"px Arial";
				   if(!align_||align_=='')
  				    context_.textAlign="center";
				   else 
					context_.textAlign=align_;
				  
				 
				  context_.fillStyle = 'rgba(0,0,0,1)';
				  context_.fillText(text_, centerX_, centerY_+textsize_/3);
				}
				//繪製 箭頭(畫布,起始點X,起始點Y,終點X,終點,箭頭大小)
				/*canvas_arrow=function(context_, fromx, fromy, tox, toy, len) {
				  var headlen = len; // length of head in pixels
				  if(!headlen)headlen=10;
				  var dx = tox - fromx;
				  var dy = toy - fromy;
				  //平面角度(弧度值)
				  var angle = Math.atan2(dy, dx);
				  context_.beginPath();
				  context_.moveTo(fromx, fromy);
				  context_.lineTo(tox, toy);
				  context_.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
				  context_.moveTo(tox, toy);
				  context_.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
				  context_.strokeStyle = 'rgba(0,0,0,1)';
				  context_.lineWidth = 3;
				  //context_.closePath();
				  context_.stroke();
				}*/
				
				canvas_arrow=function(context_, fromX, fromY, toX, toY,len) {
					var headlen = len; // length of head in pixels
					if(!headlen)headlen=10;
					var theta = 30;//自定义箭头线与直线的夹角，个人觉得45°刚刚好
					var arrowX, arrowY;//箭头线终点坐标
					// 计算各角度和对应的箭头终点坐标
					var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI;
					var angle1 = (angle + theta) * Math.PI / 180;
					var angle2 = (angle - theta) * Math.PI / 180;
					var topX = headlen * Math.cos(angle1);
					var topY = headlen * Math.sin(angle1);
					var botX = headlen * Math.cos(angle2);
					var botY = headlen * Math.sin(angle2);
					context_.beginPath();
					//画直线
					context_.moveTo(fromX, fromY);
					context_.lineTo(toX, toY);

					arrowX = toX + topX;
					arrowY = toY + topY;
					//画上边箭头线
					context_.moveTo(arrowX, arrowY);
					context_.lineTo(toX, toY);

					arrowX = toX + botX;
					arrowY = toY + botY;
					//画下边箭头线
					context_.lineTo(arrowX, arrowY);
					context_.lineWidth = 3;
					context_.strokeStyle = 'rgba(0,0,0,1)';
					//context_.closePath();
					context_.stroke();
				}
				//繪製 菱形(畫布,中心點X,中心點Y,長度,顏色)
				diamond_draw=function(context_,centerX_,centerY_,lenth_,rgba_)
				{
					 // Filled diamond
					context_.beginPath();
					context_.moveTo(centerX_,centerY_);
					context_.lineTo(centerX_+lenth_*2,centerY_+lenth_);
					context_.lineTo(centerX_,centerY_+lenth_*2);
					context_.lineTo(centerX_-lenth_*2,centerY_+lenth_);
					context_.lineTo(centerX_,centerY_);
									
					if(!rgba_||rgba_=='')
						context_.fillStyle = 'rgba(255,153,18,0.7)';
				    else 			  
						context_.fillStyle = rgba_;
				
					context_.fill();
				}
				
				//繪製 方形(畫布,起始點X,起始點Y,長度X,長度Y,顏色)
				rectangle_draw=function(context_,centerX_,centerY_,lenthX_,lenthY_,rgba_)
				{
					
									
					if(!rgba_||rgba_=='')
						context_.fillStyle = 'rgba(127,255,0,0.5)';
				    else 			  
						context_.fillStyle = rgba_;
					context_.fillRect(centerX_,centerY_,lenthX_,lenthY_);
					
				}
				//繪製 平行四邊形(畫布,中心點X,中心點Y,長度,顏色)
				parallelogram_draw=function(context_,centerX_,centerY_,lenth_,rgba_)
				{
					context_.beginPath();
					context_.moveTo(centerX_,centerY_);
					context_.lineTo(centerX_+lenth_*1.25,centerY_);
					context_.lineTo(centerX_+lenth_,centerY_+lenth_*0.8);
					context_.lineTo(centerX_-lenth_*0.25,centerY_+lenth_*0.8);
					context_.lineTo(centerX_,centerY_);
									
					if(!rgba_||rgba_=='')
						context_.fillStyle = 'rgba(255,153,18,0.7)';
				    else 			  
						context_.fillStyle = rgba_;
				
					context_.fill();
				}
			
			    //繪製 圓角矩形 point位 置回傳
					 Point=function(x, y) {
						return {x:x, y:y};
					}

				//繪製 圓角矩形(畫布,已繪製矩形,圓角半徑,顏色)
				
				drawRoundedRect=function(context_,x_, y_, w_, h_, r,rgba_) {
					
					
					    var ptA = Point(x_ + r, y_);
						var ptB = Point(x_ + w_, y_);
						var ptC = Point(x_ + w_, y_ + h_);
						var ptD = Point(x_, y_ + h_);
						var ptE = Point(x_, y_);
						
					
						context_.beginPath();
						
						context_.moveTo(ptA.x, ptA.y);
						context_.arcTo(ptB.x, ptB.y, ptC.x, ptC.y, r);
						context_.arcTo(ptC.x, ptC.y, ptD.x, ptD.y, r);
						context_.arcTo(ptD.x, ptD.y, ptE.x, ptE.y, r);
						context_.arcTo(ptE.x, ptE.y, ptA.x, ptA.y, r);

				 //線條顏色
				  if(!rgba_||rgba_=='')
					context_.strokeStyle = 'rgba(9,9,220,1)';
				  else 			  
					context_.strokeStyle = rgba_;
					context_.lineWidth = 5;
					context_.stroke();					
							  
						
				}	
});
