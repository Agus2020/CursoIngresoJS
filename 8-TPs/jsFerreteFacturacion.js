/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var suma;
	
	primerPrecio=document.getElementById('PrecioUno').value;
	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=document.getElementById('PrecioDos').value;
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=document.getElementById('PrecioTres').value;
	tercerPrecio=parseInt(tercerPrecio);
	suma=primerPrecio+segundoPrecio+tercerPrecio;
	alert("El precio es "+suma);
}
function Promedio () 
{
	
}
function PrecioFinal () 
{
	
}