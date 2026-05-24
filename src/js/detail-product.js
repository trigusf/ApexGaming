const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const product = products.find(item => item.id == id);

const mainImage = document.getElementById('main-img');
mainImage.src = product.image[0];

const thumbnailContainer = document.getElementById("thumbnail-container");

product.image.forEach(image =>{
    thumbnailContainer.innerHTML += `
     <img src="${image}" alt="${image}" onclick="changeImage('${image}')" class="w-24 h-24 object-cover rounded-xl cursor-pointer border border-white/10">
     `
})

function changeImage(image){
    mainImage.src = image;
}