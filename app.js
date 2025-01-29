// Autor: Efrain Diaz

//Array para almacenar los nombres de los amigos
let amigosecreto = [];

function agregarAmigo() {
    // Capturar el valor de entrada
    let amigo = document.getElementById('amigo');
    // eliminar espacios en blanco
    let nombre = amigo.value.trim();

    // Validar que el nombre no sea vacio
    if (nombre === '') {
        alert('por favor, Ingrese un nombre');
        return;
    }

    // agregar el nombre a la lista de amigos
    amigosecreto.push(nombre);

    // actualizar la lista
    actualizarLista();

    // limpiar el campo de entrada
    amigo.value = '';
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // limpiar la lista para evitar duplicados

    // recorrer el arreglo de amigos
    amigosecreto.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    // Validar que existan amigos
    if (amigosecreto.length === 0) {
        alert('Por favor, agrega al menos un amigo');
        return;
    }

    // Validar que haya más de un amigo
    if (amigosecreto.length < 3) {
        alert('Por favor, agrega más amigos para realizar el sorteo');
        return;
    }

    // sortear amigos
    let indiceAleatorio = Math.floor(Math.random() * amigosecreto.length);

    // limpiar la lista de amigos en pantalla
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    // obtener el amigo secreto
    let amigoSorteado = amigosecreto[indiceAleatorio];

    // mostrar el amigo secreto
    document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
}
