// get a reference to the form and the submit button
var form = document.getElementById('my-form');
var submitButton = document.getElementById('submit-button');

// handle the form submission
form.addEventListener('submit', function(event) {
  // prevent the form from being submitted
  event.preventDefault();
  
  // get the values of the form fields
  var values = {
    name: form.elements['name'].value,
    email: form.elements['email'].value,
    message: form.elements['message'].value,
  };
  
  // create an array to hold any errors
  var errors = [];
  
  // validate the name field
  if (values.name.trim() == '') {
    errors.push('Please enter your name.');
  }
  
  // validate the email field
  if (values.email.trim() == '') {
    errors.push('Please enter your email address.');
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
    errors.push('Please enter a valid email address.');
  }
  
  // validate the message field
  if (values.message.trim() == '') {
    errors.push('Please enter a message.');
  }
  
  // check if there are any errors
  if (errors.length > 0) {
    // show the errors
    alert(errors.join('\n'));
  } else {
    // submit the form
    form.submit();
  }
});
