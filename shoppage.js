// Data for the categories and their products
const products = {
    vegetables: [
        { name: "Tomato", image: "https://via.placeholder.com/150", price: "₦250/kg" },
        { name: "Pepper", image: "https://via.placeholder.com/150", price: "₦200/kg" },
        { name: "Onion", image: "https://via.placeholder.com/150", price: "₦150/kg" },
        { name: "Spinach (Efo)", image: "https://via.placeholder.com/150", price: "₦100/bundle" },
        { name: "Bitterleaf", image: "https://via.placeholder.com/150", price: "₦120/bundle" },
        { name:"Scent Leaf", image: "https://via.placeholder.com/150",price:"#100/bundle"},
        {name:"Spinach/water leaf", image:"https://via.placeholder.com/150",price:"#100/bundle"},
        {name: "Amaranth (Green)", image: "https://via.placeholder.com/150", price: "₦150/bundle" },
        { name: "Cabbage", image: "https://via.placeholder.com/150", price: "₦400/head" },
        { name: "Celery and Parsley", image: "https://via.placeholder.com/150", price: "₦200/bundle" },
        { name: "Lettuce", image: "https://via.placeholder.com/150", price: "₦100/head" },
        { name: "Pumpkins", image: "https://via.placeholder.com/150", price: "₦100/bundle" },
        { name: "Okra", image: "https://via.placeholder.com/150", price: "₦100/kg" },
        { name: "Garden Egg", image: "https://via.placeholder.com/150", price: "₦100/bundle" },
        { name: "Cucumber", image: "https://via.placeholder.com/150", price: "₦100/fruit" }        

            
     ],
    fruits: [
        { name: "Banana", image: "https://via.placeholder.com/150", price: "₦500/bunch" },
        { name: "Pawpaw (Papaya)", image: "https://via.placeholder.com/150", price: "₦300/fruit" },
        { name: "Mango", image: "https://via.placeholder.com/150", price: "₦200/fruit" },
        { name: "Pineapple", image: "https://via.placeholder.com/150", price: "₦400/fruit" },
        { name: "Orange", image: "https://via.placeholder.com/150", price: "₦250/dozen" }
    ],
    tubers: [
        { name: "Yam", image: "https://via.placeholder.com/150", price: "₦800/tuber" },
        { name: "Cassava", image: "https://via.placeholder.com/150", price: "₦500/bundle" },
        { name: "Potato (Sweet)", image: "https://via.placeholder.com/150", price: "₦600/kg" },
        { name: "Cocoyam", image: "https://via.placeholder.com/150", price: "₦400/kg" },
        { name: "Irish Potato", image: "https://via.placeholder.com/150", price: "₦700/kg" }
    ],
    birds: [
        { name: "Chicken (Broiler)", image: "https://via.placeholder.com/150", price: "₦2,000/bird" },
        { name: "Local Chicken", image: "https://via.placeholder.com/150", price: "₦3,000/bird" },
        { name: "Duck", image: "https://via.placeholder.com/150", price: "₦2,500/bird" },
        { name: "Turkey", image: "https://via.placeholder.com/150", price: "₦5,000/bird" },
        { name: "Quail", image: "https://via.placeholder.com/150", price: "₦1,500/bird" }
    ],
    fish: [
        { name: "Catfish", image: "https://via.placeholder.com/150", price: "₦1,000/kg" },
        { name: "Tilapia", image: "https://via.placeholder.com/150", price: "₦800/kg" },
        { name: "Mackerel (Titus)", image: "https://via.placeholder.com/150", price: "₦1,200/kg" }
    ],
    eggs: [
        { name: "Chicken Eggs", image: "https://via.placeholder.com/150", price: "₦1,500/crate" },
        { name: "Quail Eggs", image: "https://via.placeholder.com/150", price: "₦2,000/crate" }
    ],
    meat: [
        { name: "Beef", image: "https://via.placeholder.com/150", price: "₦2,000/kg" },
        { name: "Goat Meat", image: "https://via.placeholder.com/150", price: "₦3,000/kg" },
        { name: "Pork", image: "https://via.placeholder.com/150", price: "₦2,500/kg" },
        { name: "Ram Meat", image: "https://via.placeholder.com/150", price: "₦3,500/kg" }
    ]
};

// Function to display products for a selected category
function showCategory(category) {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = ""; // Clear previous products

    if (products[category]) {
        products[category].forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <button>Add to Cart</button>
                </div>
            `;

            productGrid.appendChild(productCard);
        });
    } else {
        productGrid.innerHTML = "<p>No items found for this category.</p>";
    }
}
// Function to filter products in the current category
function filterProducts() {
    const searchInput = document.getElementById("categorySearch").value.toLowerCase();
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = ""; // Clear previous products

    if (products[currentCategory]) {
        const filteredProducts = products[currentCategory].filter(product =>
            product.name.toLowerCase().includes(searchInput)
        );

        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const productCard = document.createElement("div");
                productCard.className = "product-card";

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <button>Add to Cart</button>
                    </div>
                `;

                productGrid.appendChild(productCard);
            });
        } else {
            productGrid.innerHTML = "<p>No matching items found.</p>";
        }
    }
}