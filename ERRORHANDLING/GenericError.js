function processValue(a, b) {
  // Case 1: divide by zero
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  // Case 2: missing input
  if (a == null || b == null) {
    throw new Error("Inputs are required");
  }

  // Case 3: negative values
  if (a < 0 || b < 0) {
    throw new Error("Values must be positive");
  }

  return a / b;
}

try {
  console.log(processValue(10, -1));   // try different cases
} catch (err) {
  console.log("Error:", err.message);
}