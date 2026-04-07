// Product Array
const products = [
    { id: "p1", name: "Smartphone" },
    { id: "p2", name: "Laptop" },
    { id: "p3", name: "Headphones" },
    { id: "p4", name: "Smart Watch" }
];

// Populate Product Select
const productSelect = document.getElementById("product");

if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Review Counter
if (window.location.pathname.includes("review.html")) {
    let count = localStorage.getItem("reviewCount");

    if (!count) {
        count = 0;
    }

    count++;

    localStorage.setItem("reviewCount", count);

    const counterDisplay = document.getElementById("counter");
    if (counterDisplay) {
        counterDisplay.textContent = count;
    }
}