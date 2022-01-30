var title = document.querySelector(".title");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var clouds1 = document.querySelector(".clouds1");
var clouds2 = document.querySelector(".clouds2");
var explorer = document.querySelector(".explorer");
var scrollPosition = 0;



document.addEventListener('scroll', function(e) {
    scrollPosition = window.scrollY;

    var left = document.querySelector(".left");
    left.style.left = -scrollPosition * 0.050 + "%";
    var right = document.querySelector(".right");
    right.style.right = -scrollPosition * 0.050 + "%";
    var clouds1 = document.querySelector(".clouds1");
    clouds1.style.left = -scrollPosition * 0.1 + "%";
    var clouds2 = document.querySelector(".clouds2");
    clouds2.style.right = -scrollPosition * 0.1 + "%";
    var explorer = document.querySelector(".explorer");
    explorer.style.opacity = 1 - scrollPosition/250;
    var title = document.querySelector(".title");
    title.style.top = 40 - scrollPosition * 0.050 + "%";


console.log(scrollPosition)
});