let variable_age = 1;
personDescription(variable_age);
variable_age = 2;
personDescription(variable_age);
variable_age = 4;
personDescription(variable_age);
variable_age = 13;
personDescription(variable_age);
variable_age = 20;
personDescription(variable_age);
variable_age = 65;
personDescription(variable_age);

function personDescription(age) {
  if (age < 2) {
    console.log("Person is a baby");
  } else if (age >= 2 && age < 4) {
    console.log("Person is a toddler");
  } else if (age >= 4 && age < 13) {
    console.log("Person is a kid");
  } else if (age >= 13 && age < 20) {
    console.log("Person is a teenager");
  } else if (age >= 20 && age < 65) {
    console.log("Person is a adult");
  } else if (age >= 65) {
    console.log("Person is elder");
  }
}
