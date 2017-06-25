const fs = require('fs');
const filePath        = `${__dirname}/../test/week.txt`;

class StandupParser {
  constructor(){}

  parse(filepath){
    return this.getFile(filepath)
      .then(dataAsString => {
        this.datesArray = this.getDates(dataAsString);
        this.formationStrings = this.getFormationStrings(dataAsString);
        this.formationArrays = this.getFormations(this.formationStrings);
        this.orderStrings = this.getOrderStrings(dataAsString);
        this.passesArrays = this.getPassesArrays(this.orderStrings);
        return new Promise((resolve) => {
          resolve(this.makeWeek(this.datesArray, this.formationArrays, this.passesArrays));
        });
      });
  }

  getFile(filepath){
    return new Promise((resolve, reject) => {
      fs.readFile(filepath, 'utf8', (err, dataAsString) => {
        resolve(dataAsString);
        reject(err);
      });
    });
  }

  getFormationStrings(string){
    return string.match(/:.*?\|/ig);
  }

  getNames(string){
    return string.match(/(\w+)/ig);
  }

  getFormations(array) {
    return array.map(element => {
      return this.getNames(element);
    });
  }

  getOrderStrings(string){
    return string.match(/\|.*/ig);
  }

  makePass(from, to, index) {
    return {
      passIndex: index,
      from,
      to
    };
  }

  getPassesArray(namesArray) {
    console.log(namesArray);
    return namesArray.map((name, index, array) => {
      return this.makePass(name, array[index+1], index);
    }).filter(pass => {
      return !!pass.to;
    });
  }

  getPassesArrays(array) {
    return array.map(element => {
      return this.getPassesArray(this.getNames(element));
    });
  }

  getDates(string) {
    return string.match(/..\/..\/..../ig);
  }

  makeDay(date, formationArray, passesArray) {
    return {
      date,
      formation: formationArray,
      passes: passesArray
    };
  }

  makeWeek(datesArray, formationArrays, passesArrays) {
    return datesArray.map((date, index) => {
      return this.makeDay(date, formationArrays[index], passesArrays[index]);
    });
  }

}

const standupParser = new StandupParser;

standupParser.parse(filePath)
  .then(data => console.log(data));

exports.StandupParser = StandupParser;
