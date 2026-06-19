// =====================================
// PRODUCTS DATABASE
// =====================================

const products = [

{
id:1,
name:"Dell XPS 15",
brand:"Dell",
model:"9520",
category:"Laptop",
price:1799,
rating:4.8,
stock:14,

image:
"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200",

description:
"Premium Windows ultrabook with OLED display.",

specifications:{
processor:"Intel Core i7 13th Gen",
ram:"16GB",
storage:"1TB SSD",
display:"15.6-inch OLED",
weight:"1.92 kg",
battery:"12 Hours",
connectivity:"Wi-Fi 6, Bluetooth 5.2, USB-C",
warranty:"1 Year Dell Warranty"
},

reviews:[
{
user:"Mike",
rating:5,
comment:"Beautiful OLED screen."
},
{
user:"Alex",
rating:4,
comment:"Fast and reliable."
},
{
user:"Riya",
rating:5,
comment:"Perfect for office work."
}
]
},

{
id:2,
name:"ThinkPad X1 Carbon",
brand:"Lenovo",
model:"Gen 11",
category:"Laptop",
price:1699,
rating:4.7,
stock:8,

image:
"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=1200",

description:
"Business-class lightweight laptop.",

specifications:{
processor:"Intel Core i7",
ram:"16GB",
storage:"512GB SSD",
display:"14-inch WUXGA",
weight:"1.12 kg",
battery:"15 Hours",
connectivity:"Wi-Fi 6E, Bluetooth 5.2",
warranty:"1 Year"
},

reviews:[
{
user:"Tom",
rating:5,
comment:"Best keyboard ever."
},
{
user:"Harry",
rating:4,
comment:"Very lightweight."
},
{
user:"Emma",
rating:5,
comment:"Great for professionals."
}
]
},

{
id:3,
name:"iPhone 15 Pro",
brand:"Apple",
model:"A3101",
category:"Phone",
price:1199,
rating:4.9,
stock:20,

image:
"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1200",

description:
"Flagship Apple smartphone.",

specifications:{
display:"6.1-inch Super Retina XDR",
processor:"A17 Pro",
storage:"256GB",
battery:"23 Hours Video Playback",
connectivity:"5G, Wi-Fi 6E, Bluetooth 5.3",
warranty:"1 Year"
},

reviews:[
{
user:"John",
rating:5,
comment:"Best camera quality."
},
{
user:"Sarah",
rating:5,
comment:"Extremely smooth."
},
{
user:"Chris",
rating:4,
comment:"Premium feel."
}
]
},

{
id:4,
name:"Samsung Galaxy S24 Ultra",
brand:"Samsung",
model:"SM-S928B",
category:"Phone",
price:1299,
rating:4.8,
stock:10,

image:
"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=1200",

description:
"Samsung flagship with AI features.",

specifications:{
display:"6.8-inch Dynamic AMOLED",
processor:"Snapdragon 8 Gen 3",
storage:"512GB",
battery:"5000mAh",
connectivity:"5G, Wi-Fi 7, Bluetooth 5.3",
warranty:"1 Year Samsung Warranty"
},

reviews:[
{
user:"Ali",
rating:5,
comment:"Fantastic zoom camera."
},
{
user:"Neha",
rating:4,
comment:"Good battery life."
},
{
user:"Raj",
rating:5,
comment:"Best Android phone."
}
]
},

{
id:5,
name:"Google Pixel 8 Pro",
brand:"Google",
model:"GC3VE",
category:"Phone",
price:999,
rating:4.7,
stock:6,

image:
"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200",

description:
"AI-powered smartphone from Google.",

specifications:{
display:"6.7-inch OLED",
processor:"Google Tensor G3",
storage:"256GB",
battery:"5050mAh",
connectivity:"5G, Wi-Fi 7, Bluetooth 5.3",
warranty:"1 Year"
},

reviews:[
{
user:"Max",
rating:5,
comment:"Excellent software experience."
},
{
user:"Jenny",
rating:4,
comment:"Great photos."
},
{
user:"Paul",
rating:5,
comment:"Clean Android."
}
]
},

{
id:6,
name:"Apple Watch Series 9",
brand:"Apple",
model:"A2984",
category:"Watch",
price:449,
rating:4.8,
stock:7,

image:
"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1200",

description:
"Advanced smartwatch.",

specifications:{
display:"Always-On Retina",
processor:"Apple S9",
battery:"18 Hours",
connectivity:"Bluetooth 5.3",
warranty:"1 Year"
},

reviews:[
{
user:"Eva",
rating:5,
comment:"Excellent tracking."
},
{
user:"Mark",
rating:4,
comment:"Smooth performance."
},
{
user:"Linda",
rating:5,
comment:"Love it."
}
]
},

{
id:7,
name:"Samsung Galaxy Watch 6",
brand:"Samsung",
model:"SM-R940",
category:"Watch",
price:399,
rating:4.6,
stock:5,

image:
"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",

description:
"Premium smartwatch.",

specifications:{
display:"1.5 AMOLED",
processor:"Exynos W930",
battery:"40 Hours",
connectivity:"Bluetooth 5.3",
warranty:"1 Year"
},

reviews:[
{
user:"Ryan",
rating:5,
comment:"Fantastic display."
},
{
user:"Nina",
rating:4,
comment:"Good battery."
},
{
user:"Aman",
rating:5,
comment:"Excellent."
}
]
},

{
id:8,
name:"Sony WH-1000XM5",
brand:"Sony",
model:"WH1000XM5",
category:"Audio",
price:349,
rating:4.9,
stock:12,

image:
"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200",

description:
"Industry-leading noise cancellation.",

specifications:{
battery:"30 Hours",
weight:"250g",
connectivity:"Bluetooth 5.2",
warranty:"1 Year Sony Warranty"
},

reviews:[
{
user:"Ben",
rating:5,
comment:"Best ANC."
},
{
user:"Mia",
rating:5,
comment:"Comfortable."
},
{
user:"Luke",
rating:4,
comment:"Amazing sound."
}
]
},

{
id:9,
name:"iPad Air M2",
brand:"Apple",
model:"M2",
category:"Tablet",
price:699,
rating:4.8,
stock:15,

image:
"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1200",

description:
"Powerful tablet.",

specifications:{
processor:"Apple M2",
storage:"256GB",
display:"10.9-inch Liquid Retina",
battery:"10 Hours",
connectivity:"Wi-Fi 6E",
warranty:"1 Year"
},

reviews:[
{
user:"Ria",
rating:5,
comment:"Perfect for students."
},
{
user:"Daniel",
rating:4,
comment:"Very fast."
},
{
user:"Ariana",
rating:5,
comment:"Great display."
}
]
}

];

