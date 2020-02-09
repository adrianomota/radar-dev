import socketio from "socket.io-client";

const socket = socketio("http://192.168.0.4:3333", {
  autoConnect: false
});

function socketConnect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  };

  socket.connect();
}

function socketDisconnect() {
  if (socket.connectted) {
    socket.disconnect();
  }
}

function subscribeToNewDevs(subscribeFunction) {
  socket.on("new-dev", subscribeFunction);
}

export { socketConnect, socketDisconnect, subscribeToNewDevs };
