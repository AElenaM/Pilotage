<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $name = htmlspecialchars(trim($_POST["name"]));
    $phone = htmlspecialchars(trim($_POST["phone"]));

    // Валидация данных
    if (!empty($name) && !empty($phone)) {
        // Настройка отправки почты
        $to = "cieslikelena@gmail.com"; // Замените на ваш email
        $subject = "Запрос на обратный звонок";
        $message = "Имя: $name\nТелефон: $phone";
        $headers = "From: $name" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

        // Отправка письма
        if (mail($to, $subject, $message, $headers)) {
            // Если письмо успешно отправлено, показываем сообщение об успешной отправке
            echo "<script>window.onload = function() { showSuccessMessage(); }</script>";
        } else {
            echo "Произошла ошибка при отправке сообщения.";
        }
    } else {
        echo "Пожалуйста, заполните все поля.";
    }
} else {
    echo "Неправильный метод отправки формы.";
}
?>
