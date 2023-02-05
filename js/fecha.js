//Fecha actual con formato argentino:  domingo, 5 de febrero del 2023
var Meses = new Array ("enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre");

var DiasdelaSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

var FechaActual=new Date();

document.write(DiasdelaSemana[FechaActual.getDay()]+", "+FechaActual.getDate()+" de "+Meses[FechaActual.getMonth()]+" del "+FechaActual.getFullYear());
