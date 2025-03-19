import chair from "./images/chair.png";

const container = document.querySelector("#content");
const tableHTML = `<div class="chair-grid info-grid">
                    <img class="chair" id="chair-2" src="${chair}" alt="chair">

                    <img class="chair" id="chair-3" src="${chair}" alt="chair">
                    <div class="table">
                        <div class="cloth">
                            
                        </div>
                    </div>
                </div>`;

export { container, tableHTML };