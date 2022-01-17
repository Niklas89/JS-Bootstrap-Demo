class Product {
    constructor(name, ref, quantity, description, price, category, productId) {
      this.name = name;
      this.ref = ref;
      this.quantity = quantity;
      this.description = description;
      this.price = price;
      this.category = category;
      this.productId = productId;
    }

  }

  const generateComponent = (product) => {
    const nameText = product.name;
    const refText = product.ref;
    const quantityText = product.quantity;
    const descriptionText = product.description;
    const priceText = product.price;
    const categoryText = product.category;
    const productIdText = product.productId;
    return {
      nameText,
      refText,
      quantityText,
      descriptionText,
      priceText,
      categoryText,
      productIdText
    };
  }

  let totalPrice = 0;
  // quantity per product in the cart: { productid1: 'quantity', productid2: 'quantity', productid3: 'quantity' }
  let cartQuantity = {};
   // price per product in the cart depending on the quantity. It multiplies cart quantity x price product and stores it in cartPrice
  let cartPrice = {};
  // true or false if the product is already in the cart
  let productAlreadyInCart = {};

  // products from category 1: PC PORTABLE
const c1p1 = new Product('Dell Inspiron 15', '3511-426', 4, 'PC Portable 15.6 Full HD (1920 x 1080) - Intel Core i3-1115G4 Dual-Core 3 GHz - 8 Go DDR4 - SSD 256 Go - 1.7 Kg - Windows 10S', 499.95, 1, 1);
const c1p2 = new Product('Asus Vivobook 17', 'R702QA-BX100T', 7, 'PC Portable 17.3 HD+ (1600 x 900) - AMD A12-9720P Quad-Core 2.7 GHz - 8 Go DDR4 - SSD 512 Go - 2.1 Kg - Windows 10', 549.99, 1, 2);
const c1p3 = new Product('Lenovo IdeaPad 3 15IML05', '81WB0124FR', 2, 'PC Portable 15.6 Full HD (1920 x 1080) - Intel Core i3-10110U Dual-Core 2.1 GHz - 8 Go DDR4 - SSD 512 Go - 1.7 Kg - Windows 11', 569.99, 1, 3);
const c1p4 = new Product('Asus Vivobook 15', 'F515EA-BQ1359', 12, 'PC Portable 15.6 Full HD (1920 x 1080) - Intel Core i3-1115G4 Dual-Core 3 GHz - 8 Go DDR4 - SSD 256 Go - 1.8 Kg - Sans Windows', 499.99, 1, 4);
const c1p5 = new Product('Acer Aspire 3', 'A317-33-P9DS', 22, 'PC Portable 17.3 HD+ (1600 x 900) - Intel Pentium Silver N6000 Quad-Core 1.1 GHz - 4 Go DDR4 - SSD 256 Go - 2.5 Kg - Windows 10', 469.99, 1, 5);


// products from category 2: Ultrabook
const c2p1 = new Product('Asus Zenbook 14 NumPad', 'UX425JA-HM025T', 4, 'Ultrabook 14 Full HD (1920 x 1080) - Intel Core i5-1035G1 Quad-Core 1 GHz - 8 Go LPDDR4X - SSD 512 Go - 1.2 Kg - Windows 10', 829.99, 2, 6);
const c2p2 = new Product('Asus Vivobook 14', 'R415FA-EK018T', 7, 'Ultrabook 14 Full HD (1920 x 1080) - Intel Core i5-10210U Quad-Core 1.6 GHz - 8 Go DDR4 - SSD 512 Go - 1.6 Kg - Windows 10', 629.95, 2, 7);
const c2p3 = new Product('Dell Inspiron 13', '5310-202', 2, 'Ultrabook 13.3 QHD+ (2560 x 1600) - Intel Core i7-11370H Quad-Core 3.0 GHz - 8 Go LPDDR4X - SSD 512 Go - 1.28 Kg - Windows 10 Pro', 959.95, 2, 8);
const c2p4 = new Product('Lenovo IdeaPad 3 14ITL6', '82H70054FR', 12, 'Ultrabook 14 Full HD (1920 x 1080) - Intel Core i5-1135G7 Quad-Core 2.4 GHz - 8 Go DDR4 - SSD 512 Go - 1.4 Kg - Windows 11', 749.99, 2, 9);
const c2p5 = new Product('Acer TravelMate P2', 'P214-53-5543', 22, 'Ultrabook 14 Full HD (1920 x 1080) - Intel Core i5-1135G7 Quad-Core 2.4 GHz - 8 Go DDR4 - SSD 256 Go - 1.6 Kg - Windows 10 Pro', 749.99, 2, 10);



