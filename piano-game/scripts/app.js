console.log('js is linked');



$(document).ready(function(){

//  add class 'key' to black keys and white keys.
 const wKeys = $('.w-key');
 wKeys.addClass('key');
 const bKeys = $('.b-key');
 bKeys.addClass('key');



const backgroundTest = $('body');
backgroundTest.css('backgroundColor', 'green');


// SCALES referencing id's of key divs.
const cMajor = ['c1', 'd1', 'e1', 'f1', 'g1', 'a1', 'b1', 'c2'];
const gMajor = ['g1', 'a1', 'b1', 'c2', 'd2', 'e2', 'f-sharp2', 'g2'];
const dMajor = ['d1', 'e1', 'f-sharp1', 'g1', 'a1', 'b1', 'c-sharp2', 'd2'];
const aMajor = ['a1', 'b1', 'c-sharp2', 'd2', 'e2', 'f-sharp2', 'g-sharp2', 'a2'];
const eMajor = ['e1', 'f-sharp1', 'g-sharp1', 'a1', 'b1', 'c-sharp2', 'd-sharp2', 'e2'];
const bMajor = ['b1', 'c-sharp2', 'd-sharp2', 'e2', 'f-sharp2', 'g-sharp2', 'a-sharp2', 'b2'];
const gFlatMajor = ['f-sharp1', 'g-sharp1', 'a-sharp1', 'b1', 'c-sharp2', 'd-sharp2', 'f2', 'f-sharp2'];
const dFlatMajor = ['c-sharp1', 'd-sharp1', 'f1', 'f-sharp1', 'g-sharp1', 'a-sharp1', 'c2', 'c-sharp2'];
const aFlatMajor = ['g-sharp1', 'a-sharp1', 'c2', 'c-sharp2', 'd-sharp2', 'f2', 'g2', 'g-sharp2'];
const eFlatMajor = ['d-sharp1', 'f1', 'g1', 'g-sharp1', 'a-sharp1', 'c2', 'd2', 'd-sharp2'];
const bFlatMajor = ['a-sharp1', 'c2', 'd2', 'd-sharp2', 'f2', 'g2', 'a2', 'a-sharp2'];
const fMajor = ['f1', 'g1', 'a1', 'a-sharp1', 'c2', 'd2', 'e2', 'f2'];



let playedScale = [];
const currentScale = [cMajor, gMajor, dMajor, aMajor,
                    eMajor, bMajor, gFlatMajor, dFlatMajor,
                    aFlatMajor, eFlatMajor, bFlatMajor, fMajor];

// EVENT LISTENERS
$('.key').click(markCorrect);
$('button').click(reset);
$('#c1').click(playCNote);

function playCNote() {
  var cNote = $('#ac1').get(0);
  console.log(cNote);
  cNote.play();
}


// FUNCTIONS

// generate new challenge
// function currentChallenge() {
  // let challenge = $('.challenge');
  const scaleNames = ['C Major', 'G Major', 'D Major', 'A Major',
                      'E Major', 'B Major', 'F# Major', 'C# Major',
                      'Ab Major', 'Eb Major', 'Bb Major', 'F Major'];
  // challenge.html("C Major Scale");
// }
// currentChallenge();

const ball = $('.ball');
let count = 0;
function markCorrect() {
  // console.log ($(this).attr('id'));
  if ($(this).attr('id') === currentScale[count2][count]) {
    playedScale.push($(this).attr('id'));
    $(this).css('backgroundColor', 'blue');
    count++;
    const ball = $('.ball');
    ball.stop();
    ball.animate({marginTop: '10px'});
    ball.animate({marginTop: '+=240px'}, 1500);
    //console.log(ball.css('marginTop'));
  }
  console.log(ball.position().top);
  if (ball.position() < 300) {
    alert('dropped the ball');
  }
  checkScale();
  console.log(playedScale);
}

function reset() {
  playedScale = [];
  $('.w-key').css('backgroundColor', 'white');
  $('.b-key').css('backgroundColor', 'black');
  count = 0;
}
let count2 = 0;
function checkScale() {
    if (count === 8) {
    //alert('scale played correctly')
    reset();
    count2++;
    currentScale = currentScale[count2];
    let challenge = $('.challenge');
    challenge.html(scaleNames[count2 + 1]);
      if (count2 = 12) {
      alert('You played them all!');
    }
  }
}








});
