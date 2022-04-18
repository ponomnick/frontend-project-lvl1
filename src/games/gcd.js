import getRandomNumber from '../utils/generateRandomNumber.js';
import runGame from '../index.js';

const minNum = 1;
const maxNum = 15;

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (m, n) => {
  if (!n) {
    return m;
  }
  return gcd(n, m % n);
};

const getDataGame = () => {
  const num1 = getRandomNumber(minNum, maxNum);
  const num2 = getRandomNumber(minNum, maxNum);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [question, correctAnswer];
};

const startGameGcd = () => {
  runGame(description, getDataGame);
};

export default startGameGcd;
