import { useState } from "react";


const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {

    const [board, setBoard] = useState(initialBoard());
    const [isXnext, setIsXnext] = useState(true);
    console.log(board);

    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [1, 4, 7],
        [0, 3, 6],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const calculateWinner = (currentBoard) => {
        for (let i = 0; i < winningPatterns.length; i++) {
            const [a,b,c] = winningPatterns[i];
            if(
                currentBoard[a] &&
                currentBoard[a] === currentBoard[b] && currentBoard[a] ===currentBoard[c]
            ){ return currentBoard [a]}
        }
        return null
    };
    const handleClick = (index) => {

        const winner = calculateWinner(board);
        console.log(winner)
        if (winner || board[index]) return

        const newBoard = [...board];
        newBoard[index] = isXnext ? "x" : "o";
        setBoard(newBoard);
        setIsXnext(!isXnext);

    };
    const getStatusMessage = () => { 
        const winner = calculateWinner(board);
        if(winner) return `Player    ${winner}    wins!`;
        if(!board.includes(null)) return `It's a draw!`;
        return `Player    ${isXnext? "x" : "o"}    turn`;
    };
    const resetGame = () => {
        setBoard(initialBoard())
        setIsXnext(true)
     };

    return {
        board, handleClick, calculateWinner, getStatusMessage, resetGame
    };
}
export default useTicTacToe;