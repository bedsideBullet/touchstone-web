const signUp = document.querySelector(".sign-up");
const clearCartBtn = document.querySelectorAll(".clear-cart-btn");
const processCartBtn = document.querySelectorAll(".process-cart-btn");
const contactSubmitBtn = document.querySelector(".contact-submit");
const cartBtn = document.querySelector("#cart-btn");
const closeModal = document.querySelector(".close-modal");
const modalOverlay = document.querySelector(".modal-overlay");
const productGallery = document.querySelector(".product-gallery");
const cartItemsContainer = document.querySelector(".cart-items-container");

let products = [];
let customerCart = [];




 fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    products = data.products;
    renderProducts();
    
  })
  .catch((error) => console.error("Error fetching product data:", error));



const renderProducts = () => {
    productGallery.innerHTML = "";

    for(let i = 0; i < products.length; i++) {
      const product = products[i];
      
      const productCard = `<div class="product-card">
          <div class="product-img">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <table class="product-info-table">
            <tr class="product-info-row">
              <td class="product-info-column">${product.name}</td>
              <td class="product-info-column">${product.price}</td>
            </tr>
          </table>
          <button class="add-to-cart-btn">Add to Cart</button>
        </div>`;
      productGallery.innerHTML += productCard;
    }
    const addToCartBtn = document.querySelectorAll(".add-to-cart-btn");
    addToCartBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const product = products[index];
        addToCart(product);
    });});
}

const renderCart = () => {
    const container = document.getElementById("cart-items-container");
    
    if (!container) {
        console.error("Cart container not found!");
        return;
    }

    container.innerHTML = "";

    if (customerCart.length === 0) {
        container.innerHTML = `<p class="empty-cart-msg">Your cart is currently empty.</p>`;
        return;
    }

    let html = `
        <table class="cart-table">
            <thead>
                <tr>
                    <!-- Added specific column classes for better alignment -->
                    <th class="cart-header item-col">Item</th>
                    <th class="cart-header price-col">Price</th>
                    <th class="cart-header qty-col">Qty</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let i = 0; i < customerCart.length; i++) {
        const item = customerCart[i];
        const itemTotal = item.price * (item.quantity || 1);

        html += `
            <tr class="cart-item-row">
                <td class="cart-item-name">${item.name}</td>
                <td class="cart-item-price">$${item.price.toFixed(2)}</td>
                <td class="cart-item-quantity">${item.quantity || 1}</td>
            </tr>
        `;
    }

    html += `</tbody></table>`;

    container.innerHTML = html;
};


const signUpAlert = () => {
  alert("Thank you for signing up");
};

const addToCart = (product) => {
    customerCart.push(product);
    alert("Item added to cart");
    renderCart();
};``

const clearCart = () => {
  alert("Items removed from cart");
    customerCart = [];
    renderCart();
};

const processCart = () => {
  alert("Thank you for your purchase");
  customerCart = [];
    closeCart();
};

const contactSubmit = () => {
  alert("Thankyou for your messages!");
};

const openCart = () => {
    renderCart();
  modalOverlay.style.display = "block";
};

const closeCart = () => {
  modalOverlay.style.display = "none";
};

if (signUpAlert) {
  signUp.addEventListener("click", signUpAlert);
}


if (clearCart) {
  clearCartBtn.forEach((btn) => {
    btn.addEventListener("click", clearCart);
  });
}

if (processCart) {
  processCartBtn.forEach((btn) => {
    btn.addEventListener("click", processCart);
  });
}

if (cartBtn) {
  cartBtn.addEventListener("click", openCart);
}

if (closeModal) {
  closeModal.addEventListener("click", closeCart);
}




    
    
    