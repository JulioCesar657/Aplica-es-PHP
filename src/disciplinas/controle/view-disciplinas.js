function closeForm() {
    $('.btn-close').click(function(e) {
        e.preventDefault()
        $('#form').empty()
        $('#form').hide()
        $('.row').show()
    })
}

$(document).ready(function() {


    // Monitorar o clique em cima dos botões com a classe btn-view
    $('.btn-view').on('click', function(e) {
        e.preventDefault()

        // Criando uma variável para coletar o ID do botão clicado
        // Desenvolvo uma hash e juntamente com ela eu coleto o id do botão clicado com a função this
        var dados = `id=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/disciplinas/modelo/view-disciplinas.php',
            success: function(dados) {

                $('#form').show()
                $('.row').hide()

                // Carregando nosso formulário dentro da DIV que deixamos em branco para mostrar os dados
                $('#form').load('src/disciplinas/visão/adiciona-disciplinas.html', function() {
                    $('.btn-save').after('<button class="btn btn-secondary btn-block btn-close"><i class="mdi mdi-close"></i> Fechar</button>')
                    $('.btn-save').hide()
                    $('h2').empty()
                    $('h2').append('Visualização de cadastro')
                    $('#disciplina').val(dados[0].disciplina)
                    $('#disciplina').attr('disabled', true)
                    $('#professor').val(dados[0].professor)
                    $('#professor').attr('disabled', true)

                    closeForm()
                })
            }
        })

    })
})