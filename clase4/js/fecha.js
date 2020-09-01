
    var txtDia = document.getElementById('txtDia');

    function mostrarDia()
    {
        var fecha = new Date();
        //obtenemos el día de la semana
        var dia = fecha.getDay(); // 0->Domingo...6->Sábado

        if ( dia == 0 ){
            dia = 'Domingo';
        }
        else if ( dia == 1 ){
            dia = 'Lunes';
        }
        else if ( dia == 2 ){
            dia = 'Martes';
        }
        else if ( dia == 3 ){
            dia = 'Miércoles';
        }
        else if ( dia == 4 ){
            dia = 'Jueves';
        }
        else if ( dia == 5 ){
            dia = 'Viernes';
        }
        else {
            dia = 'Sábado';
        }

        txtDia.innerText = dia;
    }

    mostrarDia();