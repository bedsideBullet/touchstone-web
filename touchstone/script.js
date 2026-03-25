const signUp = document.querySelector('.sign-up');
const addToCartBtn = document.querySelectorAll('.add-to-cart-btn');
const clearCartBtn = document.querySelectorAll('.clear-cart-btn');
const processCartBtn = document.querySelectorAll('.process-cart-btn');
const contactSubmitBtn = document.querySelector('.contact-submit');
const cartBtn = document.querySelector('#cart-btn');
const closeModal = document.querySelector('.close-modal');
const modalOverlay = document.querySelector('.modal-overlay');


const signUpAlert = () => {
    alert("Thank you for signing up")
};

const addToCart = () => {
    alert("Item added to cart")
}

const clearCart = () => {
    alert("Items removed from cart")
}

const processCart = () => {
    alert("Thank you for your purchase")
}

const contactSubmit = () => {
    alert("Thankyou for your messages!")
}

const openCart = () => {
    modalOverlay.style.display = 'block';
}

const closeCart = () => {
    modalOverlay.style.display = 'none';
}

if(signUp) {
    signUp.addEventListener('click', signUpAlert);
};

if(addToCart) {
    addToCartBtn.forEach((btn) => {
    btn.addEventListener('click', addToCart);
});
}


if(clearCart) {
    clearCartBtn.forEach((btn) => {
    btn.addEventListener('click', clearCart);
});
}

if(processCart) {
    processCartBtn.forEach((btn) => {
    btn.addEventListener('click', processCart);
});
}

if (cartBtn) {
    cartBtn.addEventListener('click', openCart);
}

if (closeModal) {
    closeModal.addEventListener('click', closeCart);
}

