const max = Math.max(3,5,1,7,8,45);
console.log(max);

const numbers = [3,5,1,7,8,45];
const max2 = Math.max(...numbers);
console.log(max2);

const params = [45, 12, 3];
function sum(x, y, z){
    return x + y + z;
}

const result = sum(...params);
console.log(result);

const arr1 = [1,22,4,34,23];
const arr2 = [11,...arr1,55,66,98];
console.log(arr2);

const person = {
    name: "alice",
    age: 30
}
const person2 = person;
person.salary = 35000;

console.log(person);
console.log(person2);

