const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame('PRMIUME | *help ','https://www.twitch.tv/TEST-Broadcast');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});


 client.login(NTA5MTE4MTA2NzcwMDc5NzQ1.DsYbbQ.pFQA7e9EhNg9PyqF5asOQIdw1ME);
 
 


client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links 😠 !**`)
    }
}
});



