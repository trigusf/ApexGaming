const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const product = products.find(item => item.id == id);

if(product){
    document.title = product.name
}

const mainImage = document.getElementById('main-img');
if(mainImage){
    mainImage.src = product.image[0];
}


const thumbnailContainer = document.getElementById("thumbnail-container");

product.image.forEach(image =>{
    thumbnailContainer.innerHTML += `
     <img src="${image}" alt="${image}" onclick="changeImage('${image}')" class="w-24 h-24 object-cover rounded-xl cursor-pointer border border-white/10">
     `
})

function changeImage(image){
    mainImage.src = image;
}

// count btn
const countLabel = document.getElementById("countLabel");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaceBtn = document.getElementById("increaceBtn");

let count = 0;

decreaseBtn.onclick = function(){
    if (count > 0) {
        count--;
        countLabel.textContent = count;
    }
}

increaceBtn.onclick = function(){
    count ++;
    countLabel.textContent = count;
}

// end of count btn

// data product
const merk = document.getElementById('merk');
const category = document.getElementById('category');
const price = document.getElementById('price');

merk.innerHTML = product.name;
category.innerHTML = product.category;
price.innerHTML = "RP " + product.price.toLocaleString("id-ID")


// end of data product