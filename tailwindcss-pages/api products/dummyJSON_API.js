let productID = Math.floor(Math.random()*30) + 1;
console.log(`productID is ${productID}`);

mainProduct();

// Code for Suggestion Products
let recoProducts = document.getElementsByClassName("recommended-product");
console.log(`Suggested Products are ${recoProducts.length}`);
// console.log(recoProducts);

for(let x = 0; x < recoProducts.length; x++){
    let randomID = productID;
    while(randomID == productID){
        randomID = Math.floor(Math.random()*30) + 1;
    }

    suggestProducts(recoProducts[x], randomID);
}


    // Fetch a product based on its id property
async function mainProduct(){
    await fetch(`https://dummyjson.com/products/${productID}`)
    .then(res => res.json())
    .then(product => {
        // console.log(product);
        const {title, description, stock, sku, price, id, thumbnail, category} = product;
        const tags = product.tags;
        let categories = category;
        for(let i in tags){
            categories = `${categories}, ${tags[i]}`
        }

        // Change Value of <title> in <head>
        document.title = title;

        // Breadcrumb Elements
        let breadcrumbCategory = document.getElementById("breadcrumb-category");
        let breadcrumbProduct = document.getElementById("breadcrumb-product");

        // Product Section Elements
        let productImage = document.getElementById("productImage");
        let productDescription = document.getElementById("description");
        let productTitle = document.getElementById("title");
        let productStock = document.getElementById("stock");
        let productPrice = document.getElementById("price");
        let productCategory = document.getElementById("category");
        let productSKU = document.getElementById("sku");
        let mainProductID = document.getElementById("main-product-ID");

        // Assign innerHTML Values
        breadcrumbCategory.innerHTML = category;
        breadcrumbProduct.innerHTML = title;

        productImage.src = thumbnail;
        productDescription.innerHTML = description;
        productTitle.innerHTML = title;
        productStock.innerHTML = `Stock: ${stock}`;
        productPrice.innerHTML = `₱${(price*57).toLocaleString()}`;
        productCategory.innerHTML = `Category: ${categories}`;
        productSKU.innerHTML = `SKU: ${sku}`;
        mainProductID.value = id;
    })
    .catch(error => console.log(`Error (Can't fetch product id ${productID}):`, error));
}

function suggestProducts(suggestProduct, randomID){
    fetch(`https://dummyjson.com/products/${randomID}`)
        .then(res => res.json())
        .then(product => {
            const {title, thumbnail, price, id} = product;
            suggestProduct.getElementsByTagName("h3")[0].innerHTML = title; // product title
            suggestProduct.getElementsByTagName("img")[0].src = thumbnail; // product image
            suggestProduct.getElementsByTagName("p")[0].innerHTML = `₱${(price*57).toLocaleString()}`; // product price
            suggestProduct.getElementsByTagName("input")[0].value = id; // product id tracker
        })
        .catch(error => console.log(`Error (Can't fetch suggested product id ${randomID}):`, error));
}

    // Fetch ALL Products From API
// fetch('https://dummyjson.com/products/')
// .then(res => res.json())
// .then(json => {
//     console.log(json)
//     // let random = sessionStorage.getItem('productIndex');
//     // console.log(`sessionStorage.getItem(productIndex) is ${random}`);

//     let random = Math.floor(Math.random()*30);
//     console.log(`random number generated is ${random}`);

//     const {title, description, stock, sku, price, id, thumbnail, category} = json.products[random];
//     const tags = json.products[random].tags;
//     let categories = category;
//     for(let i in tags){
//         categories = `${categories}, ${tags[i]}`
//     }

//     // Breadcrumb Elements
//     let breadcrumbCategory = document.getElementById("breadcrumb-category");
//     let breadcrumbProduct = document.getElementById("breadcrumb-product");

//     // Product Section Elements
//     let productImage = document.getElementById("productImage");
//     let productDescription = document.getElementById("description");
//     let productTitle = document.getElementById("title");
//     let productStock = document.getElementById("stock");
//     let productPrice = document.getElementById("price");
//     let productCategory = document.getElementById("category");
//     let productSKU = document.getElementById("sku");

//     // Assign innerHTML Values
//     breadcrumbCategory.innerHTML = category;
//     breadcrumbProduct.innerHTML = title;

//     productImage.src = thumbnail;
//     productDescription.innerHTML = description;
//     productTitle.innerHTML = title;
//     productStock.innerHTML = `Stock: ${stock}`;
//     productPrice.innerHTML = `₱${(price*57).toLocaleString()}`;
//     productCategory.innerHTML = `Category: ${categories}`;
//     productSKU.innerHTML = `SKU: ${sku}`;
//     document.title = title;

// })
// .catch(error => console.error('Error: ', error));