import "./styles.css";
import { loadHome } from "./homepage";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";
import { loadContact } from "./contact";

 const buttons = {
    home: document.querySelector("#home"),
    menu: document.querySelector("#menu"),
    about: document.querySelector("#about"),
    contact: document.querySelector("#contact"),
 }

buttons.home.addEventListener('click', event => {
    loadHome();
});

buttons.menu.addEventListener('click', event => {
    loadMenu();
});

buttons.about.addEventListener('click', event => {
    loadAbout();
});

buttons.contact.addEventListener('click', event => {
    loadContact();
});