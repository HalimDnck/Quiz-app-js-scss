const startButton = document.querySelector('.start');
const learnButton = document.querySelector('.learn');
const aboutButton = document.querySelector('.about');

const learnText = document.querySelector('.info-text');

startButton.onmouseover = function(){
    learnText.innerHTML = " <strong>Welcome to the BrainTease</strong> <br> If you're a history buff or just someone who loves learning about the past, you've come to the right place. Our site offers a fun and engaging way to test your knowledge of historical events, figures, and places. <br> Whether you're a student looking to study for an exam or just someone who wants to brush up on their knowledge of the past, our quizzes are the perfect way to do so. We cover a wide range of historical periods and topics, from ancient civilizations to modern times. <br> So what are you waiting for? Start exploring our site today and see how much you know about the fascinating events and people that have shaped our world. Good luck, and have fun!";
}
learnButton.onmouseover = function(){
    learnText.innerHTML = "<strong>How to Play</strong> <br> Start the BrainTease: Once you're ready, click the Start Quiz button for the level you've chosen. You'll be presented with the first multiple-choice question. <br> Read the question carefully and select the answer you think is correct. Be sure to read all the answer choices before making your selection, as there may be more than one plausible option. <br> If you answered the question correctly, you'll be taken to the next question. If you answered incorrectly, you'll need to try again until you get the correct answer.";
}
aboutButton.onmouseover = function(){
    learnText.innerHTML = "<strong>About</strong> <br> Welcome to our history quiz site! We are a team of history enthusiasts who are passionate about sharing our love for the past with others. Our goal is to create a fun and educational platform that allows people to test their knowledge of historical events, figures, and places. <br> Our quizzes cover a wide range of historical periods and topics, from ancient civilizations to modern times. We believe that learning about history is not only important, but also fascinating and entertaining.";
}
