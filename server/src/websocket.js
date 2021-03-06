import socketio from 'socket.io';
import { parseStringAsArray } from './utils/parseStringAsArray';
import { getDistanceFromLatLonInKm } from './utils/calculateDistance';

let io;
const connections = [];

export const setupWebSocket = server => {
  io = socketio(server);

  io.on('connection', socket => {
    const { latitude, longitude, techs } = socket.handshake.query;

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      techs: parseStringAsArray(techs),
    });
  });
};

export const findConnections = (coordinates, techs) => {
  return connections.filter(connection => {
    return (
      getDistanceFromLatLonInKm(coordinates, connection.coordinates) < 10 &&
      connection.techs.some(item => techs.includes(item))
    );
  });
};

export const sendMessage = (to, message, data) => {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data);
  });
};
