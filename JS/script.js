var owl = $(".hero-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  animateIn: "animate__pulse",
  // animateOut: "animate__flipOutX",
  autoplay: true,
  autoplayTimeout: 8000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [8000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// =========== Section One Owl Carousel ==============
// Initialize the carousel
var owl = $(".section-one-carousel");
owl.owlCarousel({
  items: 3,
  loop: true,
  margin: 40,
  autoplay: true,
  dots: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    700: {
      items: 2,
      nav: true,
    },
    1300: {
      items: 3,
      nav: true,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// =========== Section Three Owl Carousel ==============

var owl = $(".section-three-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 20,
  autoplay: true,
  dots: true,
  nav: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// Section Five Carousel
var owl = $(".section-five-carousel");
owl.owlCarousel({
  items: 3,
  loop: true,
  margin: 20,
  autoplay: true,
  dots: true,
  nav: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    1024: {
      items: 2,
      nav: true,
    },
    1300: {
      items: 3,
      nav: true,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// Customer Says Carousel
var owl = $(".customer-says-carousel");
owl.owlCarousel({
  items: 2,
  loop: true,
  margin: 20,
  autoplay: true,
  dots: true,
  nav: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      dots: true,
    },
    1024: {
      items: 2,
      nav: true,
    },
    1300: {
      items: 2,
      dots: true,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// Companies  Carousel
var owl = $(".companies-logo-carousel");
owl.owlCarousel({
  items: 5,
  loop: true,
  margin: 10,
  autoplay: true,
  dots: true,
  nav: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      dots: true,
    },
    768: {
      items: 2,
      dots: true,
    },
    1024: {
      items: 4,
      nav: true,
    },
    1300: {
      items: 5,
      dots: true,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// Estate Owl Carousel
var owl = $(".estate-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  dots: false,
  nav: true,
  smartSpeed: 500,
  animateIn: "animate__pulse",
  // animateOut: "animate__flipOutX",
  autoplay: true,
  autoplayTimeout: 8000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [8000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// Car Dealership Owl Carousel
var owl = $(".car_dealer-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  dots: false,
  nav: true,
  animateIn: "animate__fadeInRight",
  animateOut: "animate__fadeOutLeft",
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// Validation Mesages Start
const name_error = document.getElementById("name-error");
const email_error = document.getElementById("email-error");
const phone_error = document.getElementById("phone-error");
const message_error = document.getElementById("message-error");
const submit_error = document.getElementById("submit-error");
const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const phoneError = document.getElementById("phone-error");
const subjectError = document.getElementById("subject-error");
const SubmitError = document.getElementById("submit-error");

// ------------------ Validate First Name Message Start ----------------------
function validateFirstName() {
  let firstName = document.getElementById("contact-firstName").value;
  // ----------- Conditional Statement ----------------- //
  if (firstName.length == 0) {
    firstNameError.innerHTML = "First name is required 😊";
    return false;
  }

  if (!firstName.match(/^[A-Za-z]*$/)) {
    firstNameError.innerHTML = '<i class="wrong bi bi-x-circle-fill"></i>';
    return false;
  }
  // ----------------- Remove Error Message -------------------
  firstNameError.innerHTML = "<i class='correct bi bi-check-circle-fill'></i>";
  return true;
}
// ------------------ Validate First Name Message End ----------------------

// ------------------ Validate Last Name Message Start ----------------------
function validateLastname() {
  let lastName = document.getElementById("contact-lastName").value;
  // ----------- Conditional Statement ----------------- //
  if (lastName.length == 0) {
    lastNameError.innerHTML = "Last name is required 😊";
    return false;
  }

  if (!lastName.match(/^[A-Za-z]*$/)) {
    lastNameError.innerHTML = '<i class="wrong bi bi-x-circle-fill"></i>';
    return false;
  }
  // ----------------- Remove Error Message -------------------
  lastNameError.innerHTML = "<i class='correct bi bi-check-circle-fill'></i>";
  return true;
}
// ------------------ Validate Last Name Message End ----------------------

// ----------------- Validate Subject Messgae Start ----------------- //
function validateSubject() {
  const subject = document.getElementById("contact-subject").value;

  // ------------- Conditional Statement --------------//
  if (subject.length == 0) {
    subjectError.innerHTML = "Subject is required 😊";
    return false;
  }

  subjectError.innerHTML = "<i class='correct bi bi-check-circle-fill'></i>";
  return true;
}
// ----------------- Validate Subject Messgae End ------------------ //

// ----------------- Validate Messgae Start --------------- //
function validateMessage() {
  const message = document.getElementById("contact-message").value;
  const required = 30;
  const remaining = required - message.length;

  // ----------- Conditional Statement ---------------
  if (message.length == 0) {
    messageError.innerHTML = "Message is required 😊";
    return false;
  }

  if (remaining > 0) {
    messageError.innerHTML = remaining + " more character(s) required";
    return false;
  }

  messageError.innerHTML = "<i class='correct bi bi-check-circle-fill'></i>";
  return true;
}
// ----------------- Validate Messgae End --------------- //

// Name Validation
function validateName() {
  const name = document.getElementById("contact-name").value;
  // Conditional Statement
  if (name.length == 0) {
    name_error.innerHTML = "Enter your full name 😊";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    name_error.innerHTML = "<i class='wrong bx bxs-x-circle'></i>";
    return false;
  }
  name_error.innerHTML = "<i class='correct bx bxs-check-circle'></i>";
  return true;
}

// Email Validation
function validateEmail() {
  const email = document.getElementById("contact-email").value;
  // Conditional Statement
  if (email.length == 0) {
    email_error.innerHTML = "Type your email 😊";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{3}$/)) {
    email_error.innerHTML = "<i class='wrong bx bxs-x-circle'></i>";
    return false;
  }
  email_error.innerHTML = "<i class='correct bx bxs-check-circle'></i>";
  return true;
}

// Validate Phone Number
function validatePhone() {
  const phone = document.getElementById("contact-phone").value;
  // Conditional Statement
  if (phone.length == 0) {
    phone_error.innerHTML = "Type your phone 😊";
    return false;
  }

  if (phone.length !== 10) {
    phone_error.innerHTML = "<i class='wrong bx bxs-x-circle'></i>";
    return false;
  }

  if (!phone.match(/^[0-9]*[10]*$/)) {
    phone_error.innerHTML = "Only digit required";
    return false;
  }
  phone_error.innerHTML = "<i class='correct bx bxs-check-circle'></i>";
  return true;
}

// Validation Message error
function validateMessage() {
  const message = document.getElementById("contact-message").value;
  const required = 30;
  const remaining = required - message.length;

  // Conditional Statements
  if (message.length == 0) {
    message_error.innerHTML = "Enter your message 😊";
    return false;
  }

  if (remaining > 0) {
    message_error.innerHTML = remaining + " more characters require";
    return false;
  }

  message_error.innerHTML = "<i class='correct bx bxs-check-circle'></i>";
  return true;
}

// Submit Validation
function validateSubmit() {
  // Conditional Statement
  if (
    !validateName() ||
    !validateEmail() ||
    !validatePhone() ||
    !validateMessage()
  ) {
    submit_error.style.display = "block";
    submit_error.innerHTML = "Please fix all errors";
    setTimeout(function () {
      submit_error.style.display = "none";
    }, 3000);
    return false;
  }
}

// Contact Submit Validation-1
function validateSubmit_1() {
  // Conditional Statement
  if (
    !validateFirstName() ||
    !validateLastname() ||
    !validateEmail() ||
    !validatePhone() ||
    !validateSubject() ||
    !validateMessage()
  ) {
    submit_error.style.display = "block";
    submit_error.innerHTML = "Please fix all errors";
    setTimeout(function () {
      submit_error.style.display = "none";
    }, 3000);
    return false;
  }
}

// To Top
const goTopBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {
  window.scrollY >= 500
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

// ============== Website Scrolling Animation //
const sections = document.querySelectorAll("section");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 500;
    let height = sec.offsetHeight;
    // Conditional Statement
    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    }
  });
};

// Background Pre-Loader
setTimeout(function () {
  $(".backgroud-preloader").fadeToggle();
}, 2500);

// document.addEventListener("DOMContentLoaded", () => {
//   setTimeout(() => {
//     const facebookChat = document.querySelector(".facebook");
//     if (facebookChat) {
//       facebookChat.style.display = "flex";
//     }

//     const whatsappChat = document.querySelector(".whatsapp-chat");
//     if (whatsappChat) {
//       whatsappChat.style.display = "flex";
//     }
//   }, 10000);
// });

// Estate Gallery Thumbnail
document.addEventListener("DOMContentLoaded", function () {
  // Select all gallery image icons
  const galleryImages = document.querySelectorAll(".gallery-image");

  galleryImages.forEach((image) => {
    image.addEventListener("click", function () {
      // Find the closest gallery overlay within the same container
      const overlay = this.closest(".main-rooms-container-box").querySelector(
        ".gallery-overlay"
      );
      if (overlay) {
        overlay.style.display = "flex"; // Show overlay
      }
    });
  });

  // Select all close buttons
  const closeButtons = document.querySelectorAll(".close-gallery");

  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Find the closest gallery overlay and hide it
      this.closest(".gallery-overlay").style.display = "none";
    });
  });
});

// ================= Input Focus =====================
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(
    ".car-dealer-sec-3-cont .box__2 .form form .input-cont .input-box input"
  );

  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.nextElementSibling.classList.add("focused");
    });

    input.addEventListener("blur", () => {
      if (input.value !== "") {
        input.nextElementSibling.classList.add("filled");
      } else {
        input.nextElementSibling.classList.remove("filled");
      }
      input.nextElementSibling.classList.remove("focused");
    });
  });
});
