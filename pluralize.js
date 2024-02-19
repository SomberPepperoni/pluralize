// Returns the number and pluralized form, like "5 cats" or "1 dog", given
// a noun and count.
function pluralize(noun, count) {
  // TODO: Implement this function.
  let result = undefined;
  if (count > 1 || count < 1) {
    result = count + " " + noun + "s";
  }
  else {
    result = count + " " + noun;
  }
  return result;
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE.

module.exports = {
  pluralize
};
