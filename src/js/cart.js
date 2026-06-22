function getCart(){
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart){
    localStorage.setItem("cart", JSON.stringify(cart));
}

// localStorage.removeItem("cart")

function setupCartButtons(){
    const addToCartBtn = document.querySelectorAll(".add-cart-btn");

    addToCartBtn.forEach(btn => {
        const productId = Number(btn.dataset.id);

        btn.addEventListener("click", () => {
            const product = products.find(item => item.id === productId);
            const cart = getCart();

            const existingItem = cart.find(item => item.id === product.id);

            if (existingItem) {
              existingItem.quantity += 1;
            }else{
              cart.push({
                ...product, quantity : 1
              });
            }

            saveCart(cart);
            console.log(cart);

            updateCartCount();
        })

    })
}
setupCartButtons()

const cart = getCart();
console.log(cart)
const totalOrder = document.getElementById("totalOrder");
const ifEmtpy = document.getElementById("ifEmpty");

function renderCart(){
  const cart = getCart();
  const cartItems = document.getElementById("cartItem") 
  cartItems.innerHTML = cart.map(item => `
              <div class="flex items-center w-full h-fit p-4 gap-4 bg-primary/15 rounded-2xl border border-white/5">
                  <img src="${item.image[0]}" alt="" class="lg:w-30 lg:h-30 w-20 h-20 rounded-xl object-cover">
                  <div class="w-full flex flex-col gap-2 text-sm lg:text-base">
                    <span>${item.name}</span>
                    <span>${item.brand}</span>
                     <div id="countBtnCart" class="flex items-center text-center w-fit border border-white/15 rounded">
                        <button id="" data-id="${item.id}" class="decreaseBtnCart y-1 px-2 cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>
                        </button>
                        <label for="" id="countLabelCart" class="py-1 px-2">${item.quantity}</label>
                        <button data-id="${item.id}" class="increaseBtnCart y-1 px-2 cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                        </button>
                      </div>
                  </div>
                  <div class="flex flex-col items-end gap-2">
                    <span class="font-bold">Rp${item.price.toLocaleString("id-ID")}</span>
                    <div class="flex gap-2">
                      <div class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="current-fill" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
                      </div>
                      <button id="removeItemCart" onClick="removeItem(${item.id})" class="cursor-pointer hover:text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="current-fill" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
    
    `).join("");

   plusQuantity();
   minQuantity();




    
    const totalHarga = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax  = (totalHarga * 11) / 100;
    const totalBayar = tax + totalHarga;

    if (cart.length > 0) {
      ifEmtpy.classList.add("hidden");

      totalOrder.innerHTML = `
      <div class="relative flex flex-col lg:flex-row gap-4">
              <div class="sticky">
                <div class="w-full bg-primary/15 p-8 w-fit rounded-xl border border-white/10">
                  <h1 class="font-bold text-xl pb-4">Order Summary</h1>
                  <div class="lg:w-64  flex flex-col gap-4 text-sm">
                    <div class="w-full flex justify-between">
                      <span class="text-white/65">Subtotal</span>
                      <span>Rp${totalHarga.toLocaleString("id-ID")}</span>
                    </div>
                    <div class="w-full flex justify-between">
                      <span class="text-white/65">Shipping</span>
                      <span class="text-green-500">Free</span>
                    </div>
                    <div class="w-full flex justify-between">
                      <span class="text-white/65">Tax</span>
                      <span>${tax.toLocaleString("id-ID")}</span>
                    </div>
                    <div class="w-full flex justify-between text-xl font-bold border-t border-t-white/10 pt-4">
                      <span>Total</span>
                      <span>Rp${totalBayar.toLocaleString("id-ID")}</span>
                    </div>
                  </div>
                  <div class="w-full items-center text-center flex flex-col gap-2 mt-4">
                    <button class="btn font-thin w-full bg-white text-black rounded-xl">Proceed to Checkout</button>
                    <a href="all-product.html" class="btn font-thin w-full rounded-xl">Continue Shopping</a>
                  </div>
                </div>
              </div>
            </div>
      `
    }else{
      ifEmtpy.classList.remove("hidden");
      totalOrder.innerHTML = "";
    }

}

renderCart()

function removeItem(id){
  let cart = JSON.parse(localStorage.getItem("cart")) || []; 
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount()
}


function plusQuantity(){
   const increaseBtnCart = document.querySelectorAll(".increaseBtnCart");

    increaseBtnCart.forEach(btn => {
      const productId = Number(btn.dataset.id);

      btn.addEventListener("click", () =>{
      const product = products.find(item => item.id === productId);
      const cart = getCart()

      const existingItem = cart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      }

      saveCart(cart);
      renderCart();
      updateCartCount();

      });
    });
}

function minQuantity(){
  const increaseBtnCart = document.querySelectorAll(".decreaseBtnCart");

    increaseBtnCart.forEach(btn => {
      const productId = Number(btn.dataset.id);

      btn.addEventListener("click", () =>{
      const product = products.find(item => item.id === productId);
      const cart = getCart()

      const existingItem = cart.find(item => item.id === product.id);
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
      
      saveCart(cart);
      renderCart();
      updateCartCount();

      });
    });
}




































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