// Wishlist

let wishlist =
JSON.parse(
localStorage.getItem("wishlist")
) || [];
// =====================================
// DOM ELEMENTS
// =====================================

const productContainer =
document.getElementById("products");

const searchInput =
document.getElementById("search");

const categorySelect =
document.getElementById("category");

const sortSelect =
document.getElementById("sort");

const modal =
document.getElementById("productModal");

const modalBody =
document.getElementById("modalBody");

const closeModal =
document.getElementById("closeModal");

const cartItems =
document.getElementById("cartItems");

const totalElement =
document.getElementById("total");

const cartCount =
document.getElementById("cartCount");

const toast =
document.getElementById("toast");

// =====================================
// CART
// =====================================

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

// =====================================
// PRODUCT RENDERING
// =====================================

function renderProducts(productList){

productContainer.innerHTML = "";

productList.forEach(product=>{

productContainer.innerHTML += `

<div class="card">

<img
src="${product.image}"
alt="${product.name}"
>

<div class="card-content">

<h3>${product.name}</h3>

<p>${product.brand}</p>

<div class="rating">
⭐ ${product.rating}
</div>

<div class="stock">

${product.stock > 5
?
"✅ In Stock"
:
"⚠ Only Few Left"}

</div>

<p class="price">
$${product.price}
</p>

<button
class="details-btn"
onclick="showDetails(${product.id})">

View Details

</button>

<button
class="add-btn"
onclick="addToCart(${product.id})">

Add To Cart

</button>

<button
class="wishlist-btn"
onclick="addToWishlist(${product.id})">

❤️ Wishlist

</button>

</div>

</div>

`;

});

}

// =====================================
// PRODUCT DETAILS MODAL
// =====================================

function showDetails(id){

const product =
products.find(
item => item.id === id
);

let specs = "";

for(
const key
in
product.specifications
){

specs += `

<tr>

<td>
${key}
</td>

<td>
${product.specifications[key]}
</td>

</tr>

`;

}

let reviews = "";

product.reviews.forEach(review=>{

reviews += `

<div class="review-card">

<h4>

${review.user}

⭐ ${review.rating}

</h4>

<p>

${review.comment}

</p>

</div>

`;

});

modalBody.innerHTML = `

<img
src="${product.image}"
style="
width:100%;
border-radius:15px;
margin-bottom:15px;
">

<h2>
${product.name}
</h2>

<p>
${product.description}
</p>

<h3>
Price: $${product.price}
</h3>

<table class="spec-table">

${specs}

</table>

<div class="review-section">

<h3>
Customer Reviews
</h3>

${reviews}

</div>

`;

modal.style.display = "flex";

}

closeModal.addEventListener(
"click",
()=>{

modal.style.display =
"none";

}
);

// =====================================
// SEARCH FILTER SORT
// =====================================

function filterProducts(){

let filtered =
[...products];

const searchText =
searchInput.value
.toLowerCase();

filtered =
filtered.filter(product =>

product.name
.toLowerCase()
.includes(searchText)

);

const category =
categorySelect.value;

if(category !== "all"){

filtered =
filtered.filter(product =>

product.category === category

);

}

const sort =
sortSelect.value;

if(sort === "low-high"){

filtered.sort(
(a,b)=>
a.price - b.price
);

}

if(sort === "high-low"){

filtered.sort(
(a,b)=>
b.price - a.price
);

}

renderProducts(filtered);

}

