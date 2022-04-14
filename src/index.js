import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const randomNumber = (min, max) => {
  const num1 = Math.ceil(min);
  const num2 = Math.floor(max);
  return Math.floor(Math.random() * (num2 - num1) + num1);
};

export const getAnswer = (str) => {
  console.log(`Question: ${str}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const checkAnswer = (trueAnswer, answer, userName) => {
  if (trueAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}.
                      Let's try again, ${userName}!`);
  return false;
};
