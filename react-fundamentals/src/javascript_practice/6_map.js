// Let's add our data to the file, just an array of instructor objects, 
// that includes their name and special skills:
const instructors = [
    { name: 'Quincy', specialty: 'Quantum Mechanics' },
    { name: 'Kenn', specialty: 'Norse Mythology' },
    { name: 'Paul', specialty: 'Tuvan throat singing' },
    { name: 'Aaron', specialty: 'Entomology' },
    { name: 'Carolyn', specialty: 'Kung Fu' }
]

// Let's say that we want to iterate over this array and print just the names of the instructors. 
// We'll use a for loop:

let instructor_names = [];

for (let i = 0; i < instructors.length; i++) {
    instructor_names.push(instructors[i].name);
}
console.log(instructor_names);

// We have to create an empty array to push the names into as we iterate through. 
// This approach is fine for learning programming, but with ES5, 
// the .map() function came along to make things more sleek for common tasks like iterating 
// through a collection.
// Here it is:

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

// Notice a few things here:
// We create a variable called instructorNames that store the result as an array of objects.
// We are calling .map on the instructors array: instructors.map.
// The instructor parameter in .map can be named anything, 
// usually something related to the array. See how this is the exact same thing:

//Exact same thing, different parameter name 
const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNames, instructorNamesTwo);

// The .map() function requires a return value. This is a key rule of using .map(), 
// so the fat arrow is taking care of that requirement.
// Get some practice. Try the following. Fix the code:

const instructorInfo1 = `${instructors.map(instructor => `${instructor.name}: ${instructor.specialty}`)}`;
console.log(instructorInfo1);

// As stated, you'll see .map() everywhere. We recently had a student be asked to do this for a job interview. 
// The question came straight from the MDN docs and was based on this code. Study up!!!
var kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }
];

console.log(kvArray);

var reformattedArray = kvArray.map(obj => {
    var rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
    return rObj;
})
