const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (id === null) {
  location.href = "/";
}

const url = "https://rainydays.flowerpower.one/wp-json/wc/store/products/";
const corsFix = url + id;

const idContainer = document.querySelector(".id");
const detailContainer = document.querySelector(".details");

idContainer.innerHTML = "";

async function getId() {
  try {
    const response = await fetch(corsFix);
    const product = await response.json();

    console.log(product);
    createHtml(product);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = error;
  }
}

getId();

function createHtml(product) {
  detailContainer.innerHTML = `<div class ="cardDetail">
                                <img src="${product.images[0].src}" alt="${product.name}">
                                <h2>${product.name}</h2>
                                <p>${product.description}</p>
                                <p>Price: ${product.prices.price}£</p>
                              </div>`;
}
