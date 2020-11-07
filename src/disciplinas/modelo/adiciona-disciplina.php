
 <?php
    //Conectar ao banco de dados
     include('../../conexao/conn.php');

    $disciplina = $_REQUEST['disciplina'];
    $professor = $_REQUEST['professor'];
    $nota = $_REQUEST['nota'];
    session_start();
    $id_alunos = $_SESSION['id'];

    if($disciplina == ""){
        echo "Preencha o campo disciplina";
    }else{
        //Gerar script SQL para cadastro das informações no banco de dados
        $sql = "INSERT INTO disciplinas (disciplina, professor, nota, id_alunos) VALUES ('".$disciplina."', '".$professor."', '".$nota."', ".$id_alunos.")";
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