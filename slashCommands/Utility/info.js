module.exports = {
    name: "os",
    category: "Utility",
    usage: '/os',
    description: "os information",
    ownerOnly: false,
    run: async (client, interaction) => {
        // await interaction.channel.sendTyping();

        const process = require("process");
        const os = require('node:os');

        const textEmbed = new client.discord.MessageEmbed()
            .setTitle("Bot information")
            .setDescription(`Platform: ${os.platform()}\nKernel version: ${os.release()}`)
            .setColor(client.config.embedColor)
            .addField("Architecture", `${os.arch()}`, true)
            .addField("Uptime", `${process.uptime()}`, true)
            .addField("Hostname", `${os.hostname()}`, true)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

        await interaction.reply({embeds: [textEmbed] });
    },
};
    