const placesInMyWishList=["Jordan","Mangolia","Machu Pichu","Antarctica","Russia"];
const placesInMyWishListAlphabeticalOrder=[...placesInMyWishList].sort();
const placesInMyWishListReversed=[...placesInMyWishList].reverse();
const placesInMyWishListReOrdered=[...placesInMyWishListReversed].reverse();

console.log("\n")
console.log("Original Order:")
console.log("===================")
printPlaces(placesInMyWishList);

console.log("\n")
console.log("Alphabetical Order:")
console.log("===================")
printPlaces(placesInMyWishListAlphabeticalOrder);

console.log("\n")
console.log("Original Order:")
console.log("===================")
printPlaces(placesInMyWishList);

console.log("\n")
console.log("Reverse Alphabetical Order:")
console.log("===================")
printPlaces(placesInMyWishListAlphabeticalOrder.reverse());

console.log("\n")
console.log("Original Order:")
console.log("===================")
printPlaces(placesInMyWishList);

console.log("\n")
console.log("Reverse Order:")
console.log("===================")
printPlaces(placesInMyWishListReversed);

console.log("\n")
console.log("ReOrdered to Original form:")
console.log("===================")
printPlaces(placesInMyWishListReOrdered);

placesInMyWishList.sort();

console.log("\n")
console.log("Sorted Original List:")
console.log("===================")
printPlaces(placesInMyWishList);

placesInMyWishList.reverse();

console.log("\n")
console.log("Reversed Original List:")
console.log("===================")
printPlaces(placesInMyWishList);


//helper method
function printPlaces(placesList){
    for(let i=0; i<placesList.length; i++){
        console.log(placesList[i])
    }
}