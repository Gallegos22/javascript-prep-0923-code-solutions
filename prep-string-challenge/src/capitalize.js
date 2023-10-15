/* exported capitalize */
function capitalize(word) {
  const capitalized =
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return capitalized;
}
