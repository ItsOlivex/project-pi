const WebSocket = require('ws');

class WS {
  constructor(path) {
    this.ws = new WebSocket(path);
  }

  config(callback) {
    this.ws.on('open', () => {
      callback();
    });
  }

  sendData(data) {
    this.ws.send(data);
  }

  getWs() {
    return this.ws;
  }

}

module.exports = WS;