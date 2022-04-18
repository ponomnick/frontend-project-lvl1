import {
  randomNumber, greeting, getAnswer, checkAnswer,
} from './index.js';

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

const gameRun = () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const countRounds = 3;
  const minNum = 1;
  const maxNum = 15;
  for (let i = countRounds; i > 0; i -= 1) {
    const num = randomNumber(minNum, maxNum);

    const answer = getAnswer(num);
    const trueAnswer = isPrime(num) ? 'yes' : 'no';
    const check = checkAnswer(trueAnswer, answer, userName);
    if (!check) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameRun;
