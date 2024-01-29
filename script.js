/*==================== loader ====================*/
window.onload = function() {
  document.getElementById("loader").style.display = "none"
  document.getElementById("content").style.display = "block"
}

/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add;
      });
    }
  });

  /*==================== sticky navbar ====================*/

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

function sendMessage() {
  (function() {
    emailjs.init("B9bE0nF2oypeKFZhb");
  })();

  var servicesID = "service_plauu21";
  var temolateID = "template_qmuxuw9";

  var params = {
    sendername: document.querySelector("#name").value,
    senderemail: document.querySelector("#email").value,
    number: document.querySelector("#number").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };

    emailjs.send(servicesID, temolateID, params)
    .then((res) => {
      alert("Thank you, " + params["sendername"] + "! Your message has been sent.");
    })
    .catch();
}

/*==================== scroll reveal ====================*/

ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-content, .projects-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
// ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

/*==================== typed js ====================*/

const typed = new Typed(".multi-text", {
  strings: ["Fronted Developer", "Graphic Desighner", "Editor"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
