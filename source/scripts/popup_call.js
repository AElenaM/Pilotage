// // Получаем элементы
// const popup = document.getElementById("popup");
// const closePopup = document.getElementsByClassName("close")[0];
// const openPopupButton = document.getElementById("openPopupButton");

// // Функция для открытия попапа
// function openPopup() {
//     popup.style.display = "flex";
// }

// // Автоматическое появление попапа через 10 секунд после загрузки страницы
// window.onload = function() {
//     setTimeout(function() {
//         openPopup();
//     }, 10000); // Задержка в 10000 миллисекунд (10 секунд)
// };

// // Открытие попапа по нажатию на кнопку
// openPopupButton.onclick = function() {
//     openPopup();
// };

// // Закрытие попапа по клику на "x"
// closePopup.onclick = function() {
//     popup.style.display = "none";
// };

// // Закрытие попапа по клику вне области попапа
// window.onclick = function(event) {
//     if (event.target === popup) {
//         popup.style.display = "none";
//     }
// };

// // Обработка отправки формы
// document.getElementById("callbackForm").onsubmit = function(event) {
//     event.preventDefault(); // Останавливаем стандартное поведение формы
//     const phoneNumber = document.getElementById("phoneNumber").value;

//     // Простое подтверждение отправки
//     alert(`Спасибо! Мы свяжемся с вами по номеру ${phoneNumber}.`);

//     // Закрыть попап после отправки формы
//     popup.style.display = "none";
// }

//     // Показ сообщения об успешной отправке
//     function showSuccessMessage() {
//       closeCallbackPopup();
//       document.getElementById("successMessage").style.display = "block";
//   }

//       // Закрытие сообщения об успешной отправке
//       function closeSuccessMessage() {
//         document.getElementById("overlay").style.display = "none";
//         document.getElementById("successMessage").style.display = "none";
//     }

//       // Привязка событий к кнопкам
//       document.getElementById("callbackForm").addEventListener("submit", function(event) {
//           showSuccessMessage(); // Показать сообщение об успешной отправке
//       });
//       document.getElementById("closeSuccessMessage").addEventListener("click", closeSuccessMessage);

// Открытие попапа обратного звонка
function openCallbackPopup() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("callbackPopup").style.display = "block";
}

// Закрытие попапа обратного звонка
function closeCallbackPopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("callbackPopup").style.display = "none";
}


// Показ сообщения об успешной отправке
function showSuccessMessage() {
  closeCallbackPopup();
  document.getElementById("successMessage").style.display = "block";
}

// Закрытие сообщения об успешной отправке
function closeSuccessMessage() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("successMessage").style.display = "none";
}

// Привязка событий к кнопкам
document.getElementById("closeCallbackPopup").addEventListener("click", closeCallbackPopup);
document.getElementById("closeSuccessMessage").addEventListener("click", closeSuccessMessage);
document.getElementById("openPopupButton").addEventListener("click", openCallbackPopup);

   // Закрытие попапа при клике вне его области (на overlay)
   document.getElementById("overlay").addEventListener("click", function(event) {
    // Проверяем, что клик был именно по overlay, а не по самому попапу
    if (event.target === document.getElementById("overlay")) {
        closeCallbackPopup();
        closeSuccessMessage();
    }
});

// Показываем попап через 60 секунд после загрузки страницы
setTimeout(openCallbackPopup, 60000);
