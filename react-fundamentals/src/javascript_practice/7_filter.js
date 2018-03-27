// If you don't know the .filter() method already, you need to know it. 
// If you already know what it does, it doesn't hurt to practice it.
// Let's add our data to the file, just an array of instructor objects, 
// that includes their name and special skills:

const instructors = [
    { name: 'Aaron', specialty: 'Entomology', medals: 7 },
    { name: 'Carolyn', specialty: 'Fencing', medals: 5 },
    { name: 'Kenn', specialty: 'Norse Mythology', medals: 8 },
    { name: 'Paul', specialty: 'Tuvan throat singing', medals: 4 },
    { name: 'Quincy', specialty: 'Quantum Mechanics', medals: 2 },
    { name: 'Tom', specialty: 'Chemistry', medals: 3 }   
]

// Let's say that we want to iterate over this array and filter it based on the number of medals 
// each instructor had. We only want to get instructors that have 5 or more medals.

let instructor_names = [];

for (let i = 0; i < instructors.length; i++) {
    if(instructors[i].medals >= 5){
        instructor_names.push(instructors[i].name);
    }
}
console.log(instructor_names);

// We have to create an empty array to push the names into as we iterate through. This approach is fine for learning programming, but with ES6, the .filter function came along to make things more sleek for common tasks like iterating through a collection, and filtered based on a specific property.
// Here it is:

const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);

// The .filter() function requires a return value. This is a key rule of using .filter(), 
// so the fat arrow is taking care of that requirement.
// Get some practice. Try the following. Fix the code:

const instructorInfo = instructors.filter(instructor => instructor.name='Aaron');
console.log(instructorInfo);

