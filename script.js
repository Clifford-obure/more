// script.js
const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const dots = document.querySelectorAll('.dot');
const slideWidth = slider.clientWidth;
let currentIndex = 0;
let interval;

function updateSlider() {
  const newPosition = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${newPosition}px)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

function nextSlide() {
  if (currentIndex < slider.children.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
}

function startSlider() {
  interval = setInterval(nextSlide, 2000);
}

function stopSlider() {
  clearInterval(interval);
}

nextButton.addEventListener('click', () => {
  nextSlide();
  stopSlider();
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slider.children.length - 1;
  }
  updateSlider();
  stopSlider();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
    stopSlider();
  });
});

startSlider();

function toggleClass() {
  var menu = document.getElementsByClassName('menu_Icon');

  menu.addEventListener('click', () => {
    menu.classList.add('toggle');
  });
}
const menuIcon = document.getElementById('menu_Icon');
const navLinks = document.getElementById('menu_button');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');

  navLinks.classList.toggle('active');
});

//wrap when products are more than five implementation

// Get the product card container and individual product cards
const productContainer = document.querySelector('.product-list-container');
const productCards = document.querySelectorAll('.product_card');

// Function to adjust the number of cards per row
function adjustCardsPerRow() {
  const containerWidth = productContainer.clientWidth;
  const cardWidth = productCards[0].offsetWidth;
  const cardsPerRow = Math.floor(containerWidth / cardWidth);

  // Hide or show cards based on the cards per row
  productCards.forEach((card, index) => {
    if (index < cardsPerRow) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Initial adjustment and listen for window resize
adjustCardsPerRow();
window.addEventListener('resize', adjustCardsPerRow);



const sidebar = document.querySelector('.sidebar');
const footer = document.querySelector('footer');

document.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  const footerOffset = footer.offsetTop;

  if (scrollPos + sidebar.offsetHeight >= footerOffset) {
    sidebar.style.position = 'absolute';
    sidebar.style.bottom = '0';
  } else {
    sidebar.style.position = 'sticky';
    sidebar.style.bottom = 'initial';
  }
});