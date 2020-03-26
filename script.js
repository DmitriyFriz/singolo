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

const burgerButton = document.getElementById('burger-button');
const burgerOverlay = document.querySelector('.burger-overlay');
const headerNavigation = document.querySelector('.header-navigation');
const headerLogo = document.querySelector('.header-logo');

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


// SLIDER
const sliderHome = document.getElementById('home')
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let isEnabled = true;

function changeCurrentSlide(n) {
  currentSlide = (n + slides.length) % slides.length;
}

function hideSlide(direction) {
  isEnabled = false;
  slides[currentSlide].classList.add(direction);
  slides[currentSlide].addEventListener('animationend', function() {
    this.classList.remove('slide-active', direction);
  })
}

function showSlide(direction) {
  slides[currentSlide].classList.add('slide-next', direction);
  slides[currentSlide].addEventListener('animationend', function() {
    this.classList.remove('slide-next', direction);
    this.classList.add('slide-active');
    isEnabled = true;
  })
}

function previousSlide(n) {
  hideSlide('to-right');
  changeCurrentSlide(n-1);
  showSlide('from-left');
}

function nextSlide(n) {
  hideSlide('to-left');
  changeCurrentSlide(n+1);
  showSlide('from-right');
}

arrowLeft.addEventListener('click', function() {
  if (isEnabled) {
    previousSlide(currentSlide);
    changeBackground();
  }
})

arrowRight.addEventListener('click', function() {
  if (isEnabled) {
    nextSlide(currentSlide);
    changeBackground();
  }
})

function changeBackground(){
  sliderHome.classList.toggle('background-slide-2');
}

// BURGER MENU
burgerButton.addEventListener('click', changeStateBurgerMenu);

function changeStateBurgerMenu(){
  burgerButton.classList.toggle('burger-button-rotate');
  burgerOverlay.classList.toggle('visibility');
  headerNavigation.classList.toggle('visibility');
  headerLogo.classList.toggle('header-logo-burger')
}

menu.addEventListener('click', (event) => {
  let menuElement = event.target.closest('.navigation-item');
  if (!menuElement) return;
  changeStateBurgerMenu();
})
