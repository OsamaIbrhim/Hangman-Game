// shortcut for querySelector
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const messageEl = document.querySelector('#message')

// test the game
let game1

// take a guess from keypress
window.addEventListener('keypress',(e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuesse(guess)
    render()
})

const render = () => {
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
}

//Synchronously we should wait until this function done (Blocking)
//Asynchronously we can do some wock when this function work >> (non Blocking)

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle,5)
    render()
}

document.querySelector('#reset').addEventListener('click',startGame)

startGame()