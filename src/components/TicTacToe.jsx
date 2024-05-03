import useTicTacToe from '../hooks/use-tic-tac-toe'

function TicTacToe() {

  const { board, handleClick, resetGame, getStatusMessage } = useTicTacToe()

  return (
    <div className='game'>
      <div className='title'>Tic Tac Toe</div>
      <div className='status'>{getStatusMessage()}</div>
      <div className='board'>
        {board.map((b, index) => {
          return <button className='cell' key={index} onClick={() => handleClick(index)} disabled={b!== null}>{b}</button>
        })}
      </div>
      <button className='resetButton' onClick={resetGame}>Reset Game</button>
    </div>
  )
}

export default TicTacToe