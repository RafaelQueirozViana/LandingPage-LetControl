let ignoreScroll = false;

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


const openMobileMenu = () => {
    const mobileMenuContainer = document.querySelector('.header nav');
    mobileMenuContainer.style.display = 'flex';

    setTimeout(() => {
        mobileMenuContainer.classList.add('open');
    }, 100)

    const links = mobileMenuContainer.querySelectorAll('a');
    links.forEach((button) => {
        button.addEventListener('click', () => {
            mobileMenuContainer.classList.remove('open');
        });


    });
};

const openMenuButton = document.querySelector('.mobile-menu');
openMenuButton.addEventListener('click', openMobileMenu);