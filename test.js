
const assert = require('assert');
const fibonacci = require('./app');

describe('Fibonacci', function() {
  it('Dovrebbe calcolare correttamente il numero di Fibonacci per 0', function() {
    assert.equal(fibonacci(0), 0);
  });

  it('Dovrebbe calcolare correttamente il numero di Fibonacci per 1', function() {
    assert.equal(fibonacci(1), 1);
  });

  it('Dovrebbe calcolare correttamente il numero di Fibonacci per numeri maggiori di 1', function() {
    assert.equal(fibonacci(2), 1);
    assert.equal(fibonacci(3), 2);
    assert.equal(fibonacci(4), 3);
    assert.equal(fibonacci(5), 5);
  });
});
