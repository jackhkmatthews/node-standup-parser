const expect = require('chai').expect;
const fs = require('fs');

describe('getFormationStrings', function() {
  const getFormationStrings = require('../lib/parser-methods.js').getFormationStrings;

  const inputString = `11/04/2016: ken > alex > fred > ryan > greg > ed > chris > radek > florence > vanda | alex > ed > florence > vanda > ryan > greg > ken > chris > radek > fred

12/04/2016: ken > fred > alex > chris > ryan > ed > radek > james > vanda > florence > greg | alex > james > ryan > florence >fred > chris > ken > ed > radek > greg > vanda

13/04/2016: ken > vanda > james > ed > radek > chris > ryan > greg | greg > ryan > chris > radek > ed > james > vanda > ken

14/04/2016: ken > fred > alex > ryan > chris > james > ed > radek > florence > vanda > greg | vanda > chris > florence > ryan > ed > fred > greg > ken > james > radek > alex

15/04/2016: ken > fred > ryan > vanda > ed > alex > chris > james > florence > greg > radek | alex > ed > vanda > ryan > fred > ken > radek > greg > florence > james > chris`;
  
  const outputArray = [ 
    ': ken > alex > fred > ryan > greg > ed > chris > radek > florence > vanda |',
    ': ken > fred > alex > chris > ryan > ed > radek > james > vanda > florence > greg |',
    ': ken > vanda > james > ed > radek > chris > ryan > greg |',
    ': ken > fred > alex > ryan > chris > james > ed > radek > florence > vanda > greg |',
    ': ken > fred > ryan > vanda > ed > alex > chris > james > florence > greg > radek |' 
  ];

  it('should correctly convert string to array of formations from each day', function() {
    expect(getFormationStrings(inputString)).to.be.an('array');
    expect(getFormationStrings(inputString).length).to.equal(5);
    expect(getFormationStrings(inputString)).to.deep.equal(outputArray);
  });

});

describe('getFormationNames', function() {
  const getFormationNames = require('../lib/parser-methods.js').getFormationNames;

  const inputString = ': ken > alex > fred > ryan > greg > ed > chris > radek > florence > vanda |';

  const outputArray = ['ken', 'alex', 'fred', 'ryan', 'greg', 'ed', 'chris', 'radek', 'florence', 'vanda'];

  it('should convert formation string into an array of names', function() {
    expect(getFormationNames(inputString)).to.be.an('array');
    expect(getFormationNames(inputString).length).to.equal(10);
    expect(getFormationNames(inputString)).to.deep.equal(outputArray);
  });
});