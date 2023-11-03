const burgerBtn = document.querySelector('.header__burger');
const burgerNav = document.querySelector('.burger__menu');
const burgerOverlay = document.querySelector('.menu__overlay')
const burgerNavItems = document.querySelectorAll('.burger__nav-item')

burgerBtn.addEventListener('click', function(){
    burgerBtn.classList.toggle('header__burger--active')
    burgerNav.classList.toggle('burger__menu--active')
    burgerOverlay.classList.toggle('menu__overlay--active')  
})
burgerNavItems.forEach(function(item){
    item.addEventListener('click', function(){
        burgerBtn.classList.remove('header__burger--active')
        burgerNav.classList.remove('burger__menu--active')
        burgerOverlay.classList.remove('menu__overlay--active')  
    })
})