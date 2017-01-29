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
var largeur = -54;
var hauteur = 100;
var compteurPourHauteur = 0;


////////////        Mélange du tableau		////////////////////
var cards = ["chat", "chat2", "lionne", "lionne2", "chien", "chien2", "lapins", "lapins2", "lama", "lama2", "ane", "ane2", "ours", "ours2"];
cards = cards.sort(function() { return 0.5 - Math.random() });

///////////   		Ecriture du HTML		////////////////////
for(i=0;i<cards.length;i++){
	largeur = largeur + 154;  // Calcul du placement des images
	compteurPourHauteur++;
		if(compteurPourHauteur == 8){hauteur = 254;largeur = 100} // Si on a une ligne de 7 images, on fait une nouvelle ligne	
	$("#contenaire").append('<img src="img/'+cards[i]+'.jpg" id="'+cards[i]+'" style="left: '+largeur+
	'px; top: '+hauteur+'px;"><div id="black'+cards[i]+'" class="black" style="left:'+largeur+'px; top: '+hauteur+'px"></div>');
}

function win (){		
if(compteur == 8){									// Si toutes les cartes sont retournées	
	console.log('GG WP');
	$('body').css('background-color','darkblue');	// Annonce la victoire au joueur par un magnifique fond bleu
	$('#contenaire').html('<button onclick=retry() id="retry">On y retourne ?</button><h1>GG</h1>')	// Affiche un bouton qui lance la fonction 'retry'	
	}
}

function retry(){
	location.reload();			// Recharge la page html
}

//////	Une fonction pour chaque carte ZzzzzZZzzzZZzzzzzz

$('#blackane').click(function(){		//	Si on click sur la div #blackAne, alors : 
	$('#blackane').css('z-index', 1);	//	Passe le z-index à 1 -> fait donc apparaitre la photo
	if(varGlobale == 100){				//	Si aucune carte n'est retourné
		varGlobale = 333;				//  On sauvegarde le fait d'avoir retourné cette premiere carte
		varAne = 333;					//	On dit que la carte retournée est "Ane"
	}
	else if(varGlobale == 333 && varAneDeux != 333){ // Si une carte était déjà retournée MAIS que ce n'était pas sa soeur 
		setTimeout(function(){							
			$('.black').css('z-index', 3);		// Attend une seconde et cache toutes les cartes
		},1000); 
		varGlobale = 100;								
		varChien = 100;			// Sauvegarde le fait que toutes les cartes soit maintenant cachées
		varChienDeux = 100;		//	
		varAne = 100;			//
		varAneDeux = 100;		//
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
	else if(varGlobale == 333 && varAneDeux == 333){	// Si une carte est déjà retournée et que c'est bien sa soeur
		$('#blackane').css('display', 'none');			
		$('#blackane2').css('display', 'none');		//	Affiche définitivement ces deux cartes, en mettant display none aux caches-cartes
		varGlobale = 100;	// Sauvegarde qu'aucune carte seule n'est retournée
		compteur++;			// Ajoute un point au compteur
		console.log(compteur);
		win();				// Annonce la victoire si toutes les cartes du jeu sont retournées
	}
});

//////////////////////////////	 ET CA CONTINUE, ENCORE ET ENCORE. C'EST QUE LE DEBUT, D'ACCORD D'ACCORD.  ////////////////////////////////

$('#blackane2').click(function(){
	$('#blackane2').css('z-index', 1);
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
		$('#blackane').css('display', 'none');
		$('#blackane2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////	ET CA CONTINUE, ENCORE ET ENCORE. C'EST QUE LE DEBUT, D'ACCORD D'ACCORD.  ///////////////////

$('#blackchat').click(function(){
	$('#blackchat').css('z-index', 1);
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
		$('#blackchat').css('display', 'none');
		$('#blackchat2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blackchat2').click(function(){
	$('#blackchat2').css('z-index', 1);
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
		$('#blackchat').css('display', 'none');
		$('#blackchat2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blackchien').click(function(){
	$('#blackchien').css('z-index', 1);
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
		$('#blackchien').css('display', 'none');
		$('#blackchien2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blackchien2').click(function(){
	$('#blackchien2').css('z-index', 1);
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
		$('#blackchien').css('display', 'none');
		$('#blackchien2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blacklama').click(function(){
	$('#blacklama').css('z-index', 1);
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
		$('#blacklama').css('display', 'none');
		$('#blacklama2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blacklama2').click(function(){
	$('#blacklama2').css('z-index', 1);
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
		$('#blacklama').css('display', 'none');
		$('#blacklama2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blacklapins').click(function(){
	$('#blacklapins').css('z-index', 1);
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
		$('#blacklapins').css('display', 'none');
		$('#blacklapins2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blacklapins2').click(function(){
	$('#blacklapins2').css('z-index', 1);
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
		$('#blacklapins').css('display', 'none');
		$('#blacklapins2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blacklionne').click(function(){
	$('#blacklionne').css('z-index', 1);
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
		$('#blacklionne').css('display', 'none');
		$('#blacklionne2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blacklionne2').click(function(){
	$('#blacklionne2').css('z-index', 1);
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
		$('#blacklionne').css('display', 'none');
		$('#blacklionne2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blackours').click(function(){
	$('#blackours').css('z-index', 1);
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
		$('#blackours').css('display', 'none');
		$('#blackours2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});

//////////////////////////////////////////////////////////////////////

$('#blackours2').click(function(){
	$('#blackours2').css('z-index', 1);
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
		$('#blackours').css('display', 'none');
		$('#blackours2').css('display', 'none');
		varGlobale = 100;
		compteur++;
		console.log(compteur);
		win();
	}
});


