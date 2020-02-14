/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor(Math.random() * 100) + 1;
	console.log(numeroSecreto);
}

function verificar()
{
	var numeroIngresado;
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	do
	{
		contadorIntentos++;
	if(numeroIngresado==numeroSecreto&&contadorIntentos==1)
	{
		alert("sos psiquico");
	}
		alert("loser");
		if(numeroIngresado==numeroSecreto&&contadorIntentos==2)
		{
			alert("Excelente percepción”");
		}
		if(numeroIngresado==numeroSecreto&&contadorIntentos==3)
		{
			alert("Esto es suerte");
			if(numeroIngresado==numeroSecreto&&contadorIntentos==4)
			{
				alert("Excelente tecnica");
			}
			if(numeroIngresado==numeroSecreto&&contadorIntentos==5)
			{
				alert("usted esta en la media");
			}
			if(numeroIngresado==numeroSecreto&&contadorIntentos>5&&contadorIntentos<11)
			{
				alert("falta tecnica");
			}
			if(numeroIngresado==numeroSecreto&&contadorIntentos>5&&contadorIntentos<11)
			{
				alert("afortunado en el amor");
			}
		}
		console.log(contadorIntentos);
    }
  while(numeroIngresado==numeroSecreto);
}