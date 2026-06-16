function fetchData(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) resolve("Data loaded");
      else reject("Error occurred");
    }, 1000);
  });
}

async function test() {
  try {
    const res = await fetchData(true);
    console.log(res);
  } catch (err) {
    console.log("Caught:", err);
  } finally {
    console.log("Finished");
  }
}

test();