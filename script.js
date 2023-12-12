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
          
            // Define the href links for each icon
            const iconHrefLinks = [
              '#fotball',
              '#handball',
              '#karate',
              '#turOgKano',
              '#idretsskole',
              '#orientering',
              '#ski',
              '#åpenHall',
            ];
          
   // Add icons dynamically
for (let i = 0; i < 8; i++) {
    const sideIcon = document.createElement('div');
    sideIcon.className = 'side-icon';
  
    // Create an img element with the appropriate src attribute
    const imgElement = document.createElement('img');
    imgElement.src = iconPaths[i];
    imgElement.alt = `Icon ${i + 1}`;
  
    // Use a closure to capture the current value of i
    (function (index) {
      sideIcon.addEventListener('click', function () {
        window.location.href = iconHrefLinks[index];
      });
    })(i);
  
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

// document.addEventListener('DOMContentLoaded', function () {
//     const sideIconsContainer = document.getElementById('side-icons');
//     const idNameDisplay = document.getElementById('id-name-display');
  
//     // Create side icons
//     const icons = ['fotball.png', 'handball.png', 'karate.png', 'turOGkano.png', 'idretsskole.png', 'orientering.png', 'ski.png', 'åpen hall.png']; // Add your icon filenames
//     icons.forEach(icon => {
//       const sideIcon = document.createElement('div');
//       sideIcon.className = 'side-icon';
//       const img = document.createElement('img');
//       img.src = icon;
//       img.alt = icon.replace(/\.[^/.]+$/, ''); // Extract filename without extension
//       sideIcon.appendChild(img);
//       sideIconsContainer.appendChild(sideIcon);
//     });
  
//     // Handle hover effect to display ID name
//     sideIconsContainer.addEventListener('mouseover', function (event) {
//       if (event.target.classList.contains('side-icon')) {
//         const iconName = event.target.querySelector('img').alt;
//         idNameDisplay.textContent = iconName;
//         idNameDisplay.style.display = 'block';
//       }
//     });
  
//     // Handle mouseout to hide ID name
//     sideIconsContainer.addEventListener('mouseout', function () {
//       idNameDisplay.style.display = 'none';
//     });
//   });
  
  
  