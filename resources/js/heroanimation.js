let bars = document.querySelectorAll(".bar");
let barsArray = Array.from(bars);
let height = window.innerHeight;
let scrollY, offset;
let legend = document.querySelector(".legend");
let projectsheader = document.querySelector(".projects-header");

window.addEventListener("scroll", () => {
  scrollY = window.scrollY;
  offset = 10;
  barsArray.forEach((bar) => {
    let barHeight = scrollY / height;
    console.log(barHeight);
    if (barHeight > 1.1) {
        barHeight = 1;
        barHeight = 0;
        legend.style.display = "none";
    } else {
        legend.style.display = "";
    }
    bar.style.height = `${offset * barHeight}%`;
    offset += 3.3;
  });
});


let projectScrollY;
let projectBar = document.querySelector(".bar-project-heading");

window.addEventListener("scroll", () => {
    let specialNum = (-window.scrollY + projectsheader.offsetTop+1000)+100;
    if(specialNum < 0) {
        specialNum = 0;
    } else if(specialNum > 100) {
        specialNum = 100;
    }
    console.log(projectBar.style.height)
    projectBar.style.height = `${specialNum}%`;
})




