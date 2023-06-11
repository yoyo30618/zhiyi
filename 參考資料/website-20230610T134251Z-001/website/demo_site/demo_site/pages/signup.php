<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>眼動程式設計課程-註冊</title>

    <!-- Bootstrap Core CSS -->
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">

	
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

</head>

<body>

    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">請輸入註冊資訊 </h3>
                    </div>
                    <div class="panel-body">
                        
                            <fieldset>
                                <div class="form-group">
                                    <label class="control-label" >使用者編號</label>
									<input class=" form-control" placeholder="請輸入使用者編號" name="id"  id="id"type="text" value="<?php echo @$_GET['id'];?>">
                                </div>
                                <div class="form-group">
								   <label class="control-label" >使用者密碼</label>
                                    <input class=" form-control" placeholder="請輸入使用者密碼" name="password" id="password" type="password" value="<?php echo @$_GET['password'];?>">
                                </div>
                               <div class="form-group">
								   <label class="control-label" >姓名</label>
                                    <input class=" form-control" placeholder="請輸入姓名" name="name" id="name"type="text" value="">
                                </div>
								<div class="form-group">
								   <label class="control-label" >就讀學校</label>
                                    <input class=" form-control" placeholder="請輸入學校" name="school" id="school"type="text" value="">
                                </div>
								<div class="form-group">
								   <label class="control-label" id="department2">就讀科系</label>
                                    <input class=" form-control" placeholder="請輸入科系" name="department" id="department" type="text" value="">
                                </div>
								<div class="form-group">
								   <label class="control-label" >身份</label>
                                    <select class="form-control" name="type"  id="type">
                                                <option value ="0" selected >受試者</option>
                                                <option value ="1">出題老師</option>
                                               
                                            </select>
                                </div>
                                <!-- Change this to a button or input when using this as a form -->
                                <input type="text" name="submit" value="Sign-up" hidden>
								<button id='submit_btn' class="btn btn-lg btn-success btn-block">Sign-up</button>
                            </fieldset>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- jQuery -->
    <script src="../bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>

	<script>
	$(function() {	
		
		$("#submit_btn").click(function(){
			
				//偵測使用者是否有輸入任何值
				//input 數量
				 var input_count = $("input").length;
				 //alert(input_count);
				 var arrayObj = new Array();　
				 var i =0;
				 //偵測使用者是否有輸入任何值
				//$('ID(or Class)').each(function(){ /...code here.../ });
				//遍历一个jQuery对象，为每个匹配元素执行一个函数。
				 $("input").each(function(){
					if(!$(this).val()){
						//alert($(this).attr('id'));
						//$(this).removeClass("input_textAll form-control");
						$(this).addClass("error_input");
						
						if(i==0)
						{
							//$(this).focus();
							
							alert("部分欄位尚未偵測到輸入值.");							
							i++;
						}
						
					} else{
						$(this).removeClass("error_input");
						arrayObj.push($(this).attr('id'));						
					}
					if(arrayObj.length==input_count)
					{
						alert("建立註冊資料中...");	
						//$.post(URL,data,callback);
						 $.post("signup_submit.php",
						  {
							submit:"CheckOK",
							id:$('#id').val(),
							password:$('#password').val(),
							name:$('#name').val(),
							school:$('#school').val(),
							department:$('#department').val(),
							type:$('#type').val()
						  },
						  function(data,status){
								if(data&&data=="註冊失敗，已有相同的使用者編號。")
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
										
									}
								
						  });
					}});
					
		});
		
		
	});
	
	
	
	
	</script>
	
</body>

</html>
