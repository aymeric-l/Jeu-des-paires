/*var varChien, varChienDeux, varGlobale, varAne, varAneDeux = 100;*/
var varGlobale = 100;
var varChien = 100;
var varChienDeux = 100;
var varAne = 100;
var varAneDeux = 100;
var varChat = 100;
var varChatDeux = 100;
var varLama = 100;
var varLamaDeux = 100;
var varLapins = 100;
var varLapinsDeux = 100;
var varLionne = 100;
var varLionneDeux = 100;
var varOurs = 100;
var varOursDeux = 100;
var compteur = 1;

$('#blackAne').click(function(){
	$('#blackAne').css('z-index', 1);
	if(varGlobale == 100){
		varGlobale = 333;
		varAne = 333;
	}
	else if(varGlobale == 333 && varAneDeux != 333){
		setTimeout(function(){
			$('.black').css('z-index', 3);
		},1000); 
		varGlobale = 100;
		varChien = 100;
		varChienDeux = 100;
		varAne = 100;
		varAneDeux = 100;
		varChat = 100;
		varChatDeux = 100;
		varLama = 100;
		varLamaDeux = 100;
		varLapins = 100;
		varLapinsDeux = 100;
		varLionne = 100;
		varLionneDeux = 100;
		varOurs = 100;
		varOursDeux = 100;
	}
	else if(varGlobale == 333 && varAneDeux == 333){
		$('#blackAne').css('display', 'none');
		$('#blackAne2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blackAne2').click(function(){
	$('#blackAne2').css('z-index', 1);
	if(varGlobale == 100){
		varGlobale = 333;
		varAneDeux = 333;
	}
	else if(varGlobale == 333 && varAne != 333){
		setTimeout(function(){
			$('.black').css('z-index', 3);
		},1000); 
		varGlobale = 100;
		varChien = 100;
		varChienDeux = 100;
		varAne = 100;
		varAneDeux = 100;
		varChat = 100;
		varChatDeux = 100;
		varLama = 100;
		varLamaDeux = 100;
		varLapins = 100;
		varLapinsDeux = 100;
		varLionne = 100;
		varLionneDeux = 100;
		varOurs = 100;
		varOursDeux = 100;
	}
	else if(varGlobale == 333 && varAne == 333){
		$('#blackAne').css('display', 'none');
		$('#blackAne2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blackChat').click(function(){
	$('#blackChat').css('z-index', 1);
	if(varGlobale == 100){
		varGlobale = 333;
		varChat = 333;
	}
	else if(varGlobale == 333 && varChatDeux != 333){
		setTimeout(function(){
			$('.black').css('z-index', 3);
		},1000); 
		varGlobale = 100;
		varChien = 100;
		varChienDeux = 100;
		varAne = 100;
		varAneDeux = 100;
		varChat = 100;
		varChatDeux = 100;
		varLama = 100;
		varLamaDeux = 100;
		varLapins = 100;
		varLapinsDeux = 100;
		varLionne = 100;
		varLionneDeux = 100;
		varOurs = 100;
		varOursDeux = 100;
	}
	else if(varGlobale == 333 && varChatDeux == 333){
		$('#blackChat').css('display', 'none');
		$('#blackChat2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blackChat2').click(function(){
	$('#blackChat2').css('z-index', 1);
	if(varGlobale == 100){
		varGlobale = 333;
		varChatDeux = 333;
	}
	else if(varGlobale == 333 && varChat != 333){
		setTimeout(function(){
			$('.black').css('z-index', 3);
		},1000); 
		varGlobale = 100;
		varChien = 100;
		varChienDeux = 100;
		varAne = 100;
		varAneDeux = 100;
		varChat = 100;
		varChatDeux = 100;
		varLama = 100;
		varLamaDeux = 100;
		varLapins = 100;
		varLapinsDeux = 100;
		varLionne = 100;
		varLionneDeux = 100;
		varOurs = 100;
		varOursDeux = 100;
	}
	else if(varGlobale == 333 && varChat == 333){
		$('#blackChat').css('display', 'none');
		$('#blackChat2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blackChien').click(function(){
	$('#blackChien').css('z-index', 1);
	if(varGlobale == 100){
		varGlobale = 333;
		varChien = 333;
	}
	else if(varGlobale == 333 && varChienDeux != 333){
		setTimeout(function(){
			$('#blackChien2').css('z-index', 3);
			$('.black').css('z-index', 3);
		},1000); 
		varGlobale = 100;
		varChien = 100;
		varChienDeux = 100;
		varAne = 100;
		varAneDeux = 100;
		varChat = 100;
		varChatDeux = 100;
		varLama = 100;
		varLamaDeux = 100;
		varLapins = 100;
		varLapinsDeux = 100;
		varLionne = 100;
		varLionneDeux = 100;
		varOurs = 100;
		varOursDeux = 100;
	}
	else if(varGlobale == 333 && varChienDeux == 333){
		$('#blackChien').css('display', 'none');
		$('#blackChien2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blackChien2').click(function(){
	$('#blackChien2').css('z-index', 1);
	if(varGlobale == 100){
		varGlobale = 333;
		varChienDeux = 333;
	}
	else if(varGlobale == 333 && varChien != 333){
		setTimeout(function(){
			$('#blackChien2').css('z-index', 3);
			$('.black').css('z-index', 3);
		},1000); 
		varGlobale = 100;
		varChien = 100;
		varChienDeux = 100;
		varAne = 100;
		varAneDeux = 100;
		varChat = 100;
		varChatDeux = 100;
		varLama = 100;
		varLamaDeux = 100;
		varLapins = 100;
		varLapinsDeux = 100;
		varLionne = 100;
		varLionneDeux = 100;
		varOurs = 100;
		varOursDeux = 100;
	}
	else if(varGlobale == 333 && varChien == 333){
		$('#blackChien').css('display', 'none');
		$('#blackChien2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blackLama').click(function(){
	$('#blackLama').css('z-index', 1);
	if(varGlobale == 100){
		varGlobale = 333;
		varLama = 333;
	}
	else if(varGlobale == 333 && varLamaDeux != 333){
		setTimeout(function(){
			$('.black').css('z-index', 3);
		},1000); 
		varGlobale = 100;
		varChien = 100;
		varChienDeux = 100;
		varAne = 100;
		varAneDeux = 100;
		varChat = 100;
		varChatDeux = 100;
		varLama = 100;
		varLamaDeux = 100;
		varLapins = 100;
		varLapinsDeux = 100;
		varLionne = 100;
		varLionneDeux = 100;
		varOurs = 100;
		varOursDeux = 100;
	}
	else if(varGlobale == 333 && varLamaDeux == 333){
		$('#blackLama').css('display', 'none');
		$('#blackLama2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blackLama2').click(function(){
	$('#blackLama2').css('z-index', 1);
	if(varGlobale == 100){
		varGlobale = 333;
		varLamaDeux = 333;
	}
	else if(varGlobale == 333 && varLama != 333){
		setTimeout(function(){
			$('.black').css('z-index', 3);
		},1000); 
		varGlobale = 100;
		varChien = 100;
		varChienDeux = 100;
		varAne = 100;
		varAneDeux = 100;
		varChat = 100;
		varChatDeux = 100;
		varLama = 100;
		varLamaDeux = 100;
		varLapins = 100;
		varLapinsDeux = 100;
		varLionne = 100;
		varLionneDeux = 100;
		varOurs = 100;
		varOursDeux = 100;
	}
	else if(varGlobale == 333 && varLama == 333){
		$('#blackLama').css('display', 'none');
		$('#blackLama2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blackLapins').click(function(){
	$('#blackLapins').css('z-index', 1);
	if(varGlobale == 100){
		varGlobale = 333;
		varLapins = 333;
	}
	else if(varGlobale == 333 && varLapinsDeux != 333){
		setTimeout(function(){
			$('.black').css('z-index', 3);
		},1000); 
		varGlobale = 100;
		varChien = 100;
		varChienDeux = 100;
		varAne = 100;
		varAneDeux = 100;
		varChat = 100;
		varChatDeux = 100;
		varLama = 100;
		varLamaDeux = 100;
		varLapins = 100;
		varLapinsDeux = 100;
		varLionne = 100;
		varLionneDeux = 100;
		varOurs = 100;
		varOursDeux = 100;
	}
	else if(varGlobale == 333 && varLapinsDeux == 333){
		$('#blackLapins').css('display', 'none');
		$('#blackLapins2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blackLapins2').click(function(){
	$('#blackLapins2').css('z-index', 1);
	if(varGlobale == 100){
		varGlobale = 333;
		varLapinsDeux = 333;
	}
	else if(varGlobale == 333 && varLapins != 333){
		setTimeout(function(){
			$('.black').css('z-index', 3);
		},1000); 
		varGlobale = 100;
		varChien = 100;
		varChienDeux = 100;
		varAne = 100;
		varAneDeux = 100;
		varChat = 100;
		varChatDeux = 100;
		varLama = 100;
		varLamaDeux = 100;
		varLapins = 100;
		varLapinsDeux = 100;
		varLionne = 100;
		varLionneDeux = 100;
		varOurs = 100;
		varOursDeux = 100;
	}
	else if(varGlobale == 333 && varLapins == 333){
		$('#blackLapins').css('display', 'none');
		$('#blackLapins2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blackLionne').click(function(){
	$('#blackLionne').css('z-index', 1);
	if(varGlobale == 100){
		varGlobale = 333;
		varLionne = 333;
	}
	else if(varGlobale == 333 && varLionneDeux != 333){
		setTimeout(function(){
			$('.black').css('z-index', 3);
		},1000); 
		varGlobale = 100;
		varChien = 100;
		varChienDeux = 100;
		varAne = 100;
		varAneDeux = 100;
		varChat = 100;
		varChatDeux = 100;
		varLama = 100;
		varLamaDeux = 100;
		varLapins = 100;
		varLapinsDeux = 100;
		varLionne = 100;
		varLionneDeux = 100;
		varOurs = 100;
		varOursDeux = 100;
	}
	else if(varGlobale == 333 && varLionneDeux == 333){
		$('#blackLionne').css('display', 'none');
		$('#blackLionne2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blackLionne2').click(function(){
	$('#blackLionne2').css('z-index', 1);
	if(varGlobale == 100){
		varGlobale = 333;
		varLionneDeux = 333;
	}
	else if(varGlobale == 333 && varLionne != 333){
		setTimeout(function(){
			$('.black').css('z-index', 3);
		},1000); 
		varGlobale = 100;
		varChien = 100;
		varChienDeux = 100;
		varAne = 100;
		varAneDeux = 100;
		varChat = 100;
		varChatDeux = 100;
		varLama = 100;
		varLamaDeux = 100;
		varLapins = 100;
		varLapinsDeux = 100;
		varLionne = 100;
		varLionneDeux = 100;
		varOurs = 100;
		varOursDeux = 100;
	}
	else if(varGlobale == 333 && varLionne == 333){
		$('#blackLionne').css('display', 'none');
		$('#blackLionne2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blackOurs').click(function(){
	$('#blackOurs').css('z-index', 1);
	if(varGlobale == 100){
		varGlobale = 333;
		varOurs = 333;
	}
	else if(varGlobale == 333 && varOursDeux != 333){
		setTimeout(function(){
			$('.black').css('z-index', 3);
		},1000); 
		varGlobale = 100;
		varChien = 100;
		varChienDeux = 100;
		varAne = 100;
		varAneDeux = 100;
		varChat = 100;
		varChatDeux = 100;
		varLama = 100;
		varLamaDeux = 100;
		varLapins = 100;
		varLapinsDeux = 100;
		varLionne = 100;
		varLionneDeux = 100;
		varOurs = 100;
		varOursDeux = 100;
	}
	else if(varGlobale == 333 && varOursDeux == 333){
		$('#blackOurs').css('display', 'none');
		$('#blackOurs2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blackOurs2').click(function(){
	$('#blackOurs2').css('z-index', 1);
	if(varGlobale == 100){
		varGlobale = 333;
		varOursDeux = 333;
	}
	else if(varGlobale == 333 && varOurs != 333){
		setTimeout(function(){
			$('.black').css('z-index', 3);
		},1000); 
		varGlobale = 100;
		varChien = 100;
		varChienDeux = 100;
		varAne = 100;
		varAneDeux = 100;
		varChat = 100;
		varChatDeux = 100;
		varLama = 100;
		varLamaDeux = 100;
		varLapins = 100;
		varLapinsDeux = 100;
		varLionne = 100;
		varLionneDeux = 100;
		varOurs = 100;
		varOursDeux = 100;
	}
	else if(varGlobale == 333 && varOurs == 333){
		$('#blackOurs').css('display', 'none');
		$('#blackOurs2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

function win (){
if(compteur == 8){
	console.log('GG WP');
	$('body').css('background-color','darkblue');
	$('#contenaire').css('display','none');
	}
}
