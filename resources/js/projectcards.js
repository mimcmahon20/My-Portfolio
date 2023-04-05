let cardContainer = document.querySelectorAll('.card-container');
let project = document.querySelectorAll('.project');
let rotate = document.querySelectorAll('.rotate');


rotate.forEach((rotate, i) => {
    rotate.addEventListener('click', () => {
        console.log('click');
        if(i%2 != 0) {
            project[Math.floor(i/2)].style.transform = 'rotateY(0deg)';
        } else {
            project[Math.floor(i/2)].style.transform = 'rotateY(180deg)';
        }
    });
});