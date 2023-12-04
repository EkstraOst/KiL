// onclick hamburgermeny dropdown - kodet av Marius Moldeklev

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');


menuToggle.onclick = function(){
    header.classList.toggle('active');
}

//toggle light dark
let lightToggle = document.querySelector('.lightToggle');
let body = document.querySelector('body');

lightToggle.onclick = function(){
    body.classList.toggle('darkMode');
}