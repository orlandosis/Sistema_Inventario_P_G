$(document).ready(function () {
    $("#divnewcliente").hide();
    $("#diveditcliente").hide();
    $("#divlistacliente").show();
    $("#lblinicial").html("Clientes");

})

$("#cerrarModulo").on("click", function () {
    window.location = fnBaseURLWeb("Panel/Panel");
})

$("#newcliente").on("click", function () {


    $("#lblinicial").html("Nuevo Cliente");
    $("#divregistrarclientes").show();
    $("#divlistaclientes").hide();




})

    })

$(".tablas").on("click", ".btneditar", function () {

    let iduser = $(this).attr("editar");

    let params = new Object()
    params.iduser = iduser;
    Post("Empleados/obteditarEmpleado", params).done(function (datos) {

        if (datos.dt.response == "ok") {
            $("#lblinicial").html("Editar Empleado");

            $("#divregistrarempleados").hide();
            $("#diveditarempleados").show();
            $("#divlistaempleados").hide();

            $("#txtiduser").val(datos.dt.iduser);
            $("#txteditusername").val(datos.dt.username);
            $("#txteditdni").val(datos.dt.dni);
            $("#txteditemail").val(datos.dt.email);
            $("#txteditusuario").val(datos.dt.user);

            $("#obt").append("<option value=" + datos.dt.idcargo + ">" + datos.dt.cargo + "</option");

            if (datos.dt.ventas == 1) {
                document.getElementById('editchventas').checked = true;
            }
            if (datos.dt.clientes == 1) {
                document.getElementById('editchclientes').checked = true;
            }
            if (datos.dt.caja == 1) {
                document.getElementById('editchcaja').checked = true;
            }
            if (datos.dt.compras == 1) {
                document.getElementById('editchcompras').checked = true;
            }
            if (datos.dt.productos == 1) {
                document.getElementById('editchproductos').checked = true;
            }
            if (datos.dt.inventario == 1) {
                document.getElementById('editchinventario').checked = true;
            }
            if (datos.dt.proveedor == 1) {
                document.getElementById('editchproveedores').checked = true;
            }
            if (datos.dt.dashboard == 1) {
                document.getElementById('editchdashboard').checked = true;
            }
            if (datos.dt.usuario == 1) {
                document.getElementById('editchusuarios').checked = true;
            }
            if (datos.dt.empresa == 1) {
                document.getElementById('editchempesa').checked = true;
            }
            if (datos.dt.configuraciones == 1) {
                document.getElementById('editchconfiguraciones').checked = true;
            }


        } else {
            swal({
                position: 'top-end',
                type: 'error',
                title: datos.dt.response,
                text: 'Contacte con el creador del sistema',
                showConfirmButton: true,
                timer: 60000,
                confirmButtonText: 'Cerrar'
            })
        }
    })



})