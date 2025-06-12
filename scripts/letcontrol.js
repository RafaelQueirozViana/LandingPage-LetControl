class NavigationManager {
    constructor() {
        this.navLinks = document.querySelectorAll('.header-content nav a');
        this.openMenuButton = document.querySelector('.mobile-menu');
        this.mobileMenuContainer = document.querySelector('.header nav');

        this.addEventListeners();
    }

    getSectionPosition(element) {
        const sectionName = element.getAttribute('href');
        return document.querySelector(`.${sectionName}`).offsetTop;
    }

    navSelect(element) {
        if (!element.classList.contains('selected')) {
            const parent = element.parentElement.querySelectorAll('a');
            parent.forEach(p => p.classList.remove('selected'));
            element.classList.add('selected');
        }
    }

    scrollToSection(event) {
        event.preventDefault();
        const target = event.target;

        this.navSelect(target);

        const position = this.getSectionPosition(target) - 150;
        window.scroll({
            top: position,
            behavior: "smooth",
        });
    }

    openMobileMenu() {
        if (!this.openMenuButton.classList.contains('clicked')) {
            this.openMenuButton.classList.add('clicked');
            this.mobileMenuContainer.style.display = 'flex';

            setTimeout(() => {
                this.mobileMenuContainer.classList.add('open');
            }, 50);

            const links = this.mobileMenuContainer.querySelectorAll('a');
            links.forEach((button) => {
                button.addEventListener('click', () => {
                    this.mobileMenuContainer.classList.remove('open');
                    this.openMenuButton.classList.remove('clicked');
                });
            });

        } else {
            this.openMenuButton.classList.remove('clicked');
            this.mobileMenuContainer.classList.remove('open');
        }
    }

    addEventListeners() {
        this.navLinks.forEach((link) => {
            link.addEventListener('click', (event) => this.scrollToSection(event));
        });

        this.openMenuButton.addEventListener('click', () => this.openMobileMenu());
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new NavigationManager();
});


const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('js-show-for-transition');
        }



    });
});

const sections = document.querySelectorAll('.js-hidden-for-transition');

sections.forEach((element) => myObserver.observe(element));



