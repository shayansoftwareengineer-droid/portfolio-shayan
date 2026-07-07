// ==========================================
// GOLD MOUSE TRAIL
// ==========================================

const trailContainer = document.getElementById("trail-container");

document.addEventListener("mousemove", function (e) {

    const dot = document.createElement("div");

    dot.className = "trail";

    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";

    trailContainer.appendChild(dot);

    setTimeout(() => {
        dot.remove();
    }, 800);

});


// ==========================================
// AOS
// ==========================================

AOS.init({

    duration:1000,

    easing:"ease-in-out",

    once:true,

    offset:100

});


// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('nav a').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
// ==========================================
// ACTIVE NAVBAR LINK
// ==========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================================
// HERO IMAGE HOVER EFFECT
// ==========================================

const heroImage = document.querySelector(".hero-image img");

if(heroImage){

heroImage.addEventListener("mousemove",(e)=>{

heroImage.style.transform="scale(1.05) rotate(2deg)";

});

heroImage.addEventListener("mouseleave",()=>{

heroImage.style.transform="scale(1)";

});

}


// ==========================================
// CONTACT FORM + EMAILJS
// ==========================================

emailjs.init({
    publicKey: "UkHZjH49HJC5EU9CH",
});

const form = document.getElementById("contact-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const button = form.querySelector("button");

const oldText = button.innerHTML;

button.innerHTML="Sending...";
button.disabled=true;

emailjs.sendForm(

"service_vjnzuyo",

"template_64ilo27",

this

)

.then(()=>{

alert("✅ Message Sent Successfully!");

form.reset();

button.innerHTML=oldText;

button.disabled=false;

})

.catch((error)=>{

alert("❌ Failed To Send Message");

console.log(error);

button.innerHTML=oldText;

button.disabled=false;

});

});

}
// ==========================================
// NAVBAR BACKGROUND ON SCROLL
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(0,0,0,0.90)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 5px 30px rgba(255,215,0,.15)";

    } else {

        navbar.style.background = "rgba(255,255,255,.06)";
        navbar.style.boxShadow = "none";

    }

});


// ==========================================
// BUTTON RIPPLE EFFECT
// ==========================================

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const size = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = size + "px";
        circle.style.height = size + "px";

        circle.style.left = (e.offsetX - size / 2) + "px";
        circle.style.top = (e.offsetY - size / 2) + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});


// ==========================================
// FADE IN SECTIONS
// ==========================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach((section) => {

    observer.observe(section);

});


// ==========================================
// PAGE LOADED
// ==========================================

window.addEventListener("load", () => {

    console.log("🚀 Shayan Portfolio Loaded Successfully");

});