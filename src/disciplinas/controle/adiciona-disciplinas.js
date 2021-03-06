$(document).ready(function() {

    //Criar uma função para monitorar o click em cima do botão com a classe btn-save
    $('.btn-save').click(function(e) {
        e.preventDefault()
            // Coletando todas as informações digitadas no form. 
        var dados = $('#adiciona-disciplinas').serialize()
            // Criar uma requisição Ajax assíncrona
        $.ajax({
            type: 'POST', //A forma como as informações serão enviados ao php
            dataType: 'JSON', //Modo de transição de dados entre a visão e o modelo
            assync: true, //É apenas para demonstrar que a requisição será assíncrona. 
            data: dados, //São as informações que serão enviadas ao php
            url: 'src/disciplinas/modelo/adiciona-disciplina.php', //É aonde irão as informações
            success: function(dados) {
                //Demonstrar se deu certo ou não
                $('#adiciona-disciplinas').after(`
                <div class="alert ${dados.tipo} alert-dismissible fade show" role="alert">
                    <strong>${dados.mensagem}</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                `)
                    //Limpando os campos do form
                $('#disciplina').val('')
                $('#professor').val('')
            }
        })
    })
})