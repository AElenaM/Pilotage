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
  document.getElementById("successMessagePopup").style.display = "block";
}

// Закрытие сообщения об успешной отправке
function closeSuccessMessage() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("successMessagePopup").style.display = "none";
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
