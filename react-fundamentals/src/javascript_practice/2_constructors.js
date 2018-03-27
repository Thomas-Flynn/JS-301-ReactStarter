class User {
    constructor (first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}
var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); // undefined
console.log(userOne.f); // Paul
console.log(userOne.l); // O'Connor
console.log(userOne); // User (f: "Paul", l: "O'Connor", email: "poconnor@elevenfifty.org");

class Player {
    constructor (nameFirst, nameLast, number, ppg) {
        this.fn = nameFirst;
        this.ln = nameLast;
        this.number = number;
        this.ppg = ppg;
    }
}
var playerOne = new Player("Reggie", "Miller", 31, 27);
var playerTwo = new Player("Michael", "Jordan", 23, 33);
var playerThree = new Player("Bill", "Russell", 6, 16);
console.log(playerOne.ln+', '+playerOne.fn, 'Number: '+playerOne.number, 'PPG: ',playerOne.ppg);
console.log(playerTwo.ln+', '+playerTwo.fn, 'Number: '+playerTwo.number, 'PPG: ',playerTwo.ppg);
console.log(playerThree);

class Car {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
var carOne = new Car("Tesla", "S", 2015);
var carTwo = new Car("Lexus", "IS 250", 2014);
var carThree = new Car("Jeep", "Grand Cherokee Limited", 2015);
console.log(carOne);
console.log(carTwo);
console.log(carThree);