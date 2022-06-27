
//reset responses after hitting submit button

const form = document.getElementById('quiz');

form.addEventListner('submit', function handleSubmit(event)){
  event.preventDefault();

  form.reset();
  document.body.innerHTML = "Thanks for submitting";
});


//clear screen after submit ---still doesn't work
function submitFunction(){
  form.value = '';
});

//log Responses ---incomplete
submitButton.addEventListener('click', )










//(function check(){
//  document.write('Never give up!');
//});





//set up event listeners
//submitbutton.addEventListener('click', )

























// (function(){
//   function buildQuiz(){
//     //stores output
//     const output = [];
//
//     //for loop for each question
//     myQuestions.forEach(
//       (currentQuestion, questionNumber) => {
//         //stores possible answers
//         const answers = [];
//
//         //for loop for each possible answer
//         for(letter in currentQuestion.answers){
//             //sets up HTML radio button
//             answers.push(
//               <label>
//               <inputtupe="radio"
//               name="question${questionNumber}"
//               value="${letter}">${letter} :
//               ${currentQuestion.answers[letter]}
//               </label>
//             );
//           }
//
//           //question and answer added to output
//           output.push(
//             `<div class="slide">
//               <div class ="question">
//           ${currentQuestion.question} </div>
//               <div class="answers">
//           ${answers.join("")} </div>
//             </div>`
//           );
//         }
//       };
//
//       //join output list into HTML string, add to webpage
//     quizContainer.innerHTML = output.join('');
//       }
//
//   function showResults(){
//
//     //get answer containers
//     const answerContainers = quizContainer.querySelectorAll('.answers');
//     //track participant answers
//     let numCorrect = 0;
//
//     //for loop for each question
//     myQuestions.forEach(
//       (currentQuestion, questionNumber) => {
//         //get answer the participant selected
//         const answerContainer = answerContainers[questionNumber];
//         const selector = `input[name=questions${questionNumber}]:checked`;
//         const userAnswer = (answerContainer.querySelector(selector) || {}).value;
//
//       }
//     )
//   });
//
//   function showSlide(n) {
//     slides[currentSlide].classList.remove('active-slide');
//       slides[n].classList.add('active-slide');
//       currentSlide = n;
//       if(currentSlide === 0){
//         previousButton.style.display = 'none';
//       }
//       else{
//         previousButton.style.display = 'inline-block';
//       }
//       if(currentSlide === slides.length-1){
//         nextButton.style.display = 'none';
//         submitButton.style.display = 'inline-block';
//       }
//       else{
//         nextButton.style.display = 'inline-block';
//         submitButton.style.display = 'none';
//       }
//     }
//
//     //get next and previous button slides to work
//     function showNextSlide(){
//       showSlide(currentSlide + 1);
//     }
//
//     function showPreviousSlide() {
//       showSlide (currentSlide - 1);
//     }
//
//
//     //List of Variables
//     const quizContainer = document.getElementbyID('quiz');
//     const resultsContainer = document.getElementbyId('results');
//     const submitButton = document.getElementById('submit');
//     const myQuestions = [
//       {
//         question: "I feel pleasant",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "c"   ?????
//       },
//       {
//         question: "I feel nervous and restless",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "c"
//       },
//       {
//         question: "I feel satisfied with myself",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "d"
//       },
//       {
//         question: "I wish I could be as happy as others seem to be",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "d"
//       },
//       {
//         question: "I feel like a failure",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "d"
//       },
//       {
//         question: "I feel rested",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "d"
//       },
//       {
//         question: "I feel 'calm, cool, and collected'",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "d"
//       },
//       {
//         question: "I feel that difficulties are piling up so that I cannot overcome them",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "d"
//       },
//       {
//         question: "I worry too much over something that really doesn't matter",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "d"
//       },
//       {
//         question: "I am happy",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "d"
//       },
//       {
//         question: "I have disturbing thoughts",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "d"
//       },
//       {
//         question: "I lack self-confidence",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "d"
//       },
//       {
//         question: "I feel secure",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "d"
//       },
//       {
//         question: "I make decisions easily",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "d"
//       },
//       {
//         question: "I feel inadequate",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "d"
//       },
//       {
//         question: "I am content",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "d"
//       },
//       {
//         question: "Some unimportant thought runs through my mind and bothers me",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "d"
//       },
//       {
//         question: "I take disappointments so keenly that I can't put them out of my mind",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "d"
//       },
//       {
//         question: "I am a steady person",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "d"
//       },
//       {
//         question: "I get in a state of tension or turmoil as I think over my recent concerns and interests",
//         answers: {
//           a: "1",
//           b: "2",
//           c: "3",
//           d: "4"
//         },
//         correctAnswer: "d"
//       }
//     ];
//
// //start the questionnaire
// buildQuiz();
//
// //set up prev/next navButton
// const previousButton = document.getElementById("previous");
// const nextButton = document.getElementById("next");
// const slides = document.querySelectorAll(".slide");
//   let currentSlide = 0;
//
// //display first slide
// showSlide(currentSlide);
//
// //set up event listeners
// submitButton.addEventListener('click', showResults);
// previousButton.addEventListner("lick", showPreviousSlide);
// nextButton.addEventListener("click", showNextSlide);
// })();
