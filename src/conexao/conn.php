<?php 

    //Demonstre todos os erros e alertas existentes quanto ao meu código e quanto a a interação com o B.D. 
    //Ambos são comandos de configuração.
    ini_set('display_errors', true);
    error_reporting(E_ALL); 

    //Criação das variáveis para a conexão com o B.D. 

    $hostname = "localhost";
    $database = "myschool";
    $username = "root";
    $password = "";

    if($conecta = mysqli_connect($hostname, $username, $password, $database)){
        //echo 'Conectado ao banco de dados '. $database;
    } else{
        echo 'Erro: '. mysqli_connect_error();
    }