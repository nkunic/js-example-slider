// Import stylesheets
import './style.css';

// Write Javascript code!

/*** SLIDER ***/

// Image
var img = document.querySelector('img');
//console.log(img);

var counter = 1;

var loop = setInterval(function () {
  counter++; // 2

  // if(counter == 4) {
  //   counter == 1;
  // }

  counter == 4 ? (counter = 1) : (counter = counter);

  img.setAttribute(
    'src',
    'https://raw.githubusercontent.com/nkunic/js-example-slider/master/images/bg-img' +
      counter +
      '.jpg'
  );
}, 2000);
