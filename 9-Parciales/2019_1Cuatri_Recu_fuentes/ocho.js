/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/

function mostrar()
{
	var nombre;
	var cantidad;
	var dias;
	var pago;
	var contadorDias;
	var nombreMax;
	var diasMax;
	var cantidadMax;
	var respuesta;
	var contador;
	contador=0;
	contadorDias=0;
	do
	{
		nombre=prompt('Ingrese nombre huesped');
		cantidad=prompt('Ingrese cantidad de personas');
		cantidad=parseInt(cantidad);
		dias=prompt('Ingrese dias');
		dias=parseInt(dias);
		pago=prompt('Ingrese metodo de pago, efectivo, tarjeta o QR');
		while(!isNaN(nombre))
		{
			nombre=prompt('Ingrese solo letras');
		}
		while(isNaN(cantidad))
		{
			cantidad=prompt('Ingrese cantidad en numeros');
			cantidad=parseInt(cantidad);
		}
		while(isNaN(dias))
		{
			dias=prompt('Ingrese cantidad de dias en numeros');
			dias=parseInt(dias);
		}
		while(pago!='efectivo'&&pago!='tarjeta'&&pago!='QR')
		{
			pago=prompt('Ingrese uno de los siguientes pagos, efectivo, tarjeta o QR')
		}
		if(contador==0)
		{
			nombreMax=nombre;
			cantidadMax=cantidad;
			diasMax=dias;
			pagoMax=pago;
		}
		if(cantidad>cantidadMax)
		{
			nombreMax=nombre;
		}
		if(dias>diasMax)
		{
			diasMax=dias;
			contadorDias++;
		}
		if(pago>pagoMax)
		{
			pagoMax=pago;
		}
		contador++;
		respuesta=prompt('Desea continuar? s/n');
	}
	while(respuesta=='s');
	document.write('Persona con mas huespedes: '+nombreMax+'<br>');
	document.write('El maximo de dias: '+diasMax+'<br>');
	document.write('La forma de pago mas utilizada fue:'+pago+'<br>');
}
