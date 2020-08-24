// ubicamos elemento/s dentro del DOM
// var txtFecha = document.getElementById('txtFecha').innerHTML = new Date();
   var txtFecha = document.getElementById('txtFecha');

// generamos función/es de control

    function mostrarFecha()
    {
        //crear un objeto de Fecha
        var fecha = new Date();

        //obtenemos el día del mes, el mes, el año
        var diaMes = fecha.getDate();
            if( diaMes < 10 ){
                diaMes = '0'+ diaMes;
            }
        var mes = fecha.getMonth()+1;
            if( mes < 10 ){
                mes = '0'+ mes;
            }
        var anio = fecha.getFullYear()


        // mostramos la fecha en el span (24/08/2020)
        txtFecha.innerText = diaMes +'/'+ mes +'/'+ anio;
    }

// llamar a la función
    mostrarFecha();
