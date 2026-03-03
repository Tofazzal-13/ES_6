const firstName = "kamruzzaman";
const lastName = "Shuvo";



const aboutMe = `my name is ${firstName} ${lastName}. I am a front end web developer`;
const giveMe = `give me money ${(10+20)*20 + 500}`

console.log(aboutMe);
console.log(giveMe);

function getCard(name,description,price){
    const div = `
        <div>
            <h2>${name}</h2>
            <p>price: ${price}</p>
            <p>${description}</p>
        </div>
    `
    console.log(div);
    
}

getCard("iphone 17","it's looks like a wow",1200000)