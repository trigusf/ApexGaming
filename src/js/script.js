// navbar & footer
function updateCartCount(){
    const totalCart = document.querySelectorAll(".totalCart");

    if (totalCart) {
      const cart = getCart()
      const sumCart = cart.reduce((sum, item) => sum + item.quantity, 0)
    
      totalCart.forEach(item => {
        if (sumCart > 99) {
          item.innerText = "99+";
        }else{
          item.innerText = sumCart;
        }
      })

    }
}

fetch("../src/components/navbar.html").then(response => response.text()).then(data => {
  document.getElementById("nav").innerHTML = data;
  updateCartCount()
});

fetch("../src/components/footer.html").then(response => response.text()).then(data => {
  document.getElementById("footer").innerHTML = data;
})

// end of navbar & footer

// counter header
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const target  = +counter.getAttribute("data-target");
  let current = 0;

  const increment= target / 100;

  function update(){
    current += increment;

    if (current < target) {
      counter.innerText = Math.ceil(current);
      requestAnimationFrame(update)
    }else{
      counter.innerText = target;
    }
  }
  update();
});
// end of counter header




const newArrivals = document.getElementById('newArrivals');
if(newArrivals){
  newArrivals.innerHTML = products.slice(0, 4).map((item) => {
    return `
        <a href="../../detail-product.html?id=${item.id}" class="card group overflow-hidden relative shadow-sm bg-primary/20 rounded-xl lg:hover:shadow-2xl/30 lg:hover:shadow-primary/50 transition-transform duration-300 hover:scale-101">
            <figure class="overflow-hidden">
              <img
                src="${item.image[0]}"
                alt="${item.name}" 
                loading="lazy"
                class="aspect-[4/4] object-cover transition-transform duration-300 group-hover:scale-110"/>
            </figure>
            <div class="card-body p-2 lg:p-4">
              <h2 class="card-title text-sm lg:text-base truncate">${item.name}</h2>
              <p class="opacity-55 truncate">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non praesentium itaque aut?</p>
              <div class="card-actions items-center justify-end">
                <p class="text-xs lg:text-base md:text-base font-bold">Rp ${item.price.toLocaleString("id-ID")}</p>
                <button class="w-full py-1 px-3 rounded-md text-sm lg:text-base opacity-65 hover:opacity-100 hover:bg-ring/20">Add to Cart</button>
              </div>
            </div>
        </a>`;
}).join("");
}




const bestSellers = document.getElementById('bestSellers');
if (bestSellers) {
  bestSellers.innerHTML = products.map((item) => {
  if (item.rate > 4.5) {
    return `
      <a href="../../detail-product.html?id=${item.id}" class="card group overflow-hidden relative shadow-sm bg-primary/20 rounded-xl lg:hover:shadow-2xl/30 lg:hover:shadow-primary/50 transition-transform duration-300 hover:scale-101">
            <figure class="overflow-hidden">
              <img
                src="${item.image[0]}"
                alt="${item.name}" 
                loading="lazy"
                class="aspect-square object-cover transition-transform duration-300 group-hover:scale-110"/>
            </figure>
            <div class="card-body p-2 lg:p-5 flex flex-col gap-4">
              <p class="font-bold text-base flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="fill-current" viewBox="0 0 640 640">
                  <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z"/>
                </svg>4.9 
                <span class="text-sm font-thin opacity-65">
                  (9,999 view)
                </span>
              </p>
              <h1 class="card-title">${item.name}</h1>  
              <p class="text-base font-bold">Rp ${item.price.toLocaleString("id-ID")}</p>
              <button class="flex items-center gap-4 justify-center bg-primary/20 py-2 rounded-4xl hover:bg-primary/90 border border-primary/10 transition-all duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
                Add to Cart
              </button>
            </div>  
      </a>`
    }
}).join("")
}



const allProduct = document.getElementById('allProduct');
if (allProduct) {

  const params = new URLSearchParams(window.location.search)
  const category = params.get("category");

  const productCount = document.querySelector(".product-count");
  productCount.innerHTML = products.length + " Produk";


  function renderProducts(data) {
    allProduct.innerHTML = data.map((item) => {
  return `
      <div class="card group overflow-hidden relative shadow-sm bg-primary/20 rounded-xl lg:hover:shadow-2xl/30 lg:hover:shadow-primary/50 transition-transform duration-300 hover:scale-101">
      <a href="../../detail-product.html?id=${item.id}">
            <figure class="overflow-hidden">
              <img
                src="${item.image[0]}"
                alt="${item.name}" 
                loading="lazy"
                class="aspect-square object-cover transition-transform duration-300 group-hover:scale-110"/>
            </figure>
            <div class="card-body p-2 lg:p-5 flex flex-col gap-1 md:gap-4 lg:gap-4 text-xs lg:text-base md:text-base">
              <div class="flex flex-row justify-between items-center">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="fill-current" viewBox="0 0 640 640">
                  <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z"/>
                </svg>4.9 
              </div>

                <span class="lg:text-sm font-thin opacity-65">
                  (9,999 view)
                </span>
              </div>
              <h1 class="card-title text-sm lg:text-base md:text-base">${item.name}</h1>  
              <p class="text-xs md:text-base lg:text-base font-bold">Rp ${item.price.toLocaleString("id-ID")}</p>
            </a>
              <button data-id="${item.id}" class="add-cart-btn mt-1 flex items-center text-xs md:text-base lg:text-base gap-2 justify-center bg-primary/20 py-1 rounded-4xl hover:bg-primary/90 border border-primary/10 transition-all duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="h-4 w-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
                Add to Cart
              </button>
            </div>  
        </div>
      `
    }).join("");
    }



    const filteredProduct = category === null ? products : products.filter(item => item.category === category);
    renderProducts(filteredProduct)




    const categoryBtn = document.querySelectorAll(".category-btn");

    categoryBtn.forEach(btn => {
      btn.addEventListener("click", () => {
        categoryBtn.forEach(item => {
          item.classList.remove("category-btn-active");
        });

        btn.classList.add("category-btn-active");

        const selectedCategory = btn.dataset.category;
        const filteredProduct = selectedCategory === "All" ? products : products.filter(item => item.category === selectedCategory);
        renderProducts(filteredProduct);
        setupCartButtons()
      });
    });




    
  }
  





// categoryBtn.forEach(btn => {
//       btn.addEventListener("click", () => {

//         categoryBtn.forEach(item => {
//           item.classList.remove("category-btn-active");
//         })
  
//         btn.classList.add("category-btn-active");

//         const selectedCategory = btn.dataset.category;
//         const filteredProduct = selectedCategory === "All" ? products : products.filter(item => item.category === selectedCategory);
//         renderProducts(filteredProduct);

//       });
//     });