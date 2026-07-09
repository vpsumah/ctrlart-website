console.log("Script chargé!");

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".main-nav a");

console.log("Sections trouvées:", sections);
console.log("Liens trouvés:", navLinks);

function updateActiveNavLink() {
    let currentSectionId = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            currentSectionId = section.id;
        }
    });

    console.log("Section active:", currentSectionId);

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSectionId) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNavLink);
window.addEventListener("load", updateActiveNavLink);

/* ==========================================================
   LIGHTBOX
========================================================== */

const galleryImages = document.querySelectorAll(".website-gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

const counter = document.querySelector(".lightbox-counter");

const btnPrev = document.querySelector(".lightbox-prev");
const btnNext = document.querySelector(".lightbox-next");
const btnClose = document.querySelector(".lightbox-close");

let currentImage = 0;

function showImage(index){

    currentImage = index;

    lightboxImage.src = galleryImages[index].src;

    counter.textContent = `${index + 1} / ${galleryImages.length}`;

}

galleryImages.forEach((img,index)=>{

    img.style.cursor="zoom-in";

    img.addEventListener("click",()=>{

        lightbox.classList.add("active");

        showImage(index);

    });

});

btnNext.addEventListener("click",()=>{

    showImage((currentImage+1)%galleryImages.length);

});

btnPrev.addEventListener("click",()=>{

    showImage((currentImage-1+galleryImages.length)%galleryImages.length);

});

btnClose.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape") lightbox.classList.remove("active");

    if(e.key==="ArrowRight") btnNext.click();

    if(e.key==="ArrowLeft") btnPrev.click();

});