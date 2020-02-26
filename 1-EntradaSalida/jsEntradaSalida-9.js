/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	sueldo=document.getElementById('num1');
	sueldo=parseInt(sueldo);
	descuento=document.getElementById('des');
	descuento=parseInt(descuento);
	resultado=sueldo*10/100                 // Descuento del 10% 10*100= 1000/100= 10% 
	resultado=sueldo+(sueldo*10/100)        // Te pide un aumento 100 + 100*10/100 = 110
	while(cont<2)
	{
		sueldo=sueldo*descuento/100;
		cont++
	}
}
