/*
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
*/

function mostrar()
{
	var seguir;
	seguir=true;
	var nombreIngresado;
	var edadIngresada;
	var generoIngresado;
	var vacunaIngresada;
	var temperaturaIngresada;
	var BanderaTemperatura;
	var mayorTemperatura;
	var acumuladorSputnik;
	acumuladorSputnik=0;
	var acumuladorAstraZeneca;
	acumuladorAstraZeneca=0;
	var acumuladorOtra;
	acumuladorOtra=0;

	nombreIngresado=prompt("Ingrese su nombre");
	edadIngresada=prompt("Ingrese su edad: ");
	edadIngresada=parseInt(edadIngresada);

	while(seguir==true)
	{
		generoIngresado=prompt("Ingrese su genero: F/M/NB");
		while(generoIngresado!="F"& generoIngresado!="M"& generoIngresado!="NB")
		{
			generoIngresado=prompt("Error, vuelva a ingresar su genero: ");
		}

		vacunaIngresada=prompt("Ingrese la vacuna aplicada: SputnikV/AstraZeneca/Otra");
		while(vacunaIngresada!="SputnikV"& vacunaIngresada!="AstraZeneca"&vacunaIngresada!="Otra")
		{
			vacunaIngresada=prompt("Error, ingrese una vacuna valida.")
		}

		temperaturaIngresada=prompt("Ingrese la temperatura corporal durante la primer noche:")
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(temperaturaIngresada<35 || temperaturaIngresada>40)
		{
			temperaturaIngresada=prompt("Error, ingrese una temperatura valida");
			temperaturaIngresada=parseInt(temperaturaIngresada);
		}
		














		seguir=confirm("Desea seguir ingresando datos? ")
	}









}
