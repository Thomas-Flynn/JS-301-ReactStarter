// Written as funtion
var add = function(x, y) {
    return x + y;
}

// Written as fat arrow
var add = (x,y) => x+y;

// Another example
// concise body syntax, implied "return"
var func = x => x * x;                  

// with block body, explicit "return" needed
var func = (x, y) => { return x + y; };

// Consider the following example where the first and second version of the function are the same.
let greetUser = username => `Hello, ${username}!`;
let greetUserSecondVersion = username => { return `Hello, ${username}!` };
console.log(greetUser('Kenn') === greetUserSecondVersion('Kenn')); // true
console.log(greetUser('Kenn'));
console.log(greetUserSecondVersion('Kenn'));

// Here is a simple version that represents the syntax of our React Component.
var function = () => {
    console.log("Hello React");
}