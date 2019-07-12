process.env.NTBA_FIX_319 = 1;

var TelegramBot = require('node-telegram-bot-api');

var token = '769126904:AAHUucA7-jZlAhi0i2XKL_tIeOFyYHfyVDI';
var bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'hello my friend!');   
});