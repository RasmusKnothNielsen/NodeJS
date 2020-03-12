const elizabot = require('./Eliza-bot.js');

console.log(elizabot.start()); // initializes eliza and returns a greeting message

console.log(elizabot.reply('Hi there Eliza, why are you?')); // returns a eliza-like reply based on the message text passed into it

console.log(elizabot.bye()); // returns a farewell message