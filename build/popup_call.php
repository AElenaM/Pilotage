<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));

    // Валидация полей
    if (!empty($name) && !empty($phone)) {
        // Адрес электронной почты для отправки
        $to = "krasdosug2008@mail.ru";  // замените на ваш email
        $subject = "Запрос на обратный звонок";
        $message = "Имя: $name\nТелефон: $phone";
        $headers = "krasdosug2008@mail.ru";  // замените на ваш домен

        // Отправка письма
        if (mail($to, $subject, $message, $headers)) {
            echo 'success';
        } else {
            echo 'error';
        }
    } else {
        echo 'error';
    }
} else {
    echo 'error';
}
?>
