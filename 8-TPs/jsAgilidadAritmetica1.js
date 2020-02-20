/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var Respuesta;
var resultado;
var random;
var random2;
var r1;
var r2;
var x;
function comenzar()
{
	var randomOp;
	random=Math.floor(Math.random() * 10) + 1;
	random2=Math.floor(Math.random()* 10) + 1;
	randomOp=Math.floor(Math.random() * 4);
	document.getElementById('PrimerNumero').value=random;
	document.getElementById('SegundoNumero').value=random2;
	switch(randomOp)
	{
		case 0:document.getElementById('Operador').value='+';
		x=1;
		break;
		case 1:document.getElementById('Operador').value='-';
		x=2;
		break;
		case 2:document.getElementById('Operador').value='/';
		x=3;
		break;
		case 3:document.getElementById('Operador').value='X';
		x=4;
		break;
		default:document.getElementById('Operador').value='NOOOOOOOOO';
	}
}//FIN DE LA FUNCIÓN
function Responder()
{
	r1=document.getElementById('PrimerNumero').value;
	r2=document.getElementById('SegundoNumero').value;
	Respuesta=document.getElementById('Respuesta').value;
	r1=parseInt(r1);
	r2=parseInt(r2);
	Respuesta=parseInt(Respuesta);
	if(x==1)
	{
		resultado=r1+r2;
		if(resultado==Respuesta)
		{
			alert('Resultado correcto');
		}
	}
	else
	{
		if(x==2)
		{
			resultado=r1-r2;
			if(resultado==Respuesta)
			{
				alert('Resultado correcto');
			}
		}
		if(x==3)
		{
			resultado=r1*r2;
			if(resultado==Respuesta)
			{
				alert('Resultado correcto');
			}
		}
		if(x==4)
		{
			resultado=r1/r2;
			if(resultado==Respuesta)
			{
				alert('Resultado correcto');
			}
		}
	}
	}//FIN DE LA FUNCIÓN
