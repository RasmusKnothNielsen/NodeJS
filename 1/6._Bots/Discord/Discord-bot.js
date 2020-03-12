// require the discord.js module
const Discord = require('discord.js');
// Importing config file to access token
const config = require('./config.json');
// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	// Testing
	if (msg.content === 'ping') {
		msg.reply('pong');
	}

	console.log(msg.content);
});

// login to Discord with your app's token
// Removed token from app, provide it at startup
// TOKEN='Insert-Token-Here' node Discord-bot.js
client.login(process.env.TOKEN);