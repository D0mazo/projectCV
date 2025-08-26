// script.js - JavaScript for interactivity (smooth scroll, section animations)

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Intersection Observer for section animations
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Simple menu toggle for mobile (if needed, though Tailwind handles responsive)
    if (window.innerWidth < 768) {
        const navUl = document.querySelector('nav ul');
        navUl.classList.add('flex-col');
        // Add more mobile menu logic if desired
    }
});