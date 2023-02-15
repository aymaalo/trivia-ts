let currentStreak = 0;
let totalScore = 0;
const isAnswerCorrect = checkAnswer(); // replace with actual function that checks if answer is correct

if (isAnswerCorrect) {
  currentStreak++;

  if (currentStreak >= 2) {
    totalScore += currentStreak;
  } else {
    totalScore++;
  }
} else {
  currentStreak = 0;
}
