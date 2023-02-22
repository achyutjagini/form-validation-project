// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;

function validate() {
  let s = document.createElement('p');
  let x = document.getElementsByClassName('names');

  for (let i = 0; i < x.length; i++) {
    if (x[i].value.length < 3 || x[i].value.length > 16) {
      let s = document.createElement('p');
      s.textContent = 'invalid input';
      x[i].appendChild(s);
      alert('D');
      return false;
    }
  }
}
