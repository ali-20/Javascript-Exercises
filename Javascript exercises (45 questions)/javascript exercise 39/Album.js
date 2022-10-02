function make_album(artist_name, album_title, no_of_tracks) {
  return {
    artist_name,
    album_title,
    no_of_tracks: no_of_tracks ? no_of_tracks : null,
  };
}

console.log(make_album("Abc", "123"));
console.log(make_album("Abc", "123", 2));
console.log(make_album("Abcd", "1234", 2));
