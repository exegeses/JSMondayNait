// ubicar elemento/s dentro del DOM
    var txtReloj = document.getElementById('txtReloj');

// generar función/es de control
    function mostrarReloj()
    {
        //creamos objeto de fecha
        var fecha = new Date();

        var ampm = 'am';
        //obtenemos horas, minutos y segundos
        var horas = fecha.getHours();
            if( horas > 12 ){
                ampm = 'pm';
                horas = horas - 12;
            }
            if ( horas < 10 ){
                horas = '0'+ horas;
            }

        var minutos = fecha.getMinutes();
            if( minutos < 10 ){
                minutos = '0'+ minutos;
            }
        var segundos = fecha.getSeconds();
            if( segundos < 10 ){
                segundos = '0'+ segundos;
            }

        //mostrar el reloj en el span '20:31:58'
        txtReloj.innerText = horas +':'+ minutos +':'+ segundos +' '+ampm;
    }

// invocamos a nuestra función
    mostrarReloj();

// actualizamos reloj
    setInterval( mostrarReloj, 1000 );