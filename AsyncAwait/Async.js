function exmp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task completed");
      resolve();
    },3000 );
  });
}

async function run() {
  await exmp();
  console.log("Promise fulfilled");
}

run();