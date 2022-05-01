require("dotenv").config();

const Discord = require("discord.js");
const bot = new Discord.Client();
const general = new Discord.WebhookClient(process.env.WEBHOOK_ID,process.env.WEBHOOK_TOKEN);
bot.login(process.env.TOKEN);

bot.on("ready",()=>{
    console.log(`Logged in as ${bot.user.tag}`)
});

bot.on("messageDelete",arg=>{
    arg.channel.send(`${arg.author} deleted "${arg.content}"`);
});

bot.on("message",msg=>{
    if(msg.author.id !== bot.user.id){
        let data = msg.content.toLowerCase();
        if(msg.mentions.has(bot.user)){
            if(data.includes("hello")){
                msg.reply("Hello!");
            }
            if(data.includes("bc") || data.includes("mc") || data.includes("bsdk") || data.includes("chutiya") || data.includes("chutiye")){
                msg.react("🖕");
            } 
        }else if(!msg.mentions.has(bot.user)){
            if(data.includes("pubg") || data.includes("pubgm")){
                msg.reply("BGMI!");
            }
            if(data.includes("bc") || data.includes("mc") || data.includes("bsdk") || data.includes("chutiya") || data.includes("chutiye") && msg.author !== bot.user.tag){
                msg.reply("Wah bhaiya! full gaalibaazi")
            }
            
        }   
    }
});
