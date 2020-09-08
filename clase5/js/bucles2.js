
    var galeria = document.getElementById('galeria');

    /* array de imagenes */
    var fotos = [
                'arq1.jpg', 'arq2.jpg', 'arq3.jpg',
                'dancer1.jpg', 'dancer2.jpg', 'dancer3.jpg',
                'moda1.jpg', 'moda2.jpg', 'moda3.jpg'
                ];
    var n = 0;
    var cantidad = fotos.length;

    galeria.innerHTML = '';

    while( n < cantidad ){
        galeria.innerHTML =  galeria.innerHTML + '<article>\n' +
                            '<img src="imagenes/'+fotos[n]+'">\n' +
                            '</article>';
        n++;
    }