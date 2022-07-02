const { Telegraf } = require('telegraf');
const axios = require('axios');
require("dotenv").config()

const bot = new Telegraf(process.env.BOT_TOKEN);

timer = setInterval(() => {
	if (new Date().getSeconds() === 1) {
		axios.get(process.env.URL, {
		}).then((res) => {
			bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID, res.data.result.asks[0][0] + "$");
		})
	}
}, 1000)

bot.launch();