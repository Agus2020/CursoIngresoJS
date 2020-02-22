function mostrar()
{
	var precio;
	var descuento;
	var total;
	precio=prompt('Ingrese precio');
	precio=parseInt(precio);
	descuento=prompt('Ingrese descuento');
	descuento=parseInt(descuento);
	total=precio*descuento/100;
	document.getElementById('elPrecioFinal').value=total;
}
