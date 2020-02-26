/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var total;
	primerNumero=document.getElementById('numeroUno').value;  // "1"
	segundoNumero=document.getElementById('numeroDos').value; // "1"

	primerNumero =parseInt(primerNumero); 

	segundoNumero=parseInt(segundoNumero);

	total=primerNumero+segundoNumero;

	alert('el resultado es '+total);
}