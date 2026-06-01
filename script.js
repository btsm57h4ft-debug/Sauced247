// Product data - easily add/modify items here
const products = [
    {
        id: 1,
        title: "Vintage Band Tee",
        size: "M / L / XL",
        price: "$15",
        description: "Classic vintage band t-shirt, great condition",
        emoji: "👕"
    },
    {
        id: 2,
        title: "Designer Hoodie",
        size: "S / M / L",
        price: "$35",
        description: "Premium quality hoodie, perfect for fall",
        emoji: "🧥"
    },
    {
        id: 3,
        title: "Streetwear Jacket",
        size: "M / L",
        price: "$45",
        description: "Urban style jacket with unique design",
        emoji: "🧤"
    },
    {
        id: 4,
        title: "Cargo Pants",
        size: "30 / 32 / 34",
        price: "$25",
        description: "Trendy cargo pants with multiple pockets",
        emoji: "👖"
    },
    {
        id: 5,
        title: "Graphic Sweatshirt",
        size: "S / M / L / XL",
        price: "$20",
        description: "Cool graphic design on premium sweatshirt",
        emoji: "👚"
    },
    {
        id: 6,
        title: "Sports Cap",
        size: "One Size",
        price: "$12",
        description: "Classic sports cap, adjustable fit",
        emoji: "🧢"
    },
    {
        id: 7,
        title: "Denim Jacket",
        size: "S / M / L",
        price: "$40",
        description: "Timeless denim jacket, perfect layering piece",
        emoji: "🧥"
    },
    {
        id: 8,
        title: "Polo Shirt",
        size: "M / L / XL",
        price: "$18",
        description: "Clean polo shirt in multiple colors",
        emoji: "👔"
    },
    {
        id: 9,
        title: "Windbreaker",
        size: "M / L",
        price: "$30",
        description: "Lightweight windbreaker, perfect for spring",
        emoji: "🧥"
    },
    {
        id: 10,
        title: "Crew Neck Sweater",
        size: "S / M / L / XL",
        price: "$22",
        description: "Cozy crew neck sweater for any occasion",
        emoji: "🧶"
    },
    {
        id: 11,
        title: "Sports Jersey",
        size: "M / L",
        price: "$28",
        description: "Authentic sports jersey from favorite teams",
        emoji: "👕"
    },
    {
        id: 12,
        title: "Bomber Jacket",
        size: "S / M / L",
        price: "$38",
        description: "Stylish bomber jacket for that streetwear look",
        emoji: "🧥"
    }
];

// IMPORTANT: Replace 'sauced247' with your actual Snapchat username
const SNAPCHAT_USERNAME = "sauced247";

// Render products on page load
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
});

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                ${product.emoji}
            </div>
            <div class="product-info">
                <div class="product-title">${product.title}</div>
                <div class="product-size">Size: ${product.size}</div>
                <div class="product-price">${product.price}</div>
                <div class="product-description">${product.description}</div>
                <a href="https://www.snapchat.com/add/${SNAPCHAT_USERNAME}" target="_blank" class="buy-button">
                    📱 Order on Snapchat
                </a>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
