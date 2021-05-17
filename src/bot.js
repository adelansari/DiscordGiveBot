require('dotenv').config();
// console.log(process.env.KYOICHI_BOT_TOKEN);

const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});    // creating an instance of Client class


const PREFIX = "$";



client.on('ready', () => {
    console.log(`${client.user.username} has logged in.`);
});

client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.content.toLowerCase() === 'hi') {
        message.channel.send('Hello');
    }
});


client.on('message', async (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
        // console.log(CMD_NAME);
        // console.log(args);

        if (CMD_NAME.toLowerCase() === 'ping') {
            message.channel.send('Pong!');
        };
        if (CMD_NAME.toLowerCase() === 'give') {
            if (args.length === 0) return message.reply('Please provide the message ID');
            const messageid = args[0]; // Saving the messageID inputted by the user after give command.
            // console.log(messageid)
            

            const fetchMsg = await message.channel.messages.fetch(messageid); // Fetches the message equal to messageid

            // Maping out every reaction made on the collected message:
            fetchMsg.reactions.cache.map(async (reaction) => {
                let usersThatReacted = []; // Initiates usersThatReacted as an array
                let reactedEmotes = reaction.emoji.name; // Fetches all emotes... I think.
                console.log(`${reactedEmotes}`)

                
                let reactedUsers = await reaction.users.fetch(); // Fetches the users that reacted on the collected message
                // console.log(`${reactedUsers}`)

                // Maping out every user that reacted:
                reactedUsers.map((user) => { 
                    usersThatReacted.push(`**${user.username}#${user.discriminator}**`); // Pushes each user into the array with formatting ** (bold text) username#discriminator
                    // console.log(`${usersThatReacted}`)
                });
                let users = usersThatReacted.join('-').trim(); // Joins all items in the array with a hyphen 
                let randomuser = Math.floor(Math.random()*usersThatReacted.length); // Selects a random number, based on the length of the above array
                message.channel.send(`Randomly selected user for ${reactedEmotes}: ${usersThatReacted[randomuser]} \n`); // Showing the randomly selected user that reacted. 
                // If I want to show all users: changing ${usersThatReacted[randomuser]} to ${users} !!
            });

        };
    };

    

});


const bot_token = process.env.KYOICHI_BOT_TOKEN;
client.login(bot_token);



