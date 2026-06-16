window.addEventListener(
  "unhandledrejection",
  function(event) {

    console.log(
      "Global Handler:",
      event.reason.message
    );

  }
);


Promise.reject(
  new Error("API completely failed")
);