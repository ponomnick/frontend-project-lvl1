import {
  randomNumber, greeting, getAnswer, checkAnswer,
} from './index.js';

const gcd = (m, n) => {
  if (!n) {
    return m;
  }
  return gcd(n, m % n);
};

const gameRun = () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  const countRounds = 3;
  const minNum = 1;
  const maxNum = 15;
  for (let i = countRounds; i > 0; i -= 1) {
    const num1 = randomNumber(minNum, maxNum);
    const num2 = randomNumber(minNum, maxNum);
    const expression = `${num1} ${num2}`;
    const answer = Number(getAnswer(expression));
    const trueAnswer = gcd(num1, num2);
    const check = checkAnswer(trueAnswer, answer, userName);
    if (!check) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameRun;
