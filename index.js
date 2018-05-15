let questionNumber = 0;
let score = 0;


const quizBook = [
    {
        question: 'What is the tallest mountain in the continental United States?', 
        answers: [
          'Denali, Alaska',
          'Mount Whitney, California',
          'Pikes Peak, Colorado',
          'Gannett Peak, Wyoming',
        ],
        correctAnswer: 'Mount Whitney, California',
        rightText: ', is the tallest mountain in the lower 48 states at 14,505 feet.  Denali is taller   at 20,310 feet, but is located in Alaska, which is not technically apart of the continental   United States.',
        picture: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5402290.jpg',
        altText: 'Mt. Whitney'
    },
    {
        question: 'What is the largest lake in the US?',
        answers: [
          'The Great Salt Lake',
          'Lake Champlain',
          'Lake Michigan',
          'Lake Superior',
        ],
        correctAnswer: 'Lake Superior',
        rightText: ', which borders the states of Michigan, Minnesota, Wisconsin, and the Canadian      Province of Ontario, has an area of 31,700 square miles.',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Shovel_Point_on_the_North_Shore_of_Lake_Superior.jpg',
        altText: 'Lake Superior'
    },
    {
        question: 'What is the longest river in the United States?',
        answers: [
           'The Mississippi River',
           'The Missouri River',
           'The Colorado River',
           'The Rio Grande',
        ],
        correctAnswer: 'The Missouri River',
        rightText: ', at 2,341 miles long, is the longest river in the United States.',
        picture: 'http://essay-zone.com/wp-content/uploads/2016/08/The-Missouri-River.jpg',
        altText: 'Missouri River'
    },
    {
        question: 'What US state has the largest land area?',
        answers: [
            'California',
            'Texas',
            'Alaska',
            'Nevada',
        ],
        correctAnswer: 'Alaska',
        rightText: ' is the largest US state, taking up 18% of the US land mass with an area of 3,537,438 square miles.',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Alaska_compared_to_the_United_States_Map.png',
        altText: 'Alaska'
    },
    {
        question: 'What is the most densely populated city with over 100,000 people?',
        answers: [
            'Cambridge, Massachusetts',
            'Santa Ana, California',
            'New York, New York',
            'Chicago, Illinois',
        ],
        correctAnswer: 'New York, New York',
        rightText: ', is the most densely populated city with over 100,000 people in the United States, with approximately 29,923 people per square mile.',
        picture: 'https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_720,q_75,w_1400/v1/clients/newyorkcity/Skyline_Manhattan_Bridge_Brooklyn_Manhattan_NYC_Julienne_Schaer_022_007885f9-2552-464f-9c78-12b4082b71c2.jpg',
        altText: 'NYC skyline'
    },
    {
        question: 'Where is the lowest elevation in the US?',
        answers: [
            'Death Valley, California',
            'New Orleans, Louisiana',
            'Salton Sea, California',
            'Grand Canyon, Arizona',
        ],
        correctAnswer: 'Death Valley, California',
        rightText: ', is the lowest elevation in the US, with an elevation of 282 feet below sea level.',
        picture: 'https://www.nationalparks.org/sites/default/files/styles/wide_1x/public/20160209%20-%20shutterstock_84004441.jpg?itok=Av758wVR&timestamp=1470746468',
        altText: 'Death Valley'
    },
    {
        question: 'What percentage of the land mass of the Earth is the United States?',
        answers: [
            '11%',
            '6.1%',
            '5.6%',
            '2.0%',
        ],
        correctAnswer: '6.1%',
        rightText: ' is the percentage of land mass on the Earth that the United States occupies. At 3,531,837 square miles, the US is ranked #3 in the world, beating Canada by around 20,000 square miles.',
        picture: 'http://www.abc.es/media/ciencia/2016/09/24/land_shallow_topo_2048-ktq--620x349@abc.jpg',
        altText: 'World Map'
    },
    {
        question: 'What is the smallest state in the US in terms of land mass?',
        answers: [
            'Connecticut',
            'Hawaii',
            'Rhode Island',
            'Delaware',
        ],
        correctAnswer: 'Rhode Island',
        rightText: ' is the smallest state in the United States, with only 1,034 square miles in area.',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Rhode_Island_in_United_States_%28zoom%29_%28extra_close%29_%28US48%29.svg',
        altText: 'Rhode Island'
    },
    {
        question: 'What State has the smallest oceanic coastline?',
        answers: [
            'New Hampshire',
            'Connecticut',
            'Alabama',
            'Massachusetts',
        ],
        correctAnswer: 'New Hampshire',
        rightText: ', according to NOAA measurements, has the smallest oceanic coastline at 131 miles.',
        picture: 'https://www.nh.gov/dot/traveler/graphics/sc.jpg',
        altText: 'New Hampshire Route 125'
    },
    {
        question: 'What is the deepest lake in the US?',
        answers: [
            'Lake Ontario, New York',
            'Great Salt Lake, Utah',
            'Crater Lake, Oregon',
            'Lake Okeechobee, Florida',
        ],
        correctAnswer: 'Crater Lake, Oregon',
        rightText: ', is the deepest lake within the United States, with a max depth of 1,949 feet.',
        picture: 'https://www.nps.gov/crla/planyourvisit/images/Crater-Lake-in-Winter-2-smaller.jpg',
        altText: 'Crater Lake'
    },
     
];


