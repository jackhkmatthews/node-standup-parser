const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const StandupParser = require('../lib/standup-parser.js').StandupParser;
const standupParser = new StandupParser;
const weekAsString = require('./week-as-string').weekAsString;
const filePath = `${__dirname}/week.txt`;

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
});