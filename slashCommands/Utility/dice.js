module.exports = {
    name: "dice",
    category: "Utility",
    description: "roll a dice",
    ownerOnly: false,
    run: async (client, interaction) => {
        const msg = await interaction.channel.sendTyping();
        await interaction.reply(`${Math.floor((Math.random() * 6) + 1)}`);
    },
};
