/*
c)Se pide la carga de datos de un contenedor  de alimento canino con un máximo de
 carga de 1000kg, cargar hasta que el cliente quiera o se llene el contenedor.
se pide:
marca
kilos por bolsa
cantidad de bolsa
importe por bolsa

que marca tiene más kilos en el contenedor
que marca tiene más bolsas de alimento en el contenedor
que marca tiene el mayor importe por bolsa de alimento
el importe y la marca de la bolsa de alimento menos pesada.

*/
function mostrar()
{
	var marca;
	var kilo;
	var kiloMax;
	var cantidad;
	var sumadorKilo;
	var cantidadMax;
	var contador;
	var importe;
	var importeMin;
	var marcaKiloMin;
	var importeMax;
	var marcaMaxImporte;
	var marcaMaxCantidad;
	var marcaMaxKilo;
	var respuesta
	var total3=0;
	var total2=0;
	var total=0;
	var flag=0;
	var flag2=0;
	contador=0;
	do
	{	
			marca=prompt('Ingrese marca');
			while(!isNaN(marca))
			{
				marca=prompt('Ingrese una marca valida');
			}
			kilo=prompt('Ingrese cantidad de kilos');
			kilo=parseInt(kilo);
			while(isNaN(kilo))
			{
				kilo=prompt('Ingrese solo peso en numeros');
				kilo=parseInt(kilo);
			}	
			cantidad=prompt('Ingrese cantidad');
			cantidad=parseInt(cantidad);
			while(isNaN(cantidad))
			{
				cantidad=prompt('Ingrese cantidad');
				cantidad=parseInt(cantidad);
			}
			importe=prompt('Ingrese importe por bolsa');
			importe=parseInt(importe);
			while(isNaN(importe))
			{
				importe=prompt('Ingrese importe por bolsa');
				importe=parseInt(importe);
			}
		total2=importe*cantidad;
		if(total2>1000)
		{
			break;
		}
		else
		{
			if(contador==0)
			{
				total2=cantidad*importe;
			}	
				if(contador==0)
				{
					kiloMax=kiloMax+kilo;
					cantidadMax=cantidad;
					importeMax=importe;
					marcaMaxImporte=marca;
					marcaMaxCantidad=marca;
					marcaMaxKilo=marca;
					marcaKiloMin=marca;
					importeMin=importe;
				}
				if(kilo>kiloMax)
				{
					kiloMax=kilo;
					marcaMaxKilo=marca;
				}
				else
				{
					kiloMin=kilo;
					marcaKiloMin=marca;
				}
				if(cantidad>cantidadMax)
				{
					cantidadMax=cantidad;
					marcaMaxCantidad=marca;
				}
				if(importe>importeMax)
				{
					importe=importeMax;
				marcaMaxImporte=marca;
				}
				else
				{
				importeMin=importe;
				}
			total=cantidad*importe;
			if(contador==0)
			{
				sumadorKilo=total
			}
			if(contador!=0)
			{
				sumadorKilo=sumadorKilo+total;
			}
			if(sumadorKilo>1000)
			{
				alert('Usted supero el maximo de importe, no se tomara el ultimo');
				sumadorKilo=sumadorKilo-total;
				flag2=1;
			}
			if(sumadorKilo<1001&&flag2==1)
			{
				respuesta=prompt('Desea continuar? s/n');		
			}	
	   }
	   contador++;
    }
	while(respuesta=='s');	
		if(total2<1001)
		{
		document.write('Marca con mas kilos:' +marcaMaxKilo+'<br>');
		document.write('Marca con mas bolsas:' +marcaMaxCantidad+'<br>');
		document.write('Marca con mayor importe:' +marcaMaxImporte+'<br>');
		document.write('Marca con menor importe:' +marcaKiloMin+'<br>');
		document.write('Marca con menor peso:' +marcaKiloMin+'<br>');
	}
}
