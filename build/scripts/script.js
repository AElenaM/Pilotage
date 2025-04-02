// source/scripts/script.js
document.getElementById("requestForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const form = document.getElementById("requestForm");
  const formData = new FormData(form);
  const submitBtn = document.getElementById("submitBtn");
  const statusMessage = document.getElementById("statusMessage");
  fetch("send.php", {
    method: "POST",
    body: formData
  }).then((response) => response.text()).then((result) => {
    if (result === "success") {
      submitBtn.textContent = "\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430";
      submitBtn.disabled = true;
      form.reset();
    } else {
      statusMessage.textContent = "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.";
      statusMessage.style.color = "red";
    }
  }).catch((error) => {
    statusMessage.textContent = "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.";
    statusMessage.style.color = "red";
  });
});
//# sourceMappingURL=script.js.map
