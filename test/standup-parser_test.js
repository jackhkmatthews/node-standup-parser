const mocha           = require('mocha');
const describe        = mocha.describe;
const it              = mocha.it;
const chai            = require('chai');
const expect          = chai.expect;
const chaiAsPromised  = require('chai-as-promised');

chai.use(chaiAsPromised);

const StandupParser   = require('../lib/standup-parser.js').StandupParser;
const standupParser   = new StandupParser;

const filePath               = `${__dirname}/week.txt`;
const weekAsString           = require('./mock-data').weekAsString;
const formationAsString      = require('./mock-data').formationsAsStrings[0];
const formationsAsStrings    = require('./mock-data').formationsAsStrings;
const orderAsStrings         = require('./mock-data').ordersAsStrings[0];
const ordersAsStrings        = require('./mock-data').ordersAsStrings;
const namesArray             = require('./mock-data').namesArray;
const orderNamesArray        = require('./mock-data').orderNamesArray;
const passesArray            = require('./mock-data').passesArray;
const datesArray             = require('./mock-data').datesArray;
const day                    = require('./mock-data').day;

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

  describe('standupParser.getFormationStrings', function(){

    const result = standupParser.getFormationStrings(weekAsString);

    it('should return an array', function(){
      expect(result).to.be.an('array');
    });

    it('should return an array with number of elements equal to number of days', function(){
      expect(result.length).to.equal(5);
    });

    it('should return an array of strings which start with |', function(){
      result.forEach(element => {
        expect(element[0] === ':').to.be.true;
      });
    });
  });

  describe('standupParser.getFormations', function() {

    const result = standupParser.getFormations(formationsAsStrings);

    it('should return an array of arrays', function(){
      result.forEach(element => {
        expect(element).to.be.an('array');
      });
    });

    it('should return specific names', function() {
      result.forEach((element, index) => {
        expect(element).to.deep.equal(namesArray[index]);
      });
    });

  });

  describe('standupParser.getOrderStrings', function(){

    const result = standupParser.getOrderStrings(weekAsString);

    it('should return an array', function(){
      expect(result).to.be.an('array');
    });

    it('should return an array with number of elements equal to number of days', function(){
      expect(result.length).to.equal(5);
    });

    it('should return an array of string which start with |', function(){
      result.forEach(element => {
        expect(element[0] === '|').to.be.true;
      });
    });

  });

  describe('standupParser.makePass', function() {

    const result = standupParser.makePass('ken', 'ed', 2);

    it('should return an object', function() {
      expect(result).to.be.an('object');
    });

    it('should return a pass object', function() {
      expect(result).to.deep.equal({
        passIndex: 2,
        from: 'ken',
        to: 'ed'
      });
    });

  });

  describe('standupParser.getPassesArray', function() {

    const result = standupParser.getPassesArray(orderNamesArray);

    it('should return an array', function(){
      expect(result).to.be.an('array');
    });

    it('should return specific passes', function() {
      result.forEach((element, index) => {
        expect(element).to.deep.equal(passesArray[index]);
      });
    });

  });

  describe('standupParser.getPassesArrays', function() {

    const result = standupParser.getPassesArrays(ordersAsStrings);

    it('should return an array', function() {
      expect(result).to.be.an('array');
    });

    it('should return an array of passes', function() {
      expect(result[0]).to.deep.equal(passesArray);
    });

  });

  describe('standupParser.getDates', function() {

    const result = standupParser.getDates(weekAsString);

    it('should return an array', function() {
      expect(result).to.be.an('array');
    });

    it('should return an array with length equal to numeber of days', function() {
      expect(result.length).to.equal(5);
    });

    it('should return a specific array', function() {
      expect(result).to.deep.equal(datesArray);
    });

  });

  describe('standupParser.makeDay', function() {

    const result = standupParser.makeDay('11/04/2016', namesArray[0], passesArray);

    it('should return an object', function() {
      expect(result).to.be.an('object');
    });

    it('should an object with .date = string', function(){
      expect(result.date).to.be.a('string');
    });

    it('should an object with .formation = array', function(){
      expect(result.formation).to.be.a('array');
    });

    it('should an object with .passes = array', function(){
      expect(result.passes).to.be.a('array');
    });

    it('should deep equal a specific object', function() {
      expect(result).to.deep.equal(day);
    });

  });

  describe('standupParser.makeJSON', function() {

    const result = standupParser.makeJSON(datesArray, namesArray, passesArray);

    it('should return an array', function() {
      expect(result).to.be.an('array');
    });

    it('return an array with elements with key value pairs', function() {
      result.forEach(element => {
        expect(element).to.have.property('date');
        expect(element).to.have.property('formation');
        expect(element).to.have.property('passes');
      });
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

  });

});
