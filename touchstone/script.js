const signUp = document.querySelector(".sign-up");
const clearCartBtn = document.querySelectorAll(".clear-cart-btn");
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
    const totalContainer = document.getElementById("cart-total-section");

    const storedCart = sessionStorage.getItem("customerCart");
  if (storedCart) {
    customerCart = JSON.parse(storedCart);
  }
    
    if (!container) return;

    container.innerHTML = "";
    let cartTotal = 0; 

    if (customerCart.length === 0) {
        container.innerHTML = `<p class="empty-cart-msg">Your cart is currently empty.</p>`;
        if (totalContainer) totalContainer.innerHTML = ""; 
        return;
    }

    let html = `
        <table class="cart-table">
            <thead>
                <tr>
                    <th class="cart-header item-col">Item</th>
                    <th class="cart-header qty-col">Qty</th>
                    <th class="cart-header price-col">Price</th>
                </tr>
            </thead>
            <tbody>
    `;

    customerCart.forEach((item) => {
        cartTotal += item.price; 
        html += `
            <tr class="cart-item-row">
                <td class="cart-item-name">${item.name}</td>
                <td class="cart-item-quantity">${item.quantity || 1}</td>
                <td class="cart-item-price">$${item.price.toFixed(2)}</td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
    
    if (totalContainer) {
        totalContainer.innerHTML = `
              <hr>
              <p>Total: <span id="cart-total">$${cartTotal.toFixed(2)}</span></p>
              <button class="process-cart-btn checkout-btn">Checkout</button>
              <button class="clear-cart-btn checkout-btn" style="background-color: var(--bg-error);">Clear Cart</button>
        `;

        totalContainer.querySelector(".clear-cart-btn").addEventListener("click", clearCart);
        totalContainer.querySelector(".process-cart-btn").addEventListener("click", processCart);
    }
};


const signUpAlert = () => {
  alert("Thank you for signing up");
};

const addToCart = (product) => {
    customerCart.push(product);
    sessionStorage.setItem('customerCart', JSON.stringify(customerCart));
    alert("Item added to cart");
    renderCart();
};

const clearCart = () => {
  alert("Items removed from cart");
    customerCart = [];
    sessionStorage.removeItem('customerCart');
    renderCart();
};

const processCart = () => {
  alert("Thank you for your purchase");
  customerCart = [];
  sessionStorage.removeItem('customerCart');
    closeCart();
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


if (cartBtn) {
  cartBtn.addEventListener("click", openCart);
}

if (closeModal) {
  closeModal.addEventListener("click", closeCart);
}



const contactSubmit = () => {
  const firstName = document.querySelector('input[name="firstName"]')?.value;
  const lastName = document.querySelector('input[name="lastName"]')?.value;
  const phone = document.querySelector('input[name="phone"]')?.value;
  const email = document.querySelector('input[name="email"]')?.value;
  const reason = document.querySelector('input[name="reason"]:checked')?.value;
  const message = document.querySelector('textarea[name="message"]')?.value;


  const contactData = {
    firstName,
    lastName,
    phone,
    email,
    reason,
    message,
    timestamp: new Date().toISOString(),
  };

  let contacts = JSON.parse(localStorage.getItem("customerContacts")) || [];
  contacts.push(contactData);
  localStorage.setItem("customerContacts", JSON.stringify(contacts));

  alert("Thank you! Your message has been saved.");
  document.getElementById("contact-form").reset();
};

if (contactSubmitBtn) {
  contactSubmitBtn.addEventListener("click", contactSubmit);
}

    
    
 document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.querySelector(".contact-submit");

    if (submitBtn) {
        submitBtn.addEventListener("click", () => {
            // Get form values
            const firstName = document.getElementById("fName")?.value.trim();
            const lastName  = document.getElementById("lName")?.value.trim();
            const email     = document.getElementById("email")?.value.trim();
            const phone     = document.getElementById("phone")?.value.trim();
            const reason    = document.querySelector('input[name="reason"]:checked')?.value || "Not specified";
            const message   = document.getElementById("message")?.value.trim();

            const contactData = {
                firstName,
                lastName,
                email,
                phone: phone || "Not provided",
                reason,
                message,
                timestamp: new Date().toISOString()
            };

            let contacts = JSON.parse(localStorage.getItem("customerContacts")) || [];
            contacts.push(contactData);
            localStorage.setItem("customerContacts", JSON.stringify(contacts));

            document.getElementById("contact-form").reset();
        });
    }
});   