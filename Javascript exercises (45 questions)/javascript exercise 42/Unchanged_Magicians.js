const magicians = ["Harry", "Abra", "Dabra", "DyingMoon", "AllALoneEagle"];
show_magicians(magicians);
const greatMagicians = make_great([...magicians]);
show_magicians(greatMagicians);
show_magicians(magicians);

function show_magicians(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    console.log("Magician:", magicians[i]);
  }
}

function make_great(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "The Great " + magicians[i];
  }
  return magicians;
}
