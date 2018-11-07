const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame('PRMIUME | *help ','https://www.twitch.tv/TEST-Broadcast');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});

client.login('NTA5MTE4MTA2NzcwMDc5NzQ1.DsOnEQ.PbytLtIM9XPEZM_xxCyQ-4a4jho');

