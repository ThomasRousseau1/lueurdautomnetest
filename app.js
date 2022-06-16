//Burger Menu

let mobileNav = document.getElementById('burgerNav')
let openBtn = document.getElementById('open-btn')
let closeBtn = document.getElementById('close-btn')

openBtn.onclick = openNav
closeBtn.onclick = closeNav

function openNav() {
    mobileNav.classList.add('active')
}

function closeNav() {
    mobileNav.classList.remove('active')
}

// Caroussel Splide 
var splide = new Splide( '.splide' );
var bar    = splide.root.querySelector( '.my-slider-progress-bar' );

// Update the bar width:
splide.on( 'mounted move', function () {
  var end = splide.Components.Controller.getEnd() + 1;
  bar.style.width = String( 100 * ( splide.index + 1 ) / end ) + '%';
} );

splide.mount();