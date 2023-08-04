const WS = require('./classes/ws');
const { SerialPort } = require('serialport');
const port = new SerialPort({ path: '/dev/ttyACM0', baudRate: 9600 })
const ws = new WS('ws://192.168.1.3:8080/rasp');



ws.config(() => { 
    ws.getWs().on('message', (data) => {
        console.log(data.toString());
    });
});