//pulls data from array to populate form for quiz
function generateQuestion () {
  if (questionNumber < quizBook.length) {
    return `<div class="question-${questionNumber}">
                <h1>${quizBook[questionNumber].question}</h1>
                <form>
                    <fieldset>
                      <legend>Question</legend>
                        <label class ="answerOption" aria-labelledby = "answers">
                            <input type = "radio"  value = "${quizBook[questionNumber].answers[0]}" name ="answer" required>
                            <span>${quizBook[questionNumber].answers[0]}</span>
                        </label>
                        <label class ="answerOption" >
                            <input type = "radio"  value = "${quizBook[questionNumber].answers[1]}" name="answer" required>
                            <span>${quizBook[questionNumber].answers[1]}</span>
                        </label>
                        <label class ="answerOption" >
                            <input type= "radio"  value = "${quizBook[questionNumber].answers[2]}" name="answer" required>
                            <span>${quizBook[questionNumber].answers[2]}</span>
                        </label>
                        <label class ="answerOption" >
                            <input type ="radio"  value = "${quizBook[questionNumber].answers[3]}" name="answer" required>
                            <span>${quizBook[questionNumber].answers[3]}</span>
                        </label>
                        <button type ="submit" role= "button" class ="submitButton">Submit</button>
                    </fieldset>
                </form>
            </div>`;
  } 
  else {
      renderResults();
      restartQuiz();
      $('.questionNumber').text(10)
  }
}

//question number increase
function changeQuestionNumber () {
      questionNumber ++;
      $('.questionNumber').text(questionNumber+1);
}

//increase score number
function changeScore () {
       score ++;
}

//start quiz
//on startQuizButton click hide start div
//unhide quiz form div
function startQuiz () {
      $('.quizStart').on('click', '.startButton', function (event) {
      $('.quizStart').remove();
      $('.questionAnswerForm').css('display', 'block');
      $('.questionNumber').text(1);
  });
}

// render question in DOM
function renderQuestion () {
      $('.questionAnswerForm').html(generateQuestion());
}

//user selects answer on submit run user feedback
function userSelectAnswer () {
      $('form').on('submit', function (event) {
      event.preventDefault();
      let selected = $('input:checked');
      let answer = selected.val();
      let correctAnswer = `${quizBook[questionNumber].correctAnswer}`;
      if (answer === correctAnswer) {
          selected.parent().addClass('correct');
          ifAnswerIsCorrect();
      } 
      else {
          selected.parent().addClass('wrong');
          ifAnswerIsWrong();
      }
  });
}
//check for correctness, updates score or not
function ifAnswerIsCorrect () {
      userAnswerFeedbackCorrect();
      updateScore();
}

function ifAnswerIsWrong () {
      userAnswerFeedbackWrong();
}

//user feedback for correct answer
function userAnswerFeedbackCorrect () {
      let correctAnswer = `${quizBook[questionNumber].correctAnswer}`;
      let correctText = `${quizBook[questionNumber].rightText}`;
      $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="picture"><img src="${quizBook[questionNumber].picture}" alt="${quizBook[questionNumber].altText}"/></div><p><b><h1>Your answer is correct!</h1></b><br><span>${correctAnswer}${correctText}</span></p><button type=button class="nextButton">Next</button></div>`);
}

//user feedback for wrong answer
function userAnswerFeedbackWrong () {
      let correctAnswer = `${quizBook[questionNumber].correctAnswer}`;
      let correctText = `${quizBook[questionNumber].rightText}`;
      $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="picture"><img src="${quizBook[questionNumber].picture}" alt="${quizBook[questionNumber].altText}"/></div><p><b><h1>Your answer is incorrect!</h1></b><br>The correct answer is <span>"${correctAnswer}"</span><br><span>${correctAnswer}${correctText}</span></p><button type=button class="nextButton">Next</button></div>`);
}

//update score text
function updateScore () {
      changeScore();
      $('.score').text(score);
}

//final output for quiz, giving tally and comments
function renderResults () {
  if (score >= 8) {
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h1>Great Job!</h1><img src="https://www.gannett-cdn.com/-mm-/16837e0bd9311e6ab59f411340a627042bcba398/c=0-321-1793-1669&r=x404&c=534x401/local/-/media/2017/06/28/OHGroup/Mansfield/636342456286351922-July-4-fireworks.jpg" alt="Fireworks exploding over USA flag"/><p>You got ${score} / 10</p><p>Are you at Geography Teacher?</p><button class="restartButton">Restart Quiz</button></div>`);
  } 
  else if (score < 8 && score >= 5) {
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h1>Keep Up The Good Work!</h1><img src="https://d1avok0lzls2w.cloudfront.net/uploads/og_image/560d6946a1f612.09180931.jpg" alt="Two people standing at Whiteboard, one looking confused"/><p>You got ${score} / 10</p><p>It seems you paid some attention in school.</p><button class="restartButton">Restart Quiz</button></div>`);
  } 
  else {
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h1>Well, The Important Thing Is That You Tried.</h1><img src="https://cdn2.hercampus.com/160202-studying-stock.jpg" alt="Student Studying Hard"/><p>You got ${score} / 10</p><p>Don't Be Disheartened! One Can Never Truly Know The United States' Vast Geography!</p><button class="restartButton">Restart Quiz</button></div>`);
  }
}

//what happens when the user clicks next
function renderNextQuestion () {
      $('main').on('click', '.nextButton', function (event) {
        changeQuestionNumber();
        renderQuestion();
        userSelectAnswer();
  });
}

//resets/reloads quiz from beginning
function restartQuiz () {
      $('main').on('click', '.restartButton', function (event) {
      location.reload();
  });
}

//run quiz functions
function createQuiz () {
      startQuiz();
      renderQuestion();
      userSelectAnswer();
      renderNextQuestion();
}

$(createQuiz);
