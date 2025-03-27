// console.log('Hello, World!');

// const lmao = "Wha the Hell0";
// console.log(lmao);


// document.addEventListener('DOMContentLoaded', () => {
//   //Mapping Links to their section
//   const scrollLinks = {
//     "homeLink": "home",
//     "aboutUsLink" : "about",
//     "ourServicesLink": "services",
//     "contactUsLink": "contact"
//   }

//   Object.keys(scrollLinks).forEach((linkId) => {
//     console.log(linkId);
//     const linkElement = document
//       .getElementById(linkId);
//     console.log(linkElement);

//     const targetSection = document
//       .getElementById(scrollLinks[linkId]);
    
//     console.log(targetSection);

//     if (linkElement && targetSection) {
//       linkElement.addEventListener('click', () => {
//         targetSection.scrollIntoView({
//           behavior: "smooth"
//         });
//       });
//     }
//   });

// });


//The code Below Works

// const buttonElement = document.getElementById('ourServicesLink');
// console.log(buttonElement);

// buttonElement.addEventListener('click', () => {
//   const targetElement = document.getElementById('services');

//   targetElement.scrollIntoView({
//     behavior: "smooth"
//   });
// });



//Navigation Codes
const navButtons = {
  "homeLink": "home",
  "aboutUsLink": "about",
  "ourServicesLink": "services",
  "contactUsLink": "contact"  
}

console.log(Object.keys(navButtons));

Object.keys(navButtons).forEach((key) => {
  console.log(key, 'this is the are object keys');

  const buttonElement = document.getElementById(key);
  console.log(buttonElement);

  const targetElement = document.getElementById(navButtons[key]);
  console.log(targetElement);

  buttonElement.addEventListener('click', () => {
    targetElement.scrollIntoView({
      behavior: "smooth"
    })
  })
}) 
