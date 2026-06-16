class ErrorBoundary {

  handle(componentFunction) {

    try {

      componentFunction();

    } catch (err) {

      console.log(
        "Component crashed safely:",
        err.message
      );

    }

  }

}


const boundary = new ErrorBoundary();


function UserProfile() {

  const user = null;

  console.log(user.name);

}


boundary.handle(UserProfile);