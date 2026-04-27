
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
    
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

function handleScroll() {
    const elements = document.querySelectorAll('.fade-in-up');
    
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in-up');
});

document.querySelectorAll('.news-card').forEach(card => {
    card.classList.add('fade-in-up');
});

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // Trigger on page load too