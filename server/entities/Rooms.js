const Room = require('./Room');

class Rooms {
  constructor() {
    this.rooms = [];
  }

  create(quantity = 5) {
    for ( let i = 0; i < quantity; i++) {
      this.rooms.push(new Room());
    }
  }

  clearInactivaNotUsed() {
    // by date maybe....
  }

}

module.exports = Rooms;
