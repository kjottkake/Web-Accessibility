const navbar = document.querySelector('nav');
const footer = document.querySelector('footer');

const template = document.createElement('template');
const footerTemplate = document.createElement('template');


template.innerHTML=`
    <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="resources.html">Resources</a></li>
    <li><a href="news.html">News</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="testimonials.html">Testimonials</a></li>
    <li><a href="faq.html">FAQ</a></li>
    </ul>
`;

footerTemplate.innerHTML=`
<div class="footer-container">
    <div class="footer-col">
      <h3>About Us</h3>
      <p> Our goal is to make the internet a more inclusive and accessible place for everyone, regardless of ability or disability.</p>
    </div>
    <div class="footer-col">
      <h3>Contact Us</h3>
      <ul>
        <li>info@stud.ntnu.no</li>
        <li>+47 981 969 101</li>
        <li>Teknologivegen 22, 2815 Gjøvik</li>
      </ul>
    </div>
    <div class="footer-col">
      <h3>Follow Us</h3>
      <ul class="social-media-list">
        <li><a href="#"><i class="fa fa-facebook-square"></i> Facebook</a></li>
        <li><a href="#"><i class="fa fa-twitter-square"></i> Twitter</a></li>
        <li><a href="#"><i class="fa fa-instagram"></i> Instagram</a></li>
      </ul>
    </div>
  </div>
`;


navbar.appendChild(template.content);
footer.appendChild(footerTemplate.content);


// // create an object to hold the focusable elements on the page
// var focusableElements = {
//   links: document.querySelectorAll('a[href]'),
//   buttons: document.querySelectorAll('button'),
//   inputs: document.querySelectorAll('input, textarea'),
// };

// // create an array of all focusable elements on the page
// var allFocusableElements = [].concat(
//   Array.from(focusableElements.links),
//   Array.from(focusableElements.buttons),
//   Array.from(focusableElements.inputs),
// );

// // create a variable to hold the currently focused element
// var currentFocusedElement = null;

// // handle keyboard events
// document.addEventListener('keydown', function(event) {
//   // check if the tab key was pressed
//   if (event.keyCode === 9) {
//     // prevent the default tab behavior
//     event.preventDefault();
    
//     // get the index of the currently focused element
//     var currentIndex = allFocusableElements.indexOf(currentFocusedElement);
    
//     // move the focus to the next element in the array
//     var nextIndex = (currentIndex + 1) % allFocusableElements.length;
//     allFocusableElements[nextIndex].focus();
//   }
// });

// // handle focus events
// document.addEventListener('focus', function(event) {
//   // update the currently focused element
//   currentFocusedElement = event.target;
// }, true);