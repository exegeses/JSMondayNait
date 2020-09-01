
    var dado = document.getElementById('dado');

    function tirarDado()
    {
        // obtenemos un número aleatorio
        var numeroAleatorio = Math.random();
            console.log(numeroAleatorio);

        var numeroMultiplicado = (numeroAleatorio * 5) + 1;
            console.log(numeroMultiplicado);

        var numeroRedondeado = Math.round(numeroMultiplicado);
            console.log(numeroRedondeado);

        // mostrando la imagen dentro del figure
        dado.innerText = numeroRedondeado;
    }

    //llamamos a la función
    tirarDado();