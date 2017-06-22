const fs = require('fs');

class StandupParser {
  constructor(){}

  parse(filepath){
    return new Promise((resolve, reject) => {
      fs.readFile(filepath, 'utf8', (err, dataAsString) => {
        resolve(dataAsString);
        reject(err);
      });
    });
  }

}

exports.StandupParser = StandupParser;