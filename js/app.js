window.addEventListener("load", function(){
	var nombreLista = document.getElementById("nombre-lista");
	var eliminar = document.getElementById("eliminar");
	var boton = document.getElementById("guardar");
	nombreLista.addEventListener("click", function(){
		document.getElementById("oculto").style.display = "block";
	});

	eliminar.addEventListener("click", function(){
		document.getElementById("oculto").style.display = "none";
	});


});