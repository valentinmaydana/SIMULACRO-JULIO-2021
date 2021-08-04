/*Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.*/


function mostrar()
{
	var i;
	i=0;
	var tipoDisco;
	var precioDisco;
	var cantidadDisco;
	var marcaDisco;
	var capacidadDisco;

	var banderaPrimerSSDMasBarato;
	banderaPrimerSSDMasBarato=true;
	var banderaSegundoHDDMasCaro;
	banderaSegundoHDDMasCaro=true;

	var discoSDDMasBarato;
	var cantidadSSDMasBarato;
	var marcaSDDMasBarato;

	var cantidadHDDMasCaro;
	var capacidadHDDMasCaro;
	var precioHDDMasCaro;

	while(i<5)
	{
		tipoDisco=prompt("ingrese el tipo disco: HDD/SSD/SSDM2");
		while(tipoDisco!="HDD" & tipoDisco!="SSD" & tipoDisco!="SSDM2")
		{
			tipoDisco=prompt("Error, ingrese un disco en stock:")
		}

		precioDisco=prompt("ingrese el precio:");
		precioDisco=parseInt(precioDisco);
		while(precioDisco<5000 || precioDisco>18000)
		{
			precioDisco=prompt("error, ingrese un precio valido: ");
			precioDisco=parseInt(precioDisco);
		}

		cantidadDisco=prompt("ingrese una cantidad: hasta 50 unidades");
		cantidadDisco=parseInt(cantidadDisco);
		while(cantidadDisco<0 || cantidadDisco>50)
		{
			cantidadDisco=prompt("error, ingrese una cantidad valida");
			cantidadDisco=parseInt(cantidadDisco);
		}

		marcaDisco=prompt("ingrese la marca:Seagate/Western Digital/Kingston ");
		while(marcaDisco!="Seagate"&marcaDisco!="Western Digital"&marcaDisco!="Kingston")
		{
			marcaDisco=prompt("error, ingrese una marca valida");
		}

		capacidadDisco=prompt("Ingrese la capacidad del disco: 250Gb, 500Gb, 1Tb, 2Tb");
		while(capacidadDisco!="250Gb"&capacidadDisco!="500Gb"&capacidadDisco!="1Tb"&capacidadDisco!="2Tb")
		{
			capacidadDisco=prompt("error, ingrese una capacidad en stock");
		}

		switch(tipoDisco)
		{
			case "SSD":
				if(precioDisco<discoSDDMasBarato || banderaPrimerSSDMasBarato==true)
				{
					discoSDDMasBarato = precioDisco;
					cantidadSSDMasBarato = cantidadDisco;
					marcaSDDMasBarato = marcaDisco;
					banderaPrimerSSDMasBarato= false;
				}
				break;
			case "HDD":
				cantidadHDDMasCaro= cantidadHDDMasCaro + 1;
				if(precioDisco>precioHDDMasCaro || banderaSegundoHDDMasCaro==true)
				{
					precioHDDMasCaro=precioDisco;
					capacidadHDDMasCaro= capacidadDisco;
					cantidadHDDMasCaro= cantidadDisco;
					banderaSegundoHDDMasCaro= false;
				}
				break;
		}

		i= i+1;
	}

	document.write("El mas barato de los SDD " + discoSDDMasBarato + "la cantidad de unidades " + cantidadSSDMasBarato+ "<br>" );
	document.write("El mas caro de los HDD " + precioHDDMasCaro + "la capacidad de almacenamiento " + capacidadHDDMasCaro + "y la cantidad de unidades disponibles " + cantidadHDDMasCaro + "<br>");
	document.write("En total de HDD hay " + cantidadHDDMasCaro + "<br>");






}
