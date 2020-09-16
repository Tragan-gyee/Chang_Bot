module.exports = {
    name: 'addreminder',
    description: "Adds user to Reminder List (utilizes roles)",
    execute(message, args){
        
        if(message.member.roles.cache.has('755490622676402308')){
            message.channel.send('You are already on the Reminder list');
        } else {
            message.channel.send('Let me add you to the Reminder List');
            message.member.roles.add('755490622676402308');
        }
    }
}