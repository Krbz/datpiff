/*
 * Serve content over a socket
 */

module.exports = function (socket) {

  socket.emit('send:name', {
    id: socket.id
  });

};
