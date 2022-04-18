import {
  randomNumber, greeting, getAnswer, checkAnswer,
} from './index.js';

const minNum = 1;
const maxNum = 10;

const getProgression = (lengthProgression) => {
  const progression = [];
  const step = randomNumber(minNum, maxNum);
  let result = 0;
  for (let i = 0; i < lengthProgression; i += 1) {
    result += step;
    progression.push(result);
  }
  return progression;
};
const getReplaceArray = (progression, replaceChar = '..') => {
  const newArr = [...progression];
  const firstIndex = 0;
  const indexReplacer = randomNumber(firstIndex, progression.length - 1);
  const charBeforeReplace = progression[indexReplacer];
  newArr[indexReplacer] = replaceChar;
  const nums = newArr.join(' ');

  return [charBeforeReplace, nums];
};

const gameRun = () => {
  const userName = greeting();
  console.log('What number is missing in the progression?');
  const countRounds = 3;
  const minLengthProgression = 5;
  const maxLengthProgression = 10;

  for (let i = countRounds; i > 0; i -= 1) {
    const lengthProgression = randomNumber(minLengthProgression, maxLengthProgression);
    const progression = getProgression(lengthProgression);
    const [trueAnswer, expression] = getReplaceArray(progression);
    const answer = Number(getAnswer(expression));
    const check = checkAnswer(trueAnswer, answer, userName);
    if (!check) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameRun;
