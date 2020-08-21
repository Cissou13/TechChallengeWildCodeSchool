/* Timer */

setInterval(function getTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours = (hours < 10 ? ' 0' : ' ') + hours;
  minutes = (minutes < 10 ? ':0' : ':') + minutes;
  seconds = (seconds < 10 ? ':0' : ':') + seconds;
  let myHour = document.getElementById('my-hour');
  myHour.textContent = 'Current time in Colchis : ' + hours + minutes + seconds;
}, 1000);

/* Form Warning pop-up */
const message = 'Thanks you for contacting us, we will come back to you soon !';

document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    alert(message);
  });
