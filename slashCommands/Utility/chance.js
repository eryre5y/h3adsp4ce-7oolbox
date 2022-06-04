module.exports = {
    name: "chance",
    options: [
        {
            name: 'text',
            description: 'chance text',
            type: 'STRING',
            required: true
        }
    ],
    category: "Utility",
    usage: '/chance <text>',
    description: "chance of certain thing you\'ve typed",
    ownerOnly: false,
    run: async (client, interaction) => {
        // await interaction.channel.sendTyping();

        const msg = await interaction.channel.send(`:1234:calculating...`);

        const text = interaction.options.getString("text");

        const chanceEmbed = new client.discord.MessageEmbed()
            .setDescription(`${Math.floor((Math.random() * 100) + 1)}% ${text}`)
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

        await interaction.reply({embeds: [chanceEmbed] });

        msg.delete();
    },
};
    