const mocha           = require('mocha');
const describe        = mocha.describe;
const it              = mocha.it;
const chai            = require('chai');
const expect          = chai.expect;
const chaiAsPromised  = require('chai-as-promised');

chai.use(chaiAsPromised);

const StandupParser   = require('../lib/standup-parser.js').StandupParser;
const standupParser   = new StandupParser();

const filePath               = `${__dirname}/dummy/week.txt`;
const weekAsString           = require('./mock-data').weekAsString;
const dayStrings             = require('./mock-data').dayStrings;
const formationAsString      = require('./mock-data').formationsAsStrings[0];
const namesArray             = require('./mock-data').namesArray;
const orderNamesArray        = require('./mock-data').orderNamesArray;
const weekObject             = require('./mock-data').weekObject;

describe('standupParser', function() {

  describe('standupParser.getFile', function() {

    const result = standupParser.getFile(filePath);

    it('should return a promise', function(){
      expect(result).to.be.a('promise');
    });

    it('should eventually return a string', function() {
      return expect(result).to.eventually.be.a('string');
    });

    it('should eventually return an exact string', function() {
      return expect(result).to.eventually.equal(weekAsString);
    });

  });

  describe('standupParser.getNames', function() {

    const result = standupParser.getNames(formationAsString);

    it('should return an array', function(){
      expect(result).to.be.an('array');
    });

    it('should return an array of strings', function(){
      result.forEach(element => {
        expect(element).to.be.a('string');
      });
    });

    it('should return an array of strings with no whitespaces', function(){
      result.forEach(element => {
        for (var i = 0; i < element.length; i++) {
          expect(element[i] === '').to.be.false;
        }
      });
    });

  });

  describe('standupParser.getDate', function() {

    const result = standupParser.getDate(weekAsString);

    it('should return a string', function() {
      expect(result).to.be.a('string');
    });

  });

  describe('standupParser.getDayStrings', function() {

    const result = standupParser.getDayStrings(weekAsString);

    it('should return an exact array', function() {
      expect(result).to.be.an('array');
      expect(result.length).to.equal(5);
      expect(result).to.deep.equal(dayStrings);
    });

  });

  describe('standupParser.getPositions', function() {

    const result = standupParser.getPositions(dayStrings[0]);

    it('should return an exact array', function() {
      expect(result).to.be.an('array');
      expect(result.length).to.equal(10);
      expect(result).to.deep.equal(namesArray[0]);
    });

  });

  describe('standupParser.getSummaries', function() {

    const result = standupParser.getSummaries(dayStrings[0]);

    it('should return an exact array', function() {
      expect(result).to.be.an('array');
      expect(result.length).to.equal(10);
      expect(result).to.deep.equal(orderNamesArray);
    });

  });

  describe('standupParser.makeDayObject', function() {

    const day = weekObject[0];
    const result = standupParser.makeDayObject(day.date, day.positions, day.summaries);

    it('should return an exact object', function() {
      expect(result).to.be.an('object');
      expect(result).to.deep.equal(day);
    });

  });

  describe('standupParser.getDayObjectLog', function() {

    it('should return a success log', function() {
      const day = weekObject[0];
      day.date = new Date(day.date);
      const success = ['success', `${day.date} has complete data`];
      const result = standupParser.getDayObjectLog(day);
      expect(result).to.be.an('array');
      expect(result).to.deep.equal(success);
    });

    it('should return an errorr log', function() {
      const day = weekObject[0];
      day.date = new Date(day.date);
      day.positions.pop();
      const error = ['error', `${day.date} has incomplete data and has not been parsed`];
      const result = standupParser.getDayObjectLog(day);
      expect(result).to.be.an('array');
      expect(result).to.deep.equal(error);
    });

  });

  describe('standupParser.parse', function() {

    const result = standupParser.parse(filePath);

    it('should return a promise', function() {
      expect(result).to.be.a('promise');
    });

    it('should eventually return an array', function() {
      expect(result).to.eventually.be.an('array');
    });

    it('should eventually return an exact array', function() {
      expect(result).to.eventually.be.an('array');
    });

  });

});
