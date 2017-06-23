const fs = require('fs');

class StandupParser {
  constructor(){}

  parse(filepath){
    const dataAsString = this.getFile(filepath);
    return dataAsString;
  }

  getFile(filepath){
    return new Promise((resolve, reject) => {
      fs.readFile(filepath, 'utf8', (err, dataAsString) => {
        resolve(dataAsString);
        reject(err);
      });
    });
  }

  getFormations(string){
    const formationStrings =  this.getFormationStrings(string);
    return formationStrings;
  }

  getFormationStrings(string){
    return string.match(/:.*?\|/ig);
  }

}

exports.StandupParser = StandupParser;