// Start with completing lines 2-20, then go on to clicked
let playerTurn = document.querySelector('.player-turn');

let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

playerTurn.innerHTML = currentPlayer + "'s turn";

let winningConditions=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

function fillBox(clickedCell){
  console.log(clickedCell)
  gameState[clickedCell.getAttribute('id')] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}

function randomNum(){
  let rand = Math.floor(Math.random() * 9);
  return gameState[rand] === '' ? rand : randomNum() 
}

function aiTurn(){
  if(gameState.includes("")){
    fillBox(document.getElementById(randomNum()))
  }
}

function playerChange(){
  if(currentPlayer === 'X' && gameActive){
    currentPlayer = 'O';
    aiTurn();
    checkWin();
    playerChange();
  } else {
    currentPlayer = 'X';
  }
  if(gameActive){
    playerTurn.innerHTML = currentPlayer + "'s turn";
  }
}

function restart(){
  gameState = ["", "", "", "", "", "", "", "", ""];
  document.querySelectorAll('.box').forEach(box => box.innerHTML = "");
  currentPlayer='X';
  playerTurn.innerHTML = currentPlayer + "'s turn";
  gameActive = true;
}

function checkWin(){
  // no point creating a for loop without them understanding, just go right for HoF to save time
  // after writing this function create the restart function and attach it to restart button in HTML (helps test faster if this works early)
  winningConditions.forEach(condition => {
    if(gameState[condition[0]] === '' || gameState[condition[1]] === '' || gameState[condition[2]] === ''){
      '';
    } else if(gameState[condition[0]] === gameState[condition[1]] && gameState[condition[0]] === gameState[condition[2]]){
      console.log(currentPlayer + ' won')
      if(currentPlayer === 'O'){
        playerTurn.innerHTML = "My first win! You've earned your code: learnfromdefeat";
      } else {
        playerTurn.innerHTML = currentPlayer + " won!";
      }
      // you can bring this in secondarily
      gameActive = false;
      return
    } 
    // you can bring this in lastly for this function
    else if(gameState.includes('') === false){
      playerTurn.innerHTML = "DRAW!"
      gameActive = false;
    } 
  }) 
}
// start by creating a clicked function which log's "hi"
// return to html and add all clicked event listeners
// come back here and log e.target
// call the fillBox fn 
// create the fill box fn (should fill with all X's)
// call the playerChange fn
// create the playerChange fn
// call the checkWin function
// create the checkWin function
function clicked(e){
  // the following line should be one of the LAST items completed
  if(gameActive === false){return};
  // the following condition should be one of the LAST items completed
  if(e.target.innerHTML === ''){
  // the following line should be one of the FIRST items completed
    fillBox(e.target);
    checkWin();
    playerChange();
  }
}