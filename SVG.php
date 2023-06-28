<?php
// 創建 SVG 元素
$svg = '<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">';

// 定義圖片模式
$svg .= '<defs>';
$svg .= '<pattern id="image-bg" x="0" y="0" width="100%" height="100%" patternUnits="userSpaceOnUse">';
$svg .= '<image href="pic/C3-1/step1.png" x="0" y="0" width="500" height="500" preserveAspectRatio="none" />';
$svg .= '</pattern>';
$svg .= '</defs>';

// 背景矩形
$svg .= '<rect x="0" y="0" width="500" height="500" fill="url(#image-bg)" />';

// 添加文本
$svg .= '<text x="50" y="30" fill="black">Hello, World!</text>';

// 關閉 SVG 元素
$svg .= '</svg>';

// 輸出 SVG
echo $svg;
?>
