/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var suma;
	primerNumero=document.getElementById('numeroUno').value;
	segundoNumero=document.getElementById('numeroDos').value;
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);
	suma=primerNumero+segundoNumero;
	alert(suma);

}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resta;
	primerNumero=document.getElementById('numeroUno').value;
	segundoNumero=document.getElementById('numeroDos').value;
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);
	if(primerNumero>segundoNumero)
		resta=primerNumero-segundoNumero;
	if(segundoNumero>primerNumero)
		resta=segundoNumero-primerNumero;
	alert(resta);
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var multiplicar;
	primerNumero=document.getElementById('numeroUno').value;
	segundoNumero=document.getElementById('numeroDos').value;
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);
	multiplicar=primerNumero*segundoNumero;
	alert(multiplicar);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var division;
	primerNumero=document.getElementById('numeroUno').value;
	segundoNumero=document.getElementById('numeroDos').value;
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);
	if(primerNumero>segundoNumero)
		division=primerNumero/segundoNumero;
	if(segundoNumero>primerNumero)
		division=segundoNumero/primerNumero;
	alert(division);
}

