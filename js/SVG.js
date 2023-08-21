function DrawLine($x1,$y1,$x2,$y2,$color){
    svgcode="<line x1='"+$x1+"' y1='"+$y1+"' x2='"+$x2+"' y2='"+$y2+"' stroke='"+$color+"' stroke-width='2''/>";
    return svgcode;
}
function DrawText($text,$x,$y,$size,$color){    
    svgcode="<text x='"+$x+"' y='"+$y+"' font-family='Arial' font-size='"+$size+"' fill='"+$color+"'>"+$text+"</text>";
    return svgcode;
}
function DrawArrow($x1,$y1,$x2,$y2,$color){//目前僅限水平鑑頭
    svgcode="<line x1='"+$x1+"' y1='"+$y1+"' x2='"+$x2+"' y2='"+$y2+"' stroke='"+$color+"' stroke-width='2' />";
    svgcode+="<polygon points='"+$x2+","+$y1+" "+($x2-10)+","+($y1-10)+" "+($x2-10)+","+($y1+10)+"' fill='"+$color+"'/>";
    return svgcode;
}
function InputBox(){}
function OutputBox(){}
function IfBox(){}
function ForBox(){}