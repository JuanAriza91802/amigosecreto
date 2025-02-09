let amigos = new Array;
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

function sortearAmigo(){
    let numeroRandom = Math.floor(Math.random() * amigos.length);
    if(amigos.length != 0){
        let li =document.createElement('li');
        li.textContent = amigos[numeroRandom];
        li.classList.add('result-list');
        document.getElementById('listaAmigos').innerHTML = '';
        resultado.appendChild(li);
    }else{
        mostrarPopup("Error: La lista no puede estar vacia.");
    }
}
/** estilos de validaciones */
function mostrarPopup(mensaje) {
    document.getElementById("popup-message").innerText = mensaje;
    document.getElementById("popup").style.display = "flex";
}
function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}



