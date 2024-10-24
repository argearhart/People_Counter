// comment out multiple lines of code by highlighting the code and pressing ctrl k c
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// let count = firstBatch

//initialize the count as 0

let count = 0;
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
 
console.log(countEl)

function increment() {
    count += 1;
    countEl.innerText = count;
}
 
function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
 
}   





// let message = "You have three new notifications"

// console.log(message + ", " + username + "!")

// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)


let welcomeEl = document.getElementById("welcome-el")
console.log(welcomeEl)


let name = "Amanda"
let greeting = "Welcome back " 
console.log(greeting + name)

welcomeEl.innerText = greeting + name


welcomeEl.innerText += "👋"

