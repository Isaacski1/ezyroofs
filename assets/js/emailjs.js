// Initialize EmailJS with your Public Key
  (function() {
      emailjs.init({
          publicKey: "D_juqj1YHFPFqnfYM"
      });
  })();

  // Handle form submission
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function(event) {
      event.preventDefault();

      // Collect input values
      const params = {
          from_name: document.getElementById("fullName").value,
          from_email: document.getElementById("email").value,
          message: document.getElementById("message").value,
          // Force recipient to be your client’s email
          to_email: "fianuezekielkwadzo25@gmail.com"
      };

      // Send email using EmailJS
      emailjs.send("service_delzyne", "template_971078r", params)
      .then(function(response) {
          alert("✅ Message sent successfully!");
          contactForm.reset(); // Clear form fields
      }, function(error) {
          alert("❌ Failed to send message. Please try again later.");
          console.error("EmailJS error:", error);
      });
  });


  // Initialize EmailJS
    (function () {
      emailjs.init({
        publicKey: "D_juqj1YHFPFqnfYM" // your public key
      });
    })();

    // Wait until the page loads
    document.addEventListener('DOMContentLoaded', function () {
      const form = document.querySelector('form'); // select your appointment form
      const dateInput = document.querySelector('#datepicker');
      const subjectHidden = document.querySelector('#selected-location');

      // Handle subject dropdown
      const dropdown = document.querySelector('.custom-dropdown');
      const toggle = dropdown.querySelector('.dropdown-toggle');
      const menu = dropdown.querySelector('.dropdown-menu');
      const items = menu.querySelectorAll('li');

      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.toggle('show');
      });

      items.forEach(item => {
        item.addEventListener('click', function () {
          toggle.textContent = this.textContent;
          subjectHidden.value = this.textContent;
          menu.classList.remove('show');
        });
      });

      // Form submit event
      form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validate date field
        if (!dateInput.value) {
          alert('Please select an inspection date.');
          dateInput.focus();
          return;
        }

        // Collect data from form fields
        const formData = {
          from_name: form.querySelector('[name="Full Name"]').value,
          from_email: form.querySelector('[name="Email"]').value,
          location: form.querySelector('[name="Location"]').value,
          appointment_date: form.querySelector('[name="Date"]').value,
          subject: form.querySelector('[name="Subject"]').value || 'Requesting for Estimate',
          to_name: "Ezy Roofs Team" // Client’s company name
        };

        // Send via EmailJS
        emailjs.send("service_delzyne", "template_5ysaxin", formData)
          .then(function (response) {
            alert("✅ Appointment request sent successfully!");
            form.reset();
          }, function (error) {
            alert("❌ Failed to send appointment. Please try again later.");
            console.error("EmailJS Error:", error);
          });
      });
    });