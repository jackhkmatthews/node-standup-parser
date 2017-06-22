const expect = require('chai').expect;
const StandupParser = require('../lib/standup-parser.js').StandupParser;
const standupParser = new StandupParser;

describe('standupParser', function() {
  describe('standupParser.parse', function() {

    it('should return a promise', function(){
      expect(standupParser.parse(`${__dirname}/week.txt`)).to.be.a('promise');
    });

    it('should return a string', function(done) {

      //call the function we're testing
      var result = standupParser.parse(`${__dirname}/week.txt`);

      //assertions
      result.then(data => {
        expect(data).to.be.a('string');
        done();
      });
    });

  });
});