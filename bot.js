const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(':two_hearts: بسم اللة الرحمن الرحيم :two_hearts:','https://www.twitch.tv/TEST-Broadcast%27);
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});


client.login('NTA5MTE4MTA2NzcwMDc5NzQ1.DsaIuQ.Hnos_Lo2cJLeVWsNzWhqEiJm4dM');




 
client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" الرد الي انت بدك البوت يقوله  ");
    }
});




