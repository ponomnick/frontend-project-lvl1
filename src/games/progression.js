import getRandomNumber from '../utils/generateRandomNumber.js';
import runGame from '../index.js';

const minNum = 1;
const maxNum = 10;

const description = 'What number is missing in the progression?';

const getProgression = (lengthProgression) => {
  const progression = [];
  const step = getRandomNumber(minNum, maxNum);
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
  const indexReplacer = getRandomNumber(firstIndex, progression.length - 1);
  const charBeforeReplace = String(progression[indexReplacer]);
  newArr[indexReplacer] = replaceChar;
  const nums = newArr.join(' ');

  return [nums, charBeforeReplace];
};

const getDataGame = () => {
  const minLengthProgression = 5;
  const maxLengthProgression = 10;
  const lengthProgression = getRandomNumber(minLengthProgression, maxLengthProgression);
  const progression = getProgression(lengthProgression);
  const [question, correctAnswer] = getReplaceArray(progression);
  return [question, correctAnswer];
};
const startGameProgress = () => {
  runGame(description, getDataGame);
};
export default startGameProgress;
