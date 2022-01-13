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

  // products from category 1: PC PORTABLE
const c1p1 = new Product('Dell Inspiron 15', '3511-426', '4', 'PC Portable 15.6 Full HD (1920 x 1080) - Intel Core i3-1115G4 Dual-Core 3 GHz - 8 Go DDR4 - SSD 256 Go - 1.7 Kg - Windows 10S', '499.95', '1', '1');
const c1p2 = new Product('Asus Vivobook 17', 'R702QA-BX100T', '7', 'PC Portable 17.3 HD+ (1600 x 900) - AMD A12-9720P Quad-Core 2.7 GHz - 8 Go DDR4 - SSD 512 Go - 2.1 Kg - Windows 10', '549.99', '1', '2');
const c1p3 = new Product('Lenovo IdeaPad 3 15IML05', '81WB0124FR', '2', 'PC Portable 15.6 Full HD (1920 x 1080) - Intel Core i3-10110U Dual-Core 2.1 GHz - 8 Go DDR4 - SSD 512 Go - 1.7 Kg - Windows 11', '569.99', '1', '3');
const c1p4 = new Product('Asus Vivobook 15', 'F515EA-BQ1359', '12', 'PC Portable 15.6 Full HD (1920 x 1080) - Intel Core i3-1115G4 Dual-Core 3 GHz - 8 Go DDR4 - SSD 256 Go - 1.8 Kg - Sans Windows', '499.99', '1', '4');
const c1p5 = new Product('Acer Aspire 3', 'A317-33-P9DS', '22', 'PC Portable 17.3 HD+ (1600 x 900) - Intel Pentium Silver N6000 Quad-Core 1.1 GHz - 4 Go DDR4 - SSD 256 Go - 2.5 Kg - Windows 10', '469.99', '1', '5');


// products from category 2: Ultrabook
const c2p1 = new Product('Asus Zenbook 14 NumPad', 'UX425JA-HM025T', '4', 'Ultrabook 14 Full HD (1920 x 1080) - Intel Core i5-1035G1 Quad-Core 1 GHz - 8 Go LPDDR4X - SSD 512 Go - 1.2 Kg - Windows 10', '829.99', '2', '6');
const c2p2 = new Product('Asus Vivobook 14', 'R415FA-EK018T', '7', 'Ultrabook 14 Full HD (1920 x 1080) - Intel Core i5-10210U Quad-Core 1.6 GHz - 8 Go DDR4 - SSD 512 Go - 1.6 Kg - Windows 10', '629.95', '2', '7');
const c2p3 = new Product('Dell Inspiron 13', '5310-202', '2', 'Ultrabook 13.3 QHD+ (2560 x 1600) - Intel Core i7-11370H Quad-Core 3.0 GHz - 8 Go LPDDR4X - SSD 512 Go - 1.28 Kg - Windows 10 Pro', '959.95', '2', '8');
const c2p4 = new Product('Lenovo IdeaPad 3 14ITL6', '82H70054FR', '12', 'Ultrabook 14 Full HD (1920 x 1080) - Intel Core i5-1135G7 Quad-Core 2.4 GHz - 8 Go DDR4 - SSD 512 Go - 1.4 Kg - Windows 11', '749.99', '2', '9');
const c2p5 = new Product('Acer TravelMate P2', 'P214-53-5543', '22', 'Ultrabook 14 Full HD (1920 x 1080) - Intel Core i5-1135G7 Quad-Core 2.4 GHz - 8 Go DDR4 - SSD 256 Go - 1.6 Kg - Windows 10 Pro', '749.99', '2', '10');



// products from category 3: PC Portable Gamer
const c3p1 = new Product('MSI GF65 Thin', '10UE-041XFR', '4', 'PC Portable Gamer 15.6 Full HD (1920 x 1080) 144 Hz - Intel Core i7-10750H Hexa-Core 2.6 GHz - 16 Go DDR4 - SSD 512 Go - Nvidia GeForce RTX 3060 - 1.86 Kg - Sans Windows', '1299.99', '3', '11');
const c3p2 = new Product('MSI GF66 Katana', '11UC-213XFR', '7', 'PC Portable Gamer 15.6 Full HD (1920 x 1080) 144 Hz - Intel Core i5-11400H Hexa-Core 2.7 GHz - 8 Go DDR4 - SSD 512 Go - Nvidia GeForce RTX 3050 - 2.1 Kg - Sans Windows', '949.99', '3', '12');
const c3p3 = new Product('Asus ROG Strix G15', 'G513QE-HN009T', '2', 'PC Portable Gamer 15.6 Full HD (1920 x 1080) 144 Hz - AMD Ryzen 7 5800H Octo-Core 3.2 GHz - 16 Go DDR4 - SSD 512 Go - Nvidia GeForce RTX 3050 Ti - 2.1 Kg - Windows 10', '1299.99', '3', '13');
const c3p4 = new Product('MSI GF76 Katana', '11UD-021XFR', '12', 'PC Portable Gamer 17.3 Full HD (1920 x 1080) 144 Hz - Intel Core i7-11800H Octo-Core 2.3 GHz - 16 Go DDR4 - SSD 512 Go - Nvidia GeForce RTX 3050 Ti - 2.3 Kg - Sans Windows', '1299.99', '3', '14');
const c3p5 = new Product('Dell G15', '5510-615', '22', 'PC Portable Gamer 15.6 Full HD (1920 x 1080) 120 Hz - Intel Core i5-10200H Quad-Core 2.4 GH - 8 Go DDR4 - SSD 256 Go - Nvidia GeForce RTX 3050 - 2.7 Kg - Sans Windows', '799.99', '3', '15');



