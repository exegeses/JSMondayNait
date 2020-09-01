
    var dado = document.getElementById('dado');

    function tirarDado()
    {
        //generar un numero aleatorio
        var numeroAleatorio = Math.random();
        var numeroMultiplicado = (numeroAleatorio * 5) + 1;
        var numero = Math.round( numeroMultiplicado );
        //mostrar en el figure la imagen del dado
        //dado.innerText = numero;
        if( numero == 1 ){
            dado.innerHTML = '<img src="dados/dado1.png">';
        }
        else if( numero == 2 ){
            dado.innerHTML = '<img src="dados/dado2.png">';
        }
        else if( numero == 3 ){
            dado.innerHTML = '<img src="dados/dado3.png">';
        }
        else if( numero == 4 ){
            dado.innerHTML = '<img src="dados/dado4.png">';
        }
        else if( numero == 5 ){
            dado.innerHTML = '<img src="dados/dado5.png">';
        }
        else{
            dado.innerHTML = '<img src="dados/dado6.png">';
        }

    }
    tirarDado();