function mostrar()
{
	var marca=new Array();
	var peso=new Array();
	var temperatura=new Array();
	var s='s';
	for(i=0;s=='s';i++)
	{
		marca[i]=prompt('Ingrese la marca');
		do
		{
			peso[i]=prompt('Ingrese peso');
			peso[i]=parseInt(peso[i]);
		}
		while(peso[i]<1||peso[i]>100);
		do
		{
			temperatura[i]=prompt('Ingrese temperatura');
			temperatura[i]=parseInt(temperatura[i]);
		}
		while(temperatura[i]<-31||temperatura[i]>30);
		s=prompt('Desea continuar? s/n');
	}
}
