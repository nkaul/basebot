let builder = require("botbuilder");

module.exports = function (name, bot, ba) {
    bot.dialog(`/${name}`, session => {
        delete session.userData
        session.endDialog('User data deleted')
    }).triggerAction({
        matches: name,
        confirmPrompt: "This will wipe everything out. Are you sure?"
    })
}