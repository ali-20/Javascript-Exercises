function sandwichSummary(...args) {
  const sandWitchItems = args[0];
  const sandWitchName = args[1];

  console.log("Customer Order:");
  console.log("Sandwitch Name:" + sandWitchName);
  console.log("Sandwitch Items:");
  for (let i = 0; i < sandWitchItems.length; i++) {
    console.log(sandWitchItems[i]);
  }
}

sandwichSummary(
  ["lattace,tomato,mint,eggs,mayo,mustard sauce"],
  "Cheese Sandwich"
);
