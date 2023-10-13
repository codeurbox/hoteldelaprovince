const menubtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");
const blackFilter = document.getElementById("black-filter")

menubtn.addEventListener("click", () => {
    menu.style.display = "flex"
    blackFilter.style.display = "flex"
})
closeMenu.addEventListener("click", () => {
    menu.style.display = "none"
    blackFilter.style.display = "none"
})
blackFilter.addEventListener("click", () => {
    menu.style.display = "none"
    blackFilter.style.display = "none"
})
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1088) {
        menu.style.display = "none"
        blackFilter.style.display = "none"
    }
})
function hideMenuBoxes(event) {
    console.log("a click happen")
    if (!menu.contains(event.target)) {
        menu.style.display = "none";
    }
}
document.addEventListener("click", () => {
    if (menu.style.display == "flex") {
        hideMenuBoxes
    }
});