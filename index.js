const SlackBot = require('slackbots');
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const bot = new SlackBotKit({
    token: `${process.env.BOT_TOKEN}`,
    name: 'coffeebot'
})

// Start Handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':coffee_face:'
    }

    bot.postMessageToChannel(
        'runtime-image-build-bot',
        'Get inspired while working with @zribbot',
        params
    );
})

//Added feature 2
bot.on('convo', () => {
})
  
// Error Handler
bot.on('error', (err) => {
    console.log(err);
    console.log(errno);
})

// Message Handler
bot.on('message', (data) => {
    if(data.type !== 'message') {
        return;
    }
    handleMessage(data.text);
    console.log(data.text);
})

//Added feature 1
bot.on()

//new commit to PR from master
const testName = require('test')
