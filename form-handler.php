<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $form = $_POST['form'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];


	
    require 'class.phpmailer.php';
    $thm = 'Вам отправлено сообщение с сайта rosich - ' . $form;
    $msg = "<strong>Форма:</strong> $form <br/>";
    if(isset($name)){$msg .= "<strong>Имя:</strong> $name <br/>";}
    if(isset($phone)){$msg .= "<strong>Телефон:</strong> $phone <br/>";}
    if(isset($email)){$msg .= "<strong>Email:</strong> $email <br/>";}
    if(isset($message)){$msg .= "<strong>Вопрос:</strong> $message <br/>";}


    $mail = new PHPMailer();
    $mail->From = 'rosich'; // от кого
    $mail->FromName = 'rosich'; // от кого
    $mail->AddAddress('rosich34@yandex.ru', 'rosich'); // кому - адрес, Имя

    $mail->IsHTML(true); // выставляем формат письма HTML
    $mail->Subject = $thm; // тема письма
    $mail->Body = $msg;

    if (!$mail->Send()) die('Mailer Error: ' . $mail->ErrorInfo);

    header("Location: " . $_SERVER["PHP_SELF"]);
    exit;
}
?>
