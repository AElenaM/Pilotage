<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Настройки электронной почты
    $to = "cieslikelena@gmail.com"; // Замените на ваш email
    $subject = "Новая заявка на обратную связь от $name";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Формирование сообщения
    $emailMessage = "Имя: $name\n";
    $emailMessage .= "Ваш телефон: $phone\n";
    $emailMessage .= "Ваш комментарий:\n$message\n";

    // Отправка сообщения
    if (mail($to, $subject, $emailMessage, $headers)) {
        echo "Сообщение успешно отправлено!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
} else {
    echo "Некорректный запрос.";
}
?>
