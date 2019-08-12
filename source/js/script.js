var mainNav = document.querySelector('.main-nav');
var menuBtn = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');

menuBtn.addEventListener('click', function() {
    if (mainNav.classList.contains('main-nav--closed')) {
        mainNav.classList.remove('main-nav--closed');
        mainNav.classList.add('main-nav--opened');
    } else {
        mainNav.classList.add('main-nav--closed');
        mainNav.classList.remove('main-nav--opened');
    }
});
