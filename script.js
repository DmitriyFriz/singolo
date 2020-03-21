const menu = document.querySelector('.navigation');
const listSections = document.querySelectorAll('section');
const menuLinks = menu.querySelectorAll('a');
const portfolioGallery = document.getElementById('portfolio-gallery');
const portfolioImages = portfolioGallery.querySelectorAll('.portfolio-img');
const portfolioTags = document.getElementById('portfolio-tags');

const formQuote =document.getElementById('form-quote');
const submitBtn = document.getElementById('submit');
const nameField = document.getElementById('name-field');
const emailField = document.getElementById('email-field');
const subjectField = document.getElementById('subject-field');
const describeField = document.getElementById('describe-field');
const subjectInfo = document.getElementById('subject-info');
const describeInfo = document.getElementById('describe-info');
const frameMessage = document.getElementById('frame-message')
const okBtn = document.getElementById('ok-btn');

const btnVerIphone =  document.getElementById('button-ver-iphone');
const btnHorIphone = document.getElementById('button-hor-iphone');
const screenVerIphone = document.getElementById('screen-ver-iphone');
const screenHorIphone = document.getElementById('screen-hor-iphone');

// PORTFOLIO SELECT IMAGE
portfolioGallery.addEventListener('click', (event) =>{
  if (!(event.target.classList.contains('portfolio-img'))) return;
  portfolioImages.forEach((item) => item.classList.remove('portfolio-border'));
  event.target.classList.add('portfolio-border');
})

// PORTFOLIO CLICK TAB
portfolioTags.addEventListener('click', (event) =>{
  if (!(event.target.classList.contains('tag'))) return;
  if (event.target.classList.contains('tag-active')) return;
  portfolioTags.querySelectorAll('.tag').forEach((item) =>item.classList.remove('tag-active'));
  event.target.classList.add('tag-active');
  portfolioImages.forEach((item) => item.style.order = `${Math.round(Math.random()*100)}`);
})

// GET A QUOTE FORM AND MESSAGE
submitBtn.addEventListener('click', () => {
  if (!(nameField.reportValidity() && emailField.reportValidity())) return;
  frameMessage.classList.remove('hidden');
  if (subjectField.value) {
    subjectInfo.textContent = `Тема: ${subjectField.value}` ;
  } else { subjectInfo.textContent = 'Без темы' };
  if (describeField.value) {
    describeInfo.textContent = `Описание: ${describeField.value}` ;
  } else { describeInfo.textContent ='Без описания' };
  formQuote.reset();
})

okBtn.addEventListener('click', () => {
  frameMessage.classList.add('hidden');
})

//  SLIDER ACTIVE SCREEN
btnVerIphone.addEventListener('click', () => {
  if (screenVerIphone.classList.contains('hidden')) {
    screenVerIphone.classList.remove('hidden');
    return;
  }
  screenVerIphone.classList.add('hidden');
})

btnHorIphone.addEventListener('click', () => {
  if (screenHorIphone.classList.contains('hidden')) {
    screenHorIphone.classList.remove('hidden');
    return;
  }
  screenHorIphone.classList.add('hidden');
})

// SCROLL FOR HEADER
document.addEventListener('scroll', onScroll);
function onScroll () {
  let cursorPosition = window.scrollY + document.querySelector('header').offsetHeight;

  listSections.forEach((item) => {
    if (item.offsetTop <= cursorPosition && (item.offsetTop + item.offsetHeight) > cursorPosition ) {
      menuLinks.forEach((link) => {
        let menuElement = link.closest('.navigation-item');
        menuElement.classList.remove('navigation-active');
        if (item.getAttribute('id') === link.getAttribute('href').substring(1)) menuElement.classList.add('navigation-active');
      })
    }
  });

  if (cursorPosition >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
    let lastItem = listSections[listSections.length-1];
    menuLinks.forEach((link) => {
      let menuElement = link.closest('.navigation-item');
      menuElement.classList.remove('navigation-active');
      if (lastItem.getAttribute('id') === link.getAttribute('href').substring(1)) menuElement.classList.add('navigation-active');
    })
  }
}
