$(document).ready(() => {

    const SwalColors = {
        rojo: "rgba(250, 0, 0, 0.45)",
        verde: "rgba(0, 250, 0, 0.45)",
        amarillo: "rgba(255, 233, 0, 0.45)",
        azul: "#0000FF59",
    };

    function SwalOverlayColor(color) {
        setTimeout(() => {
            $(".swal-overlay").css({ "background-color": SwalColors[color] });
        }, 10);
    }

    function Ajax(url) {
        $.ajax({
            type: "POST",
            data: "nombre=" + $("#nombre").val(),
            url: url,
            success: (r) => {
                console.log(r);
                if (r == 1) {
                    SwalOverlayColor("verde");
                    swal({
                        title: "Nombre Guardado",
                        text: "Tu nombre se guardo con exito",
                        icon: "success",
                        button: false,
                        timer: 1500,
                    });
                } else {
                    SwalOverlayColor("rojo");
                    swal({
                        title: "Nombre No Guadado",
                        text: "tu nombre no se guardo",
                        icon: "error",
                        button: false,
                        timer: 1500
                    });
                }
            },
        });
    }

    $("#btn_guardar").click(() => {
        db = $("#selector_db").val();
        if (db == 1) {
            Ajax("control/control_inicio.php");
        } else if (db == 2) {
            Ajax("control/control_inicio_2.php");
        } else if (db == 3) {
            Ajax("control/control_inicio_3.php");
        } else {
            SwalOverlayColor("rojo");
            swal({
                title: "DB No Encontrado",
                text: "No seleccionaste una DB",
                icon: "error",
                button: false,
                timer: 1500
            });
        }
    });
});