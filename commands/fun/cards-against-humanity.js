module.exports = {
    name: 'cards-against-humanity',
    description: 'Plays cards-against-humanity',
    execute(message, Discord) {
        let blackcard = ['What brought the orgy to a grinding halt?', 'Charades was ruined for me forever when my mom had to act out', 'My country, tis of thee, sweet land of', 'Next time on Dr. Phill: How to talk to your child about', 'This is the prime of my life. i am young, hot. and full of', 'I learned the hard way that you cant cheer up a grieving friend with', 'I drink to forget', 'Life for American Indians was forever changed when the white man introduced them to', 'What gives me uncontrollable gas?', 'Instead of coal, Santa now gives the bad children', 'War! What is it good for?', 'Before i run for president, i must destroy all evidence of my involvement with']
        let whitecard = ['Child Protective Services.', 'Masturbation.', 'Obesity.', 'The Primal, ball-slapping sex your parents are having right now.', 'Crippling debt.', 'Giving the tumor a cutesy name.', 'Alcoholism.', 'Dying.', 'Aushwitz.', 'Multiple stab wounds.', 'Destroying the evidence.']

        let blackcardpicker = blackcard[Math.floor(Math.random() * blackcard.length)]
        let whitecardpicker = whitecard[Math.floor(Math.random() * whitecard.length)]

        message.channel.send(`Black card: \`\`${blackcardpicker}\`\` \nWhite card: \`\`${whitecardpicker}\`\``)
    }
}