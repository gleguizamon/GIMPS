/**
 * Actualmente el número primo más grande es el resultado de elevar 82.589.933^2 y restarle 1.
 * @param {number} num
 */
const isPrime = (num) => {
  if (num == 0 || num == 1 || num == 4) return false;
  for (let x = 2; x < num / 2; x++) {
    if (num % x == 0) return false;
  }
  return true;
};

const withArray = () => {
  const test = [];
  for (let x = 0; x < 50; x++) {
    test.push(x);
  }
  const numerosPrimos = test.filter(isPrime);
  console.log(`Los 10 últimos números primos son: ${numerosPrimos.slice(-10)}`);
}

const withIteration = () => {
  for (let i = 0; i < 50; i++) {
    isPrime(i) ? console.log(i) : null;
  }
}

// withIteration();
withArray();
// console.log(Math.pow(2, 82589933) - 1);
