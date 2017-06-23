const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const StandupParser = require('../lib/standup-parser.js').StandupParser;
const standupParser = new StandupParser;
const filePath = `${__dirname}/week.txt`;
const weekAsString = require('./week-as-string').weekAsString;
const formationsArray = require('./week-as-string').formationsArray;

describe('standupParser', function() {
  describe('standupParser.getFile', function() {
  
    const result = standupParser.getFile(filePath);

    it('should return a promise', function(){
      expect(result).to.be.a('promise');
    });

    it('should return a string', function() {
      return expect(result).to.eventually.be.a('string');
    });

    it('should return an exact string', function() {
      return expect(result).to.eventually.equal(weekAsString);
    });

  });

  describe('standupParser.getFormationStrings', function(){
    const result = standupParser.getFormationStrings(weekAsString);
    it('should return an array', function(){
      expect(result).to.be.a('array');
    });

    it('should return an array with number of elements equal to number of days', function(){
      expect(result.length).to.equal(5);
    });
  })

  describe('standupParser.getFormations', function() {
    const result = standupParser.getFormations(weekAsString);



    it('should return an array of arrays', function(){
      result.forEach(element => {
        expect(element).to.be.an('array');
      });
    });

    it('should return an array whose elements are arrays of strings', function(){
      result.forEach(element => {
        element.forEach(nestedElement => {
          expect(nestedElement).to.be.a('string');
        });
      });
    });

    it('should return an exact array of arrys of specific names', function(){
      expect(result).to.deep.equal(formationsArray);
    });

  });
});