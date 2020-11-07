<?php
    //Recebendo as infos enviadas pelo form
    $id = $_REQUEST['id'];
    $senha = $_REQUEST['senha'];

    //Conectado ao DB
    include('../../conexao/conn.php');
    //Converter a senha para a criptografia do database
    $senha = md5($senha);

    //Criar uma consulta ao BD para verificar o user
    $sql = "SELECT * FROM alunos WHERE id = ".$id." AND senha = '".$senha."'";

    //Iremos pegar a linha de consulta e executar no BD
    $resultado = mysqli_query($conecta, $sql);

    if($resultado && mysqli_num_rows($resultado) > 0){
        //Criaremos a função para guardar os dados do usuário logado
        while($list = mysqli_fetch_array($resultado)){
            //Iniciar uma sessão do navegador para armazenar constantes
            session_start();
            //Declaração das sessões constantes em nosso sistema
            $_SESSION['id'] = $list['id'];
            $_SESSION['nome'] = $list['nome'];
            $_SESSION['tipo'] = $list['tipo'];
        }
        $dados = array('result' => true);
    }else{
        $dados = array('result' => false);
    }
    echo json_encode($dados);