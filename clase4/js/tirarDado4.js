
    var dado = document.getElementById('dado');

    function tirarDado()
    {
        //generar un numero aleatorio
        var numeroAleatorio = Math.random();
        var numeroMultiplicado = (numeroAleatorio * 5) + 1;
        var numero = Math.round( numeroMultiplicado );
        //mostrar en el figure la imagen del dado
        dado.innerHTML = '<img src="dados/dado'+ numero +'.png">';
    }
    tirarDado();