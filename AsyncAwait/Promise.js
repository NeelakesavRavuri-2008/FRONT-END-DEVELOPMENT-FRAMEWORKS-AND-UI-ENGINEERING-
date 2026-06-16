function exmp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task completed");
      resolve();
    },3000);
  });
}

exmp()
  .then(() => {
    console.log("Promise fulfilled");
  })
  .catch(() => {
    console.log("Promise failed");
  });
