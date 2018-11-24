const Discord = require(`discord.js`);
const client = new Discord.Client();



client.on('ready' , () => {
client.user.setGame(`ا̍نۨــٰ̍ا̍ بــحۡــبــگ `,'https://www.twitch.tv/marygaming_')
console.log(`لا تنسا الاششتراك `)

});



client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
