console.log("Shopsmart ready");

// This is just a modified version of the app.js we made during 
// the DOM follow along.


// A: Support all add to cart buttons
const productList = document.querySelector("#productList");
const cartList = document.querySelector("#cartItems");
const products = document.querySelectorAll(".product-card");
const searchInput = document.querySelector("#searchInput");

//Declare the cart
const cartState = {};


productList.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    e.stopPropagation();
    const card = e.target.closest(".product-card");
    const productName = card.querySelector(".product-name").innerText;

    const li = document.createElement("li");
    li.innerText = productName;


    if (!cartState[productName]) {
      cartState[productName] = {quantity: 0};
    // Function to confirm the transaction
    function confirmTransaction() {
      alert('Thank you for your purchase! Your transaction has been confirmed.');
    }
    }

    
    
    
    cartState[productName].quantity++;

    
    renderCart()

  }
});

function renderCart() {
  cartList.innerHTML = "";

  for (let product in cartState) {
    const item = cartState[product];

    const row = document.createElement("li");
    row.className = "cart-row";

    row.innerHTML = `
    <span class="cart-name">${product}</span>
    <div>
      <button class="decrease">-</button>
      <span class="qty">${item.quantity}</span>
      <button class="increase">+</button>
      <button class="remove">Remove</button>
    </div>
    `;

    cartList.append(row);
  }
}


// C Add Live Product Search

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();

  products.forEach((product) => {
    const name = product.querySelector(".product-name").innerText.toLowerCase();

    product.style.display = name.includes(term) ? "block" : "none";
  });
});

// D Remove Cart Item on click
cartList.addEventListener("click", (e) => {

  const row = e.target.closest(".cart-row");
  if (!row) return;

  const productName = row.querySelector(".cart-name").innerText;

  if (e.target.classList.contains("increase")) {
    cartState[productName].quantity++;
  }

  if (e.target.classList.contains("remove")) {
    delete cartState[productName];
  }

   if (e.target.classList.contains("decrease")) {
     cartState[productName].quantity--;

     if(cartState[productName].quantity <= 0){
      delete cartState[productName];
     }
  }



  renderCart();
});

// Prevent Event bubbling bug
