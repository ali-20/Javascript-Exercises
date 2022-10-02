const current_users = ["Ali", "Hamza", "Shady", "Bruno"];
const new_users = ["shady", "Bruno", "Slim", "Dolphin1@"];

registerNewUsers(new_users);

function registerNewUsers(users) {
  for (let i = 0; i < users.length; i++) {
    const isInCurrentUsers = current_users.find((user) => {
      return user.toLowerCase() == users[i].toLowerCase();
    });

    if (isInCurrentUsers) {
      console.log("This username is not Available");
    } else {
      console.log("This username is Available");
    }
  }
}
