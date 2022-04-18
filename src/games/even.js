import getRandomNumber from '../utils/generateRandomNumber.js';
import runGame from '../index.js';

const minNum = 1;
const maxNum = 15;
const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => (num % 2 === 0);

const getDataGame = () => {
  const question = getRandomNumber(minNum, maxNum);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGameEven = () => {
  runGame(description, getDataGame);
};
export default startGameEven;
