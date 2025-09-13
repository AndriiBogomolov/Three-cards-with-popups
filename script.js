document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.round-btn-mob');
  const popups = document.querySelectorAll(
    '.popup1-mob, .popup2-mob, .popup3-mob'
  );
  const blocks = document.querySelectorAll('.mob-popup-block');

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const popup = popups[index];
      const block = blocks[index];
      const isActive = btn.classList.contains('active');

      // Закриваємо всі попапи і знімаємо стани
      buttons.forEach((b) => b.classList.remove('active'));
      popups.forEach((p) => p.classList.remove('open'));
      blocks.forEach((bl) => bl.classList.remove('active-bg'));

      // Якщо кнопка не була активною — відкриваємо
      if (!isActive) {
        btn.classList.add('active');
        popup.classList.add('open');
        block.classList.add('active-bg');
      }
    });

    // Знімаємо фокус після торкання (для мобільних)
    // document
    //   .querySelectorAll(
    //     '.round-btn-mob, .mob-card-btn1, .mob-card-btn2, .mob-card-btn3 .btn-styles, .w-button, a'
    //   )
    //   .forEach((btn) => {
    //     btn.addEventListener('touchend', () => {
    //       btn.blur();
    //     });
    //   });
    document.addEventListener('touchend', () => {
      document.activeElement.blur();
    });


  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   const buttons = document.querySelectorAll('.round-btn-mob');
//   const popups = document.querySelectorAll(
//     '.popup1-mob, .popup2-mob, .popup3-mob'
//   );
//   const blocks = document.querySelectorAll('.mob-popup-block');

//   buttons.forEach((btn, index) => {
//     btn.addEventListener('click', () => {
//       const popup = popups[index];
//       const block = blocks[index];

//       // Якщо цей попап уже відкритий → закриваємо
//       if (popup.classList.contains('open')) {
//         popup.classList.remove('open');
//         btn.classList.remove('active');
//         block.classList.remove('active-bg');
//       } else {
//         // Закриваємо всі інші
//         popups.forEach((p) => p.classList.remove('open'));
//         buttons.forEach((b) => b.classList.remove('active'));
//         blocks.forEach((b) => b.classList.remove('active-bg'));

//         // Відкриваємо потрібний
//         popup.classList.add('open');
//         btn.classList.add('active');
//         block.classList.add('active-bg');
//         //================
//         // маленький хак для мобільних, щоб знімати фокус після touch
//         // document.addEventListener(
//         //   'touchend',
//         //   function () {
//         //     const activeEl = document.querySelector(
//         //       'a:hover, .btn-styles:hover, .round-btn-mob:hover, .w-button:hover'
//         //     );
//         //     if (activeEl) activeEl.blur();
//         //   },
//         //   { once: true }
//         // );
//         //======================
//         document
//           .querySelectorAll('.round-btn-mob, .btn-styles, .w-button, a')
//           .forEach((btn) => {
//             btn.addEventListener('touchend', () => {
//               btn.blur();
//             });
//           });
//         //=========================
//         // // smooth scroll до попапа (за бажанням)
//         // popup.scrollIntoView({ behavior: 'smooth', block: 'center' });
//       }
//     });
//   });
// });
