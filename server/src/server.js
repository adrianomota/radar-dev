import http from 'http';
import app from './app';

import { setupWebSocket } from './websocket';

const PORT = process.env.PORT || 3333;

const server = http.Server(app);

setupWebSocket(server);

server.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
