// Import stylesheets
import './style.css';

// Write Javascript code!
 var img = document.querySelector('img');
 console.log(img);

 var counter = 1;

 var loop = setInterval(function(){
  counter++; // 2
  img.setAttribute("src", "images/bg-img" + counter + ".jpg");
 },2000)