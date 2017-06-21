const expect = require('chai').expect;
const fs = require('fs');

describe('getFormations', function() {
  const getFormations = require('../lib/parser-methods.js').getFormations;

  const filePath = `${__dirname}/week.txt`;

  // beforeEach(function(done){
  //   fs.readFile(filePath, 'utf8', function(err, fileAsString) {
  //     if (err) throw err;
  //     string = fileAsString;
  //     done();
  //   });
  // });

  it('should return an array', function() {

    let string;   

    fs.readFile(filePath, 'utf8', function(err, fileAsString) {
      if (err) throw err;
      string = fileAsString;
      // done();
      expect(getFormations(string).to.be.an('array'));
    });

    // expect(getFormations(string).to.be.an('array'));
  });

});