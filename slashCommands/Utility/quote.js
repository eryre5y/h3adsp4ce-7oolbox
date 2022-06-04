module.exports = {
    name: "quote",
    options: [
        {
            name: 'text',
            description: 'your quote',
            type: 'STRING',
            required: true
        }
    ],
    category: "Utility",
    usage: '/quote <text>',
    description: "create your quote",
    ownerOnly: false,
    run: async (client, interaction) => {
        // await interaction.channel.sendTyping();

        const msg = await interaction.channel.send(`:scroll:Creating quote`);

        const text = interaction.options.getString("text");

        const textEmbed = new client.discord.MessageEmbed()
            .setDescription(`_${text}_`)
            .setColor(client.config.embedColor)
            .addField("Author", `**<@${interaction.member.id}>**`, true)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

        await interaction.reply({embeds: [textEmbed] });

        msg.delete();
    },
};
    