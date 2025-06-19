function play() {
  const patternArr = [
    ["block1", "block2", "block3"],
    ["block4", "block5", "block6"],
    ["block7", "block8", "block9"],
    ["block1", "block4", "block7"],
    ["block2", "block5", "block8"],
    ["block3", "block6", "block9"],
    ["block1", "block5", "block9"],
    ["block3", "block5", "block7"],
  ];

  const blocks = document.querySelectorAll(".block");
  const turnText = document.getElementById("turn");
  const messageBox = document.getElementById("message");
  const restartBtn = document.getElementById("restartBtn");

  let ID = [];
  let currentPlayer = "X";

  blocks.forEach((block) => {
    block.addEventListener("click", (e) => {
      const id = e.target.id;
      if (!ID.includes(id) && e.target.textContent === "") {
        ID.push(id);
        e.target.textContent = currentPlayer;

        const playerAtMove = currentPlayer;
        if (ID.length >= 5) {
          setTimeout(() => checkWin(playerAtMove), 0);
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        turnText.textContent = currentPlayer;
      }
    });
  });

  function checkWin(player) {
    for (let pattern of patternArr) {
      if (
        pattern.every(
          (blockId) =>
            ID.includes(blockId) &&
            document.getElementById(blockId).textContent === player
        )
      ) {
        showMessage(`${player} wins! 🎉`);
        disableBoard();
        return;
      }
    }
    if (ID.length === 9) {
      showMessage("It's a draw 🤝");
    }
  }

  function showMessage(msg) {
    messageBox.textContent = msg;
  }

  function disableBoard() {
    blocks.forEach((block) => (block.style.pointerEvents = "none"));
  }

  function resetGame() {
    ID = [];
    blocks.forEach((block) => {
      block.textContent = "";
      block.style.pointerEvents = "auto";
    });
    currentPlayer = "X";
    turnText.textContent = currentPlayer;
    messageBox.textContent = "";
  }

  restartBtn.addEventListener("click", resetGame);
}

play();
