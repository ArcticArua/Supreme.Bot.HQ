const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("fs");
const { token, prefix } = require("./config.json"); // same as before
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent, // Needed to read message content
  ],
});
client.commands = new Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

client.once("ready", () => {
  console.log("Ready to teach JavaScript!");
});

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.cmd, command);
}

client.on("messageCreate", (message) => {
  console.log(
    `User: ${message.author.username}\nMessage: ${message.content}\nChannel: ${message.channel.name}\nServer: ${message.guild?.name}`,
  );
  if (message.channel.type === "DM") {
    console.log(`DM from ${message.author.tag}: ${message.content}`);
    message.reply("Hey! I got your DM 😎"); // Respond to the DM
    return; // stop further processing
  }
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;
  const command = client.commands.get(commandName);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.channel.send(
      `${message.author} There was a error while executing this command!`,
    );
  }
});

client.login(token);
