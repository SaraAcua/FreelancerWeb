$(document).ready(function(){

   /* $("#btn-sendMessage").on("click",function(event){
        
    }); */



    $("#formMessage").validate({
        lang: "es",
        errorClass: "my-error-class",
        validClass: "my-valid-class",
        rules: {
        },
        submitHandler: function (form, e) {
            e.preventDefault();
            var form =  $("#formMessage");
            if(form.valid()){
                $("#formMessage")[0].reset();
                swal("Mensaje enviado!", "Gracias por escribirme!", "success", {
                    button: "ok!",
                  });
            }else{
                swal("Debe rellenar correctamente el formulario", "Verifique por favor", "warning", {
                    button: "ok!",
                  });
            }

        }

    });







});