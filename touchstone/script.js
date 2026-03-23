const signUp = document.querySelector('.sign-up');
const addToCartBtn = document.querySelectorAll('.add-to-cart-btn');
const clearCartBtn = document.querySelectorAll('.clear-cart-btn');
const processCartBtn = document.querySelectorAll('.process-cart-btn');
const contactSubmitBtn = document.querySelector('.contact-submit');


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

if(contactSubmit) {
    contactSubmitBtn.addEventListener('click', contactSubmit);
};
