function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log("Start");

  await delay(2000); // wait 2 seconds

  console.log("After 2 seconds it is printing");
}

demo();
console.log("End");