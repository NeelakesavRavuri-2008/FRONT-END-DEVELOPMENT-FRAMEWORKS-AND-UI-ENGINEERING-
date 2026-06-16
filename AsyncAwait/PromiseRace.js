function fetchProduct() {
  return new Promise(resolve =>
    setTimeout(() => resolve("Product details loaded"), 1000) // slow API
  );
}

function timeout(ms) {
  return new Promise((_, reject) =>
    setTimeout(() => reject("Server is too slow. Try again!"), ms)
  );
}

async function loadProductPage() {
  try {
    const result = await Promise.race([
      fetchProduct(),   // API call
      timeout(2000)     // max wait time
    ]);

    console.log("UI:", result);
  } catch (err) {
    console.log("UI Error:", err);
  }
}

loadProductPage();