const Discord = require('discord.js');
const cron = require('cron');

let notificationChannel = client.channel.find(channel => channel.id === '715070893172457562');

const cronJobs = [
    { "type": "Arena", "param": "* 12,20 * * *"},
    { "type": "WorldBoss", "param": "* 21 * * 6,7"},
    { "type": "test", "param": "30 22 * * *"}
]

for(let i = 0; i < cronJobs.length; i++){
    cron.schedule(cronJobs[i].param, cronJobs => {
        let message;
        if(cronJobs[i].type === 'Arena'){
            notificationChannel.send('Arena has opened! @reminder');
        }
        if(cronJobs[i].type === 'WorldBoss'){
            notificationChannel.send('The Shadow Hunt begins! @reminder');
        }
        if(cronJobs[i].type === 'test'){
            notificationChannel.send('this is a test');
        }
    })
}