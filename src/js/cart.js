function getCart(){
    return JSON.parse(localStorage.getItem("cart")) || []
}

function saveCart(cart){
    localStorage.setItem("cart", JSON.stringify(cart));
}



const addToCartBtn = document.querySelectorAll(".add-cart-btn");

addToCartBtn.forEach(btn => {
    const productId = Number(btn.dataset.id);

    btn.addEventListener("click", () => {
        const product = products.find(item => item.id === productId);

        const cart = getCart();
        cart.push(product);
        saveCart(cart);

        console.log(cart)
    })
})




































// function getCart(){
//     return JSON.parse(localStorage.getItem("cart")) || []
// }

// function saveCart(cart){
//     localStorage.setItem("cart", JSON.stringify(cart));
// }



// const addToCartBtn = document.querySelectorAll(".add-cart-btn");

// addToCartBtn.forEach(btn => {
//     const productId = Number(btn.dataset.id);

//     btn.addEventListener("click", () => {
//         const product = products.find(item => item.id === productId);
//         const cart = getCart();
//         cart.push(product);
//         saveCart(cart);

//         console.log(cart)
//     })
// })