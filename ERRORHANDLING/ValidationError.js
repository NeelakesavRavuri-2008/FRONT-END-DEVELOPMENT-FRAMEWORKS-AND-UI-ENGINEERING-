class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function processInput(value) {
  if (!value) {
    throw new ValidationError("Input is required");
  }
  if (value < 0) {
    throw new ValidationError("Value must be positive");
  }
}

try {
  processInput(-5);
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Validation issue:", err.message);
  } else {
    console.log("Unknown error");
  }
}