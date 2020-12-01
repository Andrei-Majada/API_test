const app = require('../src/app');
const debug = require('debug')('nodeAPI_test:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('Listening', onListening);
console.log('API rodando na porta: ', port);

function normalizePort(val) {
    const porta = parseInt(val, 10);

    if (isNaN(porta)) {
        return val; 
    }

    if (porta >= 0) {
        return porta;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
    ?   'Pipe ' + port
    :   'Port ' + port;
    
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requer um maior privilegio!');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' ja esta em uso!');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
    ?   'Pipe ' + addr
    :   'Port ' + addr.port;

    debug('Listeing on ' + bind);
}