// Variables for menu icon, navbar, sections, and nav links
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Function to handle scroll event and highlight active navigation link
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
        }
    });
});

// Function to toggle menu icon and navbar visibility
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Function for smooth scrolling to section on anchor link click
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            navbar.classList.remove('active'); // Close the menu on click
        }
    });
});

// Function for form validation and submission
const form = document.querySelector('.contact form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullNameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector('textarea');

    if (fullNameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Please fill in all required fields.');
        return;
    }

    // Simulate form submission (replace with actual submission logic)
    alert('Form submitted successfully!');
    form.reset();
});

