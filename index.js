const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")
const TOKEN = "OTY5NjA4NzkxMDk0MDc1NDMy.Ymv4jg.4PYn7BZIq5Mlne4cJpVOltGJCk8"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
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

const WelcomeChannelId = "969624984781746206"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(WelcomeChannelId).send({
        content: `<@${member.id}> Sunucuya hoş geldin!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)