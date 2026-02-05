// Select all the tiles
const tiles = document.querySelectorAll('td');

const canMove = (tile) => {
  // TODO: Check if a tile has an empty neighbor
  const index = Array.from(tiles).indexOf(tile);
  // Start with middle columns left-right
  if (index % 4 !== 0 && index % 4 !== 3) {
    if (tiles[index + 1].classList.contains("empty") || tiles[index - 1].classList.contains("empty")) {
      return true;
    }
  }
  // left column --> right
  if (index % 4 === 0) {
    if (tiles[index + 1].classList.contains("empty")) {
      return true;
    }
  }
  // right column --> left
  if (index % 4 === 3) {
    if (tiles[index - 1].classList.contains("empty")) {
      return true;
    }
  }
  // checking downwards movement for rows
  if (index > 3) {
    if (tiles[index - 4].classList.contains("empty")) {
      return true;
    }
  }
  // checking upwards movement for rows
  if (index < 12) {
    if (tiles[index + 4].classList.contains("empty")) {
      return true;
    }
  }
  return false;
};

const moveTile = (element) => {
  // TOOD: Move the tile
  const checkIndex = Array.from(tiles).indexOf(element);
  const emptyIndex = Array.from(tiles).findIndex(tile => tile.classList.contains("empty"));
  const val = tiles[checkIndex];
  const valInner = val.innerText;
  val.classList.add("empty");
  val.innerText = "";
  tiles[emptyIndex].classList.remove("empty");
  tiles[emptyIndex].removeAttribute("class");
  tiles[emptyIndex].innerText = valInner;
};

const checkIfPlayerWins = () => {
  // TODO: Check if player has won
  const check = Array.from(tiles);
  const myArr = [];
  const arraysEqual = (arr1, arr2) => {
    for (let i = 0; i < arr1.length - 1; i += 1) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };
  for (let index = 0; index < check.length; index += 1) {
    myArr.push(Number.parseInt(check[index].innerText, 10));
  }
  if (arraysEqual(myArr, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, NaN])) {
    alert("You win!");
  }
};

// Add event listener on each tile - Do not change the following
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    if (canMove(tile)) {
      moveTile(tile);
      checkIfPlayerWins();
    }
  });
});
