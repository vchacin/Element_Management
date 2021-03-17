function enviar(){
    let data = {};
    data.name = $("#name").val();
    data.phone = $("#phone").val();
    data.email = $("#email").val();
    data.message = $("#message").val();
    $.ajax({
        url: '/Contacto/EnviarCorreo',
        type: 'POST',
        data: data,
        success: function(ret){
            if(ret.Success){
                alert("OK");
            }
            else{
                alert(ret.Message);
            }
        },
        fail: function(ret){
            console.error("Hubo un error al conectar con el metodo");
        }
    });
}