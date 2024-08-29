// source/scripts/popup_call.js
var popup = document.getElementById("popup");
var closePopup = document.getElementsByClassName("close")[0];
var openPopupButton = document.getElementById("openPopupButton");
function openPopup() {
  popup.style.display = "flex";
}
window.onload = function() {
  setTimeout(function() {
    openPopup();
  }, 1e4);
};
openPopupButton.onclick = function() {
  openPopup();
};
closePopup.onclick = function() {
  popup.style.display = "none";
};
window.onclick = function(event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
};
document.getElementById("callbackForm").onsubmit = function(event) {
  event.preventDefault();
  const phoneNumber = document.getElementById("phoneNumber").value;
  alert(`\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u041C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 ${phoneNumber}.`);
  popup.style.display = "none";
};
//# sourceMappingURL=popup_call.js.map
