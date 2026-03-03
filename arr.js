console.log(add(10,20));

// function declaration 
function add(num1, num2){
    return num1 + num2;     
}



// function expression 
const add2 = function(num1, num2){
    return num1 + num2;
}

console.log(add2(40,30));


// arrow function

const add3 = (num1, num2) => num1 + num2;
console.log(add3(30,50));


const multiply = (a, b) => a * b;
console.log(20,3);

const tenTimes = x => x * 10;
console.log(tenTimes(20));



const doMath = (x, y) => {
    const sum = x + y;
    const dif = x - y;
    const result = sum * dif;
    return result;
}

console.log(doMath(40, 22));
