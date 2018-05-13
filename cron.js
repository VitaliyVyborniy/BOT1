const Cron = require('cron');

new Cron('* * * * * *', function(){
console.log('Привет!')
});