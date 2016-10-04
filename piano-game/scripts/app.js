console.log('js is linked');



$(document).ready(function(){

//  add class 'key' to black keys and white keys.
 const wKeys = $('.w-key');
 wKeys.addClass('key');
 const bKeys = $('.b-key');
 bKeys.addClass('key');

const backgroundTest = $('body');
backgroundTest.css('backgroundColor', 'green');

const cMajor = ['c1', 'd1', 'e1', 'f1', 'g1', 'a1', 'b1', 'c2']
let playedScale = [];
// Test Event Listenter
$('.key').click(markCorrect);
// test function
// function playNote() {
//   console.log(this);
//   $(this).css('backgroundColor', 'blue');
// }

let count = 0;
function markCorrect() {
  // console.log ($(this).attr('id'));
  if (($(this).attr('id')) === cMajor[count]) {
    playedScale.push($(this).attr('id'));
    $(this).css('backgroundColor', 'blue');
    count++;
  } else {
    alert('wrong key');
  }
  checkScale();
  console.log(playedScale)
}

function checkScale() {
    if (count === 8) {
    alert('scale played correctly')
  }
}




// // Event Listener
// $('key').mouseover(highlight);

// function hightlight() {
//   let keys = $('key');
//   keys.css('backgroundColor', 'blue');
//  }
























});
