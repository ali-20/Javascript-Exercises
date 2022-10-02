const animals = ["dog", "cat", "rabbit"];

printAnimals(animals, "");
printAnimals(animals, "would be a great pet.");

function printAnimals(animals, characteristic) {
  for (let i = 0; i < animals.length; i++) {
    console.log(animals[i] + " " + characteristic);
  }
}
