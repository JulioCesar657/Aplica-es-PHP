$(document).ready(function() {

    // Monitorar o clique em cima dos botões com a classe btn-delete
    $('.btn-deletar').on('click', function(e) {
        e.preventDefault()

        // Criando uma variável para coletar o ID do botão clicado
        // Desenvolvo uma hash e juntamente com ela eu coleto o id do botão clicado com a função this
        var dados = `id=${$(this).attr('id')}`
        console.log(dados)

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/alunos/modelo/delete-alunos.php',
            success: function(dados) {
                $('#form').empty()

                $('#form').append(`
                <div class="alert ${dados.tipo} alert-dismissible fade show" role="alert">
                    <strong>${dados.mensagem}</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                `)

                $('tbody').empty()
                $('body').append('<script src="src/alunos/controle/list-alunos.js"></script>')


                
            }
        })

    })
})