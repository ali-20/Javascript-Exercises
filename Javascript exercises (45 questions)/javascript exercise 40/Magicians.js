const magicians = ["Harry", "Abra", "Dabra", "DyingMoon", "AllALoneEagle"];
show_magicians(magicians);

function show_magicians(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    console.log("Magician:", magicians[i]);
  }
}
