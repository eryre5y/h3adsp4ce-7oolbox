// Example of how to make a SlashCommand

module.exports = {
    name: "chakchak",
    category: "Utility",
    description: "chakchak",
    ownerOnly: false,
    run: async (client, interaction) => {
        await interaction.reply("https://inde.io/i/posts/33145/5d08d0acf9055fdaf1cace2af9dfdfb0.jpg");
    },
};
