import "./styles.css";
import { container, tableHTML, wrapper, scrollDown } from "./constants.js";
import { homeTables } from "./homepage";
import { menuTables } from "./menu";
import { aboutTables } from "./about";
import { contactTables, suggestionBox } from "./contact";

 const buttons = {
    home: document.querySelector("#home"),
    menu: document.querySelector("#menu"),
    about: document.querySelector("#about"),
    contact: document.querySelector("#contact"),
 }

 function transition() {
    wrapper.classList.toggle("is-open");
 }

 function render(section, tables) {
    let alternator = false;
    container.innerHTML = ``;
    for (let table of tables) {
        let image = "";
        if (table["image"] !== "") {
             image = document.createElement("img");
             image.src = table["image"];
             image.classList.add("info-image");
        }
        const newTable = document.createElement("div");
        newTable.classList.add("info-section");
        container.append(newTable);

        if (alternator) {
            newTable.classList.add("reverse");
            newTable.append(image);
            newTable.innerHTML += tableHTML;
        } else {
            newTable.innerHTML += tableHTML;
            newTable.append(image);
        }

        const cloth = newTable.querySelector(".cloth");
        cloth.classList.add("information");
        const title = document.createElement("h2");
        title.classList.add(`${section}-title`);
        const text = document.createElement("p");
        text.classList.add(`${section}-description`);
        title.innerHTML = table["title"];
        text.innerHTML = table["text"];
        cloth.append(title, text);

        alternator = !alternator;
    }
 }

let currentSection;

 function loadInfo(section, tables, timer) {
    transition();
    if (wrapper.classList.contains("is-open")) {
        render(section, tables)
        setTimeout(scrollDown, timer);
    } else if (currentSection !== section) {
        setTimeout(function() {
            transition();
            render(section,tables);
        }, 1000);
        setTimeout(scrollDown, 1000+timer);
    }
    currentSection = section;
}

buttons.home.addEventListener('click', event => {
    loadInfo("home", homeTables, 250)
});

buttons.menu.addEventListener('click', event => {
    loadInfo("menu", menuTables, 250);
});

buttons.about.addEventListener('click', event => {
    loadInfo("about", aboutTables, 225);
});

buttons.contact.addEventListener('click', event => {
    loadInfo("contact", contactTables, 750);
    setTimeout(suggestionBox, 1000);
});