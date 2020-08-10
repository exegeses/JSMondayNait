// creamos un variable
    var numero = prompt('Ingrese un número');
    var numero2 = prompt('Ingrese otro número');
// ubicamos elemento dentro del DOM
    var texto = document.getElementById('texto');

// parseInt() sirve para convertir un string a número entero
// parseFloat() sirve para convertir un string a número con decimales
    texto.innerText = parseInt(numero) + parseInt(numero2);