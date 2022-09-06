var readlineSync = require('readline-sync');
var userName = readlineSync.question("Enter your name: ")
console.log("Welcome " + userName + " to How well you know Chandana")
console.log("-------------------")
function checkAns(ans) {
  var userAns = readlineSync.question('Enter your answer: ').toLowerCase()
  if (userAns === ans) {
    console.log("right!")
    score += 1

  }
  else {
    console.log('wrong answer')
  }
  console.log('Your score: ' + score)
  console.log('-------------------')
}
var questions = [
  { question: "What is Chandana's major in her B.Tech?", answer: "EEE" }, { question: "What is Chandana's sister's name?", answer: "Vaishnavi" }, { question: "In which city did Chandana do her graduation?", answer: "Hyderabad" }, { question: "Where does Chandana work?", answer: "Deloitte" }]
var score = 0
for (i = 0; i < questions.length; i++) {
  console.log(questions[i].question)
  checkAns(questions[i].answer.toLowerCase())
}
console.log('Your final score is ' + score)
