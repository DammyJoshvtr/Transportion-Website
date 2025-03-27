// console.log('Hello, World!');

// const lmao = "Wha the Hell0";
// console.log(lmao);


document.addEventListener('DOMContentLoaded', () => {
  //Mapping Links to their section
  const scrollLinks = {
    "homeLink": "home",
    "aboutUsLink" : "about",
    "ourServicesLink": "services",
    "contactUsLink": "contact"
  }

  Object.keys(scrollLinks).forEach((linkId) => {
    console.log(linkId);
    const linkElement = document
      .getElementById(linkId);
    console.log(linkElement);

    const targetSection = document
      .getElementById(scrollLinks[linkId]);
    
    console.log(targetSection);

    if (scrollLinks && targetSection) {
      linkElement.addEventListener('click', () => {
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
      });
    }
  });

});