module.exports = {
    name: "srvstat",
    category: "Utility",
    usage: '/srvstat',
    description: "server statistics",
    ownerOnly: false,
    run: async (client, interaction) => {
        // await interaction.channel.sendTyping();

        const textEmbed = new client.discord.MessageEmbed()
            .setTitle("Server statistics")
            .addFields(
                {
                    name: 'Server name',
                    value: `${interaction.guild.name}`,
                },
                {
                    name: 'Server description',
                    value: `${interaction.guild.description}`,
                },
                {
                    name: 'Region',
                    value: `${interaction.guild.region}`,
                },
                {
                    name: 'Date created',
                    value: `${interaction.guild.createdAt}`,
                },
                {
                    name: 'Members',
                    value: `${interaction.guild.memberCount}`,
                }
            )
            .setColor(client.config.embedColor)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

        await interaction.reply({embeds: [textEmbed] });
    },
};
    