var passcode = ~~(Math.random() * 1000);
var tries = 10;

while (guess != passcode && tries > 0) 
{
    console.log("You have " + tries + " guesses left")
    console.log("Guess a number between 0-999");
    var guess = prompt("Enter a number between 0 and 999");
    tries = tries - 1;
    if (guess == passcode)
    {
        console.log("you win gg");
    }
    else if (tries <= 0)
    {
        console.log("you lose git rekt");
    }
    else
    {
        giveClue()
    }
}
console.log(passcode);


function giveClue()
{
    if (guess > passcode)
    {
        console.log("Too high, filthy clod")
    }
    else
    {
        console.log("Too low, boi")
    }
}