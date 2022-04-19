// Import stylesheets
import './style.css';

// Write Javascript code!
var img = document.querySelector('img');
console.log(img);

var counter = 1;

var loop = setInterval(function(){
  counter++; // 2
  if(counter == 6) {
    counter == 1;
  }
  //(counter == 3) ? (counter == 1) : (counter == counter);
  img.setAttribute("src", "https://github.com/nkunic/js-example-slider/blob/master/images/bg-img1.jpg" + counter + ".jpg");
},2000)