// navbar & footer

fetch("../src/components/navbar.html").then(response => response.text()).then(data => {
  document.getElementById("nav").innerHTML = data;
});

fetch("../src/components/footer.html").then(response => response.text()).then(data => {
  document.getElementById("footer").innerHTML = data;
})

// end of navbar & footer



const newArrivals = document.getElementById('newArrivals');
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
            <div class="card-body">
              <h2 class="card-title">${item.name}</h2>
              <p class="opacity-55 truncate">A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div class="card-actions items-center justify-end">
                <p class="text-base font-bold">Rp ${item.price.toLocaleString("id-ID")}</p>
                <button class="py-1 px-3 rounded-md text-sm lg:text-base opacity-65 hover:opacity-100 hover:bg-ring/20">Add to Cart</button>
              </div>
            </div>
        </a>`;
}).join("");


const bestSellers = document.getElementById('bestSellers');
bestSellers.innerHTML = products.map((item) => {
  if (item.rate > 4.5) {
    return `
      <a href="../../detail-product.html?id=${item.id}" class="card group overflow-hidden relative shadow-sm bg-primary/20 rounded-xl lg:hover:shadow-2xl/30 lg:hover:shadow-primary/50 transition-transform duration-300 hover:scale-101">
            <figure class="overflow-hidden">
              <img
                src="${item.image[0]}"
                alt="${item.name}" 
                loading="lazy"
                class="max-w-sx aspect-square object-cover transition-transform duration-300 group-hover:scale-110"/>
            </figure>
            <div class="card-body flex flex-col gap-4">
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