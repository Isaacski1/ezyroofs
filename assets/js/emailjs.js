// Initialize EmailJS with your Public Key
(function () {
    emailjs.init({
        publicKey: "D_juqj1YHFPFqnfYM"
    });
})();

// Handle form submission for Request For Estimate
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect input values
        const params = {
            from_name: contactForm.querySelector('[name="Full Name"]').value,
            from_email: contactForm.querySelector('[name="Email"]').value,
            phone: contactForm.querySelector('[name="Phone Number"]').value,
            subject: contactForm.querySelector('[name="Subject"]').value,
            message: contactForm.querySelector('[name="Message"]').value,
            // Force recipient to be your client’s email
            to_email: "fianuezekielkwadzo25@gmail.com"
        };

        // Send email using EmailJS
        emailjs.send("service_delzyne", "template_971078r", params)
            .then(function (response) {
                window.location.href = "contact-submited-success.html";
            }, function (error) {
                alert("❌ Failed to send message. Please try again later.");
                console.error("EmailJS error:", error);
            });
    });
}
