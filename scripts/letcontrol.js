
const getSectionPosition = (element) => {
    const sectionName = element.getAttribute('href');
    return document.querySelector(`.${sectionName}`).offsetTop;
};

const navSelect = (element) => {
    if (!element.classList.contains('selected')) {
        const parent = element.parentElement.querySelectorAll('a');

        parent.forEach(p => {
            p.classList.remove('selected');
        });

        element.classList.add('selected');
    }

    else {

    }

}

const scrollToSection = (event) => {
    event.preventDefault();
    navSelect(event.target)
    const position = getSectionPosition(event.target) - 150;
    window.scroll({
        top: position,
        behavior: "smooth",
    })

};

const navLinks = document.querySelectorAll('.header-content nav a');
navLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);

});


let lastScrollY = window.scrollY;
const header = document.querySelector('.header');

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // Rolando para baixo
        header.style.top = "-120px"; // Oculta o header
    } else {
        // Rolando para cima
        header.style.top = "0";
    }
    lastScrollY = window.scrollY;
});
