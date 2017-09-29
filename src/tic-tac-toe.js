class TicTacToe {
  constructor() {
    this.game = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    this.x = 'x';
    this.o = 'o';
    this.player = 'x';
    this.winner = null;
  }

  getCurrentPlayerSymbol() {
    return this.player;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.game[rowIndex][columnIndex] === null) {
      this.game[rowIndex][columnIndex] = this.player;
      if (this.player === 'x') {
        this.player = this.o;
      } else {
        this.player = this.x;
      }
    }
  }

  isFinished() {
    let winner = this.getWinner();
    return this.noMoreTurns() === true || winner !== null;
  }

  getWinner() {
    for (let i = 0; i < this.game.length; i++) {
      if (this.game[i][0] === this.game[i][1] && this.game[i][0] === this.game[i][2]) {
        this.winner = this.game[i][0];
      }
      if (this.game[0][i] === this.game[1][i] && this.game[0][i] === this.game[2][i]) {
        this.winner = this.game[0][i];
      }
    }

    if (this.game[0][0] === this.game[1][1] && this.game[0][0] === this.game[2][2]) {
      this.winner = this.game[0][0];
    }

    if (this.game[0][2] === this.game[1][1] && this.game[0][2] === this.game[2][0]) {
      this.winner = this.game[0][2];
    }

    return this.winner;
  }

  noMoreTurns() {
    for (let i = 0; i < this.game.length; i++) {
      for (let j = 0; j < this.game[i].length; j++) {
        if (this.game[i][j] === null) {
          return false;
        }
      }
    }
    return true;
  }

  isDraw() {
    let winner = this.getWinner();
    return this.noMoreTurns() === true && winner === null;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.game[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