// products from category 3: PC Portable Gamer
const c3p1 = new Product('MSI GF65 Thin', '10UE-041XFR', 4, 'PC Portable Gamer 15.6 Full HD (1920 x 1080) 144 Hz - Intel Core i7-10750H Hexa-Core 2.6 GHz - 16 Go DDR4 - SSD 512 Go - Nvidia GeForce RTX 3060 - 1.86 Kg - Sans Windows', 1299.99, 3, 11);
const c3p2 = new Product('MSI GF66 Katana', '11UC-213XFR', 7, 'PC Portable Gamer 15.6 Full HD (1920 x 1080) 144 Hz - Intel Core i5-11400H Hexa-Core 2.7 GHz - 8 Go DDR4 - SSD 512 Go - Nvidia GeForce RTX 3050 - 2.1 Kg - Sans Windows', 949.99, 3, 12);
const c3p3 = new Product('Asus ROG Strix G15', 'G513QE-HN009T', 2, 'PC Portable Gamer 15.6 Full HD (1920 x 1080) 144 Hz - AMD Ryzen 7 5800H Octo-Core 3.2 GHz - 16 Go DDR4 - SSD 512 Go - Nvidia GeForce RTX 3050 Ti - 2.1 Kg - Windows 10', 1299.99, 3, 13);
const c3p4 = new Product('MSI GF76 Katana', '11UD-021XFR', 12, 'PC Portable Gamer 17.3 Full HD (1920 x 1080) 144 Hz - Intel Core i7-11800H Octo-Core 2.3 GHz - 16 Go DDR4 - SSD 512 Go - Nvidia GeForce RTX 3050 Ti - 2.3 Kg - Sans Windows', 1299.99, 3, 14);
const c3p5 = new Product('Dell G15', '5510-615', 22, 'PC Portable Gamer 15.6 Full HD (1920 x 1080) 120 Hz - Intel Core i5-10200H Quad-Core 2.4 GH - 8 Go DDR4 - SSD 256 Go - Nvidia GeForce RTX 3050 - 2.7 Kg - Sans Windows', 799.99, 3, 15);



// products from category 4: Portable Mac
const c4p1 = new Product('Apple MacBook Air M1 13.3 - 8 Go / 256 Go - Gris sidéral', 'MK173FNDSFA', 4, 'PC Ultra portable 13.3 Rétina (2560 x 1600) - Apple M1 Octo-Core 3.2 GHz - 8 Go LPDDR4X - SSD 256 Go - 1.29 Kg - macOS Big Sur', 1129.99, 4, 16);
const c4p2 = new Product('Apple MacBook Pro M1 Pro (2021) 16 Gris Sidéral', 'MK183FN/A', 7, 'PC portable 16.2 Liquid Retina XDR (3456 x 2234) - Apple M1 Pro 10-Core / GPU 16-Core - 16 Go LPDDR5 - SSD 512 Go - 2.1 Kg - macOS 12.0', 2749.99, 4, 17);
const c4p3 = new Product('Apple MacBook Air M1 - 8 Go / 256 Go - Or', '183FPOIA76', 2, 'PC Ultra portable 13.3 Rétina (2560 x 1600) - Apple M1 Octo-Core 3.2 GHz - 8 Go LPDDR4X - SSD 256 Go - 1.29 Kg - macOS Big Sur', 1129.99, 4, 18);
const c4p4 = new Product('Apple MacBook Air M1 - 8 Go / 512 Go - Gris sidéral', 'LKJFD321A76', 12, 'PC Ultra portable 13.3 Rétina (2560 x 1600) - Apple M1 Octo-Core 3.2 GHz - 8 Go LPDDR4X - SSD 512 Go - 1.29 Kg - macOS Big Sur', 1399.99, 4, 19);


const c1p1Component = generateComponent(c1p1);
const c1p2Component = generateComponent(c1p2);
const c1p3Component = generateComponent(c1p3);
const c1p4Component = generateComponent(c1p4);
const c1p5Component = generateComponent(c1p5);

