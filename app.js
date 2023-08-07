const listes = document.querySelector('.listes');
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
  listes.classList.toggle("show_menu");

     listes.classList.contains('show_menu') ? menu.classList.add('active') : menu.classList.remove('active');
})