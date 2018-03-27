// Here are some examples:
const username = 'Kenn';

console.log(`${username} is the true JS Wizard!`);

// Here's another examle. This is called a template literals 
// - which breaks things into more than one line, and it's handy with HTML.
console.log(`Hey students, 
What bugs can 
${username} 
fix 
for you today`);

// It's very common to see interpolation with an object in React.Check it out: / READ MORE ABOUT INTERPOLATION!!! 
const person = {
    username: 'Kenn',
    profession: 'Secret Agent'
}
console.log(`${person.username}, ${person.profession}`, 'extraordinaire'); //Kenn, Secret Agent, Extraordinaire