const c2p1Component = generateComponent(c2p1);
const c2p2Component = generateComponent(c2p2);
const c2p3Component = generateComponent(c2p3);
const c2p4Component = generateComponent(c2p4);
const c2p5Component = generateComponent(c2p5);

const c3p1Component = generateComponent(c3p1);
const c3p2Component = generateComponent(c3p2);
const c3p3Component = generateComponent(c3p3);
const c3p4Component = generateComponent(c3p4);
const c3p5Component = generateComponent(c3p5);

const c4p1Component = generateComponent(c4p1);
const c4p2Component = generateComponent(c4p2);
const c4p3Component = generateComponent(c4p3);
const c4p4Component = generateComponent(c4p4);

const productComponents = [
    c1p1Component, c1p2Component, c1p3Component, c1p4Component, c1p5Component,
    c2p1Component, c2p2Component, c2p3Component, c2p4Component, c2p5Component,
    c3p1Component, c3p2Component, c3p3Component, c3p4Component, c3p5Component,
    c4p1Component, c4p2Component, c4p3Component, c4p4Component
]; 


const viewAllProducts = () => {
    for(const product of productComponents){
        mainPageProductDiv(product.categoryText, product.productIdText, product.nameText, product.quantityText, product.descriptionText, product.priceText);
    }
};


const hideAllProducts = () => {
        document.querySelector('#productContainer').innerHTML = "<p></p>";
};

const mainPageProductDiv = (category, productId, name, quantity, description, price) => {
    const productDiv = `<div class="card" style="width: 18em;">
                <img src="img/${category}/${productId}.jpg" class="card-img-top" alt="${name}">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Quantité en stock: ${quantity}</h6>
                  <p class="card-text">${description}</p>
                  <h6 class="card-subtitle mb-2">Tarif: ${price} €</h6>
                  <button class="btn btn-primary addToCart" data-id="${productId}">Ajouter au panier</button>
                </div>
              </div>`;
        document.querySelector('#productContainer').innerHTML += productDiv;
}


// switch between each category
const displayCategory = (category) => {
    hideAllProducts();
    for(const product of productComponents){
        if(category == product.categoryText) {
            mainPageProductDiv(product.categoryText, product.productIdText, product.nameText, product.quantityText, product.descriptionText, product.priceText);
        }
    }
};



const addTotalPriceHtml = (price) => {
    let htmlTotalPrice = ` `;
    if(price > 0) {
        htmlTotalPrice = `<h6>Prix Total: ${parseFloat(price).toFixed(2)} €</h6>`;
    } 
    document.querySelector('#totalPrice').innerHTML = htmlTotalPrice;
};

const addHtmlCard = (productId, quantity, name, description, ref, price) => {
    const productRow = `<div class="row" id="cartCardRow${productId}">
            <div class="col-lg-9">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${name}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Quantité en stock : ${quantity}</h6>
                      <p class="card-text">${description}</p>
                      <p class="card-text">Référence: ${ref}</p>
                      <p class="card-text"><strong>Prix: ${price} €</strong></p>
                      <p class="card-text"><strong>Prix pour x${cartQuantity[productId]} PC: ${parseFloat(cartPrice[productId]).toFixed(2)} €</strong></p>
                      <a href="#" class="card-link updateQuantity" data-id="${productId}">Modifier quantité</a>
                      <form id="cartCardEditQuantity${productId}" hidden>
                        <div class="row mb-3">
                            <div class="col-sm-10">
                                <input type="text" class="form-control form-control-sm w-50" id="colFormLabelSm" name="inputQuantity" placeholder="${cartQuantity[productId]}">
                                <button type="submit" data-id="${productId}" class="btn btn-primary btn-sm submitQuantity">OK</button>
                            </div>
                        </div>
                      </form>
                      <a href="#" class="card-link deleteProduct" data-id="${productId}">Supprimer</a>
                    </div>
                  </div>
            </div>
        </div>`;
    return productRow;
}

