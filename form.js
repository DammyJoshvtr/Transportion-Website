

// console.log('i didnt disappear');

// document.addEventListener('DOMContentLoaded', () => {
//   const formElement = document.querySelector('.js-container');

//   // Retrieve bookings from localStorage or initialize an empty array
//   let bookingsArr = JSON.parse(localStorage.getItem('bookingsArr')) || [];

//   // Book a Ride Form
//   const formHTML = `  
//     <div class="selection-form">
//       <div class="selection-text js-first-selection">Book a Ride</div>
//       <div class="selection-text js-second-selection">Hire a Bus</div>
//       <div class="selection-text js-third-selection">Booking Status</div>
//     </div>
//     <form>
//       <label for="departure">Name</label>
//       <input type="text" id="name" required>

//       <label for="departure">Departure</label>
//       <input type="text" id="departure" required>

//       <label for="destination">Destination</label>
//       <input type="text" id="destination" required>

//       <label for="departure-date">Departure Date</label>
//       <input type="date" id="departure-date" required>

//       <button type="submit" class="submit">Proceed</button>
//     </form>
//   `;

//   // Hire a Bus Form
//   const hireHTML = `  
//     <div class="selection-form">
//       <div class="selection-text js-first-selection">Book a Ride</div>
//       <div class="selection-text js-second-selection">Hire a Bus</div>
//       <div class="selection-text js-third-selection">Booking Status</div>
//     </div>
//     <form>
//       <label for="departure">Name</label>
//       <input type="text" id="hire-name" required>

//       <label for="hire-from">Hire From</label>
//       <input type="text" id="hire-departure" required>

//       <label for="hire-destination">Hire Destination</label>
//       <input type="text" id="hire-destination" required>

//       <label for="hire-date">Departure Date</label>
//       <input type="date" id="hire-departure-date" required>

//       <button type="submit" class="submit" id="hire-submit">Proceed</button>
//     </form>
//   `;

//   // Load the initial form (Book a Ride form by default)
//   formElement.innerHTML = formHTML;

//   // Event delegation: Listen for clicks on form switches
//   formElement.addEventListener('click', (event) => {
//     if (event.target.classList.contains('js-first-selection')) {
//       formElement.innerHTML = formHTML;
//       attachBookEvent(); // Reattach event listeners
//     }

//     if (event.target.classList.contains('js-second-selection')) {
//       formElement.innerHTML = hireHTML;
//       attachHireEvent(); // Reattach event listeners
//     }

//     if (event.target.classList.contains('js-third-selection')) {
//       attachBookingStatus(); // Load and display stored bookings
//     }
//   });

//   // Function to attach event listeners for 'Book a Ride'
//   const attachBookEvent = () => {
//     const submitElement = document.querySelector('.submit');
//     const departElement = document.getElementById('departure');
//     const destinationElement = document.getElementById('destination');
//     const dateElement = document.getElementById('departure-date');

//     submitElement.addEventListener('click', (event) => {
//       if (!departElement.value || !destinationElement.value || !dateElement.value) {
//         alert('Please fill in the fields');
//         event.preventDefault();
//       } else {
//         const booking = {
//           departure: departElement.value,
//           destination: destinationElement.value,
//           date: dateElement.value
//         };

//         // Store the booking in the array and update localStorage
//         bookingsArr.push(booking);
//         localStorage.setItem('bookingsArr', JSON.stringify(bookingsArr));

//         console.log(bookingsArr);
//         attachBookingStatus(); // Update booking status
//       }
//     });
//   };

//   // Function to display Booking Status
//   const attachBookingStatus = () => {
//     // Retrieve updated bookings from localStorage
//     const storedBookings = JSON.parse(localStorage.getItem('bookingsArr')) || [];

//     let bookingHTML = `<h2>Booking Status</h2>`;

