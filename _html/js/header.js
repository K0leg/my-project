document.addEventListener('DOMContentLoaded', function() {
  // Знаходимо елементи
  const openBtn = document.querySelector('.form-activator .btn-accent'); // Кнопка "Реєстер"
  const closeBtn = document.querySelector('.contact-form-close');        // Хрестик
  const modal = document.querySelector('.modal-overlay');                // Саме вікно

  // Функція відкриття
  if (openBtn) {
    openBtn.addEventListener('click', function() {
      modal.style.display = 'flex'; // Показуємо вікно (flex, щоб працювало центрування)
    });
  }

  // Функція закриття
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none'; // Ховаємо вікно
    });
  }

  // (Опціонально) Закриття при кліку за межами форми (на темний фон)
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
