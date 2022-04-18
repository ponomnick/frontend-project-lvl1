import {
  randomNumber, greeting, getAnswer, checkAnswer,
} from './index.js';

const isEven = (num) => (num % 2 === 0);

const gameRun = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const countRounds = 3;
  const minNum = 1;
  const maxNum = 15;
  for (let i = countRounds; i > 0; i -= 1) {
    const num = randomNumber(minNum, maxNum);

    const answer = getAnswer(num);
    const trueAnswer = isEven(num) ? 'yes' : 'no';
    const check = checkAnswer(trueAnswer, answer, userName);
    if (!check) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameRun;
