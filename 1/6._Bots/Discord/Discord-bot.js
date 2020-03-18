// require the discord.js module
const Discord = require('discord.js');
// require google to support google search
const google = require('google');
// Importing prefix and token
const { prefix, token } = require('./config.json');
// create a new Discord client
const client = new Discord.Client();

const fridaySongs = [];
fridaySongs.push('https://youtu.be/qijBzcteR9Y');
fridaySongs.push('https://youtu.be/XQCz96er7ns');
fridaySongs.push('https://youtu.be/MEIRNj0EmH0');
fridaySongs.push('https://youtu.be/K7l5ZeVVoCA');
fridaySongs.push('https://youtu.be/h61QG4s0I3U');

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	// Testing
	if (msg.content === `${prefix}friday`) {
		const randomSong = fridaySongs[Math.floor(Math.random() * fridaySongs.length)];
		msg.reply(randomSong);
	}
	else if (msg.content.startsWith(`${prefix}addfriday `)) {
		const url = msg.content.slice(11);
		fridaySongs.push(url);
		msg.channel.send('Song successfully added');
	}
	else if (msg.content === `${prefix}server`) {
		msg.channel.send(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}\nGenesis: ${msg.guild.createdAt}\nLocation: ${msg.guild.region}`);
	}
	else if (msg.content === `${prefix}user-info`) {
		msg.channel.send(`Your username: ${msg.author.username}\nYour ID: ${msg.author.id}`);
	}
	else if (msg.content.startsWith(`${prefix}g `)) {
		let lookup = msg.content.slice(3);
		lookup = lookup.replace(' ', '+');
		const newlookup = 'https://www.google.com/search?source=hp&ei=mFopW5aMIomSsAfRw77IDg&q=' + lookup;
		msg.channel.send('<a:googling:426453223310622740> Loading...').then(message => {
			google(lookup, (err) => {
			  if (err) {console.error(err);}
			  else {
					message.edit(newlookup);
		 		}
			});
		  });
	}
});

// login to Discord with your app's token
client.login(token);