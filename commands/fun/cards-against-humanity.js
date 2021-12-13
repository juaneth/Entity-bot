const { MessageActionRow, MessageButton } = require('discord.js');
const Discord = require('discord.js')
module.exports = {
    name: 'cah',
    description: 'Plays cards-against-humanity',
    async execute(message, client) {
        let blackcard = ['What brought the orgy to a grinding halt?', 'Charades was ruined for me forever when my mom had to act out', 'My country, tis of thee, sweet land of', 'Next time on Dr. Phill: How to talk to your child about', 'This is the prime of my life. i am young, hot. and full of', 'I learned the hard way that you cant cheer up a grieving friend with', 'I drink to forget', 'Life for American Indians was forever changed when the white man introduced them to', 'What gives me uncontrollable gas?', 'Instead of coal, Santa now gives the bad children', 'War! What is it good for?', 'Before i run for president, i must destroy all evidence of my involvement with', 'It’s a pity that kids these days are all getting involved with', 'TFL apologizes for the delay in train service due to', 'Nobody expects the Spanish Inquisition. Our chief weapons are fear, surprise, and', 'Military historians remember Alexander the Greats work against the Persions using', 'What are my parents hiding from me?', 'What is Batmans guilty pleasure?', 'Whats a girls best friend?', 'Daddy, why is Mummy crying?', 'When Pharaoh remained unmoved, Moses called down a plauge of']
        let whitecard = ['Child Protective Services.', 'Masturbation.', 'Obesity.', 'The Primal, ball-slapping sex your parents are having right now.', 'Crippling debt.', 'Giving the tumor a cutesy name.', 'Alcoholism.', 'Dying.', 'Aushwitz.', 'Multiple stab wounds.', 'Destroying the evidence.', 'Having a stroke.', 'Getting drugs off the street and into my body.', 'Strong female characters.', 'An M. Night Shyamalan plot twist.', 'Doing crimes.', 'Fear itself.', 'Self-loathing.', 'Sex with animals.', 'Land mines.', 'Fading away into nothingness.', 'Pretending to care.', 'Swooping.', 'The Great Depression.', 'My boss.', 'Solving problems with violence.', 'The Daily Mail.',]

        let blackcardpicker = blackcard[Math.floor(Math.random() * blackcard.length)]
        let whitecardpicker = whitecard[Math.floor(Math.random() * whitecard.length)]

        const card1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('Play again')
                    .setLabel('Play again')
                    .setStyle('SUCCESS'),
            );
        const CardEmbed = new Discord.MessageEmbed()
            .setColor(`BLACK`)
            .setTitle(`🃏 You picked a card!`)
            .addFields(
                { name: '**Black Card**', value: `${blackcardpicker}`, inline: true },
                { name: `**White Card**`, value: `${whitecardpicker}`, inline: true },
            )
            .setTimestamp();

        // message.channel.send({ content: `Black card: \`\`${blackcardpicker}\`\` \nWhite card: \`\`${whitecardpicker}\`\``, components: [card1] })

        await message.reply({ embeds: [CardEmbed]});
    }
}