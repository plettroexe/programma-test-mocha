const result = document.getElementById("result");
const number = document.getElementById("number");

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const ris = fibonacci(number);

result.innerHTML = ris;

module.exports = fibonacci;
