
    var txtDia = document.getElementById('txtDia');

    function mostrarDia()
    {
        var fecha = new Date();

        //obtenemos el día de la semana
        var dia = fecha.getDay(); // 0->Domingo, 1->Lunes...

        switch ( dia ) {
            case 0:
                dia = 'Domingo';
                break;
            case 1:
                dia = 'Lunes';
                break;
            case 2:
                dia = 'Martes';
                break;
            case 3:
                dia = 'Miércoles';
                break;
            case 4:
                dia = 'Jueves';
                break;
            case 5:
                dia = 'Viernes';
                break;
            default:
                dia = 'Sábado';
                break;
        }

        txtDia.innerText = dia;
    }

    mostrarDia();