window.addEventListener("load", function(){
	var nombreLista = document.getElementById("nombre-lista");
	var lista = document.getElementById("lista");
	var eliminar = document.getElementById("eliminar");
	var boton = document.getElementById("guardar");
	var padreSegundo = document.getElementById("padre-segundo");
	var padrePrimero = document.getElementById("padre-primero");
	var tarjeta = document.getElementById("nombre-tarjeta");
	var botonDos = document.getElementById("guardar-dos");
	var eliminarDos = document.getElementById("eliminar-dos")

/* Un elemento en el HTML con el mensaje "Añadir una lista", que al dar click muestre un 
input y un botón (formulario) para que el usuario ingrese el nombre de la lista.*/

	nombreLista.addEventListener("click", function(){
		document.getElementById("oculto").style.display = "block";
	});

	eliminar.addEventListener("click", function(){
		document.getElementById("oculto").style.display = "none";
	});

/*Mostrar en el HTML, el texto ingresado al dar click en el botón de "Guardar" del formulario (como si fuera título de la lista).
Debajo del título, mostrar el mensaje clickeable de "Añadir una tarjea".*/

	boton.addEventListener("click", function(){
		var contenedor = lista.value;
		var titulo = document.getElementById("titulo");
		titulo.innerText = contenedor;
		padreSegundo.style.display = "block";
		padrePrimero.style.display = "none";
	});

	tarjeta.addEventListener("click", function(){
		tarjeta.style.display = "none";
		document.getElementById("oculto-dos").style.display = "block";
	});

	botonDos.addEventListener("click", function(){
		var contenedorDos = document.getElementById("tarjeta").value;
		var tarjetaPermanente = document.getElementById("tarjeta-permanente");
		tarjetaPermanente.innerText = contenedorDos;
		document.getElementById("oculto-dos").style.display = "none";

    	
	});

	eliminarDos.addEventListener("click", function(){
		document.getElementById("oculto-dos").style.display = "none";
	});


});