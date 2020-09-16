module.exports = {
    name: 'removereminder',
    description: "Removes user from Reminder List (utilizes roles)",
    execute(message, args){
        
        if(message.member.roles.cache.has('755490622676402308')){
            message.channel.send('I will remove you from the Reminder list');
            message.member.roles.remove('755490622676402308');
        } else {
            message.channel.send('You are not on the reminder list OwO');
        }
    }
}