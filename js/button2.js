$(document).ready(function(){
	var b4pos="left";
	$(".b4bdr").click(function(){
		if(b4pos=="left")
		{
			
			$(".b4bdr").css({"transition":"1s","background-color":"#6b1b9a91"});
			$(".b4fleft").addClass("b3move b4move1");
			$(".b4ring").css({"transition":"0.8s","transform":"translateX(3.8rem)",border: "solid white 4px"});
			setTimeout(function(){ $(".b4fleft").removeClass("b4move1 b3move");},500);
			b4pos="right";
		}
		else
		{
			$(".b4fright").addClass("b3move2 b4move2");
			$(".b4ring").css({"transition":"0.8s","transform":"translateX(0rem)",border: "solid #6b1b9a91 4px"});
			$(".b4bdr").css({"transition":"1s","background-color":"rgba(177,177,177,0.30)"});
			setTimeout(function(){ $(".b4fright").removeClass("b4move2 b3move2");},500);
			b4pos="left";	
		}
	});
});