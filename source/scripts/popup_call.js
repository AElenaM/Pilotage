// Получаем элементы
const popup = document.getElementById("popup");
const closePopup = document.getElementsByClassName("close")[0];
const openPopupButton = document.getElementById("openPopupButton");

// Функция для открытия попапа
function openPopup() {
    popup.style.display = "flex";
}

// Автоматическое появление попапа через 10 секунд после загрузки страницы
window.onload = function() {
    setTimeout(function() {
        openPopup();
    }, 10000); // Задержка в 10000 миллисекунд (10 секунд)
};

// Открытие попапа по нажатию на кнопку
openPopupButton.onclick = function() {
    openPopup();
};

// Закрытие попапа по клику на "x"
closePopup.onclick = function() {
    popup.style.display = "none";
};

// Закрытие попапа по клику вне области попапа
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
};

// Обработка отправки формы
document.getElementById("callbackForm").onsubmit = function(event) {
    event.preventDefault(); // Останавливаем стандартное поведение формы
    const phoneNumber = document.getElementById("phoneNumber").value;

    // Простое подтверждение отправки
    alert(`Спасибо! Мы свяжемся с вами по номеру ${phoneNumber}.`);

    // Закрыть попап после отправки формы
    popup.style.display = "none";
}
