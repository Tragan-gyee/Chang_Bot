const discord = require('discord.js');

const client = new discord.Client();

const prefix = '~';

const fs = require('fs');

client.commands = new discord.Collection();

const commandfiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandfiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Chang Bot is online UwU');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    if(command === 'addreminder'){
        client.commands.get('addreminder').execute(message, args);
    }
    if(command === 'removereminder'){
        client.commands.get('removereminder').execute(message, args);
    }
});

client.login('x')
