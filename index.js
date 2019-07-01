const {Client, Attachment } = require('discord.js');
const bot = new Client();

var version = '1.0.1';

const token = 'NTg3NjgyNDU5NDc5NTcyNTky.XReJ1g.1QcrbMWKNRuNYnczFFtMJhvck8c';

const PREFIX = '.';

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('How to get a life');
})
    
bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {
        case 'Hello':
            message.reply('Hello!');
            break;
        case 'kill':
            message.channel.sendMessage('*cocks riffle*, *aims for head*... *BANG!!!* ')
            break;
        
        case 'Twerk':
            message.reply('Go to Hell!')
            break;

        case 'Motavation':
            message.reply('If life gets you down, just remember that its because God hates you')
            break;

        case 'invite':
            message.reply('https://discordapp.com/oauth2/authorize?client_id=587682459479572592&scope=bot&permissions=1%27');
            break;

        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('Version ' + version);
            }else{
                message.reply('Invalid Args');
            }
            break;

        case 'del':
            if(!args[1]) return message.reply('Error please define second arg')
            message.channel.bulkDelete(args[1]);
            break;

        case 'send':
            const attachment = new Attachment('https://media-private.canva.com/MADcMAh6uks/1/thumbnail_large.png?response-expires=Mon%2C%2001%20Jul%202019%2004%3A29%3A22%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190701T012953Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10768&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20190701%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f8c29500030ca512371946936198491f251ce1ca5687e997f6b825316c346604')
            message.channel.send(message.author, attachment);
            break;  
          
            
        
    }
})

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'member-log');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
})
  


bot.login(token);