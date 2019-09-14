let score = 0;
let userScore = document.getElementById('score');
let starter = document.getElementById("startBtn");
let result_box_text = document.getElementById('finalScore');
let result_box = document.getElementById('resultBox');
let questions_box = document.getElementById('questionsBox');
let quizCont = document.getElementById('quizCont');

/* GET NAME */
function getName()
{
  let usInput = document.getElementById('usInput');
  let name = document.getElementById('username'); 
  name.innerHTML = usInput.value;
}


/*Form Group*/
let first = document.getElementById('questionFirst');
let second = document.getElementById('questionSecond');
let third = document.getElementById('questionThird');
let fourth = document.getElementById('questionFourth');
let fifth = document.getElementById('questionFifth');
let sixth = document.getElementById('questionSixth');


					/*QUESTIONS*/
let firstQ = document.getElementById('firstQuestion');
let secondQ = document.getElementById('secQuestion');
let thirdQ = document.getElementById('thirdQuestion');
let fourthQ = document.getElementById('fourthQuestion');
let fifthQ = document.getElementById('fifthQuestion');
let sixthQ = document.getElementById('sixthQuestion');

					/*ANSWERS*/
let fRespond = document.getElementById('fResp');
let secRespond = document.getElementById('secondResp');
let thirdRespond = document.getElementById('thirdResp');
let fourthRespond = document.getElementById('fourthResp');
let fifthRespond = document.getElementById('fifthResp');
let sixthRespond = document.getElementById('sixthResp');

				/*EVENT LISTENERS*/

fRespond.addEventListener('input', CheckFAnswer);
secRespond.addEventListener('input',  CheckSecAnswer);
thirdRespond.addEventListener('input', CheckThirdAnswer);
fourthRespond.addEventListener('input', CheckFourthAnswer);
fifthRespond.addEventListener('input', CheckFifthAnswer);
sixthRespond.addEventListener('input', CheckSixthAnswer);


function launchQuiz(){
  questions_box.style.display = 'block';
  first.style.display="block";
  firstQ.innerHTML = 'What is the biggest planet in the Solar System?';
  document.getElementById('quiz-info-text').style.display = 'none';
}

function CheckFAnswer()
{

fRespondInput = fRespond.value;
  if (fRespondInput == "Jupiter" || fRespondInput == "jupiter") 
  {
  	fRespond.style.backgroundColor = 'lightblue';
  	score++;
    secondQ.innerHTML = 'How many days God created the Earth for?';
    first.style.display = "none";
    second.style.display="block";
  	
  }

  else if (fRespondInput == "") 
  {
  	fRespond.style.backgroundColor = '#fff';
  }

  else
  {
  	fRespond.style.backgroundColor = '#cf0000';
  }

}

function CheckSecAnswer()
{

secRespondInput = secRespond.value;
  if (secRespondInput == "Six" || 
  	  secRespondInput == "six" || secRespondInput == "6") 
  {
  	secRespond.style.backgroundColor = 'lightblue';
  	score++;
    thirdQ.innerHTML = 'Which is the capital of Nortern Ireland';
    second.style.display = "none";
    third.style.display="block";
  
  }

  else if (secRespondInput == "") 
  {
  	secRespond.style.backgroundColor = 'white';
  }

  else
  {
  	secRespond.style.backgroundColor = 'red';
  }

}

function CheckThirdAnswer()
{

thirdRespondInput = thirdRespond.value;
  if (thirdRespondInput == "Belfast" ||  
  	  thirdRespondInput == "belfast") 
  {
  	thirdRespond.style.backgroundColor = 'lightblue';
  	score++;
    fourthQ.innerHTML = 'Which year did Titanic crushed into an iceberg';
    third.style.display = "none";
    fourth.style.display="block";
  }

  else if (thirdRespondInput == "") 
  {
  	thirdRespond.style.backgroundColor = 'white';
  }

  else
  {
  	thirdRespond.style.backgroundColor = 'red';
  }

}

function CheckFourthAnswer()
{
	fourthRespondInput = fourthRespond.value;
  if (fourthRespondInput == "1912") 
  {
  	fourthRespond.style.backgroundColor = 'lightblue';
  	score++;
    fifthQ.innerHTML = 'Which year did the World War II ended?';
    fourth.style.display = "none";
    fifth.style.display="block";
  }

  else if (fourthRespondInput == "") 
  {
  	fourthRespond.style.backgroundColor = 'white';
  }

  else
  {
  	fourthRespond.style.backgroundColor = 'red';
  }

}


function CheckFifthAnswer()
{
	fifthRespondInput = fifthRespond.value;
  if (fifthRespondInput == "1945") 
  {
  	fifthRespond.style.backgroundColor = 'lightblue';
  	score++;
    sixthQ.innerHTML = 'In which country Adolf Hitler was born?';
    fifth.style.display = "none";
    sixth.style.display="block";
  }

  else if (fifthRespondInput == "") 
  {
  	fifthRespond.style.backgroundColor = 'white';
  }

  else
  {
  	fifthRespond.style.backgroundColor = 'red';
  }

}


function CheckSixthAnswer()
{
	sixthRespondInput = sixthRespond.value;
  if (sixthRespondInput == "Austria" ||
      sixthRespondInput == "austria") {
  	sixthRespond.style.backgroundColor = 'lightblue';
  	score++;
  	userScore.innerHTML = score;
    questions_box.style.display = 'none';
    result_box_text.innerHTML = score;
    result_box.style.display='flex';
}

  else if (sixthRespondInput == "") 
  {
  	sixthRespond.style.backgroundColor = 'white';
  }

  else
  {
  	sixthRespond.style.backgroundColor = 'red';
  }

}

				






