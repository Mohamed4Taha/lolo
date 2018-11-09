const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(':two_hearts: بسم اللة الرحمن الرحيم :two_hearts:','https://www.twitch.tv/TEST-Broadcast%27);
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});


client.login('NTA5MTE4MTA2NzcwMDc5NzQ1.DsaIuQ.Hnos_Lo2cJLeVWsNzWhqEiJm4dM');



client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        ch.send(`${user} تحذير هذا شخص مسوي نفسه اوف لاين ويكتب`)
        .then(msg => {
            msg.delete(10000)
        })
    }
});




client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var stewart = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('``رساله جديده في خاص البوت``')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("ايدي الروم الي يتلقى الرسالة").send({ embed: stewart });
    }
});
