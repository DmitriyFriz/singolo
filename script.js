const menu = document.querySelector('.navigation')

menu.addEventListener('click', (event) => {
  let menuElement = event.target.closest('.navigation-item');
  if (!menuElement) return;
  menu.querySelectorAll('.navigation-item').forEach((item) => item.classList.remove('navigation-active'));
  menuElement.classList.add('navigation-active');
})
