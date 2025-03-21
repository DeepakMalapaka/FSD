const TelegramBot = require('node-telegram-bot-api');
const token = '7878107069:AAFPBk-byhVZc017Z5xQHOtqhvWw8HkPSl4';
const isPrime = require("is-prime");
const isEven = require('is-even');
const bot = new TelegramBot(token, {polling: true});
bot.on('message',function(msg){
if(msg.text=="Hello"){
    bot.sendMessage(msg.chat.id,"Hello Subscribers");
}
});
bot.on('message',function(msg){
    var arr=msg.text.split(" ");
    var opt=arr[0].toLowerCase();
    var num=parseInt(arr[1]);
    if(opt=='e'){
        if(isEven(num)){
            console.log("Even");
            bot.sendMessage(msg.chat.id,"even number");
        }
        else{
            console.log("Not a Even");
            bot.sendMessage(msg.chat.id,"Not a even number");
        }
    }
    else if(opt=='o'){
        if(isEven(num)){
            console.log("Not a odd");
            bot.sendMessage(msg.chat.id,"Not a odd number");
        }
        else{
            console.log("odd");
            bot.sendMessage(msg.chat.id,"odd number");
        }
    }
    else{
        if(isPrime(num)){
            console.log("Prime");
            bot.sendMessage(msg.chat.id,"prime number");
        }
        else{
            console.log("Not a Prime");
            bot.sendMessage(msg.chat.id,"Not a Prime number");

        }
    }
});