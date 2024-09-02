// source/scripts/popup_call.js
function openCallbackPopup() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("callbackPopup").style.display = "block";
}
function closeCallbackPopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("callbackPopup").style.display = "none";
}
function closeSuccessMessage() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("successMessage").style.display = "none";
}
document.getElementById("closeCallbackPopup").addEventListener("click", closeCallbackPopup);
document.getElementById("closeSuccessMessage").addEventListener("click", closeSuccessMessage);
document.getElementById("openPopupButton").addEventListener("click", openCallbackPopup);
document.getElementById("overlay").addEventListener("click", function(event) {
  if (event.target === document.getElementById("overlay")) {
    closeCallbackPopup();
    closeSuccessMessage();
  }
});
setTimeout(openCallbackPopup, 6e4);
//# sourceMappingURL=popup_call.js.map
