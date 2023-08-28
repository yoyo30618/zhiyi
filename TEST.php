<script src="js/SVG.js"></script>
<div id="SVGPlace">
</div>
<script>
    var svgCode = ForBox(5,5,300,50,3,5,5,"i", "black");
  	var svgContent ='<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">';
	svgContent+= svgCode;	
  	svgContent += "</svg>";
    document.getElementById("SVGPlace").innerHTML =svgContent;
</script>
