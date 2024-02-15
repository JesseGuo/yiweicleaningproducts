function scrollToProducts() {
    document.getElementById("productList").scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    document.getElementById("contact-us").scrollIntoView({ behavior: 'smooth' });
}


// Sample product data (can be retrieved from a database)
const products = [
    { id: 1, name: "Product 1", price: 10, image: "./images/bissell.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, name: "Product 2", price: 20, image: "./images/bissell.jpg", description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
    { id: 3, name: "Product 3", price: 15, image: "./images/bissell.jpg", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 4, name: "Product 4", price: 25, image: "./images/bissell.jpg", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { id: 5, name: "Product 5", price: 30, image: "./images/bissell.jpg", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { id: 6, name: "Product 6", price: 35, image: "./images/bissell.jpg", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { id: 7, name: "Product 7", price: 40, image: "./images/bissell.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 8, name: "Product 8", price: 45, image: "./images/bissell.jpg", description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." }
];

// Function to display products
function displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = ''; // Clear previous products

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product");
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
        `;
        productItem.addEventListener("click", () => openModal(product));
        productList.appendChild(productItem);
    });
}

// Function to open modal with product details
function openModal(product) {
    const modal = document.getElementById("productModal");
    const modalProduct = document.getElementById("modalProduct");
    modalProduct.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
    `;
    modal.style.display = "block";

    // Close modal when clicking on the close button
    const closeButton = document.getElementsByClassName("close")[0];
    closeButton.onclick = () => modal.style.display = "none";

    // Close modal when clicking outside of it
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Call the displayProducts function when the page loads
window.onload = displayProducts;
