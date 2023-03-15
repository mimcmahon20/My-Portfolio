const desktopImg = document.querySelector('.ah');
const mobileImg = document.querySelector('.ah-mobile');


if(window.innerWidth > window.innerHeight) {
    desktopImg.addEventListener('click', function() {
        desktopImg.classList.remove('wiggle');
        desktopImg.classList.add('center-large');
        setTimeout(() => {
            desktopImg.classList.add('wiggle');
            desktopImg.classList.remove('center-large');
        }, 3000);
    });
}


