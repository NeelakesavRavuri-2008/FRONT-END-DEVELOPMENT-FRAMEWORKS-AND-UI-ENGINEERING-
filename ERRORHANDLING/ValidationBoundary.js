function validateUser(user) {

  if (typeof user.age !== "number") {
    throw new Error("Age must be a number");
  }

  console.log("Valid user");
}


try {

  validateUser({
    age: "twenty"
  });

} catch (err) {

  console.log("Validation Error:", err.message);

}