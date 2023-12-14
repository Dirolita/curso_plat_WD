//Menu Desktop
const menuDesktop = document.querySelector('.email-nav');
const desktopMenu = document.querySelector('.desktop-menu');
//Menu hamburguesa 
const menuMobile = document.querySelector('.menu');
const mobileMenuInfo = document.querySelector('.mobile-menu');
//navbar-shopping-cart
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

//Liseners
menuDesktop.addEventListener('click',toggledesktopMenu);
menuMobile.addEventListener('click', toggleMenuMobile);
shoppingCart.addEventListener('click',toggleProductDetail);

//Functions
function toggledesktopMenu(){
    productDetail.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
function toggleMenuMobile(){
    productDetail.classList.add('inactive');
    mobileMenuInfo.classList.toggle('inactive');
}
function toggleProductDetail(){
    mobileMenuInfo.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.toggle('inactive');
}