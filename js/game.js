//VARS
const questionText = document.querySelector(".question");
let answerButton = [];
answerButton = document.querySelectorAll('.answer-container > button');
const container = document.querySelector(".answer-container");
const button = document.querySelector(".answer");
const startButton = document.querySelector('.start-button');
const midContainer = document.querySelector('.mid');
const wrongContainer = document.querySelector('.wrong-container');

let startIndex;
let questionList = [];
let firstQuestion;
let optionRandom;




//Fetch Questions
fetch("questions/questions.json").then(
    response => response.json()
).then(responseJson => {




    checkAnswer();
    function checkAnswer(){
    
        answerButton.forEach(function(check){
            check.addEventListener("click", function(){
                if(check.classList.contains("true")){
                    
                    check.style.background= "green";
                    setTimeout(function() { nextQuestion(); }, 3000);
                    
                }
                else{
                    wrongContainer.style.display = "block";
                    check.style.background= "red";
                    for(let a=0; a<4; a++){
                        if(answerButton[a].classList.contains("true")){
                            answerButton[a].style.background= "green";
                            answerButton[a].setAttribute('disabled','disabled');
                        }
                        else{
                            answerButton[a].setAttribute('disabled','disabled');
                        }
                    }
                    
                    
                }
            })
        })
        
    }

    
    function nextQuestion(){
        

        container.style.display = "flex";
        startIndex = Math.floor(Math.random() * 20);
    
        firstQuestion = responseJson.questions[startIndex];

        questionText.innerHTML = firstQuestion.question;
        
        optionRandom = Math.floor(Math.random() * 4);
        console.log(optionRandom)
        

        for(let a=0; a<4; a++){
            answerButton[a].classList.remove("true");
            answerButton[a].style.background = "black";
        }

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


    startButton.addEventListener('click', function(){
        startGame();
    })
    function startGame(){
        startButton.style.display= "none";
        nextQuestion();
        midContainer.style.display= "flex";
    }

    

    
    
   


})



