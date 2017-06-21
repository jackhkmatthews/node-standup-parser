function getFormations(string) {
  return string.match(/:.*?\|/ig);
}

module.exports.getFormations = getFormations;