// the for loop
for(let i = 0; i < 7; i++) {
    // what goes here is called the code block
    // the variable 'i' is initiate with the value 0, 
    // each time 'i' is checked to see if 'i' is less than 7.
    // if 'i' is less than 7, the loop continues. 
    console.log('loop: ', i); 
}
// When variable 'i' is NOT less than 7. 
// it goes out of the loop. 
console.log('This loop is finished!');


// in this example you have an array of emploees
const employees = ['Syllinda', 'Missy', 'Marius']; 
for(let j = 0; j < employees.length; j++) {
    /* everytime you go into the variable emploees, 
    it checks the length of the array, and if it is 
    smaller than the length of the array, it keeps going
    into the array to get a name*/ 
    let employeesList = `<div>${employees[j]}</div>`;
    console.log(employeesList); 
}


// the while loop 
/* in the while loop, you have to initiate the 
the variable before you start to write the while
loop*/
let k = 0; 
while (k < 7) {
    // here you have the condition. If the value in 
    // variable 'k' is less than 7, we keep cicling 
    // through the loop 
    console.log(k); 
    // and you need to increment the variable value
    k++; 
}

// now we have a list of developers 
const developers = ['Syllinda', 'Missy', 'Marius']; 
let m = 0; 
while (m < developers.length) {
    console.log(developers[m]); 
    m++; 
}


// The do / while loop 
/* When you have a variable that has a number greater
than than value you are evaluating, the loop will not 
run in the while loop. So you use the 'do/while' loop. 
This makes sure the code is run at least once. */
let n = 8; 
do {
    console.log('do/while loop: ', n); 
    n++; 
} while (n < 7);

let p = 0; 
do {
    console.log('do/while loop example 2: ', p); 
    p++; 
} while (p < 7);


// the if statement (conditional statements)
/* You are going to check a condition and if it is
true, the code will run.  */
const drivingAge = 22; // this person is 22 years old
if (drivingAge > 18) {
    // you are going to check this condition 
    // and if it is true, the code will run 
    // and print message to the console
    console.log('You can drive!')
} 


const webDevelopers = ['Syllinda', 'Missy', 'Marius']; 
if (webDevelopers.length > 2) {
    /* The code is going to check how many web developers are 
    in the list. If there are more the 2 developers the code 
    will run and you will see the message below on the console. */
    console.log('Wow! There are a lot of Web Developers here!');
}


// the if else statement
const password = 'word'; // user sets a password
if (password.length >= 7) {
    /* the code is going to check the condition. 
    if it is true, it will read this block of code */
    console.log('password OK!'); 
} else {
    // if the first condition is false, then 
    // the code will check this block of code
    console.log('Password should be at least 7 characters long!');
}

// note that only one condition will be true.
const yourPassword = 'helloworld'; 
if (yourPassword.length >= 7) {
    console.log('password OK!'); 
} else {
    console.log('Password should be at least 7 characters long!');
}

