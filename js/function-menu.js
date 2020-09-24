$(document).ready(function() {

    $('#add-disciplina').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/disciplinas/visão/adiciona-disciplinas.html')
    })


    $('#list').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/disciplinas/visão/list-disciplinas.html')
    })

    $('#add-alunos').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/alunos/visao/adiciona-alunos.html')
    })


    $('#list-alunos').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/alunos/visao/list-alunos.html')
    })
})