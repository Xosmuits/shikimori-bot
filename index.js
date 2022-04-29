const Discord = require("discord.js")

const TOKEN = "OTY5NjA4NzkxMDk0MDc1NDMy.Ymv4jg.KeRvaBEqdBJHW-fW2A4sDwm5Z4M"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "sa"){
        message.reply("cami mi bura orospucocu")
    }
})

client.login(TOKEN)