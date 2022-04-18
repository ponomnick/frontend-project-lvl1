import getRandomNumber from '../utils/generateRandomNumber.js';
import runGame from '../index.js';

const chars = '+-*';
const minNum = 1;
const maxNum = 10;
const description = 'What is the result of the expression?';

const getResultOperation = (num1, num2, sign) => {
  let result = 0;
  switch (sign) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }
  return result;
};

const getDataGame = () => {
  const sign = chars[Math.floor(Math.random() * chars.length)];
  const num1 = getRandomNumber(minNum, maxNum);
  const num2 = getRandomNumber(minNum, maxNum);
  const question = `${num1} ${sign} ${num2}`;
  const correctAnswer = String(getResultOperation(num1, num2, sign));
  return [question, correctAnswer];
};

const startGameCalc = () => {
  runGame(description, getDataGame);
};

export default startGameCalc;
