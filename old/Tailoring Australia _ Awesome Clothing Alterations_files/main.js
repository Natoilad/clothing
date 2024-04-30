
// Side menu icon
const sideMenuClickIcon = document.querySelector('.side_menu__icon');
const overlay = document.querySelector('.overlay');
const headerInnerMain = document.querySelector('.header__inner_main');
const html = document.documentElement;
// sideMenuClickIcon.addEventListener('click', function() {
// 	sideMenuClickIcon.classList.toggle("change");
//     overlay.classList.toggle("opened");
//     headerInnerMain.classList.toggle("menu_opened");
//     html.classList.toggle("modal__opened");
// });
sideMenuClickIcon.addEventListener('click', function() {
    console.log("Click event triggered"); // Добавьте эту строку для отслеживания события
    sideMenuClickIcon.classList.toggle("change");
    overlay.classList.toggle("opened");
    headerInnerMain.classList.toggle("menu_opened");
    html.classList.toggle("modal__opened");
  });

