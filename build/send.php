<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $comment = htmlspecialchars(trim($_POST['comment']));

    $to = "cieslikelena@gmail.com"; // Замените на свой email
    $subject = "Новая заявка с сайта";
    $message = "Имя: $name\nТелефон: $phone\nКомментарий: $comment";
    $headers = "From: cieslikelena@gmail.com\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
