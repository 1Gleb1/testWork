<?php
// if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
    $message = htmlspecialchars($message);
    
    $name = urldecode($name);
    $email = urldecode($email);
    $message = urldecode($message);
    
    $name = trim($name);
    $email = trim($email);
    $message = trim($message);

    $to = "valademerovetcv@gmail.com"; 
    $subject = "Сообщение с контактной формы";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    
    if(mail($to, $subject, $message, $headers)){
          echo "Сообщение отправлено!";
    } else {
    echo "Ошибка при отправке сообщения.";
}
?>