searchInput.addEventListener(
"input",
filterProducts
);

categorySelect.addEventListener(
"change",
filterProducts
);

sortSelect.addEventListener(
"change",
filterProducts
);

// =====================================
// CART FUNCTIONS
// =====================================

function addToCart(id){

const product =
products.find(
item =>
item.id === id
);

const existing =
cart.find(
item =>
item.id === id
);

if(existing){

existing.qty++;

}else{

cart.push({

...product,

qty:1

});

}

saveCart();

showToast(
"Added To Cart 🛒"
);

}

function saveCart(){

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();

}

function renderCart(){

cartItems.innerHTML = "";

let total = 0;

cart.forEach(item=>{

total +=
item.price *
item.qty;

cartItems.innerHTML += `

<div class="cart-item">

<div>

<strong>
${item.name}
</strong>

<p>
$${item.price}
</p>

</div>

<div class="qty-controls">

<button
onclick="
changeQuantity(
${item.id},
-1
)">
-
</button>

<span>
${item.qty}
</span>

<button
onclick="
changeQuantity(
${item.id},
1
)">
+
</button>

<button
onclick="
removeItem(
${item.id}
)">
❌
</button>

</div>

</div>

`;

});

totalElement.textContent =
total.toFixed(2);

cartCount.textContent =
cart.reduce(
(sum,item)=>
sum + item.qty,
0
);

}

function changeQuantity(
id,
value
){

const item =
cart.find(
product =>
product.id === id
);

if(!item) return;

item.qty += value;

if(item.qty <= 0){

removeItem(id);

return;

}

saveCart();

}

function removeItem(id){

cart =
cart.filter(
item =>
item.id !== id
);

saveCart();

showToast(
"Item Removed"
);

}

// =====================================
// WISHLIST
// =====================================

function addToWishlist(id){

const product =
products.find(
item =>
item.id === id
);

const exists =
wishlist.find(
item =>
item.id === id
);

if(exists){

showToast(
"Already In Wishlist ❤️"
);

return;

}

wishlist.push(product);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

showToast(
"Added To Wishlist ❤️"
);

}

// =====================================
// CHECKOUT
// =====================================

const checkoutBtn =
document.getElementById(
"checkoutBtn"
);

const checkoutModal =
document.getElementById(
"checkoutModal"
);

const closeCheckout =
document.getElementById(
"closeCheckout"
);

const checkoutForm =
document.getElementById(
"checkoutForm"
);

checkoutBtn.addEventListener(
"click",
()=>{

if(cart.length === 0){

showToast(
"Cart Is Empty"
);

return;

}

checkoutModal.style.display =
"flex";

}
);

closeCheckout.addEventListener(
"click",
()=>{

checkoutModal.style.display =
"none";

}
);

checkoutForm.addEventListener(
"submit",
event=>{

event.preventDefault();

showToast(
"Order Placed Successfully 🎉"
);

cart=[];

saveCart();

checkoutModal.style.display =
"none";

checkoutForm.reset();

}
);

// =====================================
// FEEDBACK
// =====================================

const feedbackForm =
document.getElementById(
"feedbackForm"
);

feedbackForm.addEventListener(
"submit",
event=>{

event.preventDefault();

showToast(
"Thank You For Your Feedback ❤️"
);

feedbackForm.reset();

}
);

// =====================================
// NEWSLETTER
// =====================================

function subscribeNewsletter(){

const email =
document.getElementById(
"newsletterEmail"
).value;

if(email === ""){

showToast(
"Enter Email"
);

return;

}

showToast(
"Subscribed Successfully 📧"
);

document.getElementById(
"newsletterEmail"
).value = "";

}

// =====================================
// TOAST
// =====================================

function showToast(message){

toast.innerText =
message;

toast.style.display =
"block";

setTimeout(()=>{

toast.style.display =
"none";

},3000);

}

// =====================================
// DARK MODE
// =====================================

const themeBtn =
document.getElementById(
"themeBtn"
);

if(
localStorage.getItem(
"darkMode"
) === "enabled"
){

document.body
.classList.add("dark");

}

themeBtn.addEventListener(
"click",
()=>{

document.body
.classList.toggle(
"dark"
);

if(
document.body
.classList.contains(
"dark"
)
){

localStorage.setItem(
"darkMode",
"enabled"
);

}else{

localStorage.setItem(
"darkMode",
"disabled"
);

}

}
);

// =====================================
// HERO BUTTON
// =====================================

function scrollToProducts(){

document
.getElementById(
"productsSection"
)
.scrollIntoView({

behavior:"smooth"

});

}

// =====================================
// INITIAL LOAD
// =====================================

renderProducts(products);
renderCart();
