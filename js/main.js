const menuEmail = document.querySelector('.email-nav');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',toggledesktopMenu);

function toggledesktopMenu(){
    /* Quitar la clase que desaparece el menu*/
    desktopMenu.classList.toggle('inactive');
}