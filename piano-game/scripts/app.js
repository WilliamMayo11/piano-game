console.log('js is linked');



$(document).ready(function(){

//  add class 'key' to black keys and white keys.
 const wKeys = $('.w-key');
 wKeys.addClass('key');
 const bKeys = $('.b-key');
 bKeys.addClass('key');

const backgroundTest = $('body');
backgroundTest.css('backgroundColor', 'green');


// ARRAYS
const cMajor = ['c1', 'd1', 'e1', 'f1', 'g1', 'a1', 'b1', 'c2'];
const fMajor = ['f1', 'g1', 'a1', 'aSharp1', 'c2', 'd2', 'e2', 'f2'];
const dMajor = ['d1', 'e1', 'f-sharp1', 'g1', 'a1', 'b1', 'c-sharp2', 'd2'];
let playedScale = [];
let currentScale = cMajor;

// EVENT LISTENERS
$('.key').click(markCorrect);
$('button').click(reset);


// FUNCTIONS

// generate new challenge
function currentChallenge() {
  const challenge = $('.challenge');
  challenge.html("C Major Scale");
}
currentChallenge();



let count = 0;
function markCorrect() {
  // console.log ($(this).attr('id'));




  if ($(this).attr('id') === currentScale[count]) {
    playedScale.push($(this).attr('id'));
    $(this).css('backgroundColor', 'blue');
    count++;
  } else {
    alert('wrong key');
  }
  checkScale();
  console.log(playedScale)
}

function reset() {
  playedScale = [];
  $('.w-key').css('backgroundColor', 'white');
  $('.b-key').css('backgroundColor', 'black');
  count = 0
}

function checkScale() {
    if (count === 8) {
    alert('scale played correctly')
    reset();
    currentScale = dMajor;

  }
}




// // Event Listener
// $('key').mouseover(highlight);

// function hightlight() {
//   let keys = $('key');
//   keys.css('backgroundColor', 'blue');
//  }
























});
