/**
 * For discord.js api to run properly you need to have  Node.js 16.6 or greater installed
 * at the time of writing this, repl.it uses Node.js 12 by default. This line will 
 * tell you what version of Node.js you have.
 */

//require("http").createServer((req, res) => res.end(process.version)).listen();

const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
});

client.once('ready', () => {
	console.log('Ready!');
  const message = client.channels.cache.get("891528615286697985").messages.fetch("891529365958037565");
});

let crucible = "886281490026070026";
let raid = "886280903922430003";
let nightfall = "886281577158541363";
let nsfw = "886281717881638932";

client.on("messageReactionAdd", function(messageReaction, user){
  if(messageReaction.message.id == "891529365958037565"){
    let emoji = messageReaction.emoji.name;
      //NSFW
      if(emoji == "Joy") {
        messageReaction.message.guild.members.cache.get(user.id).roles.add(nsfw).catch(console.error);
      }//Crucible
      else if(emoji == "Amazing") {
        messageReaction.message.guild.members.cache.get(user.id).roles.add(crucible).catch(console.error);
      }//Raid
      else if(emoji == "Thumbs_Up") {
        messageReaction.message.guild.members.cache.get(user.id).roles.add(raid).catch(console.error);
      }//Nightfall
      else if(emoji == "Facepalm") {
        messageReaction.message.guild.members.cache.get(user.id).roles.add(nightfall).catch(console.error);
      }
      else{
        console.log ("no roles were added")
      }
  }
});

//Removes a role when the reaction is removed.
client.on("messageReactionRemove", function(messageReaction, user){
  if(messageReaction.message.id == "891529365958037565"){
    let emoji = messageReaction.emoji.name;

      //NSFW
      if(emoji == "Joy") {
        messageReaction.message.guild.members.cache.get(user.id).roles.remove(nsfw).catch(console.error);
      }//Crucible
      else if(emoji == "Amazing") {
        messageReaction.message.guild.members.cache.get(user.id).roles.remove(crucible).catch(console.error);
      }//Raid
      else if(emoji == "Thumbs_Up") {
        messageReaction.message.guild.members.cache.get(user.id).roles.remove(raid).catch(console.error);
      }//Nightfall
      else if(emoji == "Facepalm") {
        messageReaction.message.guild.members.cache.get(user.id).roles.remove(nightfall).catch(console.error);
      }
      else{
        console.log ("no roles were removed")
      }
  }
});

// Login to Discord with your client's token
client.login(token);
