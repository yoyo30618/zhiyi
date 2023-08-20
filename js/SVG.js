function DrawLine($x1,$y1,$x2,$y2,$color){
    svgcode="<line x1='"+$x1+"' y1='"+$y1+"' x2='"+$x2+"' y2='"+$y2+"' stroke='"+$color+"' stroke-width='2''/>";
    return svgcode;
}