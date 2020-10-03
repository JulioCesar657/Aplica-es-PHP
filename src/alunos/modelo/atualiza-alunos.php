
 <?php
    //Conectar ao banco de dados
     include('../../conexao/conn.php');

    $nome = $_REQUEST['nome'];
    $curso = $_REQUEST['curso'];
    $tipo = $_REQUEST['tipo'];
    $senha = $_REQUEST['senha'];
    $id = $_REQUEST['id'];
    if($nome == "" || $curso == "" || $tipo == ""){
        echo "Preencha o campo disciplina";
    }else{
        //Gerar script SQL para atualização das informações no banco de dados
        $sql = "UPDATE alunos SET nome = '".$nome."', curso = '".$curso."', senha = '".md5($senha)."', tipo = ".$tipo." WHERE id = ".$id."";
        // Testar o comando SQL no banco de dados
        if(mysqli_query($conecta, $sql)){
            $dados = array('return' => true);
        }else{
            $dados = array('return' => false);
        }
    }

    echo json_encode($dados);