const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

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

  it('Multiply two numbers', function () {
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

  it('Calls req with sum and index values', function () {
    const req = {};
    const res = {
      load: function load() {
        console.log('Called!');
      },
    };
    sinon.stub(res, 'load').returns('xpto');
    const math = new Math();
    math.printSum(req, res, 5, 5);
    // res.restore();
    expect(res.load.calledOnce).to.be.true;
    expect(res.load.args[0][1]).to.equal(10);
    expect(res.load.args[0][0]).to.equal('index');
  });
});
