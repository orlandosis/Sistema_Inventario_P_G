﻿
$(document).ready(function () {
    $("#lblprin").html("DEPARTAMENTOS DE PRODUCTOS");    
    document.getElementById("btndepartamentos").disabled = true;

    $(".divnewdepartamento").hide();

    $(".ocultar").hide();
    $(".diveditdepartamento").hide();
  
})


$("#btncatalogo").on("click", function () {
    window.location = fnBaseURLWeb("Productos/Productos");
})


$("#btnpromociones").on("click", function () {
    window.location = fnBaseURLWeb("Promociones/Promociones");
})

$("#btnewd").on("click", function () {
    $(".divnewdepartamento").show();
    $(".divdepartamento").hide();
    $("#lblprin").html("NUEVO DEPARTAMENTO");
})


$("#btnguardar").on("click", function () {

    let departamento = $("#txtdepartamento").val();

    let params = new Object();
    params.departamento = departamento;
    Post("Departamentos/guardarDepartamento", params).done(function (data) {
        if (data.dt.response == "ok") {
            swal({
                position: 'top-end',
                type: 'success',
                title: "Departamento registrado correctamente",
                text: 'success',
                showConfirmButton: true,
                timer: 60000,
                confirmButtonText: 'Cerrar'
            }, function () {
                    window.location = fnBaseURLWeb("Departamentos/Departamentos");
            })
        } else {
            swal({
                position: 'top-end',
                type: 'error',
                title: data.dt.response,
                text: 'por favor valide lo solicitado o contacte con el administrador',
                showConfirmButton: true,
                timer: 60000,
                confirmButtonText: 'Cerrar'
            })
        }
    })


})


$("#btneliminar").on("click", function () {


    swal({
        title: '¿Esta seguro de eliminar el departamento?',
        text: '¡Si no lo esta puede cancelar la accion!',
        type: 'warning',
        showConfirmButton: true,
        showCancelButton: true,
        ConfirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        CancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, Eliminar',
        closeOnConfirm: false
    }, function (isConfirm) {
        //debugger;
        if (isConfirm) {


            let tabla = $('.tablas').DataTable();
            let data = tabla.rows().data();

            let hayseleccion = 0;
            let datos = "";

            for (var i = 1; i <= data.length; i++) {
                if ($('#cbox_' + i).is(":checked")) {
                    datos = datos + $.trim($("#row_" + i).text()) + "|";
                    hayseleccion = 1;
                }
            }

            if (hayseleccion == 1) {

                let params = new Object();
                params.datos = datos;
                Post("Departamentos/eliminarDepartamento", params).done(function (datos) {

                    if (datos.dt.response == "ok") {

                        swal({
                            position: 'top-end',
                            type: 'success',
                            title: "Se elimino el departamento correctamente",
                            text: 'Departamento eliminado',
                            showConfirmButton: true,
                            timer: 60000,
                            confirmButtonText: 'Cerrar'
                        }, function () {
                                window.location = fnBaseURLWeb("Departamentos/Departamentos");
                        })


                    }

                })


            } else {
                swal({
                    position: 'top-end',
                    type: 'error',
                    title: 'No a seleccionado ningun departamento',
                    text: 'debe seleccionar almenos un departamento para eliminarlo.',
                    showConfirmButton: true,
                    timer: 60000,
                    confirmButtonText: 'Cerrar'
                })
            }

        }

    })

})


$("#btnModificar").on("click", function () {

    debugger;

    let tabla = $('.tablas').DataTable();
    let data = tabla.rows().data();

    let hayseleccion = 0;
    let datos = "";

    for (var i = 1; i <= data.length; i++) {
        if ($('#cbox_' + i).is(":checked")) {
            datos = datos + $.trim($("#row_" + i).text()) + "|";
            hayseleccion = 1;
        }
    }


    if (hayseleccion == 1) {

        let params = new Object();
        params.datos = datos;
        Post("Departamentos/obtEditarDepartamento", params).done(function (datos) {

            if (datos.dt.response != "Error") {

                $(".diveditdepartamento").show();
                $(".divdepartamento").hide();
                $("#edittxtdepartamento").val(datos.dt.depart);
                $("#txtiddepartamento").val(datos.dt.iddepart);

            } else {
                swal({
                    position: 'top-end',
                    type: 'error',
                    title: 'Solo debe seleccionar un departamento para editar',
                    text: 'No debe seleccionar mas de un departamento.',
                    showConfirmButton: true,
                    timer: 60000,
                    confirmButtonText: 'Cerrar'
                })
            }

        })


    } else {
        swal({
            position: 'top-end',
            type: 'error',
            title: 'Seleccione almenos un departamento',
            text: 'no a seleccionado un departamento.',
            showConfirmButton: true,
            timer: 60000,
            confirmButtonText: 'Cerrar'
        })
    }




})

$(".btnvolver").on("click", function () {
    window.location = fnBaseURLWeb("Departamentos/Departamentos");
})


$("#btneditar").on("click", function () {

    let departamento = $("#edittxtdepartamento").val();
    let iddepartamento = $("#txtiddepartamento").val();

    let params = new Object();
    params.departamento = departamento;
    params.iddepartamento = iddepartamento;
    Post("Departamentos/editarDepartamento", params).done(function (data) {
        if (data.dt.response == "ok") {
            swal({
                position: 'top-end',
                type: 'success',
                title: "Departamento modificado correctamente",
                text: 'success',
                showConfirmButton: true,
                timer: 60000,
                confirmButtonText: 'Cerrar'
            }, function () {
                window.location = fnBaseURLWeb("Departamentos/Departamentos");
            })
        } else {
            swal({
                position: 'top-end',
                type: 'error',
                title: data.dt.response,
                text: 'por favor valide lo solicitado o contacte con el administrador',
                showConfirmButton: true,
                timer: 60000,
                confirmButtonText: 'Cerrar'
            })
        }
    })


})


$("#cerrarModulo").on("click", function () {
    window.location = fnBaseURLWeb("Panel/Panel");
})