// add products to the cart 
const addToCart = (productid) => {
    for(const product of productComponents){
        if(productid == product.productIdText && (productAlreadyInCart[productid] == undefined || productAlreadyInCart[productid] == false)) {
            let priceFloat = parseFloat(product.priceText);
            let price = priceFloat;
            console.log(price);
            productAlreadyInCart[productid] = true;
            if(cartQuantity[productid] == undefined) {
                cartQuantity[productid] = 1;
                cartPrice[productid] = price;
               console.log("cartPrice["+productid+"] : "+cartPrice[productid]); 
               console.log("cartQuantity["+productid+"] : "+cartQuantity[productid]); 
            } else if(cartQuantity[productid] == product.quantityText) {
                // verify is the quantity of productid already in the cart is equal to the quantity in stock
                alert("Vous ne pouvez pas en ajouter plus dans le panier, car le stock est limité à "+product.quantityText+" produits.");
                return;
            }
            else { 
                cartQuantity[productid] += 1;
                cartPrice[productid] += price;
            }
        // add the HTML card with all product details to the cart
        const productRow = addHtmlCard(product.productIdText, product.quantityText, product.nameText, product.descriptionText, product.refText, price);  
        document.querySelector('.modal-body').innerHTML += productRow;
        totalPrice += price;
        } else if(productid == product.productIdText && productAlreadyInCart[productid] == true) {
            let priceFloat = parseFloat(product.priceText);
            let price = priceFloat;
            console.log(price);
            // verify is the quantity of productid already in the cart is equal to the quantity in stock
            if(cartQuantity[productid] == product.quantityText) {
                alert("Vous ne pouvez pas en ajouter plus dans le panier, car le stock est limité à "+product.quantityText+" produits.");
                return;
            }
            const productUpdateQuantity = updateHtmlCart(product.productIdText, product.quantityText, product.nameText, product.descriptionText, product.refText, price);  
            document.querySelector('#cartCardRow'+productid).innerHTML = productUpdateQuantity;
            totalPrice += price;
            console.log(price);
            console.log(totalPrice);
        }
    }
    addTotalPriceHtml(totalPrice);
};

// updateing the html in the cart after adding more products to the cart when there already are products there
const updateHtmlCart = (productId, quantity, name, description, ref, price) => {
    cartQuantity[productId] += 1;
    let priceProductCartUpdate = price;
    let multiplyQuantPrice = priceProductCartUpdate * cartQuantity[productId];
    cartPrice[productId] = multiplyQuantPrice;
    const productUpdateQuantity = `
            <div class="col-lg-9">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${name}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Quantité en stock : ${quantity}</h6>
                      <p class="card-text">${description}</p>
                      <p class="card-text">Référence: ${ref}</p>
                      <p class="card-text"><strong>Prix: ${priceProductCartUpdate} €</strong></p>
                      <p class="card-text"><strong>Prix pour x${cartQuantity[productId]} PC: ${parseFloat(cartPrice[productId]).toFixed(2)} €</strong></p>
                      <a href="#" class="card-link updateQuantity" data-id="${productId}">Modifier quantité</a>
                      <form id="cartCardEditQuantity${productId}" hidden>
                        <div class="row mb-3">
                            <div class="col-sm-10">
                                <input type="text" class="form-control form-control-sm w-50" id="colFormLabelSm" name="inputQuantity" placeholder="${cartQuantity[productId]}">
                                <button type="submit" data-id="${productId}" class="btn btn-primary btn-sm submitQuantity">OK</button>
                            </div>
                        </div>
                      </form>
                      <a href="#" class="card-link deleteProduct" data-id="${productId}">Supprimer</a>
                    </div>
                </div>
            </div>`;
    return productUpdateQuantity;
}

// update cart after modifying the quantity
const updateCart = (productid) => {
    for(const product of productComponents){
        if(productid == product.productIdText) {
            const productUpdateQuantity = `
                    <div class="col-lg-9">
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                            <h5 class="card-title">${product.nameText}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Quantité en stock : ${product.quantityText}</h6>
                            <p class="card-text">${product.descriptionText}</p>
                            <p class="card-text">Référence: ${product.refText}</p>
                            <p class="card-text"><strong>Prix: ${product.priceText} €</strong></p>
                            <p class="card-text"><strong>Prix pour x${cartQuantity[productid]} PC: ${parseFloat(cartPrice[productid]).toFixed(2)} €</strong></p>
                            <a href="#" class="card-link updateQuantity" data-id="${product.productIdText}">Modifier quantité</a>
                            <form id="cartCardEditQuantity${product.productIdText}" hidden>
                                <div class="row mb-3">
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control form-control-sm w-50" id="colFormLabelSm" name="inputQuantity" placeholder="${cartQuantity[productid]}">
                                        <button type="submit" data-id="${product.productIdText}" class="btn btn-primary btn-sm submitQuantity">OK</button>
                                    </div>
                                </div>
                            </form>
                            <a href="#" class="card-link deleteProduct" data-id="${product.productIdText}">Supprimer</a>
                            </div>
                        </div>
                    </div>`;
            document.querySelector('#cartCardRow'+productid).innerHTML = productUpdateQuantity;
        }
    }
}


