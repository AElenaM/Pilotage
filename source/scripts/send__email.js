document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Предотвращаем стандартное поведение формы

  var formData = new FormData(this);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'process.php', true);
  xhr.onload = function () {
      var response = xhr.responseText;
      var messageDiv = document.getElementById('form-message');
      var submitButton = document.getElementById('submit-button');

      if (xhr.status === 200) {
          if (response === 'success') {
              messageDiv.innerHTML = '<div class="success-message">Ваш запрос успешно отправлен!</div>';
              submitButton.style.display = 'none'; // Скрываем кнопку отправки
          } else if (response.startsWith('error:')) {
              messageDiv.innerHTML = '<div class="error-message">' + response.substring(6) + '</div>';
          }
      } else {
          messageDiv.innerHTML = '<div class="error-message">Произошла ошибка при отправке запроса.</div>';
      }
  };
  xhr.send(formData);
});
