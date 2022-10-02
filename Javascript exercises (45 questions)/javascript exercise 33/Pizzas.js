const pizzas = ["chicken Tikka", "Fajita", "Crown Crust"];
printPizzas(pizzas);

function printPizzas(pizzas) {
  for (let i = 0; i < pizzas.length; i++) {
    console.log(`I really love ${pizzas[i]} pizza.`);
  }
}

console.log(`I like ${pizzas[0]}, I like ${pizzas[1]}, I like ${pizzas[2]}`);
console.log("I really love pizzas.");
