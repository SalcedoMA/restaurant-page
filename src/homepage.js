import { container, tableHTML, wrapper, scrollDown } from "./constants.js";
import stock1 from "./images/stock-1.jpeg";
import stock2 from "./images/stock-2.jpeg";
import stock3 from "./images/stock-3.jpeg";
import stock4 from "./images/stock-4.jpeg";

const tableContents = [
    {
        title: "Taste of Tradition",
        text: "Classic recipes, modern twists, and a touch of nostalgia",
        image: `${stock1}`,
    },
    {
        title: "The Art of Dining",
        text: "Dining is not just eating—it’s an experience for all the senses.",
        image: `${stock2}`,
    },
    {
        title: "Savor the Moment",
        text: "Fresh ingredients, honest flavors, and a commitment to quality.",
        image: `${stock3}`,
    },
    // {
    //     title: "The Art of Dining",
    //     text: "Flexitarian blue bottle thundercats pork belly af etsy vaporware hashtag.",
    //     image: ``,
    // },
    {
        title: "Bite into Bliss",
        text: "Life is too short for boring food—indulge in every bite.",
        image: `${stock4}`,
    },
];

function loadHome() {
    let alternator = false;
    container.innerHTML = ``;
    wrapper.classList.toggle("is-open");
    if (wrapper.classList.contains("is-open")) {
        setTimeout(scrollDown, 250);
    }
    for (let table of tableContents) {
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
        title.classList.add("home-title");
        const text = document.createElement("p");
        text.classList.add("home-description");
        title.innerHTML = table["title"];
        text.innerHTML = table["text"];
        cloth.append(title, text);

        alternator = !alternator;
    }
    
}

export {loadHome};