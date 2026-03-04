const numbers = [1, 4, 6, 3, 9];

for(const number of numbers){
    console.log(number);
    
}

const employee = {
    name: "john doe",
    1: "desk one",
    position: "software engineer",
    salary: 450000

}

for(const key in employee){
    const value = employee[key]
    console.log(key,value);
    
}