
    var txtDia = document.getElementById('txtDia');

    // creamos arrays
    var marcas = ['Nike','Adidas','CocaCola','Nikon'];
    console.log(marcas);
    console.log(marcas[2])

    //creamos array con los días de la semana
    var semana = [
                    'Domingo', 'Lunes', 'Martes',
                    'Miércoles', 'Jueves', 'Viernes',
                    'Sábado'
                 ];

    var fecha = new Date();
    var diaSemana = fecha.getDay(); // 0 -> Domingo, 1 -> Lunes ...
        console.log(diaSemana);

    //mostramos días de la semana en el span
    txtDia.innerText = semana[ diaSemana ];