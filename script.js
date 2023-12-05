<<<<<<< HEAD
// onclick hamburgermeny dropdown

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');


menuToggle.onclick = function(){
    header.classList.toggle('active');
}

//toggle light dark
let lightToggle =document.querySelector('.lightToggle');
let body = document.querySelector('body');

lightToggle.onclick = function(){
    body.classList.toggle('darkMode');
}
=======
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
>>>>>>> 945c750f522cd1c470c064b8091e15430a9a3980
