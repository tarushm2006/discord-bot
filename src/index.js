require("dotenv").config();

const Discord = require("discord.js");
const bot = new Discord.Client();
const general = new Discord.WebhookClient(process.env.WEBHOOK_ID,process.env.WEBHOOK_TOKEN);
bot.login(process.env.TOKEN);

function morningMessage(){
    let time = new Date();
    let utc = time.getTime() + (time.getTimezoneOffset() * 60000);
    let nd = new Date(utc + (3600000*+5.5));
    let ist = nd.toLocaleTimeString();
}
setInterval(morningMessage,1000);

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
                const embed = new Discord.MessageEmbed().setTitle("Tu Chutiya").setColor("ff0000").setDescription("Tera baap hu bc");
                msg.channel.send(embed);
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
