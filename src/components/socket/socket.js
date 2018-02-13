var io = null;

export class Socket {

  static init(http) {
    if (!http) {
      throw new Error('http is undefined');
    }
    io = require('socket.io')(http);
    Socket.connent();
  }

  static connent() {
    io.on('connection', function(socket) {
      console.log('SOCKET: new client!!');
      socket.on('test', function(msg) {
        console.log('message: ' + msg);
      });
    });
  }

  static emit(channel, data) {
    if (!channel) {
      throw new Error('channel is not defined');
    }
    if (!data) {
      throw new Error('data is not defined');
    }
    if (!io) {
      throw new Error('socket is not initialized');
    }
    io.emit(channel, data);
  }
}
