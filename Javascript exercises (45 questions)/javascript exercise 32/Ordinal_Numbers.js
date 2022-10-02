const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
printOridinalNumbers(numbers);

function printOridinalNumbers(numbersArray) {
  for (let i = 0; i < numbersArray.length; i++) {
    const postFix = i == 0 ? "st" : i == 1 ? "nd" : i == 2 ? "rd" : "th";
    console.log(numbersArray[i] + postFix);
  }
}
