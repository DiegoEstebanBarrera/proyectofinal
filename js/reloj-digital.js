//Código para insertar mi reloj digital.
function checkeodeHorario(i) { if ( i < 10 ) { i = "0" + i } return i }

function HoradeInicio(){ today = new Date();
					 	 h     = today.getHours();
						 m     = today.getMinutes();
						 s     = today.getSeconds();
						 m     = checkeodeHorario(m);
						 s     = checkeodeHorario(s);
    					 document.getElementById('reloj-digital').innerHTML = h + ":" + m + ":" + s;
    					 t     = setTimeout('HoradeInicio()', 500);
}

window.onload = function(){ HoradeInicio() }
