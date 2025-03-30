console.log('This is form.js');

// document.addEventListener('DOMContentLoaded',  () => {

//   const formElement = document.querySelector('.js-container');
//   // console.log(formElement);
//   const formHTML = `
//     <div class="selection-form js-first-selection">
//       <div class="selection-text">Book a Ride
//         <div class="select-div"></div>
//       </div>
//       <div class="selection-text js-second-selection">Hire a Bus</div>
//       <div class="selection-text js-third-selection">Booking Status</div>
//     </div>
//     <form>
//       <label for="depature">Departure</label>
//       <input type="text" list="cities">
//       <datalist id="cities" class="option">
//         <option value="Lagos">
//         <option value="Abuja">
//         <option value="Port Harcourt">
//         <option value="Kano">
//         <option value="Ibadan">
//       </datalist>
//       <label class="destination">Destination</label>
//       <input type="text">
//       <label for="Destinature Date">Departure Date</label>
//       <input type="date">
//       <button>Proceed</button>
//     </form>
//   `

//   const hireHTML = `
//     <div class="selection-form js-first-selection">
//       <div class="selection-text">Book a Ride
//         <div class="select-div"></div>
//       </div>
//       <div class="selection-text js-second-selection">Hire a Bus</div>
//       <div class="selection-text js-third-selection">Booking Status</div>
//     </div>
//     <form>
//       <label for="departure">Hire From</label>
//       <input type="text" list="cities">
//       <datalist id="cities" class="option">
//         <option value="Lagos">
//         <option value="Abuja">
//         <option value="Port Harcourt">
//         <option value="Kano">
//         <option value="Ibadan">
//       </datalist>
//       <label class="destination"> Hire Destination</label>
//       <input type="text">
//       <label for="Destination Date">Departure Date</label>
//       <input type="date">
//       <button>Proceed</button>
//     </form>
//   `;
//   formElement.innerHTML = formHTML;

  
//   const updateForm = (newForm) => {
//     formElement.innerHTML = newForm;
//     handleChange();
//   }
  
//   const handleChange = () => {
//     const firstSelector = document.querySelector('.js-first-selection');
//     // console.log(firstSelector);
  
//     const secondSelector = document.querySelector('.js-second-selection');
//     console.log(secondSelector);

//     firstSelector.addEventListener('click', () => {
//       if (formElement.innerHTML !== formHTML) {
//         updateForm(formHTML);
//       }
//     })

//     secondSelector.addEventListener('click', () => {
//       if (formElement.innerHTML !== hireHTML) {
//         updateForm(hireHTML);
//       }
//     })
//   }

//   handleChange();

// })

// document.addEventListener('DOMContentLoaded', () => {
//   const formElement = document.querySelector('.js-container');

//   // Book a Ride Form
//   const formHTML = `
//     <div class="selection-form js-first-selection">
//       <div class="selection-text">Book a Ride
//         <div class="select-div"></div>
//       </div>
//       <div class="selection-text js-second-selection">Hire a Bus</div>
//       <div class="selection-text js-third-selection">Booking Status</div>
//     </div>
//     <form>
//       <label for="departure">Departure</label>
//       <input type="text" id="departure" list="cities1">
//       <datalist id="cities1" class="option">
//         <option value="Lagos">
//         <option value="Abuja">
//         <option value="Port Harcourt">
//         <option value="Kano">
//         <option value="Ibadan">
//       </datalist>
//       <label for="destination">Destination</label>
//       <input type="text" id="destination">
//       <label for="departure-date">Departure Date</label>
//       <input type="date" id="departure-date">
//       <button>Proceed</button>
//     </form>
//   `;

//   // Hire a Bus Form
//   const hireHTML = `
//     <div class="selection-form js-first-selection">
//       <div class="selection-text">Book a Ride
//         <div class="select-div"></div>
//       </div>
//       <div class="selection-text js-second-selection">Hire a Bus</div>
//       <div class="selection-text js-third-selection">Booking Status</div>
//     </div>
//     <form>
//       <label for="hire-from">Hire From</label>
//       <input type="text" id="hire-from" list="cities2">
//       <datalist id="cities2" class="option">
//         <option value="Lagos">
//         <option value="Abuja">
//         <option value="Port Harcourt">
//         <option value="Kano">
//         <option value="Ibadan">
//       </datalist>
//       <label for="hire-destination">Hire Destination</label>
//       <input type="text" id="hire-destination">
//       <label for="hire-date">Departure Date</label>
//       <input type="date" id="hire-date">
//       <button>Proceed</button>
//     </form>
//   `;

//   // Load the initial form (Book a Ride form by default)
//   formElement.innerHTML = formHTML;

//   // Helper function to update the form
//   function updateForm(newForm) {
//     formElement.innerHTML = newForm;
//     addEventListeners();
//   }

//   // Add click listeners for form switching
//   function addEventListeners() {
//     const firstSelector = document.querySelector('.js-first-selection');
//     const secondSelector = document.querySelector('.js-second-selection');

//     // Switch to "Book a Ride" form
//     firstSelector.addEventListener('click', () => {
//       if (formElement.innerHTML !== formHTML) {
//         updateForm(formHTML);
//       }
//     });

//     // Switch to "Hire a Bus" form
//     secondSelector.addEventListener('click', () => {
//       if (formElement.innerHTML !== hireHTML) {
//         updateForm(hireHTML);
//       }
//     });
//   }

//   addEventListeners();
// });


document.addEventListener('DOMContentLoaded', () => {
  const formElement = document.querySelector('.js-container');

  // Book a Ride Form
  const formHTML = `
    <div class="selection-form">
      <div class="selection-text js-first-selection">Book a Ride</div>
      <div class="selection-text js-second-selection">Hire a Bus</div>
      <div class="selection-text js-third-selection">Booking Status</div>
    </div>
    <form>
      <label for="departure">Departure</label>
      <input type="text" id="departure" list="cities1">
      <datalist id="cities1">
        <option value="Lagos">
        <option value="Abuja">
        <option value="Port Harcourt">
        <option value="Kano">
        <option value="Ibadan">
      </datalist>

      <label for="destination">Destination</label>
      <input type="text" id="destination">

      <label for="departure-date">Departure Date</label>
      <input type="date" id="departure-date">

      <button>Proceed</button>
    </form>
  `;

  // Hire a Bus Form
  const hireHTML = `
    <div class="selection-form">
      <div class="selection-text js-first-selection">Book a Ride</div>
      <div class="selection-text js-second-selection">Hire a Bus</div>
      <div class="selection-text js-third-selection">Booking Status</div>
    </div>
    <form>
      <label for="hire-from">Hire From</label>
      <input type="text" id="hire-from" list="cities2">
      <datalist id="cities2">
        <option value="Lagos">
        <option value="Abuja">
        <option value="Port Harcourt">
        <option value="Kano">
        <option value="Ibadan">
      </datalist>

      <label for="hire-destination">Hire Destination</label>
      <input type="text" id="hire-destination">

      <label for="hire-date">Departure Date</label>
      <input type="date" id="hire-date">

      <button>Proceed</button>
    </form>
  `;

  // Load the initial form (Book a Ride form by default)
  formElement.innerHTML = formHTML;

  // Event delegation: Listen for clicks on form switches
  formElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-first-selection')) {
      formElement.innerHTML = formHTML;
    }

    if (event.target.classList.contains('js-second-selection')) {
      formElement.innerHTML = hireHTML;
    }
  });
});
