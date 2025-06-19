let score = 0;
let counter = 0;
let flippedCards = [];

function play() {
  document.querySelector(".result").style.display = "none";
  checkWin();

  const symbols = [
    "Heart",
    "Diamond",
    "Club",
    "Spade",
    "Sun",
    "Umbrella",
    "Star",
    "Snowman",
  ];
  const blocks = Array.from(document.querySelectorAll(".block"));

  const shuffledSymbols = [...symbols, ...symbols];
  shuffle(shuffledSymbols);
  shuffle(blocks);

  blocks.forEach((block, index) => {
    block.classList.remove("flipShow");
    block.removeAttribute("data-symbol");
    block.setAttribute("data-symbol", shuffledSymbols[index]);

    block.addEventListener("click", (event) => {
      flipShow(event);
    });
  });
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function flipShow(ev) {
  const block = ev.target;

  if (!block.classList.contains("flipShow") && counter < 2) {
    block.classList.add("flipShow");
    flippedCards.push(block);
    counter++;

    if (counter === 2) {
      setTimeout(flipHide, 1500);
    }
  }
}

function flipHide() {
  if (flippedCards[0] && flippedCards[1]) {
    const symbol1 = flippedCards[0].getAttribute("data-symbol");
    const symbol2 = flippedCards[1].getAttribute("data-symbol");

    if (symbol1 === symbol2) {
      score++;
    } else {
      flippedCards[0].classList.remove("flipShow");
      flippedCards[1].classList.remove("flipShow");
    }
  }

  flippedCards = [];
  counter = 0;
  checkWin();
}

function checkWin() {
  if (score === 8) {
    document.querySelector(".result").style.display = "block";
    setTimeout(restart, 4000);
  }
}

function restart() {
  score = 0;
  counter = 0;
  flippedCards = [];
  play();
}

play();
