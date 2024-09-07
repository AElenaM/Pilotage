<?php
// Флаг для успешной отправки
$success = false;

// Проверяем, была ли отправлена форма
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Отправляем письмо
    $to = "cieslikelena@gmail.com"; // Ваш email для получения сообщений
    $subject = "Новое сообщение с сайта";
    $body = "Имя: $name\nEmail: $email\nСообщение: $message";

    if (mail($to, $subject, $body)) {
        $success = true;
    }
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Результат отправки</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Чекбокс для управления всплывающим сообщением -->
<input type="checkbox" id="show-success" style="display:none;" checked>

<!-- Попап с результатом -->
<div id="success-popup">
    <?php if ($success): ?>
        <p>Сообщение успешно отправлено!</p>
    <?php else: ?>
        <p>Ошибка при отправке сообщения.</p>
    <?php endif; ?>
    <!-- Кнопка закрытия сообщения -->
    <label for="show-success" class="close-btn">Закрыть</label>
</div>

<!-- Возвращаем пользователя на главную страницу после закрытия сообщения -->
<a href="index.html" style="display:block; text-align:center; margin-top:20px;">Вернуться на главную страницу</a>

</body>
</html>
