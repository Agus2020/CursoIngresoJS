/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var ancho;
var largo;
function Rectangulo () 
{
	var total;
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);
	largo=parseInt(largo);
	total=ancho*2+largo*2;
	total=total*3;
	alert('Necesitas '+total +' metros de alambre');
}
function Circulo () 
{
	var radio;
	var perimetro;
	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);
	perimetro=radio*6.28;
	alert('Necesitas '+perimetro +' metros de alambre');
}
function Materiales () 
{
	var bCem;
	var bCal;
	var total;
	bCem=2;
	bCal=3;
	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);
	total=largo+ancho;
	bCem=total*bCem;
	bCal=total*bCal;
	alert('Necesitas '+bCem+' bolsas de cemento y '+bCal+' bolsas de cal');
}