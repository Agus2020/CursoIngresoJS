function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	random=Math.floor(Math.random() * 10) + 1;
	if(random>8)
	{
		alert("EXCELENTE");
	}
	else 
	{
		if(random>4)
		{
			alert("APROBO");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}	
	}
	console.log(random);


}//FIN DE LA FUNCIÓN