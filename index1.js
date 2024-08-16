const randomNum = Math.floor(Math.random() *100+1)

console.log(randomNum);
window.alert(guessNumber(randomNum))

function guessNumber(randomNum){
    let guess = parseInt(window.prompt ('Please guess a number between 1-100'))
    console.log(guess)

     let attempt = 1
    let returnMessage
    

    if(! isNaN (guess)){

        while (guess !== randomNum && attempt < 10 ){
            if (guess < randomNum){
                returnMessage = `Number is higher than your guess. Please try again you have ${10-attempt}.`
            } else{
                returnMessage = `Number is less than your guess. Please try again you have ${10-attempt}.`
            }
            attempt++
            guess = parseInt( window.prompt(`${returnMessage}, please pick a number between 1-100`))
            console.log(returnMessage);
            console.log(attempt);

        }
    }else{
            returnMessage = 'Please enter a valid number, Restart games'
        }
        if (guess === randomNum){
            returnMessage =` YOU WIN! The number was ${randomNum}, you guessed the number in ${attempt} attempts`
        } else if (attempt === 10){
            returnMessage = 'Game over, you had more than 10 tries'

        }
        console.log(returnMessage);
        return returnMessage;
    }  

    
