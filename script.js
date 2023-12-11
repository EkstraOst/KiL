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

          //   document.addEventListener('DOMContentLoaded', function () {
          //   const sideIconsContainer = document.getElementById('side-icons');
          
          //   // Define the paths for each icon
          //   const iconPaths = [
          //     'assets/icons/fotball.png',
          //     'assets/icons/handball.png',
          //     'assets/icons/karate.png',
          //     'assets/icons/turOGkano.png',
          //     'assets/icons/idretsskole.png',
          //     'assets/icons/orientering.png',
          //     'assets/icons/ski.png',
          //     'assets/icons/åpen hall.png',
          //   ];
            
            
          //   // Add icons dynamically
          //   for (let i = 0; i < 8; i++) {
          //     const sideIcon = document.createElement('div');
          //     sideIcon.className = 'side-icon';
          
          //     // Create an img element with the appropriate src attribute
          //     const imgElement = document.createElement('img');
          //     imgElement.src = iconPaths[i];
          //     imgElement.alt = `Icon ${i + 1}`;
              
          //     sideIcon.appendChild(imgElement);
          //     sideIconsContainer.appendChild(sideIcon);
          //   }
          
          //   // Handle scroll event
          //   window.addEventListener('scroll', function () {
          //     const scrollPosition = window.scrollY;
          
          //     // You can adjust the scroll position threshold as needed
          //     if (scrollPosition > 100) {
          //       sideIconsContainer.style.opacity = 1;
          //     } else {
          //       sideIconsContainer.style.opacity = 0;
          //     }
          //   });
          // });

          document.addEventListener('DOMContentLoaded', function () {
            const sideIconsContainer = document.getElementById('side-icons');
          
            // Define the paths for each icon
            const iconPaths = [
              'assets/icons/fotball.png',
              'assets/icons/handball.png',
              'assets/icons/karate.png',
              'assets/icons/turOGkano.png',
              'assets/icons/idretsskole.png',
              'assets/icons/orientering.png',
              'assets/icons/ski.png',
              'assets/icons/åpen hall.png',
            ];
          
            // Add icons dynamically
            for (let i = 0; i < 8; i++) {
              const sideIcon = document.createElement('div');
              sideIcon.className = 'side-icon';
          
              // Create an img element with the appropriate src attribute
              const imgElement = document.createElement('img');
              imgElement.src = iconPaths[i];
              imgElement.alt = `Icon ${i + 1}`;
          
              sideIcon.appendChild(imgElement);
              sideIconsContainer.appendChild(sideIcon);
            }
          
            // Handle scroll event
            window.addEventListener('scroll', function () {
              const scrollPosition = window.scrollY;
          
              // You can adjust the scroll position threshold as needed
              if (scrollPosition > 100) {
                sideIconsContainer.style.opacity = 1;
              } else {
                sideIconsContainer.style.opacity = 0;
              }
            });
          });
          
          
