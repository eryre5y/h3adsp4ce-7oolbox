module.exports = {
    name: "8ball",
    options: [
        {
            name: 'question',
            description: 'your question',
            type: 'STRING',
            required: true
        }
    ],
    category: "Utility",
    usage: '/8ball <question>',
    description: "answers your questions",
    ownerOnly: false,
    run: async (client, interaction) => {
        // await interaction.channel.sendTyping();

        const responses = ['yes.',
            'no.',
            'ask urself.',
            'ask ur mom.',
            'i don\'t care.',
            'i don\'t know.',
            'who knows.',
            'why do you ask me this?',
            'i will beat you with a bat if you ask me this again.'
        ];

        const msg = await interaction.channel.send(`:scroll:Predicting answer`);

        const question = interaction.options.getString("question");

        const answerEmbed = new client.discord.MessageEmbed()
            .setTitle(`Your question`)
            .setDescription(`_${question}_`)
            .setColor(client.config.embedColor)
            .addField("Answer", `${responses[Math.floor((Math.random() * responses.length))]}`, true)
            .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });

        await interaction.reply({embeds: [answerEmbed] });

        msg.delete();
    },
};
    