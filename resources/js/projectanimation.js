let background = document.querySelector('.innerbackground');
let y = background.getBoundingClientRect().top;

window.addEventListener('scroll', function() {
    background.style.backgroundPositionX = y + window.pageYOffset + 'px';
});