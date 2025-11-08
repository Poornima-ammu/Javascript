const min=1;
const max=100;
const answer=Math.floor(Math.random()*(max-min+1) +min);
let guess;
let attempt=0;
let running =true;
while(running){
    guess=window.prompt("enter your guess:");
    attempt++;
    if(guess>answer){
        window.alert("Its too high!");
    }
    else if(guess<answer){
        window.alert("Its too low!");
    }
    else{
        window.alert(`Congratulations! Your guess ${answer} is correct! You guesses it in ${attempt} attempts!`);  running=false; 
   }
}