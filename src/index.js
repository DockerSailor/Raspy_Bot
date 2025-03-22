// Import Packages
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { exec } = require("child_process");

// Code
const token = process.env.Telegram_Token;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg, match) => {

    bot.sendMessage(msg.chat.id, "Welcome", {
        "reply_markup": {
            "keyboard": [["Ping", "Update", "Temp"]]
            }
        });
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text.toString().toLowerCase().includes("ping")) {
        exec("ping -c 4 1.1.1.1", (stderr, stdout) => {
            if (stderr) {
                console.log(`error: ${stderr.message}`); // Mensaje de error para error generico de ping
                bot.sendMessage(chatId, stderr.message);
                return;
            }
            bot.sendMessage(chatId, stdout);
        });
    } else if (msg.text.toString().toLowerCase().includes("update")) {
        exec("apt update", (stderr, stdout) => {
            if (stderr) {
                console.log(`error: ${stderr.message}`); // Mensaje de error para error generico de ping
                bot.sendMessage(chatId, stderr.message);
                return;
            }
            bot.sendMessage(chatId, stdout);
        });
    } else if (msg.text.toString().toLowerCase().includes("temp")) {
        exec("cat /sys/class/thermal/thermal_zone0/temp | awk '{print $1/1000}'", (stderr, stdout) => {
            if (stderr) {
                console.log(`error: ${stderr.message}`); // Mensaje de error para error generico de ping
                bot.sendMessage(chatId, stderr.message);
                return;
            }
            bot.sendMessage(chatId, stdout);
        });
    }
});

// Console Logs to test DELETE AFTER SUCCESS TESTING
console.log(token);