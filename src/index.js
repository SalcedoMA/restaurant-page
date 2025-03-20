import "./styles.css";
import { loadHome } from "./homepage";

 const button = document.querySelector('#home');
button.addEventListener('click', event => {
    loadHome();
});