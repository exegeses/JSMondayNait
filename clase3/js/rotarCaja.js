// ubicar elemento dentro del DOM
    var caja = document.getElementById('caja');

// modificaciones sobre la caja
    caja.style.position = 'relative';
    caja.style.top = '100px';
    caja.style.left = '100px';
    caja.style.borderRadius = '10px';

    var grados = 0;

// creamos función de control
    function rotar()
    {
        grados = grados + 2;

        //cambio de color
        var r = Math.random() * 255 //entre 0 y 1->255
        var g = Math.random() * 255 //entre 0 y 1->255
        var b = Math.random() * 255 //entre 0 y 1->255

        caja.style.transform = 'rotate('+grados+'deg)';
        caja.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')'
    }
// invocamos la función
    rotar();

// actualizamos la función
    setInterval( rotar, 100);