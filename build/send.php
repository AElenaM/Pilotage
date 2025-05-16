<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $comment = htmlspecialchars(trim($_POST['comment']));

    $to = "krasdosug2008@mail.ru"; // Замените на свой email
    $subject = "Новая заявка с сайта";
    $message = "Имя: $name\nТелефон: $phone\nКомментарий: $comment";
    $headers = "From: krasdosug2008@mail.ru\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
