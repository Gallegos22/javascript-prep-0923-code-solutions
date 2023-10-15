/* exported isVowel */
function isVowel(char) {
  const lowerCaseChar = char.toLowerCase();
  if (
    lowerCaseChar === 'a' ||
    lowerCaseChar === 'e' ||
    lowerCaseChar === 'i' ||
    lowerCaseChar === 'o' ||
    lowerCaseChar === 'u'
  ) {
    return true;
  } else {
    return false;
  }
}
