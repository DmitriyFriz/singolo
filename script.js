const menu = document.querySelector('.navigation')
const portfolioGallery = document.getElementById('portfolio-gallery');
const portfolioImages = portfolioGallery.querySelectorAll('.portfolio-img');
const portfolioTags = document.getElementById('portfolio-tags');

const submitBtn = document.getElementById('submit');
const nameField = document.getElementById('name-field');
const emailField = document.getElementById('email-field');
const subjectField = document.getElementById('subject-field');
const describeField = document.getElementById('describe-field');
const subjectInfo = document.getElementById('subject-info');
const describeInfo = document.getElementById('describe-info');
const frameMessage = document.getElementById('frame-message')
const okBtn = document.getElementById('ok-btn');

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

// GET A QUOTE FORM AND MESSAGE
submitBtn.addEventListener('click', () => {
  if (!(nameField.reportValidity() && emailField.reportValidity())) return;
  frameMessage.classList.remove('hidden');
  if (subjectField.value) subjectInfo.textContent = `Тема: ${subjectField.value}` ;
  if (describeField.value) describeInfo.textContent = `Описание: ${describeField.value}` ;
})

okBtn.addEventListener('click', () => {
  frameMessage.classList.add('hidden');
})
