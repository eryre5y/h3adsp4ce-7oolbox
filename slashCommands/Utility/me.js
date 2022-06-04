module.exports = {
    name: "me",
    usage: "/me <text>",
    options: [
        {
            name: 'text',
            description: 'your mood',
            type: 'STRING',
            required: true
        }
    ],
    category: "Utility",
    description: "minecraft /me command",
    ownerOnly: false,
    run: async (client, interaction) => {
        // await interaction.channel.sendTyping();

        const text = interaction.options.getString("text");
        
        const meEmbed = new client.discord.MessageEmbed()
        .setDescription(`**<@${interaction.member.id}>** ${text}`)
        .setColor(client.config.embedColor)
        .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

        await interaction.reply({ embeds: [meEmbed] });
    },
};
