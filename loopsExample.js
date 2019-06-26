console.log('Loops Example');

//while loop
// while(CONDITION) {
//  CODE TO RUN WHILE CONDITION IS TRUE
// } //end while

let index = 0;
const max = 10;

while (index < max) {
  console.log('in the while loop. index:', index);
  index ++;
}
console.log('index after while loop:', index);


// for(create var, create condition, incriment)
//for loop
for(let i=0; i<max; i++) {
  console.log('in for loop. i:', i);
} //end for
//console.log('i after the for loop. i:', i); not going to run, i doesn't exist outside the for codeblock

let hand =['Q', '3', 'J', '9', '6', 'K', 'A'];
for(let i=0; i<hand.length; i++) {
  console.log('for loop', hand[i]);
  if (hand[i] === '9') {
    console.log('match!!!');
  } //end match
} //end for

// for in
for(i in hand) {
  console.log('for in loop', hand[i]);
  if(hand[i] === '9') {
    console.log('match!!');
  } //end match
} // end for in

//for of
for(card of hand) {
  console.log('for of loop', card);
  if (card === '9') {
    console.log('match!!!');
  } //end match
} //end for of

for(i = 0; i < hand.length; i++) {
  console.log('uninitialized for loop', hand[i]);
} //weird for loop

let numberList = [3, 6, 7, 10];
myValue = 3;
// this is how i should do it:
for (let i = 0; i < numberList.length; i++) {
    console.log(numberList[i]);
    if (i === myValue) {
        console.log('Hurray!');
    } // end if
} //end for

//below will "work" but be wrong. and i learned a thing!
for (i in numberList) {
  console.log(numberList[i]);
  if (i == myValue) {
    console.log('Hurray!');
  } //end if
    console.log(typeof i); //why is === not working?
} //end for in
// so the above block only works with ==, it'll not work with strict ===. found out that i was registering as a string in the for in loop
//for...in loops then must change types. Interesting.
