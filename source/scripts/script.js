document.getElementById('requestForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = document.getElementById('requestForm');
  const formData = new FormData(form);
  const submitBtn = document.getElementById('submitBtn');
  const statusMessage = document.getElementById('statusMessage');

  fetch('send.php', {
      method: 'POST',
      body: formData,
  })
  .then(response => response.text())
  .then(result => {
      if (result === 'success') {
          submitBtn.textContent = 'Ваша заявка успешно отправлена';
          submitBtn.disabled = true;
          form.reset();
      } else {
          statusMessage.textContent = 'Произошла ошибка, попробуйте снова.';
          statusMessage.style.color = 'red';
      }
  })
  .catch(error => {
      statusMessage.textContent = 'Произошла ошибка, попробуйте снова.';
      statusMessage.style.color = 'red';
  });
})
