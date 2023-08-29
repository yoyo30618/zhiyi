function DrawLine($x1,$y1,$x2,$y2,$color){
    $x1=Number($x1);$y1=Number($y1);
    $x2=Number($x2);$y2=Number($y2);
    svgcode="<line x1='"+$x1+"' y1='"+$y1+"' x2='"+$x2+"' y2='"+$y2+"' stroke='"+$color+"' stroke-width='2''/>";
    return svgcode;
}
function DrawText($text,$x,$y,$size,$color){    
    $x=Number($x);$y=Number($y);
    $size=Number($size);
    svgcode="<text x='"+$x+"' y='"+$y+"' font-family='Microsoft JhengHei' font-size='"+$size+"' fill='"+$color+"'>"+$text+"</text>";
    return svgcode;
}
function DrawArrow($x1,$y1,$x2,$y2,$color){//目前僅限水平鑑頭
    $x1=Number($x1);$y1=Number($y1);
    $x2=Number($x2);$y2=Number($y2);
    svgcode="<line x1='"+$x1+"' y1='"+$y1+"' x2='"+$x2+"' y2='"+$y2+"' stroke='"+$color+"' stroke-width='2' />";
    svgcode+="<polygon points='"+$x2+","+$y1+" "+($x2-10)+","+($y1-10)+" "+($x2-10)+","+($y1+10)+"' fill='"+$color+"'/>";
    return svgcode;
}
function ForBox($leftupX,$leftupY,$RightBottomX,$RightBottomY,$StartNum,$EndNum,$NowNum,$VariableName,$color){    
    $leftupX=Number($leftupX);$leftupY=Number($leftupY);
    $RightBottomX=Number($RightBottomX);$RightBottomY=Number($RightBottomY);
    $StartNum=Number($StartNum);$EndNum=Number($EndNum);
    $NowNum=Number($NowNum);
    $BlockCnt=Math.abs($EndNum-$StartNum);
    $NowBlockCnt=Math.abs($NowNum-$StartNum);    
    svgcode="";
    //上方小格部分
    if($BlockCnt>5){//縮寫模式
        $OneBoxWidth=(Math.abs($leftupX-$RightBottomX)-20)/6;//一小格有多寬
        for(var $i=0;$i<6;$i++){//先畫個區隔線，會少一條
            svgcode+="<line x1='"+($leftupX+10+($OneBoxWidth/2)+($OneBoxWidth*$i))+"' y1='"+($leftupY+10)+"' x2='"+($leftupX+10+($OneBoxWidth/2)+($OneBoxWidth*$i))+"' y2='"+($leftupY+30)+"' stroke='black' stroke-width='2' />";
            if($i<3) svgcode+="<text x='"+($leftupX+($OneBoxWidth*$i))+"' y='"+($leftupY+25)+"' font-family='Microsoft JhengHei' font-size='20' fill='"+$color+"'>"+($StartNum+$i)+"</text>";
            else svgcode+="<text x='"+($leftupX+($OneBoxWidth*($i+1)))+"' y='"+($leftupY+25)+"' font-family='Microsoft JhengHei' font-size='20' fill='"+$color+"'>"+($EndNum-5+$i)+"</text>";
        }
        svgcode+="<text x='"+($leftupX+($OneBoxWidth*3))+"' y='"+($leftupY+20)+"' font-family='Microsoft JhengHei' font-size='20' fill='"+$color+"'>...</text>";
    
    }
    else{
        $OneBoxWidth=(Math.abs($leftupX-$RightBottomX)-20)/Math.abs($StartNum-$EndNum);//一小格有多寬
        for(var $i=0;$i<$BlockCnt;$i++){//先畫個區隔線，會少一條
            svgcode+="<line x1='"+($leftupX+10+($OneBoxWidth/2)+($OneBoxWidth*$i))+"' y1='"+($leftupY+10)+"' x2='"+($leftupX+10+($OneBoxWidth/2)+($OneBoxWidth*$i))+"' y2='"+($leftupY+30)+"' stroke='black' stroke-width='2' />";
            svgcode+="<text x='"+($leftupX+($OneBoxWidth*$i))+"' y='"+($leftupY+25)+"' font-family='Microsoft JhengHei' font-size='20' fill='"+$color+"'>"+($StartNum+$i)+"</text>";
        }
        svgcode+="<text x='"+($leftupX+($OneBoxWidth*$BlockCnt))+"' y='"+($leftupY+25)+"' font-family='Microsoft JhengHei' font-size='20' fill='"+$color+"'>"+($StartNum+$i)+"</text>";
    }
    
    //下方滑桿部分
    svgcode+="<rect x='"+$leftupX+"' y='"+($leftupY+50)+"' width='"+Math.abs($leftupX-$RightBottomX)+"' height='30' rx='10' ry='10' fill='lightgreen'/>";
    svgcode+="<line x1='"+($leftupX+10)+"' y1='"+($leftupY+65)+"' x2='"+($RightBottomX-10)+"' y2='"+($leftupY+65)+"' stroke='black' stroke-width='2' />";
    
    if($BlockCnt>5 && $NowNum>($StartNum+3)){//縮寫模式
        if($NowNum<$EndNum-2){//中間
            svgcode+="<circle cx='"+($leftupX+10+($OneBoxWidth*3))+"' cy='"+($leftupY+65)+"' r='10' fill='lightblue' />";
            svgcode+="<text x='"+($leftupX+9+($OneBoxWidth*3))+"' y='"+($leftupY+68)+"' font-family='Microsoft JhengHei' font-size='8' fill='"+$color+"'>"+$VariableName+"</text>";
        }
        else if($NowNum>=$EndNum-2){
            svgcode+="<circle cx='"+($leftupX+10+($OneBoxWidth*(6-($EndNum-$NowNum))))+"' cy='"+($leftupY+65)+"' r='10' fill='lightblue' />";
            svgcode+="<text x='"+($leftupX+9+($OneBoxWidth*(6-($EndNum-$NowNum))))+"' y='"+($leftupY+68)+"' font-family='Microsoft JhengHei' font-size='8' fill='"+$color+"'>"+$VariableName+"</text>";
        }
        else{
            svgcode+="<circle cx='"+($leftupX+10+($OneBoxWidth*$NowBlockCnt))+"' cy='"+($leftupY+65)+"' r='10' fill='lightblue' />";
            svgcode+="<text x='"+($leftupX+9+($OneBoxWidth*$NowBlockCnt))+"' y='"+($leftupY+68)+"' font-family='Microsoft JhengHei' font-size='8' fill='"+$color+"'>"+$VariableName+"</text>";   
        }
    }
    else{
        svgcode+="<circle cx='"+($leftupX+10+($OneBoxWidth*$NowBlockCnt))+"' cy='"+($leftupY+65)+"' r='10' fill='lightblue' />";
        svgcode+="<text x='"+($leftupX+9+($OneBoxWidth*$NowBlockCnt))+"' y='"+($leftupY+68)+"' font-family='Microsoft JhengHei' font-size='8' fill='"+$color+"'>"+$VariableName+"</text>";   
    }
    return svgcode;
}
function InfoTextBox($leftupX,$leftupY,$RightBottomX,$RightBottomY,$size,$Backcolor,$color,$Text){
    svgcode="";
    $leftupX=Number($leftupX);$leftupY=Number($leftupY);
    $RightBottomX=Number($RightBottomX);$RightBottomY=Number($RightBottomY);
    $size=Number($size);
    svgcode+="<rect x='"+$leftupX+"' y='"+$leftupY+"' width='"+Math.abs($leftupX-$RightBottomX)+"' height='"+Math.abs($RightBottomY-$leftupY)+"' rx='10' ry='10' fill='"+$Backcolor+"'/>";
    svgcode+="<text x='"+($leftupX+5)+"' y='"+($leftupY+$size)+"' font-family='Microsoft JhengHei' font-size='"+$size+"' fill='"+$color+"'>"+$Text+"</text>";
    return svgcode;
}
function ImgBox($leftupX,$leftupY,$width,$height,$picpath){
    svgcode="";
    $leftupX=Number($leftupX);$leftupY=Number($leftupY);
    $width=Number($width);$height=Number($height);
    svgcode+="<image x='"+$leftupX+"' y='"+$leftupY+"' width='"+$width+"' height='"+$height+"' xlink:href='../pic/"+$picpath+"' />";
    return svgcode;
}
function AssignArrow($x1,$y1,$x2,$y2,$size,$Text,$color){
    svgcode="";
    $x1=Number($x1);$y1=Number($y1);
    $x2=Number($x2);$y2=Number($y2);
    $size=Number($size);
    svgcode+="<path d='M"+$x1+" "+$y1+" L"+(($x1+$x2)/2-10)+" "+$y1+" L"+(($x1+$x2)/2-10)+" "+$y2+" L"+$x2+" "+$y2+"' fill='none' stroke='black' stroke-width='2' />";
    svgcode+="<polygon points='"+($x2+10)+","+$y2+" "+$x2+","+($y2-10)+" "+$x2+","+($y2+10)+"' fill='"+$color+"'/>";
    svgcode+="<text x='"+(($x1+$x2)/2-8)+"' y='"+($y2-3)+"' font-family='Microsoft JhengHei' font-size='"+$size+"' fill='"+$color+"'>"+$Text+"</text>";
    return svgcode;
}
function InputBox(){}
function OutputBox(){}
function IfBox(){}
function LeftBox($leftupX,$leftupY,$width,$height){
    svgcode="";
    $leftupX=Number($leftupX);$leftupY=Number($leftupY);
    $width=Number($width);$height=Number($height);
    svgcode+="<image x='"+$leftupX+"' y='"+$leftupY+"' width='"+$width+"' height='"+$height+"' xlink:href='../pic/LeftBox.png' />";
    return svgcode;
}
function RightBox($leftupX,$leftupY,$width,$height){
    svgcode="";
    $leftupX=Number($leftupX);$leftupY=Number($leftupY);
    $width=Number($width);$height=Number($height);
    svgcode+="<image x='"+$leftupX+"' y='"+$leftupY+"' width='"+$width+"' height='"+$height+"' xlink:href='../pic/RightBox.png' />";
    return svgcode;
}
function PrintBox($leftupX,$leftupY,$width,$height){
    svgcode="";
    $leftupX=Number($leftupX);$leftupY=Number($leftupY);
    $width=Number($width);$height=Number($height);
    svgcode+="<image x='"+$leftupX+"' y='"+$leftupY+"' width='"+$width+"' height='"+$height+"' xlink:href='../pic/PrintBox.png' />";
    return svgcode;
}