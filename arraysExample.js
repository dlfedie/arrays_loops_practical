console.log('Arrays Example');

let bagel = ['bacon', 'lettuce', 'tomato'];

console.log(bagel[0]);
console.log(bagel.length);

console.log('Changing bacon to maple bacon');
bagel[0] = 'maple bacon';
console.log(bagel);
console.log(bagel.indexOf('mustard'));
console.log(bagel.indexOf('tomato'));

console.log('Let\'s add some mustard');
bagel.push('mustard');
console.log(bagel);

console.log('Aw, mustard? I meant mayo.');

bagel.pop();
console.log(bagel);

bagel.push('mayo');
console.log(bagel);

console.log('Oh right, type of bagel. Asiago!');

bagel.push('asiago bagel');
bagel.unshift('asiago bagel');

console.log(bagel);

console.log('Oh I want sesame on the bottom');

bagel.shift();
bagel.unshift('sesame bagel');

console.log(bagel);
