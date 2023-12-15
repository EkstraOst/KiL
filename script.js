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
        
 ///////////////////////////////////////////////////////////////////////////////////////////

// document.addEventListener('DOMContentLoaded', function () {
//     const sideIconsContainer = document.getElementById('side-icons');
  
//     const iconPaths = [
//       'assets/icons/fotball.png',
//       'assets/icons/handball.png',
//       'assets/icons/karate.png',
//       'assets/icons/turOGkano.png',
//       'assets/icons/idrettsskule.png',
//       'assets/icons/orientering.png',
//       'assets/icons/ski.png',
//       'assets/icons/åpen hall.png',
//     ];
  
//     const iconHrefLinks = [
//       '#fotball',
//       '#handball',
//       '#karate',
//       '#turOgKano',
//       '#idrettsskule',
//       '#orientering',
//       '#ski',
//       '#åpenHall',
//     ];
  
//     const iconTitles = [
//       'Fotball',
//       'Handball',
//       'Karate',
//       'Tur og Kano',
//       'Idrettsskule',
//       'Orientering',
//       'Ski',
//       'Åpen Hall',
//     ];
  
//     for (let i = 0; i < 8; i++) {
//       const sideIcon = document.createElement('div');
//       sideIcon.className = 'side-icon';
  
//       const imgElement = document.createElement('img');
//       imgElement.src = iconPaths[i];
//       imgElement.alt = `Icon ${i + 1}`;
  
//       // Set the title attribute for hover text
//       imgElement.title = iconTitles[i];
  
//       (function (index) {
//         sideIcon.addEventListener('click', function () {
//           window.location.href = iconHrefLinks[index];
//         });
//       })(i);
  
//       sideIcon.appendChild(imgElement);
//       sideIconsContainer.appendChild(sideIcon);
//     }
  
//     window.addEventListener('scroll', function () {
//       const scrollPosition = window.scrollY;
  
//       if (scrollPosition > 100) {
//         sideIconsContainer.style.opacity = 1;
//       } else {
//         sideIconsContainer.style.opacity = 0;
//       }
//     });
//   });
  
document.addEventListener('DOMContentLoaded', function () {
    const sideIconsContainer = document.getElementById('side-icons');
  
    const iconPaths = [
      'assets/icons/fotball.png',
      'assets/icons/handball.png',
      'assets/icons/karate.png',
      'assets/icons/turOGkano.png',
      'assets/icons/idrettsskule.png',
      'assets/icons/orientering.png',
      'assets/icons/ski.png',
      'assets/icons/apen_hall.png',
    ];
  
    const iconHrefLinks = [
      '#fotball',
      '#handball',
      '#karate',
      '#turOgKano',
      '#idrettsskole',
      '#orientering',
      '#ski',
      '#apenHall',
    ];
  
    const iconTitles = [
      'Fotball',
      'Handball',
      'Karate',
      'Tur og Kano',
      'Idrettsskule',
      'Orientering',
      'Ski',
      'Åpen Hall',
    ];
  
    for (let i = 0; i < 8; i++) {
      const sideIcon = document.createElement('div');
      sideIcon.className = 'side-icon';
  
      const imgElement = document.createElement('img');
      imgElement.src = iconPaths[i];
      imgElement.alt = `Icon ${i + 1}`;
  
      // Set the title attribute for hover text
      imgElement.title = iconTitles[i];
  
      // Create a span element for the text
      const textElement = document.createElement('span');
      textElement.className = 'icon-text'; // Add a class to style in CSS
      textElement.textContent = iconTitles[i];
  
      (function (index) {
        sideIcon.addEventListener('click', function () {
          window.location.href = iconHrefLinks[index];
        });
      })(i);
  
      sideIcon.appendChild(imgElement);
      sideIcon.appendChild(textElement); // Append the text element
      sideIconsContainer.appendChild(sideIcon);
    }
  
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
  
      if (scrollPosition > 100) {
        sideIconsContainer.style.opacity = 1;
      } else {
        sideIconsContainer.style.opacity = 0;
      }
    });
  });
  