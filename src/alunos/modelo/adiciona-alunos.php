
 <?php
    //Conectar ao banco de dados
     include('../../conexao/conn.php');

    $nome = $_REQUEST['nome'];
    $curso = $_REQUEST['curso'];
    $senha = $_REQUEST['senha'];
    $tipo = $_REQUEST['tipo'];
    //Strlen conta a quantidade de caracteres vindos dentro de uma variável. 
    if(strlen($nome) <= 0 && strlen($curso) <= 0 && strlen($senha) <= 0 && strlen($tipo) <= 0){
        echo "Preencha o campo disciplina";
    }else{
        //Gerar script SQL para cadastro das informações no banco de dados
        //md5 criptografa a senha. 
        $sql = "INSERT INTO alunos (nome, curso, senha, tipo) VALUES ('".$nome."', '".$curso."', '".md5($senha)."', ".$tipo.")";
        // Testar o comando SQL no banco de dados
        if(mysqli_query($conecta, $sql)){
            $dados = array(
                'tipo' => 'alert-success',
                'mensagem' => 'Dados salvos com sucesso!'
            );
        }else{
            $dados = array(
                'tipo' => 'alert-danger',
                'mensagem' => 'Houve um erro no cadastro!'
            );
        }
    }

    echo json_encode($dados);