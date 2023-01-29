const Game = require('./Game');
const Player = require('./Player');

class Room {
  constructor() {
    this.id = '' // generate a random one...
    this.active = true;
    this.createdAt = new Date().getDate();
    this.game = null;
    this.playerA = null;
    this.playerB = null;
  }

  get values () {
    return {
      id: this.id,
      createdAt: this.createdAt,
      active: this.active,
      playerA: this.playerA,
      playerB: this.playerB,
      game: this.game,
    }
  }

  set player(_player) {
    if (_player instanceof Player) {
      if (this.playerA === null) {
        this.playerA = _player;
        return;
      }
      this.playerB = _player;
    }
  }

  startGame(_playerA, _playerB) {
    if (
      this.playerA instanceof Player &&
      this.playerB instanceof Player
    ) {
      this.game = new Game(this.playerA, this.playerB);
    }
  }
}

module.exports = Room;
