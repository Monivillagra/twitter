function todoApp(){
//Boton borrar
var borrar = document.createElement('span');
borrar.setAttribute('type','button');
borrar.setAttribute('class','icono');
//Boton meGusta
var meGusta = document.createElement('span');
meGusta.setAttribute('type','button');
meGusta.setAttribute('class','icono');
//Boton marcar
var marcar= document.createElement("input");
marcar.setAttribute("id" , "marcar");
marcar.setAttribute("type", "checkbox");
//Icono meGusta
var meGustaIcono = document.createElement('i');
meGustaIcono.setAttribute('class', 'fa fa-heart');
meGusta.appendChild(meGustaIcono);
//Icono borrar
var borrarIcono = document.createElement('i');
borrarIcono.setAttribute('class', 'fa fa-trash');
borrar.appendChild(borrarIcono);
//botones
var lista = document.createElement("li");
var valorInput = document.getElementById("tareaAgregada").value;
var nodoTexto = document.createTextNode(valorInput);
lista.appendChild(marcar);
lista.appendChild(nodoTexto);
lista.appendChild(meGusta);
lista.appendChild(borrar);
//texto en blanco + agregar funciones iconos
if (valorInput === null || valorInput === "") {
  // alert("Ingrese una tarea");
} else {
  document.getElementById("listaNueva").appendChild(lista);
}
document.getElementById("tareaAgregada").value = "";
//Propiedades
//P.boton borrar
var span = document.createElement("span");
span.className = "cerrado";
span.appendChild(borrar);
lista.appendChild(span);
//P.boton meGusta
var span = document.createElement("span");
span.className = "cerrado";
span.appendChild(meGusta);
lista.appendChild(span);
//Eventos
//E.boton borrar
borrar.addEventListener('click', function(){
  lista.style.display = "none";
});
//E.boton meGusta
meGusta.addEventListener('click', function(){
  meGusta.classList.toggle('meGusta');
});
//E.boton marcar
marcar.addEventListener("click", function(){
  lista.classList.toggle('marcar');
});
}