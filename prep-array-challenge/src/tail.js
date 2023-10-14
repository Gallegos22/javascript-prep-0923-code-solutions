/* exported tail */
function tail(array) {
  const arrayWithoutFoo = [];

  for (let i = 1; i < array.length; i++) {
    arrayWithoutFoo.push(array[i]);
  }
  return arrayWithoutFoo;
}
