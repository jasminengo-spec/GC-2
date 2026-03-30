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
    // Add to cart button logic
    const addToCartBtn = document.getElementById('add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            // Retrieve cart from localStorage or initialize
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            // Check if product already in cart (by title)
            const exists = cart.some(item => item.title === window.productData.title);
            if (!exists) {
                // Add product to cart
                cart.push({
                    title: window.productData.title,
                    image: window.productData.image,
                    price: window.productData.price,
                    description: window.productData.description
                });
                localStorage.setItem('cart', JSON.stringify(cart));
                alert('Product added to cart!');
            } else {
                alert('This product is already in your cart.');
            }
        });
    }
});
