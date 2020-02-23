function mostrar()
{
	var num1;
	var num2;
	var total;
	num1=prompt('Ingrese un numero');
	num1=parseInt(num1);
	num2=prompt('Ingrese otro numero');
	num2=parseInt(num2);
	if(num1==num2)
	{
		alert(num1+','+num2);
	}
	if(num1>num2)
	{
		total=num1-num2;
		alert(total);
	}
	if(num1<num2)
	{
		total=num1+num2;
		if(total>10)
		{
			alert('La suma es '+total+' y supero el diez');
		}
		else
		{
			alert(total);
		}
	}
}
