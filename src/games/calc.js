import {
  randomNumber, greeting, getAnswer, checkAnswer,
} from './index.js';

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

const gameRun = () => {
  const userName = greeting();
  console.log('What is the result of the expression?');
  const countRounds = 3;
  const chars = '+-*';
  const minNum = 1;
  const maxNum = 10;
  for (let i = countRounds; i > 0; i -= 1) {
    const sign = chars[Math.floor(Math.random() * chars.length)];
    const num1 = randomNumber(minNum, maxNum);
    const num2 = randomNumber(minNum, maxNum);
    const expression = `${num1} ${sign} ${num2}`;
    const answer = Number(getAnswer(expression));
    const trueAnswer = getResultOperation(num1, num2, sign);
    const check = checkAnswer(trueAnswer, answer, userName);
    if (!check) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameRun;
