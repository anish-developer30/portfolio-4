window.addEventListener('scroll', () => { 
    let navbar = document.querySelector("header");
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
    let MenuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    MenuToggle.classList.toggle("active");
    menu.classList.toggle("active");
}