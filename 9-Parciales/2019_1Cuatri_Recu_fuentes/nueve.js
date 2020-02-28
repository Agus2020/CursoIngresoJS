function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var temperatura;
	var viejo;
	var respuesta;
	var promedioEdadMujer;
	var promedioEdad;
	var sexoMax;
	var temperaturaNombreMax;
	var temperaturaMax;
	var contadorEdad;
	var contador;
	var sumaEdadMujer;
	var sumaEdad;
	var sexoNiño;
	var flag;
	var nombreNiño;
	var temperaturaViejo;
	var temperaturaJoven;
	flag=0;
	temperaturaNiño=0;
	temperaturaNombreMax=0;
	contadorEdadMujer=0;
	sumaEdadMujer=0;
	sumaEdad=0;
	edad=0;
	contadorEdad=0;
	contador=0;
	contadorEdad=0;
	do
	{
		nombre=prompt('Ingrese nombre');
		while(!isNaN(nombre))
		{
			nombre=prompt('Ingrese solo letras');
		}
		edad=prompt('Ingrese edad');
		edad=parseInt(edad);
		while(isNaN(edad))
		{
			edad=prompt('Ingrese edad');
			edad=parseInt(edad);
		}
		sexo=prompt('Ingrese sexo');
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt('Ingrese sexo');
		}
		temperatura=prompt('Ingrese temperatura');
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura))
		{
			while()
			{
				temperatura=prompt('Ingrese temperatura');
				temperatura=parseInt(temperatura);
			}
		}
			if(contador==0)
			{
				temperaturaMax=temperatura;
				temperaturaNombreMax=nombre;
				sexoMax=sexo;
				temperaturaViejo=temperatura;
				temperaturaJoven=temperatura;
			}
			if(edad<14&&temperatura>38||edad>50&&temperatura>38)
			{
				edadNiño=edad;
				nombreNiño=nombre;
				temperaturaNiño=temperatura;
				sexoNiño=sexo;
				flag=1;
			}
			if(temperaturaMax>temperatura&&edad>50)
			{
				temperaturaViejo=temperatura;
			}
			if(temperaturaMax>temperatura&&edad<50)
			{
				temperaturaJoven=temperatura;
			}
			if(temperatura>temperaturaMax)
			{
				temperatura=temperaturaMax;
				nombre=temperaturaNombreMax;
				sexo=sexoMax;
			}	
			if(sexo=='f')
			{
				sumaEdadMujer=sumaEdadMujer+edad;
				contadorEdadMujer=contadorEdadMujer+1;
			}
			promedioEdad++;
			contador++;
			sumaEdad=sumaEdad+edad;
			contadorEdad++;
			respuesta=prompt('Desea continuar? s/n');
	}
	while(respuesta=="s");
		promedioEdad=sumaEdad/contadorEdad;
		promedioEdadMujer=sumaEdadMujer/contadorEdadMujer;
		document.write('Temperatura maxima:  '+temperaturaMax+'    Nombre: '+temperaturaNombreMax+sexoMax+'<br>');
		document.write('Promedio de edad: '+promedioEdad+'<br>');
		document.write('Temperatura del mas viejo:'+temperaturaViejo+'<br>');
		document.write('Temperatura del mas joven:'+temperaturaJoven+'<br>');
		document.write('Promedio de edad mujeres:'+promedioEdadMujer+'<br>');
		if(flag==1)
		{
			alert('Riesgo: '+nombreNiño+' '+' '+temperaturaNiño+' '+sexoNiño);
		}
}
