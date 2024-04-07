class MoveType {

    static NULL = {
        value: "null",
        number: 0,
    }

    static ROCK = {
        value: "Rock",
        number: 1,
    }

    static PAPER = {
        value: "Paper",
        number: 2,
    }

    static SCISSORS = {
        value: "Scissors",
        number: 3,
    }

    constructor(type)
    {
        this.type = type;

        if(this.type != MoveType.ROCK && this.type != MoveType.PAPER && this.type != MoveType.SCISSORS)
        {
            this.type = MoveType.NULL;
        }
    }
}

function getComputerMove() {
    let cpuChoice = getRandomInt(1,3);
    let cpuMove;

    switch(cpuChoice)
    {
        case 1: 
            cpuMove = MoveType.ROCK;
            break;
        case 2:
            cpuMove = MoveType.PAPER;
            break;
        case 3:
            cpuMove = MoveType.SCISSORS;
            break;
    }

    return new MoveType(cpuMove);
}

function getPlayerMove()
{
    let playerMove = MoveType.NULL;

    while(playerMove == MoveType.NULL)
    {
        let playerChoice = prompt("Please choose a move. Rock, paper or scissors?");
        playerChoice = sanitiseInput(playerChoice);
    
    
        switch(playerChoice) {
            case "Rock":
                playerMove = MoveType.ROCK;
                break;
            case "Paper":
                playerMove = MoveType.PAPER;
                break;
            case "Scissors":
                playerMove = MoveType.SCISSORS;
                break;
            default:
                playerMove = MoveType.NULL;
                alert("Sorry, " + playerChoice + " is not a valid move.");
    
        }
    }

    return new MoveType(playerMove);
}

function getRandomInt(min, max) {
    let minCeil = Math.ceil(min - 1);
    let maxFloor = Math.ceil(max);
    let diff = maxFloor - minCeil;

    let rand = Math.random()
    let result = Math.ceil((diff * rand) + minCeil);
    return result
}

function sanitiseInput(input)
{
    input = input.toLowerCase();
    input = input.slice(0, 1).toUpperCase() + input.slice(1);
    return input;
}

function playRound(playerMove, cpuMove)
{
    if(playerMove.type === cpuMove.type) return 0;

    if(playerMove.type == MoveType.ROCK && cpuMove.type == MoveType.SCISSORS || 
        playerMove.type == MoveType.PAPER && cpuMove.type == MoveType.ROCK ||
        playerMove.type == MoveType.SCISSORS && cpuMove.type == MoveType.PAPER) 
    {
        return 1;
    }

    return 2;
}

function playGame(rounds) {

    let ties = 0;
    let wins = 0;
    let losses = 0;

    for(i = 0; i < rounds; i++) {
        pm = getPlayerMove();
        cm = getComputerMove();
        result = playRound(pm, cm);

        if(result == 0) 
        {
            console.log("It's a tie!");
            ties++;
        }
        if(result == 1)
        {
            console.log("Congratulations, you win!");
            wins++;
        }
        if(result == 2) 
        {
            console.log("The computer wins, better luck next time.");
            losses++;
        }
    }

    console.log("What fun! Here are the results.")
    console.log("Ties: " + ties);
    console.log("You win: " + wins);
    console.log("Computer wins: " + losses);
    if(wins > losses) {
        console.log("You won overall! Such skill and talent!");
    }
}

playGame(5);