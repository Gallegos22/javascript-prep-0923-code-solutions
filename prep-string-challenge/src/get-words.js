/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  } else {
    const newword = string.split(' ');
    return newword;
  }
}
