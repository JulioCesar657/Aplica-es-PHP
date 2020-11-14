$(document).ready(function(){

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            url: 'src/alunos/modelo/verifica-login.php',
            success: function(dados) {
                //Se existir um usuário logado e for possível destruir essa sessão
                 if(dados.return == false){
                    //Location vai fazer um redirecionamento de página. Te levando para o html;
                    $(location).attr('href', 'index.html')
                }else{
                    //append() adiciona algo
                    $('#welcomme').append(`Seja bem-vindo(a) ao sistema: ${dados.nome}`)
                } 
    
                }
    
        })
        
})