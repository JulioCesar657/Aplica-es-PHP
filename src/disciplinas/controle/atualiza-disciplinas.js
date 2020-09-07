$(document).ready(function() {

    //Criar uma função para monitorar o click em cima do botão com a classe btn-save
    $('.btn-update').click(function(e) {
        e.preventDefault()
            // Coletando todas as informações digitadas no form. 
        var dados = $('#adiciona-disciplinas').serialize()
            // Criar uma requisição Ajax assíncrona
        $.ajax({
            type: 'POST', //A forma como as informações serão enviados ao php
            dataType: 'JSON', //Modo de transição de dados entre a visão e o modelo
            assync: true, //É apenas para demonstrar que a requisição será assíncrona. 
            data: dados, //São as informações que serão enviadas ao php
            url: 'src/disciplinas/modelo/atualiza-disciplinas.php', //É aonde irão as informações
            success: function(dados) {
                if(dados.return == true){
                    $('#form').empty()
                    $('#form').hide()
                    $('tbody').empty() //Clear the table
                    $('body').append('<script src="src/disciplinas/controle/list-disciplinas.js"></script>')
                    $('.row').show()
                }
                else{
                    alert("Something is wrong!")
                }
            }
        })
    })
})