import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${userName}!`);
const isEven = (num) => (num % 2 === 0);

const minNum = 1;
const maxNum = 15;
const steps = 3;

export const randomNumber = (min, max) => {
  const num1 = Math.ceil(min);
  const num2 = Math.floor(max);
  return Math.floor(Math.random() * (num2 - num1) + num1);
};

console.log('Answer "yes" if the number is even, otherwise answer "no"');

export const getAnswer = (str) => {
  console.log(`Question: ${str}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const checkAnswer = () => {
  for (let i = steps; i > 0; i -= 1) {
    const number = randomNumber(minNum, maxNum);
    const trueAnswer = isEven(number) === true ? 'yes' : 'no';
    const answer = getAnswer(number);
    if (trueAnswer === answer) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}.
                    Let's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};
