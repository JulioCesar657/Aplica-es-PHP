$(document).ready(function(){
    $('.btn-login').click(function(e){
        e.preventDefault()//Tirar as funcionalidades padrões de um formulário (pegar as infos e disparar)

        var dados = $('#form-login').serialize()//Pegar tudo o que foi digitado e armazenar dentro de dados

        $.ajax({
            type: 'POST', //A forma como as informações serão enviados ao php
            dataType: 'JSON', //Modo de transição de dados entre a visão e o modelo
            assync: true, //É apenas para demonstrar que a requisição será assíncrona. 
            data: dados, //São as informações que serão enviadas ao php
            url: 'src/alunos/modelo/login-alunos.php', //É aonde irão as informações
            success: function(dados) {

                if(dados.result == true ){
                    $(location).attr('href', 'painel.html')
                }else{
                        //Demonstrar se deu certo ou não
                    $('#form-login').after(`
                    <div class="alert alert-danger alert-dismissible fade show mt-5" role="alert">
                        <strong>Id ou senha incorretos</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    `)
                }

                
                    //Limpando os campos do form
                $('#id').val('')
                $('#senha').val('')
            }
        }) 
    })
})