//     if (storedBookings.length === 0) {
//       bookingHTML += `<p>No bookings available.</p><br>
//       <a href="schedule-form.html">
//           <button>Back To Form</button>
//         </a>`;
//     } else {
//       bookingHTML += `<ul>`;
//       storedBookings.forEach((booking, index) => {
//         bookingHTML += `
//           <li>
//             <strong>Booking ${index + 1}:</strong><br>
//             Departure: ${booking.departure}<br>
//             Destination: ${booking.destination}<br>
//             Date: ${booking.date}
//             <button class="complete-button" data-index=${index}>Completed</button>
//           </li>
//         `;

//       });
//       bookingHTML += `</ul><br>
//       <a href="schedule-form.html">
//       <button>Back To Form</button>
//       </a>`;
//     }
    
//     formElement.innerHTML = bookingHTML;
//     //delete bookings...
//     const deleteElement = document.querySelectorAll('.complete-button');
//     deleteElement.forEach((button) => {
//       button.addEventListener('click', (event) => {
//         const index = event.target.getAttribute('data-index') //getting Index from button
//         bookingsArr.splice(index, 1) //removing booking from Array

//         localStorage.setItem('bookingArr', JSON.stringify(bookingsArr)); //updating LocalStorage

//         attachBookingStatus() //updating the bookingstatus DOM
//       })
//     })
//   };

//   // Function to attach event listeners for 'Hire a Bus'
//   const attachHireEvent = () => {
//     const hiresubmitElement = document.getElementById('hire-submit');
//     const hiredepartElement = document.getElementById('hire-departure');
//     const hiredestinationElement = document.getElementById('hire-destination');
//     const hiredateElement = document.getElementById('hire-departure-date');

//     hiresubmitElement.addEventListener('click', (event) => {
//       if (!hiredepartElement.value || !hiredestinationElement.value || !hiredateElement.value) {
//         alert('Please fill in the fields');
//         event.preventDefault();
//       } else {
//         const booking = {
//           departure: hiredepartElement.value,
//           destination: hiredestinationElement.value,
//           date: hiredateElement.value
//         };

//         // Store the booking in the array and update localStorage
//         bookingsArr.push(booking);
//         localStorage.setItem('bookingsArr', JSON.stringify(bookingsArr));

//         console.log(bookingsArr);
//         attachBookingStatus(); // Update booking status
//       }
//     });
//   }

//   // Load the initial form and attach event listeners
//   attachBookEvent();
// });


console.log('i didnt disappear');

