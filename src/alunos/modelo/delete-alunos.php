
 <?php
    //Conectar ao banco de dados
     include('../../conexao/conn.php');

    $id = $_REQUEST['id'];

    if($id == ""){
        $dados = array(
        'tipo' => 'alert-danger',
        'mensagem' => 'Id do registro não foi encontrado'
        );
    }else{
        //Gerar script SQL para cadastro das informações no banco de dados
        $sql = "DELETE FROM alunos WHERE id = ".$id."";
        // Testar o comando SQL no banco de dados
        if(mysqli_query($conecta, $sql)){
            $dados = array(
                'tipo' => 'alert-success',
                'mensagem' => 'Registro excluído com sucesso!'
            );
        }else{
            $dados = array(
                'tipo' => 'alert-danger',
                'mensagem' => 'Houve um erro na exclusão!'
            );
        }
    }

    echo json_encode($dados);