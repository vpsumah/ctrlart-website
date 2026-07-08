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