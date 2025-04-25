// create homepage typewriter effect
const typewriterElement = document.getElementById('typewriter');
const typewriter = new Typewriter(typewriterElement, {
    loop: true,
    cursor: '_',
    delay: 70
});

typewriter.typeString('Student')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Software engineer')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Developer')
    .pauseFor(2000)
    .start();



// Add smooth scrolling to all links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});



// Set current year for footer
document.getElementById('year').innerHTML = String(new Date().getFullYear());



// Enable theme switching in footer
const themeSwitch = document.querySelector('.theme-switch');
if (localStorage.getItem('theme')) {
    themeSwitch.checked = localStorage.getItem('theme') === 'dark';
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
} else if (matchMedia('(prefers-color-scheme: dark)').matches){
    themeSwitch.checked = true;
    document.documentElement.setAttribute('data-theme', 'dark');
}
themeSwitch.addEventListener('change', function(e) {
    localStorage.setItem('theme', e.currentTarget.checked ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
});
