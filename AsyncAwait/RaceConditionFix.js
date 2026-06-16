let currentRequest = 0;
let currentProduct = null;

function showProduct(product) {
  currentProduct = product;
  console.log("Showing:", product);
}

function fetchProduct(name) {
  return new Promise(resolve => {
    const delay = Math.random() * 2000;
    setTimeout(() => {
      resolve(`${name} (loaded in ${delay.toFixed(0)}ms)`);
    }, delay);
  });
}

async function loadProduct(name) {
  const requestId = ++currentRequest;

  const data = await fetchProduct(name);

  if (requestId !== currentRequest) {
    console.log("Ignored:", data);
    return;
  }

  showProduct(data);
}

// User clicks quickly
loadProduct("Nike Shoes");
loadProduct("Adidas Shoes");