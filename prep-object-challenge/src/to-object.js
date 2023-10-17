/* exported toObject */
function toObject(keyValuePair) {
  const object = {};
  const property = keyValuePair[0];
  const value = keyValuePair[1];
  object[property] = value;
  return object;
}
