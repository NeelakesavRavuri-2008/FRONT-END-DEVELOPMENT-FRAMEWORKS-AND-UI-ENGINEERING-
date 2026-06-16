function task(name, fail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fail ? reject(name + " failed") : resolve(name);
    }, 1000);
  });
}

async function runSettled() {
  const results = await Promise.allSettled([
    task("A"),
    task("B", true),
    task("C")
  ]);

  console.log(results);
}

runSettled();