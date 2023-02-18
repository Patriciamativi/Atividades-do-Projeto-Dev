// The activities below were created by artificial intelligence, using a language model trained by neural learning.

console.log("###################### 1 ######################")
// Write a function that will receive an array in two-dimensional format, it will simulate a 'tic-tac-toe' you must return if who won, if it was player 'X' or player 'O' or if there was a tie.
/*
Examples: 
(Input)
[
    ['x', 'o', 'x']
    ['x', 'x', 'o']
    ['o', 'o', 'x']
]
(Output)
"Win player 'x'"

(Input)
[
    ['x', 'o', 'x']
    ['x', 'o', 'o']
    ['o', 'o', 'x']
]
(Output)
"There was a tie"

*/


function ticTacToe(arrayTicTacToe) {
    for (let i = 0; i < arrayTicTacToe.length; i++) {
        if (arrayTicTacToe[i][0] === arrayTicTacToe[i][1] && arrayTicTacToe[i][1] === arrayTicTacToe[i][2]) {
            return `Win player1 ${arrayTicTacToe[i][1]}`
        }
    }
    for (let i = 0; i < arrayTicTacToe.length; i++) {
        if (arrayTicTacToe[0][i] === arrayTicTacToe[1][i] && arrayTicTacToe[1][i] === arrayTicTacToe[2][i]) {
            return `Win player2 ${arrayTicTacToe[0][i]}`
        }
    }
    if (arrayTicTacToe[0][0] === arrayTicTacToe[1][1] && arrayTicTacToe[1][1] === arrayTicTacToe[2][2]) {
        return `Win player3 ${arrayTicTacToe[0][0]}`
    }
    if (arrayTicTacToe[0][2] === arrayTicTacToe[1][1] && arrayTicTacToe[1][1] === arrayTicTacToe[2][0]) {
        return `Win player4 ${arrayTicTacToe[2][0]}`
    }
    return `There was a tie`
}
let testArray = [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'],
    ['o', 'x', 'o']
]

console.log(ticTacToe(testArray))

console.log("###################### 2 ######################")
// Create an array to represent an image and write a function to rotate it 90 degrees clockwise.
/*
Examples: 
(Input)
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
(Output)
[
    [7,4,1],
    [8,5,2],
    [9,6,3]
]

(Input)
[
    ['A', 'B', 'C'],
    ['A', 'B', 'C'],
    ['A', 'B', 'C'],
    ['A', 'B', 'C'],
    ['A', 'B', 'C'],
]
(Output)
[
    ['A', 'A', 'A', 'A', 'A'],
    ['B', 'B', 'B', 'B', 'B'],
    ['C', 'C', 'C', 'C', 'C'],
]

*/

function clockwise(matrix) {
    let multidimensionalArray = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let line = [];
        for (j = matrix[0].length-1; j >= 0; j--) {
            line.push(matrix[j][i]);
        }
        multidimensionalArray.push(line)
    }
    return multidimensionalArray;
}

let testMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let testMatrix2 = [
    ['A', 'A', 'A', 'A', 'A'],
    ['B', 'B', 'B', 'B', 'B'],
    ['C', 'C', 'C', 'C', 'C'],
]
console.log(clockwise(testMatrix1));