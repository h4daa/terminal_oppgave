// Smooth Scroll for In-Page Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Offset for sticky header
            behavior: 'smooth'
        });
    });
});

// Scroll Animations (fade-in effect when elements come into view)
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => {
    observer.observe(section);
});

// Portfolio Item Hover Effect (Smooth scaling and shadow)
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
        item.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
        item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
        item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});

// Button Hover Transitions
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s ease';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Adding Animation on Page Load (to make the site appear smoothly)
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 1s ease-out';
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
});

// Explore Button Smooth Transition to Portfolio Section
document.getElementById('explore-btn').addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.getElementById('portfolio');
    window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
    });
});
