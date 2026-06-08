const mineflayer = require('mineflayer');
const config = require('./config.json');

const bot = mineflayer.createBot({
    host: config.host,
    port: config.port,
    username: config.username
});

bot.once('spawn', () => {

    setTimeout(() => {
        bot.chat(`/register ${config.password}`);
    }, 3000);

    setTimeout(() => {
        bot.chat(`/login ${config.password}`);
    }, 8000);

    startAFK();
});

function startAFK() {

    console.log("AFK Started");

    // Continuous camera rotation
    let yaw = 0;

    setInterval(() => {
        yaw += Math.PI / 2;

        if (yaw > Math.PI * 2) {
            yaw = 0;
        }

        bot.look(yaw, 0, true);

    }, 1000);

    // Random jumps every 3-5 sec
    setInterval(() => {

        bot.setControlState('jump', true);

        setTimeout(() => {
            bot.setControlState('jump', false);
        }, 300);

    }, Math.floor(Math.random() * 2000) + 3000);

    // Walk forward forever
    bot.setControlState('forward', true);
}
