async function fetchUsers() {

  try {

    throw new Error("Server not responding");

  } catch (err) {

    console.log("Service Error:", err.message);

  }

}

fetchUsers();