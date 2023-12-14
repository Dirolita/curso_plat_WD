const menuEmail = document.querySelector('.email-nav');
const desktopMenu = document.querySelector('.desktop-menu');

//Menu hamburguesa 
const menuMobile = document.querySelector('.menu');
const mobileMenuInfo = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',toggledesktopMenu);
menuMobile.addEventListener('click', toggleMenuMobile)

function toggledesktopMenu(){
    /* Quitar y poner la clase que desaparece el menu*/
    desktopMenu.classList.toggle('inactive');
}

function toggleMenuMobile(){
    mobileMenuInfo.classList.toggle('inactive');
}