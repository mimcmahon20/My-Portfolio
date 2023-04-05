const header = document.querySelector('.header');
const lookOut = document.querySelector('.lookOut');
const half = document.querySelectorAll('.half');
const mSecond = document.querySelector('.secondletter');
const nav = document.querySelector('.nav');
const nameContainer = document.querySelector('.nameContainer');
const headshot = document.querySelector('.headshot');
let arrowTimer = document.querySelector('.arrow');
let hi = document.querySelector('.hi');

const options = { 
    root: null,
    rootMargin: '0px',
    threshold: 0
};

let active = false;

setTimeout(() => {
    nameContainer.style.opacity = '1';
    nav.style.opacity = '1';
    headshot.style.opacity = '1';
}, 1500);

setTimeout(() => {
    arrowTimer.style.opacity = '1';
},1000);

setTimeout(() => {
    hi.style.opacity = '0.95';
    hi.style.scale = '1';
}, 500);

appear = () => {
    half[0].style.opacity = '1';
    half[1].style.opacity = '1';
}

const observer = new IntersectionObserver(function(entries,observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            half[0].style.opacity = '0';
            half[0].style.width = '0';
            half[1].style.opacity = '0';
            mSecond.classList.remove('moveOut');
            mSecond.classList.add('moveIn');
            active = true;
        }
        else {
            if(active) {
                half[0].style.width = '100%';
                mSecond.classList.remove('moveIn');
                mSecond.classList.add('moveOut');
                setTimeout(appear(), 1000);
                active = false;
            }
        }
    });    
}, options);

observer.observe(lookOut);