const deleteProduct = (productid) => {
    const modalbody = document.querySelector('.modal-body');
    for(const product of productComponents){
        if(productid == product.productIdText) {
            const card = document.getElementById("cartCardRow"+product.productIdText);
            modalbody.removeChild(card);
            totalPrice -= cartPrice[productid];
            productAlreadyInCart[productid] = false;
            cartPrice[productid] = 0;
            cartQuantity[productid] = 0;
        }
    }
    addTotalPriceHtml(totalPrice);
};


const updateQuantity = (productid) => {
    const form = document.getElementById("cartCardEditQuantity"+productid);
    if(form.hidden == false) {
        form.hidden = true;
    } else {
        form.hidden = false;
    }   
}


const submitQuantity = (productid, event) => {
    event.preventDefault(); 
    totalPrice = 0;
    // select the input value from the form of the modified product quantity in the form
    let selectForm = document.forms["cartCardEditQuantity"+productid];
    let selectFormInput = selectForm.inputQuantity.value;
    let intInput = parseInt(selectFormInput);
    // verify if the value is a number
    if(isNaN(intInput)) {
        alert("Ce n'est pas un nombre");
        return;
    } else if(intInput < 1) {
        alert("Le nombre ne peut pas être inférieur à 1.");
        return;
    }
    for(const product of productComponents){
        if(productid == product.productIdText) {
            if(intInput > product.quantityText) {
                alert("Il n'y a pas assez de produits en stock. Entrez une quantité inférieur à "+product.quantityText);
                return;
            }
            // add the modified quantity of products in cartQuantity object
            cartQuantity[productid] = intInput;
            // multiply the quantity of products inserted in the cart by the price of the product and store the value inside cartPrice
            let multiplyQuantPrice = cartQuantity[productid] * product.priceText;
            cartPrice[productid] = multiplyQuantPrice;
            console.log(product.priceText);
            console.log(cartPrice[productid]);
            console.log(totalPrice);
            calculateTotalPrice();
        } 
        
    }
    updateCart(productid);
    addTotalPriceHtml(totalPrice);
}

const calculateTotalPrice = () => {
    for(const product of productComponents){
        for(const [key, value] of Object.entries(cartQuantity)){
            if(key == product.productIdText) {
                totalPrice += cartPrice[key];
                console.log("cartPrice["+key+"] : "+cartPrice[key]); 
             console.log("cartQuantity["+key+"] : "+cartQuantity[key]);
            console.log("totalPrice : "+totalPrice); 
            }
        }
    }
}


const emptyCart = () => {
    document.querySelector('.modal-body').innerHTML = "<p>Le panier est vide</p>";
    for(const product of productComponents) {
        for(const [key, value] of Object.entries(cartQuantity)){
            if(key == product.productIdText) {
                cartQuantity[key] = 0;
                cartPrice[key] = 0;
                productAlreadyInCart[key] = false;
            }
        }
    }
    totalPrice = 0;
    addTotalPriceHtml(totalPrice);
}


document.addEventListener('click', event => {

    if(event.target.matches('#pc-portable'))
    {
        displayCategory('1');
    }

    if(event.target.matches('#ultrabook'))
    {
        displayCategory('2');
    }

    if(event.target.matches('#pc-portable-gamer'))
    {
        displayCategory('3');
    }

    if(event.target.matches('#portable-mac'))
    {
        displayCategory('4');
    }

    if(event.target.matches('.addToCart'))
    {
        addToCart(event.target.dataset.id)
    }

    if(event.target.matches('.deleteProduct'))
    {
        deleteProduct(event.target.dataset.id)
    }

    if(event.target.matches('.updateQuantity'))
    {
        //console.log(event.path)
        updateQuantity(event.target.dataset.id)
    }
    
    if(event.target.matches('.submitQuantity'))
    {
        submitQuantity(event.target.dataset.id, event)
    }
    
    if(event.target.matches('#emptyCart'))
    {
        emptyCart()
    }
        
});


document.addEventListener('DOMContentLoaded', () => {
    viewAllProducts();
});