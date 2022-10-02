let users = ["Ali", "Usama", "Admin", "Hamza"];
users = [];
greetUser(users);

function greetUser(users) {
  if (users.length > 0) {
    for (let i = 0; i < users.length; i++) {
      if (users[i] == "Admin") {
        console.log("Hello Admin, would you like to see a status report");
      } else {
        console.log(`Hello ${users[i]}, thank you for logging in again!`);
      }
    }
  } else {
    console.log("we need to find some users");
  }
}
