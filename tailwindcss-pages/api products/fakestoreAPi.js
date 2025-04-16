fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    console.log("Fake Store API");
    console.log(json)

    let num = Math.floor(Math.random()*20);
    // console.log(`random is ${num}`);

    const {category, description, id, image, price, title} = json[num];

    // Product Page Section
    // Getting HTML elements
    let productImage = document.getElementById('productImage');
    let productdescription = document.getElementById('description');
    let productTitle = document.getElementById('title');
    let productPrice = document.getElementById('price');
    let productCategory = document.getElementById('category');

    productTitle.innerHTML = title;
    productdescription.innerHTML = description;
    productPrice.innerHTML = `₱${price}`;
    productImage.src = image;
    productCategory.innerHTML = `Category: ${category}`;

    // Breadcrumb Nav Elements to update
    let breadcrumbCategory = document.getElementById("breadcrumb-category");
    let breadcrumbProduct = document.getElementById("breadcrumb-product");

    breadcrumbCategory.innerHTML = category;
    breadcrumbProduct.innerHTML = title;



    // Recommended/Similar Products
    let random = Math.floor(Math.random() * 20);
    console.log(`random products ${random}`);
    let recoImage = document.getElementsByClassName("recommended-product");
    // console.log(recoImage);

    // Random Products from Fetch


    for(let i in recoImage){
        for(let x = 1; x < 4; x++){
            let {title, image, price} = json[Math.floor(Math.random() * 20)];

            recoImage[i].getElementsByTagName("img")[0].src = image;
            recoImage[i].getElementsByTagName("p")[0].innerHTML = `₱${price}`;
            recoImage[i].getElementsByTagName("h3")[0].innerHTML = title;
        }
    }

    let {source} = recoImage[1].getElementsByTagName("img");
    console.log(recoImage[1].getElementsByTagName("img"));
  }
)
  .catch(error => console.error('Error: ',error));