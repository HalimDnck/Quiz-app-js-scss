//VARS
const questionText = document.querySelector(".question");
let answerButton = [];
answerButton = document.querySelectorAll('.answer-container > button');
const container = document.querySelector(".answer-container");

let startIndex;
let questionList = [];
let firstQuestion;
let optionRandom;




//Fetch Questions
fetch("questions/questions.json").then(
    response => response.json()
).then(responseJson => {



    nextQuestion();
    function nextQuestion(){
        container.style.display = "flex";
        startIndex = Math.floor(Math.random() * 20);
    
        firstQuestion = responseJson.questions[startIndex];

        questionText.innerHTML = firstQuestion.question;
        
        optionRandom = Math.floor(Math.random() * 4);

        for(let i=0; i < 3; i++){
            let listofElements = [0,1,2,3,0,1,2,3,0,1,2,3];
            answerButton[listofElements[optionRandom+i]].innerText = firstQuestion.incorrect_answers[i];
        }

        if(optionRandom==0){
            answerButton[3].innerText = firstQuestion.correct_answer;
            answerButton[3].classList.add("true");
        }
        else{
            answerButton[optionRandom-1].innerText = firstQuestion.correct_answer;
            answerButton[optionRandom-1].classList.add("true");
        }
    }

    

    
    
   


})



