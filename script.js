// Wait until the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {

  // For form submission on the signup form
  const signupForm = document.querySelector('form');
  if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = signupForm.querySelector('input[type="text"]').value;
      const email = signupForm.querySelector('input[type="email"]').value;
      const password = signupForm.querySelector('input[type="password"]').value;

      if (name && email && password) {
        alert('Account created successfully!');
        signupForm.reset();  // Reset the form after submission
      } else {
        alert('Please fill in all fields.');
      }
    });
  }

  // For contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = contactForm.querySelector('input[type="text"]').value;
      const email = contactForm.querySelector('input[type="email"]').value;
      const message = contactForm.querySelector('textarea').value;

      if (name && email && message) {
        alert('Message sent successfully!');
        contactForm.reset();  // Reset the form after submission
      } else {
        alert('Please fill in all fields.');
      }
    });
  }

});
