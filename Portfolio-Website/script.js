// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close menu after clicking link

document.querySelectorAll(".navbar a")
.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});

// =========================
// TYPING EFFECT
// =========================

const typingText =
document.getElementById("typing");

const words = [

    "B.Tech CSE (Data Science) Student",
    "Aspiring Software Developer",
    "Front-End Enthusiast",
    "Hackathon Participant"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord =
    words[wordIndex];

    if(!deleting){

        typingText.textContent =
        currentWord.substring(
            0,
            charIndex + 1
        );

        charIndex++;

        if(charIndex === currentWord.length){

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    }
    else{

        typingText.textContent =
        currentWord.substring(
            0,
            charIndex - 1
        );

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex === words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );

}

typeEffect();

// =========================
// SCROLL TO TOP BUTTON
// =========================

const scrollBtn =
document.getElementById(
    "scrollTopBtn"
);

window.addEventListener(
    "scroll",
    () => {

        if(window.scrollY > 400){

            scrollBtn.style.display =
            "block";

        }
        else{

            scrollBtn.style.display =
            "none";

        }

    }
);

scrollBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    }
);

// =========================
// ACTIVE NAV LINKS
// =========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
    ".navbar a"
);

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
            section.offsetTop - 150;

            const sectionHeight =
            section.offsetHeight;

            if(
                window.scrollY >= sectionTop
                &&
                window.scrollY <
                sectionTop + sectionHeight
            ){

                current =
                section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );

            if(
                link.getAttribute("href")
                ===
                "#" + current
            ){

                link.classList.add(
                    "active"
                );

            }

        });

    }
);

// =========================
// SCROLL ANIMATION
// =========================

const observer =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show"
            );

        }

    });

},
{
    threshold:0.15
}

);

document
.querySelectorAll(

".skill-card,\
.project-card,\
.timeline-card,\
.certificate-card,\
.experience-card,\
.hackathon-card,\
.contact-item"

)
.forEach(item=>{

    item.classList.add("hidden");

    observer.observe(item);

});

// =========================
// CONTACT FORM
// =========================

const form =
document.querySelector(
    ".contact-form"
);

if(form){

    form.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            alert(
                "Thank you for contacting me! 💜"
            );

            form.reset();

        }
    );

}
