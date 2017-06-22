function getFormationStrings(string) {
  return string.match(/:.*?\|/ig);
}

function getFormationNames(string) {
  return string.match(/(\w+)/ig);
}

module.exports.getFormationStrings = getFormationStrings;
module.exports.getFormationNames = getFormationNames;