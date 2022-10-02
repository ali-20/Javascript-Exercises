const fav_fruits = ["Banana", "Avacado", "Mango", "WaterMelon", "BlueBerry"];
let fruit_to_search = "Banana";
searchFruit(fav_fruits, fruit_to_search);
fruit_to_search = "Avacado";
searchFruit(fav_fruits, fruit_to_search);
fruit_to_search = "Mango";
searchFruit(fav_fruits, fruit_to_search);
fruit_to_search = "WaterMelon";
searchFruit(fav_fruits, fruit_to_search);
fruit_to_search = "BlueBerry";
searchFruit(fav_fruits, fruit_to_search);

function searchFruit(fruitList, fruit) {
  const indexOfFruit = fruitList.indexOf(fruit);
  if (indexOfFruit != -1) {
    console.log("I love " + fruit);
  } else {
  }
}
