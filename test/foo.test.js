
var chai = require('chai')
var foo = require('../src/foo')

var expect = chai.expect

describe('foo', function () {


  it('is a function', function () {

    expect(foo).to.be.a('function')
  })


  it('returns a number', function () {

    var num = foo()

    expect(num).to.be.a('number')
  })


  it('adds 1 to a number', function () {

    var sum = foo(2)

    expect(sum).to.equal(3)
  })

})
