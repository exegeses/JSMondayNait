// ubicar elementos dentro del DOM
    var txtDias = document.getElementById('dias');
    var txtHoras = document.getElementById('horas');
    var txtMinutos = document.getElementById('minutos');
    var txtSegundos = document.getElementById('segundos');

// generar función de control
    function countdown()
    {
        //seteamos fecha de inicio y de fin
        var ahora = new Date();
        var fin = new Date(2020, 8, 20);
        // convertimos fechas a timeStamp
        var actual = ahora.getTime();
        var evento = fin.getTime();

        //calculamos tiempo restante en milisegundos
        var restante = evento - actual;

        //obtenemos segundos, minutos, horas y días
        var segundos = Math.floor(restante/1000);
        var minutos = Math.floor(segundos/60);
        var horas = Math.floor( minutos/60);
        var dias = Math.floor(horas/24);

        //obtenemos las horas restantes / dias
        horas = horas%24;
        minutos = minutos%60;
        segundos = segundos%60;

        //agregamos ceros iniciales
        if( horas < 10 ){
            horas = '0'+ horas;
        }
        if( minutos < 10 ){
            minutos = '0'+ minutos;
        }
        if( segundos < 10 ){
            segundos = '0'+ segundos;
        }

        //mostrar datos en las cajas
        txtDias.innerText = dias;
        txtHoras.innerText = horas;
        txtMinutos.innerText = minutos;
        txtSegundos.innerText = segundos;
    }

    //llamamos a nuestra función
    countdown();

    //actualizamos la llamada a la función
    setInterval( countdown, 1000 )