// products from category 4: Portable Mac
const c4p1 = new Product('Apple MacBook Air M1 13.3 - 8 Go / 256 Go - Gris sidéral', 'MK173FNDSFA', '4', 'PC Ultra portable 13.3 Rétina (2560 x 1600) - Apple M1 Octo-Core 3.2 GHz - 8 Go LPDDR4X - SSD 256 Go - 1.29 Kg - macOS Big Sur', '1129.99', '4', '16');
const c4p2 = new Product('Apple MacBook Pro M1 Pro (2021) 16 Gris Sidéral', 'MK183FN/A', '7', 'PC portable 16.2 Liquid Retina XDR (3456 x 2234) - Apple M1 Pro 10-Core / GPU 16-Core - 16 Go LPDDR5 - SSD 512 Go - 2.1 Kg - macOS 12.0', '2749.99', '4', '17');
const c4p3 = new Product('Apple MacBook Air M1 - 8 Go / 256 Go - Or', '183FPOIA76', '2', 'PC Ultra portable 13.3 Rétina (2560 x 1600) - Apple M1 Octo-Core 3.2 GHz - 8 Go LPDDR4X - SSD 256 Go - 1.29 Kg - macOS Big Sur', '1129.99', '4', '18');
const c4p4 = new Product('Apple MacBook Air M1 - 8 Go / 512 Go - Gris sidéral', 'LKJFD321A76', '12', 'PC Ultra portable 13.3 Rétina (2560 x 1600) - Apple M1 Octo-Core 3.2 GHz - 8 Go LPDDR4X - SSD 512 Go - 1.29 Kg - macOS Big Sur', '1399.99', '4', '19');


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

        const productDiv = `<div class="card" style="width: 18em;">
                <img src="img/${product.categoryText}/${product.productIdText}.jpg" class="card-img-top" alt="${product.nameText}">
                <div class="card-body">
                  <h5 class="card-title">${product.nameText}</h5>
                  <p class="card-text">${product.descriptionText}</p>
                  <h6 class="card-subtitle mb-2">Tarif: ${product.priceText}</h6>
                  <a href="#" class="btn btn-primary addToCart" data-id="${product.productIdText}">Ajouter au panier</a>
                </div>
              </div>`;
        document.querySelector('#productContainer').innerHTML += productDiv;
    }
};


const hideAllProducts = () => {
        document.querySelector('#productContainer').innerHTML = "<p></p>";
};


// switch between each category
const displayCategory = (category) => {
    hideAllProducts();
    for(const product of productComponents){
        if(category == product.categoryText) {
            const productDiv = `<div class="card" style="width: 18em;">
                <img src="img/${product.categoryText}/${product.productIdText}.jpg" class="card-img-top" alt="${product.nameText}">
                <div class="card-body">
                  <h5 class="card-title">${product.nameText}</h5>
                  <p class="card-text">${product.descriptionText}</p>
                  <h6 class="card-subtitle mb-2">Tarif: ${product.priceText}</h6>
                  <a href="#" class="btn btn-primary addToCart" data-id="${product.productIdText}">Ajouter au panier</a>
                </div>
              </div>`;
            document.querySelector('#productContainer').innerHTML += productDiv;
        }
    }
};



const addTotalPriceHtml = (price) => {
    const htmlTotalPrice = `<div class="row">
                                <div class="col-lg-6">
                                    <h6>Prix Total: ${price}</h6>
                                </div>
                            </div>`;
    document.querySelector('.modal-body').innerHTML += htmlTotalPrice;
};

const addToCart = (productid) => {
    for(const product of productComponents){
        if(productid == product.productIdText) {
            const productRow = `<div class="row">
            <div class="col-lg-9">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${product.nameText}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Quantité: ${product.quantityText}</h6>
                      <p class="card-text">${product.descriptionText}</p>
                      <a href="#" class="card-link">Modifier quantité</a>
                      <a href="#" class="card-link deleteProduct" data-id="${product.productIdText}>Supprimer</a>
                    </div>
                  </div>
            </div>
        </div>`;
            document.querySelector('.modal-body').innerHTML += productRow;
            totalPrice += parseFloat(product.priceText);
        }
    }
    addTotalPriceHtml(totalPrice);
};


const deleteProduct = (productid) => {
    for(const product of productComponents){
        if(productid == product.productIdText) {
            contactComponents.splice(i, 1);
            const productRow = ' ';
        }
    }
};


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
        
});


document.addEventListener('DOMContentLoaded', () => {
    viewAllProducts();
});