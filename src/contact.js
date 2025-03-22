import { container, tableHTML, wrapper, scrollDown } from "./constants.js";

const tableContents = [
    {
        title: "Visit Us",
        text: `<ul id="contact-info">
                   <li><div>📍 Address:</div> <div>123 Flavor Street, Culinary City, CC 12345</div></li>
                   <li><div>📞 Phone:</div> <div>(123) 456-7890</div></li>
                   <li><div>📧 Email:</div> <div><a href="mailto:info@luchonis.com">info@luchonis.com</a></div></li>
                   <li><div>🌐 Website:</div> <div><a href="http://www.luchonis.com">www.luchonis.com</a></div></li>
              </ul>`,
        image: ``,
    },
];

const form = 
    `
        <form class="suggestion-box" id="suggestion-box">
            <label>Let us know what you think about our service!</label>
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" required>
            </div>
            <div>
                <label for="surname">Surname:</label>
                <input type="text" id="surname">
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" required>
            </div>
            <div>
                <label for="suggestion">Your message:</label>
                <textarea id="suggestion" required></textarea>
            </div>
            <button type="submit">Send</button>
        </form>
    `

function suggestionBox() {
    const formContainer = document.createElement('div');
    formContainer.innerHTML = form;
    formContainer.classList.add("suggestion-container");
    container.append(formContainer);
}   

function loadContact() {
    let alternator = false;
    container.innerHTML = ``;
    wrapper.classList.toggle("is-open");
    if (wrapper.classList.contains("is-open")) {
        setTimeout(scrollDown, 750);
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
        title.classList.add("about-title");
        const text = document.createElement("p");
        text.classList.add("about-description");
        title.innerHTML = table["title"];
        text.innerHTML = table["text"];
        cloth.append(title, text);

        alternator = !alternator;
    }
    suggestionBox();
}

export { loadContact };