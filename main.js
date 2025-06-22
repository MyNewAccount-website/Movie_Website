console.log("JavaScript was succesfully enabled");

const overlay_menu = document.querySelector(".overlay_menu");
const nav_mobile = document.querySelector(".nav_mobile");

const menu_button = document.querySelector(".menu");

overlay_menu.addEventListener("click", ()=>{
    nav_mobile.classList.remove("appear");
    overlay_menu.classList.remove("appear");
});

menu_button.addEventListener("click", ()=>{
    nav_mobile.classList.add("appear");
    overlay_menu.classList.add("appear");
});




