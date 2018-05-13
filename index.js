const TelegramBot = require('node-telegram-bot-api');
const Cron = require('cron');
const  TOKEN = '554819759:AAFMHlYtaFn5-HJU_hxZbK1FFq80eYVJqEs';

const bot = new TelegramBot(TOKEN, { polling: true});

const job = new Cron('1 * * * * *', function(){
    console.log('Привет!')
});

job.start();

bot.on('message', function(msg){
    const id = msg.from.id
    bot.sendMessage(id, msg.text)
console.log(msg);
})