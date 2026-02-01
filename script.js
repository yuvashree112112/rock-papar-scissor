function play(userMove) {
    const choices = ["rock", "paper", "scissors"];
    const computer = choices[Math.floor(Math.random() * 3)];

    document.getElementById("userChoice").textContent = userMove;
    document.getElementById("computerChoice").textContent = computer;

    let result = "";

    if (userMove === computer) {
        result = "It's a tie!";
    } else if (
        (userMove === "rock" && computer === "scissors") ||
        (userMove === "paper" && computer === "rock") ||
        (userMove === "scissors" && computer === "paper")
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    document.getElementById("result").textContent = result;
    document.getElementById("resultText").textContent = result;
}
