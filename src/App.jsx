import React from 'react'
const Square = ({ children, onclick }) => {
  return <button onClick={onclick} className="square">{children}</button>
}

class Board extends React.Component {
  state = { boardinfo: ['', '', '', '', '', '', '', '', '',] }
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square onclick={() => { 
            const arr = [...this.state.boardinfo]; 
            arr[0]='maru'
            this.setState({ boardinfo:arr }) }}>
            {this.state.boardinfo[0] === 'maru' ? '丸' : ''}

          </Square>
          <Square onclick={() => { 
            const arr = [...this.state.boardinfo];
            arr[1]='maru'
            this.setState({ boardinfo:arr }) }}>
            {this.state.boardinfo[1] === 'maru' ? '丸' : ''}
          </Square>
          <Square onclick={() => { 
            const arr = [...this.state.boardinfo]; 
            arr[2]='maru'
            this.setState({ boardinfo:arr }) }}>
            {this.state.boardinfo[2] === 'maru' ? '丸' : ''}
          </Square>
        </div>
        <div className="board-row">
          <Square onclick={() => { 
            const arr = [...this.state.boardinfo]; 
            arr[3]='maru'
            this.setState({ boardinfo:arr }) }}>
            {this.state.boardinfo[3] === 'maru' ? '丸' : ''}
          </Square>
          <Square onclick={() => { 
            const arr = [...this.state.boardinfo]; 
            arr[4]='maru'
            this.setState({ boardinfo:arr }) }}>
            {this.state.boardinfo[4] === 'maru' ? '丸' : ''}
          </Square>
          <Square onclick={() => { 
            const arr = [...this.state.boardinfo]; 
            arr[5]='maru'
            this.setState({ boardinfo:arr }) }}>
            {this.state.boardinfo[5] === 'maru' ? '丸' : ''}
          </Square>
        </div>
        <div className="board-row">
          <Square onclick={() => { 
            const arr = [...this.state.boardinfo]; 
            arr[6]='maru'
            this.setState({ boardinfo:arr }) }}>
            {this.state.boardinfo[6] === 'maru' ? '丸' : ''}
          </Square>
          <Square onclick={() => { 
            const arr = [...this.state.boardinfo]; 
            arr[7]='maru'
            this.setState({ boardinfo:arr }) }}>
            {this.state.boardinfo[7] === 'maru' ? '丸' : ''}
          </Square>
          <Square onclick={() => { 
            const arr = [...this.state.boardinfo]; 
            arr[8]='maru'
            this.setState({ boardinfo:arr }) }}>
            {this.state.boardinfo[8] === 'maru' ? '丸' : ''}
          </Square>
        </div>
      </div>
    );
  }
}

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

