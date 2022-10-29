module.exports = {
    name: "lexica",
    options: [
        {
            name: 'prompt',
            description: 'stable collision prompt',
            type: 'STRING',
            required: true
        }
    ],
    category: "Utility",
    usage: '/lexica <prompt>',
    description: "search ai image",
    ownerOnly: false,
    run: async (client, interaction) => {

        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
        };
          

        const JsonFilter = require('@barreljs/json-filter');

        const filter = {
            src: '$any'
        };

        const url = `https://lexica.art/api/v1/search?q=${interaction.options.getString("prompt")}`;

        
        const json = fetch(url)
        .then((response) => response.json())
        .then((json) => {

            const result = JsonFilter(json, filter);
            const imgurl = result.all();
            interaction.reply(imgurl[randomIntFromInterval(0,imgurl.length)].src);
        })
    },
};
    