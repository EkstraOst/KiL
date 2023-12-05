// onclick hamburgermeny dropdown

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');


menuToggle.onclick = function(){
    header.classList.toggle('active');
}

//toggle light dark

    let lightToggle = document.querySelector('.lightToggle');
    let body = document.querySelector('body');
    let sunIcon = document.querySelector('.sunIcon');
    let moonToggle = document.querySelector('.moonImg')
   
    
    lightToggle.onclick = function() {
        body.classList.toggle('darkMode');
        sunIcon.classList.toggle('sunIcon');
        moonToggle.classList.toggle('moonIcon');

    };
        
    
        // if (body.classList.contains('darkMode')) {
        //     lightToggle.src = 'icons/darkModeToggleButton.png';
        // } else {
        //     lightToggle.src = 'icons/lightModeToggleButton.png';
        // }
        