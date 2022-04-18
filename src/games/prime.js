import getRandomNumber from '../utils/generateRandomNumber.js';
import runGame from '../index.js';

const minNum = 1;
const maxNum = 15;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let divider = 2; divider <= num / 2; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};

const getDataGame = () => {
  const question = getRandomNumber(minNum, maxNum);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGamePrime = () => {
  runGame(description, getDataGame);
};
export default startGamePrime;
