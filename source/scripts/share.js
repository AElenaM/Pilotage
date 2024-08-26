document.querySelector('.share-button').addEventListener('click', function(e) {
  e.preventDefault();

  if (navigator.share) {
      navigator.share({
          title: 'Пример страницы',
          text: 'Посмотрите этот пример!',
          url: window.location.href,
      }).then(() => {
          console.log('Данные успешно отправлены');
      }).catch((error) => {
          console.log('Ошибка при отправке данных:', error);
      });
  } else {
      alert('Функция "Поделиться" не поддерживается в вашем браузере');
  }
});
