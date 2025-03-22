import chair from "./images/chair.png";

const container = document.querySelector("#content");
const wrapper = document.querySelector(".wrapper");
const tableHTML = `<div class="chair-grid info-grid">
                    <img class="chair" id="chair-2" src="${chair}" alt="chair">

                    <img class="chair" id="chair-3" src="${chair}" alt="chair">
                    <div class="table">
                        <div class="cloth">
                            
                        </div>
                    </div>
                </div>`;

function scrollDown() {
    container.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

export { container, wrapper, tableHTML, scrollDown };