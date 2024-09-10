document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById('callbackPopup');
  const overlay = document.getElementById('overlay');
  const openPopupButton = document.getElementById('openPopupButton');
  const closePopupButton = document.getElementById('closeCallbackPopup');
  const successMessage = document.getElementById('successMessagePopup');
  const closeSuccessMessageButton = document.getElementById('closeSuccessMessage');
    const form = document.getElementById('callbackForm');

    // Показать попап через минуту
    setTimeout(function() {
        openPopup();
    }, 60000); // 1 минута = 60000 мс

    // Функция открытия попапа
    function openPopup() {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    }

    // Функция закрытия попапа
    function closePopup() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }

    // Показать сообщение об успешной отправке
    function showSuccessMessage() {
        successMessage.style.display = 'block';
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }

    // Закрытие попапа при нажатии на крестик или на оверлей
    closePopupButton.addEventListener('click', closePopup);
    overlay.addEventListener('click', closePopup);

    // Закрытие сообщения об успешной отправке
    closeSuccessMessageButton.addEventListener('click', function() {
        successMessage.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Обработка формы без перезагрузки страницы
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('popup_call.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data === 'success') {
                showSuccessMessage();
            } else {
                alert('Ошибка при отправке');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
    });

    // Обработчик клика на кнопку открытия попапа
    openPopupButton.addEventListener('click', function(event) {
        event.preventDefault();
        openPopup();
    });
});
