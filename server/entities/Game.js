const PLAYER_TURN_TIME = process.env.PLAYER_TURN_TIME || 5000;

class Game {
  constructor(_playerA, _playerB) {
    this.uuid = "" // generate here a new one;
    this.activePlayer = _playerA;
    this.waitingPlayer = _playerB;
    this.started = false;
    this.finished = false;
    this.winner = null;
  }

  get values() {
    return {
      id: this.uuid,
      activePlayer: this.activePlayer,
      waitingPlayer: this.waitingPlayer,
      started: this.started,
      finished: this.finished,
      winner: this.winner,
    };
  }

  start() {
    if (!this.started) {
      this.started = true;
      this.togglePlayerTurn();
      console.log(`Game started!! Active player: ${this.activePlayer.name}`)
    }
  }

  end() {
    this.finished = true;
    clearTimeout(this.timeout);
    this.activePlayer = null;
    this.waitingPlayer = null;
  }

  get activePlayer() {
    return this.activePlayer;
  }

  setWinner(playerId) {
    const { id } = this.activePlayer;
    this.winner = id === playerId
      ? this.activePlayer
      : this.waitingPlayer;
  }

  toggleActivePlayer() {
    const wasActive = this.activePlayer;
    this.activePlayer = this.waitingPlayer;
    this.waitingPlayer = wasActive;
    console.log(`Player changed! Active player is now: ${ this.activePlayer.name }`);
  }

  togglePlayerTurn () {
    this.timeout = setTimeout(() => {
      if (!this.finished) {
        this.toggleActivePlayer();
        this.togglePlayerTurn();
      } else {
        clearTimeout(this.timeout);
      }
    }, PLAYER_TURN_TIME);
  }
}

module.exports = Game;
