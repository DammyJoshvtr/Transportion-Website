console.log('i didnt disapear');

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
      <input type="text" id="departure" list="cities1" required>

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
      <label for="hire-from">Hire From</label>
      <input type="text" id="departure" required>


      <label for="hire-destination">Hire Destination</label>
      <input type="text" id="destination" required>

      <label for="hire-date">Departure Date</label>
      <input type="date" id="departure-date" required>

      <button type="submit" class="submit">Proceed</button>
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

  const bookingsArr = []
  
  const submitElement = document.querySelector('.submit');
  const departElement = document.getElementById('departure');
  const destinationElement = document.getElementById('destination');
  const dateElement = document.getElementById('desparture-date');

  submitElement.addEventListener('click', (event) => {
    event.preventDefault();

    // const isduplicate = true;

    const booking = {
      departure: departElement.value,
      destination: destination.value,
      date: destination.value
    };

    

    bookingsArr.push(booking);
    console.log(booking)
  })
});


//when the button is clicked;
//Take the values and add to booking html;