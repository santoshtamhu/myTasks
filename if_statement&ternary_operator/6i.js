let guess = "heads";

const randomNumber = Math.random();

let result;

if (randomNumber < 0.5) {
  result = "heads";
} else {
  result = "tails";
}

if (guess === result) {
  console.log("you win!");
} else {
  console.log("you lose!");
}
