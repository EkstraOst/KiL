// onclick hamburgermeny dropdown

//HAMBURGER MENU TOGGLER
document.querySelector(".menuToggle").onclick = function () {
    document.querySelector("header").classList.toggle("active");
};

//LIGHT/DARK TOGGLER
const scheme_selector = document.querySelector("#scheme");

scheme_selector.onclick = function () {
    let colors = ["--col_fg", "--col_bg", "--col_tonic", "--col_alt"];
    const r = document.querySelector(":root");
    for (let i = 0; i < colors.length; i++) {
        let temp = getComputedStyle(r).getPropertyValue(colors[i]);
        r.style.setProperty(colors[i], getComputedStyle(r).getPropertyValue(colors[i] + "_bak"));
        r.style.setProperty(colors[i] + "_bak", temp);
    }
    let val = !scheme_selector.classList.contains("dark");
    scheme_selector.classList.add(val ? "dark" : "light");
    scheme_selector.classList.remove(val ? "light" : "dark");
};

//MENU SETUP
const menu = document.getElementById("side-icons");
window.addEventListener("scroll", () => {
    menu.style.opacity = window.scrollY > 100 ? 1 : (window.scrollY / 100.0) * (window.scrollY / 100.0);
});

const menuitems = [
    { id: "0", icon: "fotball.png", href: "#fotball", title: "Fotball" },
    { id: "1", icon: "handball.png", href: "#handball", title: "Håndball" },
    { id: "2", icon: "karate.png", href: "#karate", title: "Karate" },
    { id: "3", icon: "turOgKano.png", href: "#turOgKano", title: "Tur og Kano" },
    { id: "4", icon: "idrettsskule.png", href: "#idrettsskule", title: "Idrettskulen" },
    { id: "5", icon: "orientering.png", href: "#turOgKano", title: "Orientering" },
    { id: "6", icon: "ski.png", href: "#ski", title: "Ski" },
    { id: "7", icon: "apen_hall.png", href: "#aapenHall", title: "Åpen Hall" },
];

for (const menuitem of menuitems) {
    //generate new menuitem-element
    const nuIcon = document.createElement("div");
    nuIcon.className = "side-icon";
    nuIcon.classList.add("menuitem" + menuitem.id);

    //The image inside the menuitem
    const imgElement = document.createElement("img");
    imgElement.src = "./Assets/Icons/" + menuitem.icon;
    imgElement.alt = menuitem.title;
    imgElement.title = "Menyvalg " + menuitem.title;

    //The text-span inside the menuitem
    const textElement = document.createElement("span");
    textElement.className = "icon-text"; // Add a class to style in CSS
    textElement.textContent = menuitem.title;

    //Make clickable
    nuIcon.addEventListener("click", function () {
        window.location.href = menuitem.href;
    });

    //Put together and add to page
    nuIcon.appendChild(imgElement);
    nuIcon.appendChild(textElement); // Append the text element
    menu.appendChild(nuIcon);
}
