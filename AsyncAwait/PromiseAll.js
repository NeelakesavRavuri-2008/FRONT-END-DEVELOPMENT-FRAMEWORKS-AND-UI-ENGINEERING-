function task(name, time) {
  return new Promise(resolve => {
    setTimeout(() => resolve(name), time);
  });
}

async function runAll() {
  const results = await Promise.all([
    task("A", 1000),
    task("B", 2000),
    task("C", 1500)
  ]);

  console.log("All done:", results);
}

runAll();