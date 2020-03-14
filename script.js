const menu = document.querySelector('.navigation')
const portfolioGallery = document.getElementById('portfolio-gallery');
const portfolioImages = portfolioGallery.querySelectorAll('.portfolio-img');
const portfolioTags = document.getElementById('portfolio-tags');

// HEADER
menu.addEventListener('click', (event) => {
  let menuElement = event.target.closest('.navigation-item');
  if (!menuElement) return;
  menu.querySelectorAll('.navigation-item').forEach((item) => item.classList.remove('navigation-active'));
  menuElement.classList.add('navigation-active');
})

// PORTFOLIO SELECT IMAGE
portfolioGallery.addEventListener('click', (event) =>{
  if (!(event.target.classList.contains('portfolio-img'))) return;
  portfolioImages.forEach((item) => item.classList.remove('portfolio-border'));
  event.target.classList.add('portfolio-border');
})

// PORTFOLIO CLICK TAB
portfolioTags.addEventListener('click', (event) =>{
  if (!(event.target.classList.contains('tag'))) return;
  portfolioTags.querySelectorAll('.tag').forEach((item) =>item.classList.remove('tag-active'));
  event.target.classList.add('tag-active');
  portfolioImages.forEach((item) => item.style.order = `${Math.round(Math.random()*100)}`);
})
