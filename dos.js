/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos
 alimenticios, hasta que el cliente quiera. Por cada compra se ingresa:
Tipo: (validar "Yerba", "Azúcar", "Café").
Cantidad de bolsas. (más de cero).
Precio por bolsa (más de cero).
Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar.
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar
Se pide mostrar por pantalla:
a)	El importe total a pagar bruto, sin descuento.
b)	El importe total a pagar con descuento (solo si corresponde)
c)	Informar el tipo con más cantidad de bolsas.
d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
*/

function mostrar()
{
  var seguir;
  var tipoIngresado;
  var cantidadDeBolsasIngresada;
  var precioPorBolsaIngresada;

  var importeSinDescuento;
  importeSinDescuento=0;

  var importeConDescuento;
  importeConDescuento=0;
  var descuento;

  var acumuladorBolsasCafe;
  var acumuladorBolsasYerba;
  var acumuladorBolsasAzucar;
  var acumuladorTotalBolsas;

  var acumuladorImporteCafe;
  acumuladorImporteCafe=0;
  var acumuladorImporteAzucar;
  acumuladorImporteAzucar=0;
  var acumuladorImporteYerba;
  acumuladorImporteYerba=0;
  var BanderaPrimerCompraIngresada;
  var PrecioMinimo;
  var tipoMasBarato;
  var subtotal;

  BanderaPrimerCompraIngresada=true;
  acumuladorBolsasAzucar = 0;
  acumuladorBolsasYerba = 0;
  acumuladorBolsasCafe = 0;
  seguir =true;

  while(seguir==true)
  {
    tipoIngresado = prompt("Ingrese el tipo de producto: Yerba/Azucar/Cafe ");
    while(tipoIngresado!="Yerba" & tipoIngresado!="Azucar" & tipoIngresado!="Cafe");
    {
      tipoIngresado = prompt("Error, ingrese un producto en stock");
    }

    cantidadDeBolsasIngresada = prompt("Ingrese la cantidad de bolsas:");
    cantidadDeBolsasIngresada= parseInt(cantidadDeBolsasIngresada);
    while(isNaN(cantidadDeBolsasIngresada) || cantidadDeBolsasIngresada<0)
    {
      cantidadDeBolsasIngresada = prompt("Error, ingrese una cantidad de bolsas valido");
      cantidadDeBolsasIngresada= parseInt(cantidadDeBolsasIngresada);
    }

    precioPorBolsaIngresada = prompt("Ingrese precio por bolsa:");
    precioPorBolsaIngresada = parseInt(precioPorBolsaIngresada);
    while( precioPorBolsaIngresada<0)
    {
      precioPorBolsaIngresada = prompt("Error, ingrese un precio por bolsa valido");
      precioPorBolsaIngresada = parseInt(precioPorBolsaIngresada);
    }

    subtotal= cantidadDeBolsasIngresada * precioPorBolsaIngresada;


    switch(tipoIngresado)
    {
      case "Azucar":
      acumuladorBolsasAzucar= acumuladorBolsasAzucar + cantidadDeBolsasIngresada;
      acumuladorImporteAzucar= acumuladorImporteAzucar + subtotal ;
      break;
      case "Yerba":
      acumuladorBolsasYerba= acumuladorBolsasYerba + cantidadDeBolsasIngresada;
      acumuladorImporteYerba= acumuladorImporteYerba + subtotal ;
      break;
      case "Cafe":
      acumuladorBolsasCafe= acumuladorBolsasCafe + cantidadDeBolsasIngresada;
      acumuladorImporteCafe= acumuladorImporteCafe + subtotal ;
      break;
    }

    if(BanderaPrimerCompraIngresada== true || subtotal < PrecioMinimo)
    {
      tipoMasBarato = tipoIngresado;
      PrecioMinimo = subtotal;
      BanderaPrimerCompraIngresada= false;
    }

    seguir=confirm("Desea seguir ingresando productos?");
  }

  importeSinDescuento = acumuladorImporteCafe + acumuladorImporteYerba + acumuladorImporteAzucar ;
  importeSinDescuento= parseInt(importeSinDescuento);
  document.write("El importe total es: " + importeSinDescuento );

  acumuladorTotalBolsas = parseInt(acumuladorTotalBolsas);
  acumuladorTotalBolsas = acumuladorBolsasCafe + acumuladorBolsasYerba + acumuladorBolsasAzucar ;
  

  if(acumuladorTotalBolsas>5 & acumuladorTotalBolsas<10)
  {
    descuento= 0.10;
  }
    else if(acumuladorTotalBolsas>10)
    {
      descuento= 0.15;
    }
    else if(descuento>0)
    {
      importeConDescuento= importeSinDescuento - (importeSinDescuento * descuento);
      document.write("El importe con descuento es: " + importeConDescuento );
      importeConDescuento = parseInt(importeConDescuento);
    }

  if(acumuladorBolsasCafe > acumuladorBolsasYerba & acumuladorBolsasCafe > acumuladorBolsasAzucar)
  {
    document.write("El tipo de bolsas de mas cantidad es la de cafe");
  }
    else if (acumuladorBolsasYerba > acumuladorBolsasCafe & acumuladorBolsasYerba > acumuladorBolsasAzucar)
    {
      document.write("El tipo de bolsas de mas cantidad es la de Yerba");
    }
    else if(acumuladorBolsasAzucar> acumuladorBolsasCafe & acumuladorBolsasAzucar> acumuladorBolsasYerba)
    {
      document.write("El tipo de bolsas de mas cantidad es la de Azucar");
    }

    document.write("El tipo de compra mas barato es: " + tipoMasBarato );


}
