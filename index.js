const app = document.getElementById('app')
// const gameBox = document.createElement('table')


////CREATING A RANDOM NUMBER IN JS///
const randomNum = Math.trunc(Math.random()*100+1)
// console.log(Math.trunc(47,12));
// console.log(Math.trunc(47,86));
console.log(randomNum); 

////CREATE A PROMPT FOR USER TO GUESS RANDOM NUMBER//

// setTimeout(() =>{
//     console.log('This is a throwaway message')
// }, 2000)
let guess
console.log(guess)
let output = ""
window.alert('Welcome! Please guess a number between 1-100')

 do{
guess = parseInt(window.prompt("pick a number between 1-100"))

if (randomNum === guess) {
output = "wow you got it!"
}
 else{
output = `Sorry random num was ${randomNum} try again`
}
window.alert(output)
 } while (randomNum !== guess)