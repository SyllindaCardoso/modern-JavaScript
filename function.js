// function declaration 
function hello() {
    console.log('Hello World!');
}

// you have to call the function to see it working
hello(); 

// funcion expression
const greeting = function() {
    console.log('Have a good day!'); 
}

// you have to call the function to see it working
greeting(); 


// you can pass an argument inside the function
const goodDay = function(time, name) {
    console.log(`Have a good ${time}, ${name}!`); 
}

/* you have to call the function and 
   pass a value for its arguments */
goodDay("afternoon", "Syllinda"); 

// the arrow function 
const greetings = (time, name) => {
    console.log(`Have a good ${time}, ${name}!`);
};

greetings("evening", "Syllinda");


// the arrow function 
const oneArgument =  name => {
    console.log(`Have a good day ${name}!`);
};

oneArgument("Syllinda");
