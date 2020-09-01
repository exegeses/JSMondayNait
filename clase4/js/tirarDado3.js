
    var dado = document.getElementById('dado');

    function tirarDado()
    {
        //generar un numero aleatorio
        var numeroAleatorio = Math.random();
        var numeroMultiplicado = (numeroAleatorio * 5) + 1;
        var numero = Math.round( numeroMultiplicado );
        //mostrar en el figure la imagen del dado
        switch( numero ){
            case 1:
                dado.innerHTML = '<img src="dados/dado1.png">';
                break;
            case 2:
                dado.innerHTML = '<img src="dados/dado2.png">';
                break;
            case 3:
                dado.innerHTML = '<img src="dados/dado3.png">';
                break;
            case 4:
                dado.innerHTML = '<img src="dados/dado4.png">';
                break;
            case 5:
                dado.innerHTML = '<img src="dados/dado5.png">';
                break;
            default:
                dado.innerHTML = '<img src="dados/dado6.png">';
                break;
        }
    }
    tirarDado();