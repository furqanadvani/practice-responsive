const header = document.querySelector("nav");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 100);
});

let menu = document.querySelector('.links');
let navlist = document.querySelector('.icons');

