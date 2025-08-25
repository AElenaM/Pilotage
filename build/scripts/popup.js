// source/scripts/popup.js
document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById("callbackPopup");
  const overlay = document.getElementById("overlay");
  const openPopupButton = document.getElementById("openPopupButton");
  const closePopupButton = document.getElementById("closeCallbackPopup");
  const successMessage = document.getElementById("successMessagePopup");
  const closeSuccessMessageButton = document.getElementById("closeSuccessMessage");
  const form = document.getElementById("callbackForm");
  setTimeout(function() {
    openPopup();
  }, 6e4);
  function openPopup() {
    popup.style.display = "block";
    overlay.style.display = "block";
  }
  function closePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
  }
  function showSuccessMessage() {
    successMessage.style.display = "block";
    popup.style.display = "none";
    overlay.style.display = "none";
  }
  closePopupButton.addEventListener("click", closePopup);
  overlay.addEventListener("click", closePopup);
  closeSuccessMessageButton.addEventListener("click", function() {
    successMessage.style.display = "none";
    overlay.style.display = "none";
  });
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    fetch("popup_call.php", {
      method: "POST",
      body: formData
    }).then((response) => response.text()).then((data) => {
      if (data === "success") {
        showSuccessMessage();
      } else {
        alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435");
      }
    }).catch((error) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430:", error);
    });
  });
  openPopupButton.addEventListener("click", function(event) {
    event.preventDefault();
    openPopup();
  });
});
//# sourceMappingURL=popup.js.map
