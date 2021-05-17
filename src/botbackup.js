require('dotenv').config();
// console.log(process.env.KYOICHI_BOT_TOKEN);

const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});    // creating an instance of Client class

const fetchAll = require('discord-fetch-all');



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


// client.on('message', async (message) => {
//     if (message.author.bot) return;
//     if (message.content.startsWith(PREFIX)) {
//         const [CMD_NAME, ...args] = message.content
//             .trim()
//             .substring(PREFIX.length)
//             .split(/\s+/);
//         // console.log(CMD_NAME);
//         // console.log(args);

//         if (CMD_NAME.toLowerCase() === 'ping') {
//             message.channel.send('Pong!');
//         };

//         if (CMD_NAME.toLowerCase() === 'give') {
//             if (args.length === 0) return message.reply('Please provide the message ID');
//             const messageid = args[0]; //saving the message id from user input after give command.

//             const allMessages = await fetchAll
//                 .reactions(message.channel.cache.get(messageid), {
//                     reverseArray: true,
//                     userOnly: true,
//                     botOnly: false,
//                     pinnedOnly: false,
//                 });

//             console.log(allMessages);


            // const allMessages = await fetchAll.reactions(message, {
            //     userOnly: false, // Only return users that have reacted to the message
            //     botOnly: true, // Only return bots that have reacted to the message
            // });




            // let usermessage = client.channels.cache.get(message.channel.id).messages.fetch(messageid)
            //     .then(message => {
            //         let usermessage = message;
            //         console.log(`${usermessage}`);
            // message.channel.send(`${usermessage}`);




            // const messageReaction = usermessage.reactions.cache.get('😀');
            // const users = messageReaction.users.fetch();
            // const user = users.random();
            // message.channel.send(`${user}`);



            // client.on('messageReactionAdd', (reaction, user) => {
            //     const { name } = reaction.emoji;
            //     const member = reaction.message.guild.members.cache.get(user.id);

            //     if(reaction.message.id === messageid) {
            //         switch (name) {
            //             case '😀':
            //                 console.log(member.user.username)
            //                 break;
            //         }
            //     }
            // });


            // client.on('messageReactionAdd', (reaction, user) => {
            //     const { name } = reaction.emoji;
            //     const member = reaction.message.guild.members.cache.get(user.id);
            //     if(reaction.message.id === messageid );

            // });

        // };




            // message.channel.fetchMessage(messageid).then(r => {
            //     let reactions = r.reactions.array();
            //     let promises = [];
            //     reactions.forEach(re => {
            //         promises.push(re.fetchUsers());
            //     });

            //     let users = Promise.all(promises)
            //         .then(users => {
            //             let i = 0;
            //             reactions.forEach(re => {
            //                 console.log(choices[re.emoji.name]);
            //                 users[i].forEach(u => console.log(u.username));
            //                 i++;
            //             });
            //         });
            // });





            // console.log(messageid);
            // message.channel.messages.fetch({ around: "843203657201745940", limit: 1 })
            //     .then(messages => {
            //         messages.first().edit("This fetched message was edited");
            //     });

            // console.log(`Message: ${reactionMessage}`);
            // console.log(reactionMessage);


//         };
//     };
// });

// client.on('messageReactionAdd', (reaction, user) => {
//     if(reaction.message.id === '')
//     let msgid = reaction.id;

// });




const bot_token = process.env.KYOICHI_BOT_TOKEN;
client.login(bot_token);







// try {
//     const allMessages = await fetchAll.reactions(message.channel, {
//         reverseArray: true,
//         userOnly: true,
//         botOnly: false,
//         pinnedOnly: false,
//     });
//     console.log(allMessages);
// }
// catch(error) {
//     console.log('There is an error.')
// }



// const filter = m => m.author.id === message.author.id; //This is the filter we use for awaitMessages, basically: It checks that the author of the collected message is correct
// message.channel.send(`What message should I check?`); //Prompts what message to check
// const msgId = (await message.channel.awaitMessages(filter, { max: 1 })).first().content; //Collects the messageID into the const msgId (You should input the correct ID after the prompt