const fs = require('fs');
const moment = require('moment');
const Logger = require('logger').Logger;
const defaultLogger = new Logger;

class StandupParser {
  constructor(logger) {
    this.logger = logger ? logger : defaultLogger;
    this.JSON = [];
  }

  parse(filepath) {
    return this.getFile(filepath)
      .then(dataAsString => {
        this.daysAsStrings = this.getDayStrings(dataAsString);
        this.daysAsStrings.forEach((dayAsString) => {
          const positions = this.getPositions(dayAsString);
          const summaries = this.getSummaries(dayAsString);
          const date = this.getDate(dayAsString);
          const dayObject = this.makeDayObject(date, positions, summaries);
          const log = this.getDayObjectLog(dayObject);
          this.logger.log(log[0], log[1]);
          if (log[0] !== 'error') {
            this.JSON.push(dayObject);
          }
        });
        return (this.JSON);
      });
  }

  getFile(filepath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filepath, 'utf8', (err, dataAsString) => {
        resolve(dataAsString);
        reject(err);
      });
    });
  }

  getDayStrings(dataAsString) {
    const daysAsStrings = dataAsString.match(/.*\w\n/ig);
    return daysAsStrings.map((dayAsString) => {
      return dayAsString.trim();
    });
  }

  getPositions(dayAsString) {
    const positionsAsString = dayAsString.match(/:.*?\|/ig)[0];
    return this.getNames(positionsAsString);
  }

  getSummaries(dayAsString) {
    const summariesAsString = dayAsString.match(/\|.*/ig)[0];
    return this.getNames(summariesAsString);
  }

  getNames(string) {
    return string.match(/(\w+)/ig);
  }

  getDate(string) {
    return moment.utc(string.match(/..\/..\/..../ig)[0], 'DD-MM-YYYY').toISOString().split('T')[0];
  }

  makeDayObject(date, positionsArray, summariesArray) {
    return {
      date,
      positions: positionsArray,
      summaries: summariesArray
    };
  }

  getDayObjectLog(dayObject) {
    if (dayObject.positions.length !== dayObject.summaries.length) {
      return ['error', `${dayObject.date} has incomplete data and has not been parsed`];
    }
    return ['success', `${dayObject.date} has complete data`];
  }

}

exports.StandupParser = StandupParser;