document.addEventListener('DOMContentLoaded', () => {
  const formElement = document.querySelector('.js-container');

  // ✅ Retrieve bookings from localStorage or initialize an empty array
  let bookingsArr = JSON.parse(localStorage.getItem('bookingsArr')) || [];

  // Book a Ride Form
  const formHTML = `  
    <div class="selection-form">
      <div class="selection-text js-first-selection">Book a Ride</div>
      <div class="selection-text js-second-selection">Hire a Bus</div>
      <div class="selection-text js-third-selection">Booking Status</div>
    </div>
    <form>
      <label for="departure">Name</label>
      <input type="text" id="name" required>

      <label for="departure">Departure</label>
      <input type="text" id="departure" required>

      <label for="destination">Destination</label>
      <input type="text" id="destination" required>

      <label for="departure-date">Departure Date</label>
      <input type="date" id="departure-date" required>

      <button type="submit" class="submit">Proceed</button>
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
      <label for="departure">Name</label>
      <input type="text" id="hire-name" required>

      <label for="hire-from">Hire From</label>
      <input type="text" id="hire-departure" required>

      <label for="hire-destination">Hire Destination</label>
      <input type="text" id="hire-destination" required>

      <label for="hire-date">Departure Date</label>
      <input type="date" id="hire-departure-date" required>

      <button type="submit" class="submit" id="hire-submit">Proceed</button>
    </form>
  `;

  // Load the initial form (Book a Ride form by default)
  formElement.innerHTML = formHTML;

  // Event delegation: Listen for clicks on form switches
  formElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-first-selection')) {
      formElement.innerHTML = formHTML;
      attachBookEvent(); // ✅ Reattach event listeners
    }

    if (event.target.classList.contains('js-second-selection')) {
      formElement.innerHTML = hireHTML;
      attachHireEvent(); // ✅ Reattach event listeners
    }

    if (event.target.classList.contains('js-third-selection')) {
      attachBookingStatus(); // ✅ Load and display stored bookings
    }
  });

  // Function to attach event listeners for 'Book a Ride'
  const attachBookEvent = () => {
    const submitElement = document.querySelector('.submit');
    const departElement = document.getElementById('departure');
    const destinationElement = document.getElementById('destination');
    const dateElement = document.getElementById('departure-date');

    submitElement.addEventListener('click', (event) => {
      if (!departElement.value || !destinationElement.value || !dateElement.value) {
        alert('Please fill in the fields');
        event.preventDefault();
      } else {
        const booking = {
          departure: departElement.value,
          destination: destinationElement.value,
          date: dateElement.value
        };

        // ✅ Store the booking in the array and update localStorage
        bookingsArr.push(booking);
        localStorage.setItem('bookingsArr', JSON.stringify(bookingsArr));

        console.log(bookingsArr);
        attachBookingStatus(); // ✅ Update booking status
      }
    });
  };

  // Function to display Booking Status
  const attachBookingStatus = () => {
    // ✅ Retrieve updated bookings from localStorage
    const storedBookings = JSON.parse(localStorage.getItem('bookingsArr')) || [];

    let bookingHTML = `<h2>Booking Status</h2>`;

    if (storedBookings.length === 0) {
      bookingHTML += `<p>No bookings available.</p><br>
      <a href="schedule-form.html">
          <button>Back To Form</button>
        </a>`;
    } else {
      bookingHTML += `<ul>`;
      storedBookings.forEach((booking, index) => {
        bookingHTML += `
          <li>
            <strong>Booking ${index + 1}:</strong><br>
            Departure: ${booking.departure}<br>
            Destination: ${booking.destination}<br>
            Date: ${booking.date}
            <button class="complete-button" data-index="${index}">Completed</button>
          </li>
        `;
      });
      bookingHTML += `</ul><br>
        <a href="schedule-form.html">
          <button>Back To Form</button>
        </a>`;
    }

    // ✅ Update the UI with booking status
    formElement.innerHTML = bookingHTML;

    // ✅ Attach event listeners to delete buttons AFTER rendering HTML
    document.querySelectorAll('.complete-button').forEach((button) => {
      button.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index'); // ✅ Get index from button
        bookingsArr.splice(index, 1); // ✅ Remove booking from array
        localStorage.setItem('bookingsArr', JSON.stringify(bookingsArr)); // ✅ Update localStorage
        attachBookingStatus(); // ✅ Re-render the booking status
      });
    });
  };

  // Function to attach event listeners for 'Hire a Bus'
  const attachHireEvent = () => {
    const hiresubmitElement = document.getElementById('hire-submit');
    const hiredepartElement = document.getElementById('hire-departure');
    const hiredestinationElement = document.getElementById('hire-destination');
    const hiredateElement = document.getElementById('hire-departure-date');

    hiresubmitElement.addEventListener('click', (event) => {
      if (!hiredepartElement.value || !hiredestinationElement.value || !hiredateElement.value) {
        alert('Please fill in the fields');
        event.preventDefault();
      } else {
        const booking = {
          departure: hiredepartElement.value,
          destination: hiredestinationElement.value,
          date: hiredateElement.value
        };

        // ✅ Store the booking in the array and update localStorage
        bookingsArr.push(booking);
        localStorage.setItem('bookingsArr', JSON.stringify(bookingsArr));

        console.log(bookingsArr);
        attachBookingStatus(); // ✅ Update booking status
      }
    });
  }

  // ✅ Load the initial form and attach event listeners
  attachBookEvent();
});

