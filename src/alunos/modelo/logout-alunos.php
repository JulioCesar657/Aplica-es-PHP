<?php

     session_start();
//session destroy analisa se há um sessão aberta ou não;
     if(session_destroy()){
         $dados = array('result' => true);

     }else{
         $dados = array('result' => false);
     }

    echo json_encode($dados);