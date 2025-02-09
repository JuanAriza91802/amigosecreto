let amigos = new Array;
// funciones
function agregarAmigo(element){
    amigos.push(element); 
    document.getElementById('listaAmigos').innerHTML = '';
    amigos.forEach(element => {
        let li = document.createElement("li"); 
        li.textContent = element; 
        li.classList.add("name-item");
        listaAmigos.appendChild(li);  
    });
    
    document.getElementById("amigo").value = "";
}
function visualizarLista(){}
function sortearAmigo(){

}
/** estilos de validaciones */
function mostrarPopup(mensaje) {
    document.getElementById("popup-message").innerText = mensaje;
    document.getElementById("popup").style.display = "flex";
}
function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}
function validarEntrada() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre !== '') {
        agregarAmigo(nombre);
    } else {
        mostrarPopup(" Error: El campo no puede estar vacío.");
    }
}


