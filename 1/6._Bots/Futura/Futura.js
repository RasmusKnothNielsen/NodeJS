const futura = require('./Eliza-bot.js');
// require the discord.js module
const Discord = require('discord.js');
// Importing constfix and token
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

// Enable/Disable Futura
let isAwake = false;

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === 'Hi Futura' && !isAwake) {
		isAwake = true;
		msg.reply(futura.start());
	}
	else if (msg.content === 'Bye Futura' && isAwake) {
		isAwake = false;
		msg.reply(futura.bye());
	}
	else if (msg.content && !msg.author.bot && isAwake) {
		msg.reply(futura.reply(msg.content));
	}
});

// login to Discord with your app's token
client.login(token);