/* exported initial */
function initial(array) {
  const arrayWithoutBaz = [];

  for (let i = 0; i < array.length - 1; i++) {
    arrayWithoutBaz.push(array[i]);
  }
  return arrayWithoutBaz;
}
