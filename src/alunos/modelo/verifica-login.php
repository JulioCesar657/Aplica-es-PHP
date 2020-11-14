<?php

    session_start();
//O @ irá suprimir o erro, não deixando entrar no painel.htl sem um login, uma vez que a variável ID não existe (undefined)
//Com ela em 'undefined', cai direto no else, fazendo com que esse login não seja possível
    if(@$_SESSION['id']){
        $dados = array(
            'return' => true, 
            'nome' => $_SESSION['nome']
        );
    }else{
        $dados = array('return' => false);
    }

    echo json_encode($dados);