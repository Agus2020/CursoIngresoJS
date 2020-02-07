function mostrar()
{
	var precio;
	var descuento;
	var total;
	precio=prompt("Ingrese el precio");
	precio=parseInt(precio);
	descuento=prompt("Ingrese descuento");
	descuento=parseInt(descuento);
	total=precio/descuento+(precio);
	document.getElementById('elPrecioFinal').value=total;
}
