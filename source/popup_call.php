<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $phoneNumber = htmlspecialchars($_POST['phoneNumber']);

    // Настройки электронной почты
    $to = "cieslikelena@gmail.com"; // Замените на ваш email
    $subject = "Заявка на обратный звонок";
    $headers = "X-Mailer: PHP/" . phpversion();

    // Формирование сообщения
    $emailMessage .= "Ваш телефон: $phoneNumber\n";

    // Отправка сообщения
    if (mail($to, $subject, $headers)) {
        echo "Сообщение успешно отправлено!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
} else {
    echo "Некорректный запрос.";
}
?>
