console.log(products)

const newArrivals = document.getElementById('newArrivals');
console.log(newArrivals)
newArrivals.innerHTML = products.slice(0, 4).map((item) => {
    return `
        <div class="card group overflow-hidden relative shadow-sm bg-primary/20 rounded-xl lg:hover:shadow-2xl/30 lg:hover:shadow-primary/50 transition-transform duration-300 hover:scale-101">
            <figure class="overflow-hidden">
              <img
                src="${item.image1}"
                alt="${item.name}" 
                class="w-auto h-auto transition-transform duration-300 group-hover:scale-110"/>
            </figure>
            <div class="card-body">
              <h2 class="card-title">${item.name}</h2>
              <p class="opacity-55 truncate">A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div class="card-actions items-center justify-end">
                <p class="text-base font-bold">Rp ${item.price}</p>
                <button class="py-1 px-3 rounded-md text-sm lg:text-base opacity-65 hover:opacity-100 hover:bg-ring/20">Add to Cart</button>
              </div>
            </div>
        </div>`;
}).join("");