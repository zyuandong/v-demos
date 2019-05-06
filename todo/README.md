

## How To Use

### Compiles and hot-reloads for development
```
npm run dev
```

## Q&A

- webpack-dev-server -> 3.1.11

> An issue was discovered in lib/Server.js in webpack-dev-server before 3.1.11. Attackers are able to steal developer's code because the origin of requests is not checked by the WebSocket server, which is used for HMR (Hot Module Replacement). Anyone can receive the HMR message sent by the WebSocket server via a ws://127.0.0.1:8080/ connection from any origin.
