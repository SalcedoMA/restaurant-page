import garlicShrimp from "./images/garlic-shrimp.jpg";
import filetMignon from "./images/filet-mignon.jpg";
import mushroomRavioli from "./images/mushroom-ravioli.jpg";
import cremeBrulee from "./images/creme-brulee.jpg";
import aperolSpritz from "./images/aperol-spritz.jpg";
import lobsterThermidor from "./images/lobster-thermidor.jpg";

const menuTables = [
    {
        title: "Starters",
        text: `
                    <ul>
            <li>
                <h3 class="menu-item">Caprese Salad</h3>
            </li>
            <p class="menu-description">Fresh mozzarella, ripe tomatoes, basil, and balsamic glaze.</p>

            <li>
                <h3 class="menu-item">Garlic Butter Shrimp</h3>
            </li>
            <p class="menu-description">Succulent shrimp sautéed in garlic butter, served with crusty bread.</p>

            <li>
                <h3 class="menu-item">Crispy Calamari</h3>
            </li>
            <p class="menu-description">Lightly fried calamari with marinara sauce and lemon aioli.</p>

            <li>
                <h3 class="menu-item">Bruschetta Trio</h3>
            </li>
            <p class="menu-description">Classic tomato, roasted red pepper, and mushroom bruschetta.</p>
        </ul>
            `,
        image: `${garlicShrimp}`,
    },
    {
        title: "Main Courses",
        text: `
            <ul>
                <li>
                    <h3 class="menu-item">Grilled Salmon</h3>
                </li>
                <p class="menu-description">Fresh Atlantic salmon, lemon-dill butter, and seasonal vegetables.</p>

                <li>
                    <h3 class="menu-item">Filet Mignon</h3>
                </li>
                <p class="menu-description">Tender beef filet, garlic mashed potatoes, and red wine reduction.</p>

                <li>
                    <h3 class="menu-item">Chicken Piccata</h3>
                </li>
                <p class="menu-description">Pan-seared chicken breast with capers, lemon, and white wine sauce.</p>

                <li>
                    <h3 class="menu-item">Vegetable Lasagna</h3>
                </li>
                <p class="menu-description">Layers of pasta, roasted vegetables, and creamy béchamel sauce.</p>
            </ul>
            `,
        image: `${filetMignon}`,
    },
    {
        title: "Pasta",
        text: `
            <ul>
                <li>
                    <h3 class="menu-item">Spaghetti Carbonara</h3>
                </li>
                <p class="menu-description">Spaghetti tossed with pancetta, egg, Parmesan, and black pepper.</p>

                <li>
                    <h3 class="menu-item">Shrimp Scampi</h3>
                </li>
                <p class="menu-description">Linguine with garlic butter shrimp, white wine, and parsley.</p>

                <li>
                    <h3 class="menu-item">Truffle Mushroom Ravioli</h3>
                </li>
                <p class="menu-description">Homemade ravioli stuffed with mushrooms, topped with truffle cream sauce.</p>

                <li>
                    <h3 class="menu-item">Penne Arrabbiata</h3>
                </li>
                <p class="menu-description">Spicy tomato sauce with garlic, chili flakes, and fresh basil.</p>
            </ul>
            `,
        image: `${mushroomRavioli}`,
    },
    {
        title: "Desserts",
        text: `
            <ul>
                <li>
                    <h3 class="menu-item">Tiramisu</h3>
                </li>
                <p class="menu-description">Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.</p>

                <li>
                    <h3 class="menu-item">Chocolate Lava Cake</h3>
                </li>
                <p class="menu-description">Warm chocolate cake with a gooey center, served with vanilla ice cream.</p>

                <li>
                    <h3 class="menu-item">Crème Brûlée</h3>
                </li>
                <p class="menu-description">Rich vanilla custard with a caramelized sugar topping.</p>

                <li>
                    <h3 class="menu-item">Cheesecake</h3>
                </li>
                <p class="menu-description">New York-style cheesecake with a berry compote.</p>
            </ul>
            `,
        image: `${cremeBrulee}`,
    },
    {
        title: "Drinks",
        text: `
            <ul>
                <li>
                    <h3 class="menu-item">Classic Mojito</h3>
                </li>
                <p class="menu-description">White rum, fresh mint, lime, sugar, and soda water.</p>

                <li>
                    <h3 class="menu-item">Aperol Spritz</h3>
                </li>
                <p class="menu-description">Aperol, prosecco, and soda water with an orange slice.</p>

                <li>
                    <h3 class="menu-item">Sparkling Lemonade</h3>
                </li>
                <p class="menu-description">Fresh lemon juice, sparkling water, and a hint of mint.</p>

                <li>
                    <h3 class="menu-item">Espresso Martini</h3>
                </li>
                <p class="menu-description">Vodka, coffee liqueur, and freshly brewed espresso.</p>
            </ul>
            `,
        image: `${aperolSpritz}`,
    },
    {
        title: "Specials",
        text: `
            <ul>
                <li>
                    <h3 class="menu-item">Lobster Thermidor</h3>
                </li>
                <p class="menu-description">Lobster tail in a creamy brandy sauce, served with garlic bread.</p>

                <li>
                    <h3 class="menu-item">Duck à l’Orange</h3>
                </li>
                <p class="menu-description">Roasted duck breast with orange glaze and wild rice pilaf.</p>

                <li>
                    <h3 class="menu-item">Seafood Paella</h3>
                </li>
                <p class="menu-description">Spanish-style rice with shrimp, mussels, clams, and chorizo.</p>

                <li>
                    <h3 class="menu-item">Vegetarian Moussaka</h3>
                </li>
                <p class="menu-description">Layers of eggplant, zucchini, and spiced lentils topped with béchamel.</p>
            </ul>
            `,
        image: `${lobsterThermidor}`,
    },
];

export { menuTables };