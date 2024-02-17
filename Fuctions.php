<?php
	$tags = [// 定義標籤和替換的內容
		'Operationstyle' => '<text class="operationstyle">',
		'EndOperationstyle' => '</text>',
		'Input' => '<text class="inputstyle">',
		'EndInput' => '</text>',
		'If' => '<text class="ifstyle">',
		'EndIf' => '</text>',
		'Output' => '<text class="outputstyle">',
		'EndOutput' => '</text>',
		'For' => '<text class="forstyle">',
		'EndFor' => '</text>',
		'\n' => '<br>',
		'\t' => '&#09;',
		'Hint1' => '<text id="Hint1">',
		'Hint2' => '<text id="Hint2">',
		'Hint3' => '<text id="Hint3">',
		'Hint4' => '<text id="Hint4">',
		'Hint5' => '<text id="Hint5">',
		'EndHint1' => '</text>',
		'EndHint2' => '</text>',
		'EndHint3' => '</text>',
		'EndHint4' => '</text>',
		'EndHint5' => '</text>'
	];
	function LoadProblemFile($filename) {
		global $tags;
		$fileContent = file_get_contents('../ProblemFile/'.$filename.'.txt');
		foreach ($tags as $tag => $replacement) 
			$fileContent = str_replace("{{$tag}}", $replacement, $fileContent);// 進行標籤替換
		echo $fileContent;// 輸出結果
	}
	function LoadProblemHint($filename) {
		$jsonData = json_decode(file_get_contents('../ProblemHint/'.$filename.'.json'), true);
		$script = "$(document).ready(function () {";
		$script .= " \$(\"#hintButton\").click(function () {";	
		foreach ($jsonData as $key => $value) {
			if ($key !== "_comment") {
				$content = $value[0];
				$placement="top";
				if($value[1]==2) $placement="bottom";
				if($value[1]==3) $placement="left";
				if($value[1]==4) $placement="right";	
				$script .= "  $(\"#$key\")";
				$script .= "   .popover({";
				$script .= "    content: \"$content\",";
				$script .= "    placement: \"$placement\",";
				$script .= "    trigger: \"manual\"";
				$script .= "   }).popover(\"show\");";
			}
		}
		$script .= " });";
		$script .= "});";
		echo "<script>{$script}</script>";
	}
	function LoadProblemCode($filename,$mode) {//mode1=sample,2=custom
		global $tags;
		$code = file_get_contents('../ProblemCode/'.$filename.'.txt');
		$code = str_replace("\t", "    ", $code);

		$lines = explode("\n", $code);//以行切割
		$formattedCode = '';
		foreach ($lines as $index => $line) {
			$stepNumber = $index-1;
			$formattedLine=$line;
			if($mode==1)
				$formattedLine = str_replace("{Arrow}", "<a id='step{$stepNumber}' class='step-arrow'> ➥</a>", $formattedLine);//補入箭頭
				// $formattedLine = "<a id='step{$stepNumber}' class='step-arrow'> ➥</a>{$line}";
			else if($mode==2)
				$formattedLine = str_replace("{Arrow}", "<a id='solo-step{$stepNumber}' class='solo-step-arrow'> ➥</a>", $formattedLine);//補入箭頭
				// $formattedLine = "<a id='solo-step{$stepNumber}' class='solo-step-arrow'> ➥</a>{$line}";
			foreach ($tags as $tag => $replacement) {
				$formattedLine = str_replace("{{$tag}}", ($replacement), $formattedLine);
			}
			$formattedCode .= $formattedLine ;
		}
		echo "<code class='language-python'>" . PHP_EOL . $formattedCode . PHP_EOL . "</code>";	
	}
	function LoadStepInfo($filename) {
		$jsonData = json_decode(file_get_contents('../ProblemStep/'.$filename.'.json'), true);
        if ($jsonData) {
			$CodeStep = $jsonData["CodeStep"];
			$CodeStep_SVG = $jsonData["CodeStep_SVG"];
			$Msg = json_encode($jsonData["Msg"]); // Encode the array as JSON
			$MsgStep = json_encode($jsonData["MsgStep"]);
			$MsgStep_SVG = json_encode($jsonData["MsgStep_SVG"]);
			$ArrowStep = json_encode($jsonData["ArrowStep"]);
			$ArrowStep_SVG = json_encode($jsonData["ArrowStep_SVG"]);
			$FlowStep = json_encode($jsonData["FlowStep"]);
			$OperationStep_SVG = json_encode($jsonData["OperationStep_SVG"]);
			$FlowStep_SVG = json_encode($jsonData["FlowStep_SVG"]);
			$FlowInfo1 = json_encode($jsonData["FlowInfo1"]);
			$FlowInfo2 = json_encode($jsonData["FlowInfo2"]);
			$FlowInfo3 = json_encode($jsonData["FlowInfo3"]);
			$FlowInfo4 = json_encode($jsonData["FlowInfo4"]);
			$FlowInfo5 = json_encode($jsonData["FlowInfo5"]);
			$OperationInfo = json_encode($jsonData["OperationInfo"]);
			$FlowPicPath = json_encode($jsonData["FlowPicPath"]);
			$DefaultInput = json_encode($jsonData["DefaultInput"]);
			$DefaultOutput = json_encode($jsonData["DefaultOutput"]);
			$jsCode = "
				var CodeStep = " . $CodeStep . ";
				var CodeStep_SVG = " . $CodeStep_SVG . ";
				var Msg = " . $Msg . ";
				var MsgStep = " . $MsgStep . ";
				var MsgStep_SVG = " . $MsgStep_SVG . ";
				var ArrowStep = " . $ArrowStep . ";
				var ArrowStep_SVG = " . $ArrowStep_SVG . ";
				var FlowStep = " . $FlowStep . ";
				var OperationStep_SVG = " . $OperationStep_SVG . ";
				var FlowStep_SVG = " . $FlowStep_SVG . ";
				var FlowInfo1 = " . $FlowInfo1 . ";
				var FlowInfo2 = " . $FlowInfo2 . ";
				var FlowInfo3 = " . $FlowInfo3 . ";
				var FlowInfo4 = " . $FlowInfo4 . ";
				var FlowInfo5 = " . $FlowInfo5 . ";
				var OperationInfo = " . $OperationInfo . ";
				var FlowPicPath = " . $FlowPicPath . ";
				var DefaultInput = " . $DefaultInput . ";
				var DefaultOutput = " . $DefaultOutput . ";
				
			";
	
			echo "<script>".$jsCode."</script>";
        } else {
            echo "Failed to load JSON data.";
        }
	}
?>