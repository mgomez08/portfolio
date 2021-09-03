let hero = document.getElementsByClassName("hero-container");
window.onscroll = function () {
  scroll(hero[0].clientHeight);
};
function scroll(heroHeight) {
  if (
    document.body.scrollTop > heroHeight - 300 ||
    document.documentElement.scrollTop > heroHeight - 300
  ) {
    document.getElementById("header").classList.add("show");
  } else {
    document.getElementById("header").classList.remove("show");
  }
}

let iconMenuMobile = document.getElementById("icon-menu-mobile");
let menuMobile = document.getElementById("menu-mobile");
let main = document.getElementById("main");
let menuIsOpen = false;

function toggleMenu() {
  main.classList.toggle("opacity");
  document.body.classList.toggle("disableScroll");
  menuMobile.classList.toggle("active");
}

iconMenuMobile.addEventListener("click", function (e) {
  toggleMenu();
  if (document.querySelector(".active.menu-mobile")) {
    menuIsOpen = false;
    e.target.setAttribute("src", "./Menu.png");
  } else {
    e.target.setAttribute("src", "./Close.png");
    menuIsOpen = true;
  }
});
window.addEventListener("click", function (e) {
  if (e.target !== iconMenuMobile && menuIsOpen && e.target !== menuMobile) {
    toggleMenu();
    iconMenuMobile.setAttribute("src", "./Menu.png");
    menuIsOpen = false;
  }
});
