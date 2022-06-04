module.exports = {
    name: "text",
    options: [
        {
            name: 'text',
            description: 'what should bot say',
            type: 'STRING',
            required: true
        }
    ],
    category: "Utility",
    description: "text from bot",
    ownerOnly: false,
    run: async (client, interaction) => {
        await interaction.channel.sendTyping();

        const text = interaction.options.getString("text");

        const textEmbed = new client.discord.MessageEmbed()
        .setDescription(`${text}`)
        .setColor(client.config.embedColor)
        .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

        const msg = await interaction.reply({ embeds: [textEmbed] });
    },
};
