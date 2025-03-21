import { container, tableHTML } from "./constants.js";
import owners from "./images/owners.jpg";
import kitchen from "./images/kitchen.jpg";

const tableContents = [
    {
        title: "",
        text: `<p class="no-title"><b>Welcome to Luchoni's</b>, <br> where passion meets flavor! At Luchoni's, we believe that dining is more than just a meal—it’s an experience. Our restaurant is a celebration of culinary artistry, blending traditional recipes with modern techniques to create dishes that delight the senses.</p>`,
        image: `${kitchen}`,
    },
    {
        title: "",
        text: `<p class="no-title">Luchoni's was born from a dream shared by two childhood friends, Luca and Giovanni. Growing up in a small Italian village, they spent countless hours in their grandmothers’ kitchens, learning the secrets of traditional cooking and the importance of sharing meals with loved ones.</p>`,
        image: `${owners}`,
    },
    {
        title: "Our Mission",
        text: "To provide an unforgettable dining experience by combining exceptional cuisine, warm hospitality, and a welcoming atmosphere. We strive to make every guest feel special and every meal a moment to cherish.",
        image: ``,
    },
    {
        title: "Hours",
        text: `<ul id="hours">
                   <li><div>Monday:</div> <div>11:00 AM – 9:00 PM</div></li>
                   <li><div>Tuesday:</div> <div>11:00 AM – 9:00 PM</div></li>
                   <li><div>Wednesday:</div> <div>11:00 AM – 9:00 PM</div></li>
                   <li><div>Thursday:</div> <div>11:00 AM – 9:00 PM</div></li>
                   <li><div>Friday:</div> <div>11:00 AM – 10:00 PM</div></li>
                   <li><div>Saturday:</div> <div>11:00 AM – 10:00 PM</div></li>
                   <li><div>Sunday:</div> <div>12:00 PM – 8:00 PM</div></li>
              </ul>`,
        image: ``,
    },
];

function loadAbout() {
    let alternator = false;
    container.style.display = container.style.display === "flex" ? "none": "flex";
    container.innerHTML = ``;
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
        title.classList.add("about-title");
        const text = document.createElement("p");
        text.classList.add("about-description");
        title.innerHTML = table["title"];
        text.innerHTML = table["text"];
        cloth.append(title, text);

        alternator = !alternator;
    }
    
}

export {loadAbout};