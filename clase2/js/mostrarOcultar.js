// ubicar elementos dentro del DOM
    var caja = document.getElementById('caja');

// generar funciones
    function ocultar()
    {
        // opacity = '0';
        // visibility = 'hidden'
        // display = 'none'
        caja.style.display = 'none';
    }
    function mostrar()
    {
        // opacity = '1';
        // visibility = 'visible'
        // display = 'block'
        caja.style.display = 'block';
    }

    function mostrarOcultar()
    {
        if (caja.style.display == 'none'){
            //caja.style.display = 'block';
            mostrar();
        }
        else {
            //caja.style.display = 'none';
            ocultar();
        }
    }
