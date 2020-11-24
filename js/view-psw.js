$(document).ready(function(){

    $('.mdi').click(function(){
        
        let status = $(this).attr('data-status');

        if(status == '0'){
            //Mostras senha
            $('#senha').removeAttr('type', 'password');
            //attr adiciona propriedade
            $('#senha').attr('type', 'text');
    
            $('.mdi').removeClass('mdi-eye-off');
            $('.mdi').addClass('mdi-eye');

            $('.mdi').removeAttr('data-status', '0');
            $('.mdi').attr('data-status', '1');
        }else{
            //Ocultar senha
            $('#senha').removeAttr('type', 'text');
            $('#senha').attr('type', 'password');
    
            $('.mdi').removeClass('mdi-eye');
            $('.mdi').addClass('mdi-eye-off');

            $('.mdi').removeAttr('data-status', '1');
            $('.mdi').attr('data-status', '0');
        }

    })

})