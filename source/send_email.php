
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $phone = htmlspecialchars(trim($_POST["phone"]));
    $comment = htmlspecialchars(trim($_POST["comment"]));
    $message_sent = false;
    $error_message = '';

    if (!empty($name) && !empty($phone) && !empty($comment)) {
        $to = 'cieslikelena@gmail.com'; // Замените на ваш email
        $subject = 'Запрос на обратный звонок';
        $message = "<strong>Имя:</strong> $name<br><strong>Телефон:</strong> $phone<br><strong>Комментарий:</strong> $comment";
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: cieslikelena@gmail.com' . "\r\n"; // Замените на ваш email

        if (mail($to, $subject, $message, $headers)) {
            $message_sent = true;
        } else {
            $error_message = "Произошла ошибка при отправке сообщения.";
        }
    } else {
        $error_message = "Пожалуйста, заполните все поля.";
    }
}
?>
