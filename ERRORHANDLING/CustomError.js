class AppError extends Error {

  constructor(message, code) {
    super(message);

    this.code = code;
    this.name = "AppError";
  }
}

class NetworkError extends AppError {

  constructor(status, url) {
    super(`HTTP ${status} at ${url}`, "NETWORK_ERROR");

    this.name = "NetworkError";
  }
}

class ValidationError extends AppError {

  constructor(field, message) {
    super(`${field}: ${message}`, "VALIDATION_ERROR");

    this.name = "ValidationError";
  }
}


// Simulated UI functions
function showToast(message) {
  console.log("TOAST:", message);
}

function setFieldError(message) {
  console.log("FIELD ERROR:", message);
}

function reportToSentry(err) {
  console.log("SENTRY LOG:", err);
}


// Centralized error handler
function handleError(err) {

  if (err instanceof NetworkError) {

    showToast(
      "Connection problem. Please check your network."
    );

  } else if (err instanceof ValidationError) {

    setFieldError(err.message);

  } else {

    reportToSentry(err);

  }
}


// TESTING

try {

  // Simulate validation issue
  throw new ValidationError(
    "email",
    "Invalid email format"
  );

} catch (err) {

  handleError(err);

}


try {

  // Simulate network issue
  throw new NetworkError(
    500,
    "/api/users"
  );

} catch (err) {

  handleError(err);

}


try {

  // Unknown unexpected issue
  throw new Error("Database crashed");

} catch (err) {

  handleError(err);

}