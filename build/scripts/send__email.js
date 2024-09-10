// source/scripts/send__email.js
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  var formData = new FormData(this);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "process.php", true);
  xhr.onload = function() {
    var response = xhr.responseText;
    var messageDiv = document.getElementById("form-message");
    var submitButton = document.getElementById("submit-button");
    if (xhr.status === 200) {
      if (response === "success") {
        messageDiv.innerHTML = '<div class="success-message">\u0412\u0430\u0448 \u0437\u0430\u043F\u0440\u043E\u0441 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D!</div>';
        submitButton.style.display = "none";
      } else if (response.startsWith("error:")) {
        messageDiv.innerHTML = '<div class="error-message">' + response.substring(6) + "</div>";
      }
    } else {
      messageDiv.innerHTML = '<div class="error-message">\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u0430.</div>';
    }
  };
  xhr.send(formData);
});
//# sourceMappingURL=send__email.js.map
