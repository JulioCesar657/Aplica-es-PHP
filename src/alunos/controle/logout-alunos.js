$(document).ready(function(){
    $('#logout').click(function(e){
        e.preventDefault();

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            url: 'src/alunos/modelo/logout-alunos.php',
            success: function(dados) {
                //Se existir um usuário logado e for possível destruir essa sessão
                if(dados.result == true){
                    //Location vai fazer um redirecionamento de página. Te levando para o html;
                    $(location).attr('href', 'index.html')
                }else{
                    alert('Não existe usuário logado no sistema');
                }
    
                }
    
        })
        
    })
})