var varChien = 100;
var varChienDeux = 100;
var varGlobale = 333;
$('#blackAne').click(function(){
	$('#blackAne').css('z-index', 1);
});
$('#blackAne2').click(function(){
	$('#blackAne2').css('z-index', 1);
});
$('#blackChat').click(function(){
	$('#blackChat').css('z-index', 1);
});
$('#blackChat2').click(function(){
	$('#blackChat2').css('z-index', 1);
});



$('#blackChien').click(function(){
	$('#blackChien').css('z-index', 1);
	varChien = 666;
	if(varChien != 666){
		setTimeout(function(){
			$('#blackChien2').css('z-index', 3);
			$('#blackChien').css('z-index', 3);
		},1000); 
	}
});




$('#blackChien2').click(function(){
	$('#blackChien2').css('z-index', 1);
	if(varGlobale != 333 && varChien != 666){
		setTimeout(function(){
			$('#blackChien2').css('z-index', 3);
			$('.black').css('z-index', 3);
		},1000); 
	}
});




$('#blackLama').click(function(){
	$('#blackLama').css('z-index', 1);
});
$('#blackLama2').click(function(){
	$('#blackLama2').css('z-index', 1);
});
$('#blackLapins').click(function(){
	$('#blackLapins').css('z-index', 1);
});
$('#blackLapins2').click(function(){
	$('#blackLapins2').css('z-index', 1);
});
$('#blackLionne').click(function(){
	$('#blackLionne').css('z-index', 1);
});
$('#blackLionne2').click(function(){
	$('#blackLionne2').css('z-index', 1);
});
$('#blackOurs').click(function(){
	$('#blackOurs').css('z-index', 1);
});
$('#blackOurs2').click(function(){
	$('#blackOurs2').css('z-index', 1);
});
