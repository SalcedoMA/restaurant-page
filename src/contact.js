import { container } from "./constants.js";

const contactTables = [
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

export { contactTables, suggestionBox };