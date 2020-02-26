function mostrar()
{
	var letra=new Array();
	var num  =new Array();
	var pares=new Array();
	var impares=new Array();
	var cero=new Array();
	var positivo=new Array();
	var negativo=new Array();
	var sum=0;
	var res=0;
	var s='s';
	for(i=0;s=='s';i++)
	{
		num[i]=prompt('Ingrese un numero');
		num[i]=parseInt(num[i]);
		while(isNaN(num[i]) || num[i]>100 || num[i]<-100)
		{
			num[i]=prompt('Solo ingrese numeros');
			num[i]=parseInt(num[i]);
		}
		letra[i]=prompt('Ingrese una letra');
		while(!isNaN(letra[i]))
		{
			letra[i]=prompt('Solo ingrese letras');
		}
		s=prompt('Desea continuar? s/n');
	}
	for(ii=0;i>ii;ii++)
	{
		if(num[ii]==0)
		{
			cero.push(num[ii]);
		}
		else
		{
			if(num[ii]%2==0)
			{
				pares.push(num[ii]);
			}
			if(num[ii]%2!=0)
			{
				impares.push(num[ii]);
			}
		}
	}
	for(ii=0;i>ii;ii++)
	{
		if(num[ii]>0)
		{
			positivo.push(num[ii]);
		}
		else
		{
			negativo.push(num[ii]);
		}

	}
	for(ii=0;i>ii;ii++)
	{
		if(positivo[ii]>0)
		{
			sum=sum+positivo[ii];
		}
		else
		{
			res=res+negativo[ii];
		}	
	}
	max= Math.max(...num);
	min= Math.min(...num);
	lmax=num.indexOf(max);
	lmin=num.indexOf(min);
	document.write('<br>a)');
	document.write('cantidad numeros pares:'  +pares.length);
	document.write('<br>b)');
	document.write('cantidad numeros impares:'+impares.length);
	document.write('<br>c)');
	document.write('cantidad de ceros:'+cero.length);
	document.write('<br>d)');
	document.write('el promedio es:'+sum/positivo.length);
	document.write('<br>e)');
	document.write('la suma de los negativos es:'+res);
	document.write('<br>f)');
	document.write(letra[lmax]+'  ,  '+max+'   ');
	document.write(letra[lmin]+'  ,  '+min);
}