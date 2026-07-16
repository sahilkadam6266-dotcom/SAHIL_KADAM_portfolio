/*=========================================
            STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});

/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================================
            SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

/*=========================================
        BACK TO TOP BUTTON
=========================================*/

const topButton = document.querySelector(".back-to-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topButton.style.opacity="1";
        topButton.style.visibility="visible";

    }else{

        topButton.style.opacity="0";
        topButton.style.visibility="hidden";

    }

});

/*=========================================
        TYPING ANIMATION
=========================================*/

new Typed("#typing",{

    strings:[
        "Frontend Web Developer",
        "Responsive Website Designer",
        "Freelancer",
        "UI Developer"
    ],

    typeSpeed:70,

    backSpeed:45,

    backDelay:1800,

    loop:true

});

/*=========================================
            AOS
=========================================*/

AOS.init({

    duration:1000,

    once:false,

    offset:120

});
/*=========================================
            LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("loader-hidden");

    }, 1200);

});

/*=========================================
        EMAIL + WHATSAPP FORM
=========================================*/

emailjs.init("nSFZoQ62KtK-i-HII");

const form = document.getElementById("contact-form");

const status = document.getElementById("status");

const sendBtn = document.getElementById("sendBtn");

form.addEventListener("submit", function(e){

    e.preventDefault();

    sendBtn.innerHTML = "Sending...";

    sendBtn.disabled = true;

    emailjs.sendForm(

        "service_eduzy7j",

        "template_9us3cgt",

        this

    )

    .then(() => {

        status.innerHTML = "✅ Message sent successfully!";

        status.style.color = "green";

        // WhatsApp

        const name = document.getElementById("name").value;

        const email = document.getElementById("email").value;

        const subject = document.getElementById("subject").value;

        const message = document.getElementById("message").value;

        const whatsappMessage =

`Hello Sahil,

You have received a new enquiry from your portfolio.

Name: ${name}

Email: ${email}

Subject: ${subject}

Message:
${message}`;

        const whatsappURL =
`https://wa.me/917499661244?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

        form.reset();

        sendBtn.innerHTML = "Send Message";

        sendBtn.disabled = false;

    })

    .catch((error)=>{

        console.log(error);

        status.innerHTML = "❌ Failed to send message.";

        status.style.color = "red";

        sendBtn.innerHTML = "Send Message";

        sendBtn.disabled = false;

    });

});