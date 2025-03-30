

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

      <button type="submit">Proceed</button>
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
      <input type="text" id="hire-from" required>


      <label for="hire-destination">Hire Destination</label>
      <input type="text" id="hire-destination" required>

      <label for="hire-date">Departure Date</label>
      <input type="date" id="hire-date" required>

      <button type="submit">Proceed</button>
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
