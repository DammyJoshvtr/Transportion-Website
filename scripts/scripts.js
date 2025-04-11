
document.addEventListener('DOMContentLoaded', () => {
  const leftButtonElement = document.querySelector('.js-left-arrow');
  const rightButtonElement = document.querySelector('.js-right-arrow');
  const scheduleTextElement = document.querySelector('.js-schedule-text');

  const texts = ['Do you want to... Schedule a Ride', 'Do you want to... Hire a Bus'];
  let currentIndex = 0;

  // Function to update the text
  function updateText(index) {
    scheduleTextElement.innerHTML = texts[index];
    console.log(texts[index]);
  }

  // Right button logic (next text)
  rightButtonElement.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % texts.length;
    updateText(currentIndex);
  });

  // Left button logic (previous text)
  leftButtonElement.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + texts.length) % texts.length;
    updateText(currentIndex);
  });

  // Initialize the text on page load
  updateText(currentIndex);
});


// This prevents errors if the script tries to access elements before they are available
document.addEventListener('DOMContentLoaded', () => {
  // Get the navigation bar and home section elements
  const navBar = document.getElementById('navbar');
  const homeSection = document.getElementById('home');

  // Helper function to check if the home section is in view
  function isHomeInView() {
    // Uses getBoundingClientRect to get the position of the home section relative to the viewport
    const rect = homeSection.getBoundingClientRect();
    // Returns true if the home section is in the viewport (more than halfway visible)
    return rect.top <= 0 && rect.bottom >= window.innerHeight / 2;
  }

  // Function to handle scroll events and toggle navbar transparency
  function handleScroll() {
    if (isHomeInView()) {
      // RemoveS the opacity class when the home section is in view
      navBar.classList.remove('is-not-hovered');
    } else {
      // Add the opacity class when the home section is not in view
      navBar.classList.add('is-not-hovered');
    }
  }

  // Navigation button mapping to corresponding sections
  const navButtons = {
    homeLink: 'home',
    aboutUsLink: 'about',
    ourServicesLink: 'services',
    contactUsLink: 'contact'
  };

  // Looping through navigation buttons and add click event listeners
  Object.entries(navButtons).forEach(([linkId, sectionId]) => {
    // Get the button and section elements
    const buttonElement = document.getElementById(linkId);
    const targetElement = document.getElementById(sectionId);

    // Ensuring both the link and the target section exist before adding event listeners
    if (buttonElement && targetElement) {
      buttonElement.addEventListener('click', () => {
        // Smooth scroll to the corresponding section on click
        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });

  // Attach scroll event listener to the window to track user scrolling
  window.addEventListener('scroll', handleScroll);

  // Initial call to handleScroll to set the navbar state correctly on page load
  handleScroll();
});

