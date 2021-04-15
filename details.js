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
    const details = await response.json();

    console.log(details);
    createHtml(details);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = error;
  }
}

getId();

function createHtml(details) {
  detailContainer.innerHTML = `<div class ="cardDetail">
  <img src="${product.images[0].src}" alt="${product.name}">
  <h2>${product.name}</h2>
  <p>Price: ${product.prices.price}£</p>
                              </div>`;
}
