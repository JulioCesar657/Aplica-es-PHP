$(document).ready(function() {

    $('#add-disciplina').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/disciplinas/visão/adiciona-disciplinas.html')
    })

})