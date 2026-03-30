// product.js
// This script dynamically fills in the product template based on provided product data.

// Example usage: Each product page sets window.productData before loading this script.

document.addEventListener('DOMContentLoaded', function() {
    if (!window.productData) {
        console.error('No productData found!');
        return;
    }
    document.title = window.productData.title;
    document.getElementById('product-title').textContent = window.productData.title;
    document.getElementById('product-name').textContent = window.productData.title;
    document.getElementById('product-image').src = window.productData.image;
    document.getElementById('product-image').alt = window.productData.title;
    document.getElementById('product-description').textContent = window.productData.description;
    document.getElementById('product-price').textContent = window.productData.price;
    // Add to cart button logic can be added here
});
