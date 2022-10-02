function carInfo(manufacturer, model, color, optional_feature) {
  return {
    manufacturer,
    model,
    color: color ? color : null,
    optional_feature: optional_feature ? optional_feature : null,
  };
}

console.log(carInfo("Ferrari", "Pista 488"));
console.log(carInfo("Ferrari", "Pista 488", "black", "turbo"));
