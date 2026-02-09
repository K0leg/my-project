document.addEventListener('DOMContentLoaded', function() {
  // Знаходимо елементи
  const openbutton = document.querySelector('.form-activator .button-accent'); // Кнопка "Реєстер"
  const closebutton = document.querySelector('.contact-form-close');        // Хрестик
  const modal = document.querySelector('.modal-overlay');                // Саме вікно

  // Функція відкриття
  if (openbutton) {
    openbutton.addEventListener('click', function() {
      modal.style.display = 'flex';
    });
  }

  // Функція закриття
  if (closebutton) {
    closebutton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }

  // (Опціонально) Закриття при кліку за межами форми (на темний фон)
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // 1. Знаходимо кнопку (іконку) бургера
  const burgerTrigger = document.querySelector('.js-burger-trigger');
  // 2. Знаходимо саме меню
  const burgerMenu = document.querySelector('.js-burger-menu');

  // Перевіряємо, чи знайшлися елементи на сторінці
  if (burgerTrigger && burgerMenu) {

    // Додаємо слухач кліку на іконку
    burgerTrigger.addEventListener('click', function(e) {
      // Запобігаємо стандартній поведінці (на всяк випадок)
      e.preventDefault();
      // Перемикаємо клас 'is-open' (додає якщо нема, забирає якщо є)
      burgerMenu.classList.toggle('is-open');
    });

    // ДОДАТКОВО: Закривати меню при кліку будь-де поза ним
    document.addEventListener('click', function(e) {
      const isClickInsideMenu = burgerMenu.contains(e.target);
      const isClickOnTrigger = burgerTrigger.contains(e.target);

      // Якщо меню відкрите І клік був НЕ по меню І НЕ по іконці -> закриваємо
      if (burgerMenu.classList.contains('is-open') && !isClickInsideMenu && !isClickOnTrigger) {
        burgerMenu.classList.remove('is-open');
      }
    });
  }
});
