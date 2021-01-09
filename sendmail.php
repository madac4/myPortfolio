<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail -> CharSet = 'UTF-8';
    $mail -> IsHTML(true);

    // De la cine vine mesajul
    $mail->setForm('info@gme.comp', 'Orbu Petru');
    // Cui Trimiti
    $mail->addAdress('anrei.bors@gmail.com');
    // Tema Mesajului
    $mail->Subject = 'Hello Mai Omuleanule';

    // Corpul Mesajului
    $body = '<h1>Your Message is HERE</h1>'

    if(trim(!empty($_POST['name']))){
        $body. =  '<p><strong>Name: </strong> '$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body. =  '<p><strong>E-mail: </strong> '$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body. =  '<p><strong>Message: </strong> '$_POST['message'].'</p>';
    }
    
    $mail-> Body  = $body;

    // Trimitem
    if(!$mail->send()){
        $message = 'Ошибка';
    }else{
        $message = 'Данные Отправлены'ж
    } 

    $response = ['message' => $message];

    header('Content-type: application/json');

    echo json_encode($response);
?>