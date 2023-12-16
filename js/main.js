const nav = document.querySelector('.nav-bar');
//Menu Desktop
const menuDesktop = nav.querySelector('.email-nav');
const desktopMenu = nav.querySelector('.desktop-menu');
//Menu hamburguesa 
const menuMobile = nav.querySelector('.menu');
const mobileMenuInfo = nav.querySelector('.mobile-menu');
//navbar-shopping-cart
const shoppingCart = nav.querySelector('.navbar-shopping-cart');
//Detalles de producto
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
document.addEventListener('click', handleMenuClick);
function handleMenuClick(event){
    const targetClassList = event.target.classList;
    console.log(targetClassList);
    const eventType = event.type;
}

//Para el ejercicio vamos a poner los productos con Javascript

productList = [];

productList.push({
    price:120,
    nombre: 'Camara Vintage',
    img:'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
}
)
productList.push({
    price:520,
    nombre: 'Camara Vintage',
    img:'https://images.unsplash.com/photo-1523740856324-f2ce89135981?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}
)
productList.push({
    price:320,
    nombre: 'Turntable',
    img:'https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}
)
productList.push({
    price:120,
    nombre: 'Typewriter',
    img:'https://images.unsplash.com/photo-1570626742839-59acd9822944?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}
)
productList.push({
    price:120,
    nombre: 'Camara Vintage',
    img:'https://images.pexels.com/photos/159613/ghettoblaster-radio-recorder-boombox-old-school-159613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
}
)
productList.push({
    price:520,
    nombre: 'Camara Vintage',
    img:'https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
}
)
productList.push({
    price:320,
    nombre: 'Turntable',
    img:'https://images.pexels.com/photos/327331/pexels-photo-327331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
}
)
productList.push({
    price:120,
    nombre: 'Typewriter',
    img:'https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}
)
console.log(productList);
/*Esta es la estructura que necesito:

<div class="product-card">
                <img src="https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="img-product">
                <div class="product-info">
                    <div class="card-info">
                        <p>$120,00</p>
                        <p>Clasic clock</p>
                    </div>
                    <figure class="img-icon-product">
                        <img src="src/Platzi_YardSale_Icons/bt_add_to_cart.svg">
                    </figure>
                </div>
            </div>

*/
//Div de CARD CONTAINER
const cardContainer =document.querySelector('.cards-container');

function renderProdcts(arr){
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.img)
        productImg.classList.add('img-product')
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const cardInfo = document.createElement('div')
        cardInfo.classList.add('card-info')
    
        const price = document.createElement('p')
        price.innerText = '$' + product.price;
        const name = document.createElement('p')
        name.innerText = product.nombre;
    
        cardInfo.append(price, name)
        productInfo.appendChild(cardInfo)
    
        const productFigure = document.createElement('figure')
        productFigure.classList.add('img-icon-product')
    
        const cartIcon = document.createElement('img')
        cartIcon.setAttribute('src', '../src/Platzi_YardSale_Icons/bt_added_to_cart.svg')
        cartIcon.classList.add('cart-icon')
    
        productFigure.appendChild(cartIcon)
        productInfo.appendChild(productFigure)
    
        productCard.append(productImg, productInfo)
        cardContainer.appendChild(productCard)
    }

}
renderProdcts(productList)