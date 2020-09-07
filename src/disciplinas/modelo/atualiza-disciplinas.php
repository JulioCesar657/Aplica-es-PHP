
 <?php
    //Conectar ao banco de dados
     include('../../conexao/conn.php');

    $disciplina = $_REQUEST['disciplina'];
    $professor = $_REQUEST['professor'];
    $id = $_REQUEST['id'];
    if($disciplina == ""){
        echo "Preencha o campo disciplina";
    }else{
        //Gerar script SQL para atualização das informações no banco de dados
        $sql = "UPDATE disciplinas SET disciplina = '".$disciplina."', professor = '".$professor."' WHERE id = ".$id."";
        // Testar o comando SQL no banco de dados
        if(mysqli_query($conecta, $sql)){
            $dados = array('return' => true);
        }else{
            $dados = array('return' => false);
        }
    }

    echo json_encode($dados);