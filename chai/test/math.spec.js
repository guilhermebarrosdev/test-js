const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;

let value = 0;

describe('Math class', function () {
  //hooks
  this.beforeEach(function () {
    value = 0;
  });
  it('Sum two numbers', function (done) {
    const math = new Math();
    this.timeout(3000);
    value = 5;
    math.sum(value, 5, (value) => {
      expect(value).to.equal(10);
      done();
    });
  });

  it.only('Multiply two numbers', function () {
    const math = new Math();
    const obj = {
      name: 'Guilherme Barros',
    };
    const obj2 = {
      name: 'Guilherme Barros',
    };
    expect(obj).to.have.property('name').equal('Guilherme Barros');
    expect(obj).to.deep.equal(obj2);
    expect(math.multiply(value, 5)).to.equal(0);
  });
});
