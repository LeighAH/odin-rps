class MoveType {

    static TypeNames = ["Rock", "Paper", "Scissors"];

    constructor(type)
    {
        this.type = type;
        this.name = MoveType.TypeNames[type-1];
    }
}

Object.defineProperties(MoveType, {
    ROCK: { enumerable: true, value: 1},
    PAPER: { enumerable: true, value: 2},
    SCISSORS: { enumerable: true, value: 3},
});

function getComputerMove() {
    return new MoveType(getRandomInt(1,3));
}

function getRandomInt(min, max) {
    let minCeil = Math.ceil(min - 1);
    let maxFloor = Math.ceil(max);
    let diff = maxFloor - minCeil;

    let rand = Math.random()
    let result = Math.ceil((diff * rand) + minCeil);
    return result
}

function evaluateWinner(playerMove, cpuMove)
{
    if(playerMove.type === cpuMove.type) return "It's a tie!";

    if(playerMove.type == MoveType.ROCK && cpuMove.type == MoveType.SCISSORS || 
        playerMove.type == MoveType.PAPER && cpuMove.type == MoveType.ROCK ||
        playerMove.type == MoveType.SCISSORS && cpuMove.type == MoveType.PAPER) 
    {
        return "Congratulations, you win!";
    }

    return "The computer wins, better luck next time.";
}

let pm = new MoveType(parseInt(prompt("Please choose a move. 1 = Rock, 2 = Paper, 3 = Scissors")));

if(!pm.type || pm.type < 1 || pm.type > 3) {
    alert("Sorry, that was an invalid choice.");
}
else
{
    cm = getComputerMove();
    alert("You chose " + pm.name + ". The computer chose " + cm.name + ". " + evaluateWinner(pm, cm));
}