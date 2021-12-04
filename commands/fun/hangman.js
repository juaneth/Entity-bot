module.exports = {
    name: 'hangman',
    description: 'Lets you play hangman',
    execute(message, Discord) {
        let words = ['train', '2jz', 'spoon', 'ah', 'juan', 'meg']
        let wordpicker = words[Math.floor(Math.random() * words.length)]
        let convert = "_ ".repeat(wordpicker.length)
        message.channel.send(` Original Word \`\`${wordpicker}\`\`  \nConvert Test \`\`${convert}\`\``)
    }
}