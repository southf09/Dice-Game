//Player selectors
let player1 = document.querySelector(".img1");

let player2 = document.querySelector(".img2");

let whoWon = document.querySelector("h1");

//Random number generator for each
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

player1.setAttribute("src", `images/dice${randomNumber1}.png`);

player2.setAttribute("src", `images/dice${randomNumber2}.png`);

//Who won?
if (randomNumber1 > randomNumber2) {
  whoWon.innerText = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  whoWon.innerText = "Player 2 Wins!";
} else {
  whoWon.innerText = "Draw!";
}
