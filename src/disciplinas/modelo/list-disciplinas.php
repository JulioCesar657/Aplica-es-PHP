<?php

    // Conectar-se ao banco de dados
    include('../../conexao/conn.php');

    session_start();

    // Criar uma consulta ao banco de dados, para listar as informações existentes
    $sql = "SELECT * FROM disciplinas WHERE id_alunos = ".$_SESSION['id']."";

    // Estamos executando nossa query
    $resultado = mysqli_query($conecta, $sql);

    // Iremos testar os resultado da query, onde iremos verificar se existe registro e se é maior que 0
    if($resultado && mysqli_num_rows($resultado)>0){
        // Associar os registros encontrado em um array
        //fetch_assoc associa cada registro meus a uma linha
        while($linha = mysqli_fetch_assoc($resultado)){
            $dados[] = array_map(null, $linha);
        }
    }else{
        $dados = array('erro' => 'Não foi possível buscar resultado algum');
    }

    echo json_encode($dados);